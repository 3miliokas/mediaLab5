/* js/main.js */

const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const filterSelect = document.querySelector('select#filter');
const snapshotButton = document.querySelector('button#snapshot');

// Elementai slankikliui
const sliderContainer = document.getElementById('slider-container');
const brightnessRange = document.getElementById('brightnessRange');
const brightnessValue = document.getElementById('brightnessValue');


// Pakeičia klasę video elementui, kai pasirenkamas kitas filtras
filterSelect.onchange = function() {
  video.className = filterSelect.value;

  // Jei pasirinktas 'brightness', rodome slankiklį
  if (filterSelect.value === 'brightness') {
      sliderContainer.style.display = 'block';
      updateBrightness(); // Pritaikyti esamą reikšmę
  } else {
      sliderContainer.style.display = 'none';
      video.style.filter = ''; // Nuimti inline stilių kitiems filtrams
  }
};

// Iškart patikriname filtrą užsikrovus (jei naršyklė atsiminė pasirinkimą)
filterSelect.onchange();

// Funkcija atnaujinti šviesumą realiu laiku
brightnessRange.oninput = updateBrightness;

function updateBrightness() {
    if (filterSelect.value === 'brightness') {
        const val = brightnessRange.value;
        brightnessValue.innerText = val + '%';
        // Pritaikome filtrą tiesiai video elementui
        video.style.filter = `brightness(${val}%)`;
    }
}

// Padaro nuotrauką
snapshotButton.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  
  // Pritaiko tą patį filtrą ir nuotraukai
  canvas.className = filterSelect.value;
  
  // Jei tai brightness filtras, reikia perkelti ir inline stilių (konkrečią reikšmę)
  if (filterSelect.value === 'brightness') {
      canvas.style.filter = video.style.filter;
  } else {
      canvas.style.filter = '';
  }

  // Nupiešia vaizdą iš video į canvas
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
};

// Paprašo kameros prieigos
const constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
