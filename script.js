const audio = document.getElementById('audio');

const JohnCena = 'assets/audio/JohnCena.mp3';
const OhNeymar = 'assets/audio/OhNeymar.mp3';
const TemaAcao = 'assets/audio/TemaAcao.mp3';

function play(path){
    audio.setAttribute('src', path);
    audio.volume = 1;
}