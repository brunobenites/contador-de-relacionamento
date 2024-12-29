// JavaScript para calcular o tempo desde 05/07/2024 às 20:00 até o momento atual
function updateTime() {
    const startDate = new Date('2024-07-05T20:00:00'); // Data inicial
    const currentDate = new Date(); // Data atual
    const diff = currentDate - startDate; // Diferença em milissegundos

    // Calculando anos, meses, dias, horas, minutos e segundos
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();
    let hours = currentDate.getHours() - startDate.getHours();
    let minutes = currentDate.getMinutes() - startDate.getMinutes();
    let seconds = currentDate.getSeconds() - startDate.getSeconds();

    // Corrigir a diferença para meses e anos
    if (months < 0) {
        months += 12;
        years--;
    }

    if (days < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    // Atualizando o conteúdo da página com o tempo
    document.getElementById('time').textContent = `Estamos juntos há: ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualiza o tempo a cada segundo
setInterval(updateTime, 1000);
updateTime(); // Chama a função para inicializar o tempo ao carregar a página
