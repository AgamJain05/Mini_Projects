const sounds = ['applause', 'boo', 'gasp', 'tada', 'wrong'];

sounds.forEach(sound => {
    const btn = document.getElementById(sound);
    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });
});

function stopSounds() {
    sounds.forEach(sound => {
        const s = document.getElementById(sound);
        s.pause();
        s.currentTime = 0;
    });
}
