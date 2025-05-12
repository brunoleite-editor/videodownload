const tabYoutube = document.getElementById('tabYoutube');
const tabInstagram = document.getElementById('tabInstagram');
const urlInput = document.getElementById('urlInput');
const analyzeButton = document.getElementById('analyzeButton');
const resultDiv = document.getElementById('result');

tabYoutube.addEventListener('click', () => {
    tabYoutube.classList.add('active');
    tabInstagram.classList.remove('active');
    urlInput.placeholder = 'URL do YouTube';
});

tabInstagram.addEventListener('click', () => {
    tabInstagram.classList.add('active');
    tabYoutube.classList.remove('active');
    urlInput.placeholder = 'URL do Instagram';
});

analyzeButton.addEventListener('click', async () => {
    const url = urlInput.value.trim();
    if (!url) {
        resultDiv.innerHTML = '<p style="color:red;">Cole uma URL válida!</p>';
        return;
    }

    resultDiv.innerHTML = '<p>🔎 Analisando...</p>';

    try {
        const response = await fetch(`https://saveitoffline.com/process/?url=${encodeURIComponent(url)}&type=json`);
        const data = await response.json();
        
        if (data && data.urls && data.urls.length > 0) {
            resultDiv.innerHTML = `<a href="${data.urls[0].id}" target="_blank" style="color: green; font-weight: bold;">⬇️ Baixar Vídeo</a>`;
        } else {
            resultDiv.innerHTML = '<p style="color:red;">Não foi possível analisar o link. 😢</p>';
        }
    } catch (error) {
        resultDiv.innerHTML = '<p style="color:red;">Erro na análise. Tente novamente!</p>';
    }
});