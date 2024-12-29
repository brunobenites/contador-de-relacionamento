// Função para calcular o tempo desde uma data específica
function calcularTempo() {
    const dataInicio = new Date('2024-07-05T20:00:00'); // Data e hora de início (05/07/2024 às 20:00)
    const agora = new Date(); // Data e hora atuais
    const tempoEmMilissegundos = agora - dataInicio; // Calcula a diferença de tempo em milissegundos

    // Calcular a diferença em segundos, minutos, horas, dias, e meses de forma precisa
    const segundosTotais = Math.floor(tempoEmMilissegundos / 1000); // Total de segundos
    const segundos = segundosTotais % 60; // Segundos
    const minutosTotais = Math.floor(segundosTotais / 60); // Total de minutos
    const minutos = minutosTotais % 60; // Minutos
    const horasTotais = Math.floor(minutosTotais / 60); // Total de horas
    const horas = horasTotais % 24; // Horas
    const diasTotais = Math.floor(tempoEmMilissegundos / (1000 * 60 * 60 * 24)); // Total de dias
    const meses = Math.floor(diasTotais / 30); // Aproximadamente 30 dias por mês
    const dias = diasTotais % 30; // Dias restantes

    // Exibe o tempo formatado
    const tempoJuntos = `${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
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
