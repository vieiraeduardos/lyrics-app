const lyrics = [
    "Frase 1 da Música",
    "Frase 2 da Música",
    "Frase 3 da Música",
    // Adicione mais frases conforme necessário
];

let currentIndex = 0;
const lyricsDisplay = document.getElementById('lyrics-display');
const userInput = document.getElementById('user-input');
const timeline = document.getElementById('timeline');
const timelineIndicator = document.createElement('div');
timelineIndicator.classList.add('timeline-indicator');
timeline.appendChild(timelineIndicator);

function displayLyric() {
    lyricsDisplay.textContent = lyrics[currentIndex];
    updateTimeline();
}

function nextLyric() {
    if (currentIndex < lyrics.length - 1) {
        currentIndex++;
        displayLyric();
    }
}

function prevLyric() {
    if (currentIndex > 0) {
        currentIndex--;
        displayLyric();
    }
}

function updateTimeline() {
    const percentComplete = (currentIndex / (lyrics.length - 1)) * 100;
    timelineIndicator.style.width = percentComplete + '%';
}

// Exibe a primeira frase ao carregar a página
displayLyric();
