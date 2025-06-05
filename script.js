document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading-screen");
  setTimeout(() => loading.style.display = "none", 1000);

  const modulContent = document.getElementById("modul-content");
  const mapelSelect = document.getElementById("mapel-select");

  const materi = {
    matematika: "Materi Matematika: Aljabar, Persamaan Kuadrat, dll.",
    fisika: "Materi Fisika: Gerak, Gaya, Energi, dll.",
    biologi: "Materi Biologi: Sel, Ekosistem, Reproduksi, dll.",
    informatika: "Materi Informatika: Algoritma, HTML, CSS, JS, dll."
  };

  mapelSelect.addEventListener("change", () => {
    const selected = mapelSelect.value;
    modulContent.innerText = selected ? materi[selected] : "";
  });

  // Soal CBT
  const quizContainer = document.getElementById("quiz-container");
  const submitBtn = document.getElementById("submit-quiz");
  const scoreResult = document.getElementById("score-result");

  const questions = [
    {
      question: "Berapa hasil dari 2 + 2?",
      options: ["3", "4", "5"],
      answer: "4"
    },
    {
      question: "Apa ibu kota Indonesia?",
      options: ["Bandung", "Jakarta", "Surabaya"],
      answer: "Jakarta"
    }
  ];

  function loadQuiz() {
    quizContainer.innerHTML = "";
    questions.forEach((q, idx) => {
      const div = document.createElement("div");
      div.innerHTML = `<p><b>${idx + 1}. ${q.question}</b></p>` +
        q.options.map(opt => `
          <label>
            <input type="radio" name="q${idx}" value="${opt}"/> ${opt}
          </label><br/>`).join("");
      quizContainer.appendChild(div);
    });
  }

  function calculateScore() {
    let score = 0;
    questions.forEach((q, idx) => {
      const selected = document.querySelector(`input[name=\"q${idx}\"]:checked`);
      if (selected && selected.value === q.answer) score++;
    });
    scoreResult.innerText = `Skor kamu: ${score} dari ${questions.length}`;
  }

  submitBtn.addEventListener("click", calculateScore);
  window.resetQuiz = () => {
    loadQuiz();
    scoreResult.innerText = "Belum ada skor.";
  };

  // Tema & pengaturan
  const settingsForm = document.getElementById("settings-form");
  settingsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const tema = document.getElementById("tema").value;

    localStorage.setItem("nama", nama);
    localStorage.setItem("kelas", kelas);
    localStorage.setItem("tema", tema);

    applyTheme(tema);
    alert("Pengaturan disimpan!");
  });

  function applyTheme(mode) {
    document.body.className = mode === "dark" ? "dark" : "";
  }

  // Load default setting
  applyTheme(localStorage.getItem("tema") || "light");
  loadQuiz();
});

