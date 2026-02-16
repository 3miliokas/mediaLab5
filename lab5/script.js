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
