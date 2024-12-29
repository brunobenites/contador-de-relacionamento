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
