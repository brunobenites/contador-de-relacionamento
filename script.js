// Função para calcular o tempo desde uma data específica
function calcularTempo() {
    const dataInicio = new Date('2024-07-05T20:00:00'); // Data e hora de início
    const agora = new Date();
    const tempoEmMilissegundos = agora - dataInicio;
    
    const segundos = Math.floor(tempoEmMilissegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30); // Aproximação de meses

    const tempoJuntos = `${meses} meses e ${dias % 30} dias`; // Exibe meses e dias
    document.getElementById('time').innerText = tempoJuntos;
}

// Atualiza o tempo a cada 1 segundo
setInterval(calcularTempo, 1000);

// Alternância das imagens
let currentIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.images img'); // Seleciona todas as imagens
const totalImages = images.length; // Total de imagens

// Função para mostrar a imagem atual e esconder as outras
function showImage(index) {
    // Remove a classe 'active' de todas as imagens
    images.forEach(img => img.classList.remove('active'));
    
    // Adiciona a classe 'active' à imagem atual
    images[index].classList.add('active');
}

// Função para alternar entre as imagens
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Atualiza o índice da imagem
    showImage(currentIndex); // Exibe a próxima imagem
}

// Inicia com a primeira imagem visível
showImage(currentIndex);

// Alterna as imagens a cada 3 segundos
setInterval(nextImage, 3000);
