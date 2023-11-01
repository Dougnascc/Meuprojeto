//tres (3) constantes para referenciar os ITEMS divs do Projotos
const album = document.getElementById('album');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');

//tres (3) constantes para referenciar os ID's do iFrames
const videoAlbum = document.querySelector('#videoAlbum');
const videoCasamentos = document.querySelector('#videoCasamentos');
const videoBuffet = document.querySelector('#videoBuffet');

// evento do Click
album.addEventListener('click', () => {
    album.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () => {    
    casamentos.classList.toggle('active');
    videoCasamentos.classList.toggle('active');
});
buffet.addEventListener('click', () => {
    buffet.classList.toggle('active');
    videoBuffet.classList.toggle('active');
});

