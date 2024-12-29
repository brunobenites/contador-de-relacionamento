// Definir o momento inicial (05/07/2024, 20:00)
const startDate = new Date('2024-07-05T20:00:00');

// Função para calcular o tempo decorrido
function updateTime() {
  const currentDate = new Date();
  const timeDifference = currentDate - startDate; // diferença em milissegundos
  
  // Calcular anos, meses, dias, horas, minutos e segundos
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Preparar a string de tempo com base nas unidades
  let timeString = '';

  // Exibir o tempo conforme o ano, mês, ou dia
  if (years > 0) {
    timeString += `${years} ano${years > 1 ? 's' : ''}, `;
  }
  if (months > 0 || years > 0) {
    timeString += `${months} mês${months > 1 ? 'es' : ''}, `;
  }
  timeString += `${days} dia${days > 1 ? 's' : ''}, ${hours} hora${hours > 1 ? 's' : ''}, ${minutes} minuto${minutes > 1 ? 's' : ''}, ${seconds} segundo${seconds > 1 ? 's' : ''}`;

  // Atualizar o conteúdo do timer
  document.getElementById('timer').textContent = timeString;
}

// Atualizar a cada segundo
setInterval(updateTime, 1000);
