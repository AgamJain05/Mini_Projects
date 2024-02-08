const soundsID = ['applause', 'boo', 'gasp', 'tada', 'wrong'];
const buttonID = ['applausee', 'booe', 'gaspe', 'tadae', 'wronge'];

// Attach event listeners to each button
buttonID.forEach((sound, index) => {
    const btn = document.getElementById(sound); // Select the button by its ID
    btn.addEventListener('click', () => {
        stopSounds(); // Stop all sounds before playing a new one
        document.getElementById(soundsID[index]).play(); // Play the corresponding sound
    });
});

// Function to stop all sounds
function stopSounds() {
    soundsID.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}
