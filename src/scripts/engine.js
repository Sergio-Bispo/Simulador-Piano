const pianoKeys = document.querySelectorAll(".piano-keys .Key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src =`src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}]"`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.add.remove("active");
    }, 150)
};

pianoKeys.forEach((Key) => {
    Key.addEventListener("click", () => playTune(Key.dataset.Key));
    mapedKey.push(Key.dataset.Key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
    });
    
    const handleVolume = (e) => {
        audio.volume = e.target.value;
    }

    const showHideKeys = () => {
        pianoKeys.forEach(key => key.classList.toggle("hide"));
        }
    
volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);