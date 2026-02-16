// 1. Konfigūracija
// Scaledrone kanalo ID. Galima naudoti šį demo ID arba užsiregistruoti scaledrone.com
const CHANNEL_ID = 'yiS12Ts5RdNhebyM'; 
const ROOM_NAME = 'observable-room';

// 2. Pasiimame HTML elementus
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

// 3. Paleidžiame kamerą
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
}).then(stream => {
    // Parodome savo vaizdą ekrane
    localVideo.srcObject = stream;
    window.localStream = stream; // Išsaugome streamą vėlesniam naudojimui
}).catch(error => {
    console.error("Klaida pasiekiant kamerą:", error);
});
// 4. Prisijungimas prie Scaledrone (Signaling Server)
const drone = new ScaleDrone(CHANNEL_ID);
let pc; // PeerConnection objektas

drone.on('open', error => {
    if (error) return console.error(error);
    
    // Prisijungiame prie "kambario"
    const room = drone.subscribe(ROOM_NAME);
    
    room.on('open', error => {
        if (error) error(error);
    });

    // Kai prisijungia kitas narys (mes esame pirmas, ateina antras)
    room.on('members', members => {
        if (members.length >= 2) {
            const isOfferer = members.length === 2; // Antras narys inicijuoja skambutį
            startWebRTC(isOfferer);
        }
    });
});

// Siunčiame žinutes per Scaledrone kitam nariui
function sendMessage(message) {
    drone.publish({
        room: ROOM_NAME,
        message
    });
}

function startWebRTC(isOfferer) {
    const configuration = {
        iceServers: [{
            urls: 'stun:stun.l.google.com:19302' // Google STUN serveris (padeda rasti IP)
        }]
    };

    pc = new RTCPeerConnection(configuration);

    // Kai gauname kito žmogaus vaizdą/garsą
    pc.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
    };

    // Kai randame naują tinklo kelią (ICE candidate), siunčiame jį kitam
    pc.onicecandidate = event => {
        if (event.candidate) {
            sendMessage({'candidate': event.candidate});
        }
    };

    // Pridedame savo kameros vaizdą į ryšį
    if (window.localStream) {
        window.localStream.getTracks().forEach(track => pc.addTrack(track, window.localStream));
    }

    // Klausomės žinučių iš serverio (nuo kito nario)
    drone.on('message', error => {
        if (error) return console.error(error);
    });

    // Apdorojame gautas žinutes (SDP arba ICE)
    const room = drone.subscribe(ROOM_NAME);
    room.on('data', (data, member) => {
        if (member.id === drone.clientId) return; // Ignoruojame savo žinutes

        if (data.sdp) {
            // Gavome pasiūlymą (offer) arba atsakymą (answer)
            pc.setRemoteDescription(new RTCSessionDescription(data.sdp), () => {
                if (pc.remoteDescription.type === 'offer') {
                    pc.createAnswer().then(localDesc => pc.setLocalDescription(localDesc)).then(() => {
                        sendMessage({'sdp': pc.localDescription});
                    });
                }
            });
        } else if (data.candidate) {
            // Gavome tinklo kandidatą
            pc.addIceCandidate(new RTCIceCandidate(data.candidate));
        }
    });

    // Jei mes esame inicijuotojai, sukuriame pasiūlymą (offer)
    if (isOfferer) {
        pc.onnegotiationneeded = () => {
            pc.createOffer().then(localDesc => pc.setLocalDescription(localDesc)).then(() => {
                sendMessage({'sdp': pc.localDescription});
            });
        };
    }
}