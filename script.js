// Loading screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 1500); // 1.5 detik
});

// Cek jawaban sederhana
function checkAnswers() {
  const answers = {
    q1: '2',
    q2: 'F=ma',
    q3: 'Amoeba',
    q4: 'Queue'
  };

  let score = 0;
  Object.keys(answers).forEach((key, index) => {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  });

  const result = document.getElementById("result");
  result.innerHTML = `⭐ Skor Anda: ${score} dari 4 soal`;
}
