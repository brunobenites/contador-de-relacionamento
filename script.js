// Função para criar corações aleatórios que sobem
function gerarCoracoes() {
    const coração = document.createElement('div');
    coração.classList.add('coração');
    coração.innerText = '❤️'; // O emoji do coração
    document.body.appendChild(coração);

    // Define a posição horizontal aleatória para cada coração
    const leftPosition = Math.random() * window.innerWidth; 
    coração.style.left = `${leftPosition}px`; // Define a posição horizontal aleatória

    // Remove o coração depois da animação
    setTimeout(() => {
        coração.remove();
    }, 5000); // O tempo deve ser o mesmo da animação CSS (5s)
}

// Gera corações a cada 0.5 segundos
setInterval(gerarCoracoes, 500);
