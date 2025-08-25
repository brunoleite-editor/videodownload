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

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', submitForm);
}

function submitForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\d{10,11}$/;

    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Por favor, insira um e-mail válido.';
        formMessage.style.color = 'red';
        return;
    }

    if (!phoneRegex.test(phone)) {
        formMessage.textContent = 'Por favor, insira um telefone válido com 10 ou 11 dígitos.';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.textContent = 'Dados enviados com sucesso!';
    formMessage.style.color = 'green';
    contactForm.reset();
}