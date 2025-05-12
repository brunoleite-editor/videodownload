window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.querySelectorAll('.hidden').forEach(el => el.style.display = 'block');
    }, 2500);
});

const form = document.getElementById('downloadForm');
const urlInput = document.getElementById('urlInput');
const youtubeButton = document.getElementById('youtubeButton');
const instagramButton = document.getElementById('instagramButton');
const statusMessage = document.getElementById('statusMessage');
const progressBar = document.getElementById('progressBar');

youtubeButton.addEventListener('click', (e) => {
    e.preventDefault();
    downloadVideo('YouTube');
});

instagramButton.addEventListener('click', (e) => {
    e.preventDefault();
    downloadVideo('Instagram');
});

function downloadVideo(platform) {
    const url = urlInput.value.trim();
    if (!url) {
        statusMessage.textContent = '⚠️ Cole um link válido, mana!';
        return;
    }

    statusMessage.textContent = '⏳ Iniciando download...';
    progressBar.style.width = '0%';

    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100);

    setTimeout(() => {
        statusMessage.textContent = `✅ Vídeo do ${platform} baixado com sucesso!`;
    }, 2500);
}
