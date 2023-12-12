const startCameraButton = document.querySelector("[data-video-botao]");
const cameraField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const takePhotoButton = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const message = document.querySelector("[data-mensagem]");
const sendPhotoButton = document.querySelector("[data-enviar]");

let imageURL = "";

startCameraButton.addEventListener('click', async function() {
    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    startCameraButton.style.display = "none";
    cameraField.style.display = "block";

    video.srcObject = startVideo;
})

takePhotoButton.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL("image/jpeg");

    cameraField.style.display = "none"
    message.style.display = "block"


    video.srcObject.getTracks().forEach(track => track.stop())
})

sendPhotoButton.addEventListener('click', () => {
    const receiveExistingData = localStorage.getItem("cadastro");
    const convertReturn = JSON.parse(receiveExistingData);

    convertReturn.imagem = imageURL;

    localStorage.setItem('cadastro', JSON.stringify(convertReturn));

    window.location.href = './abrir-conta-form-3.html';
})