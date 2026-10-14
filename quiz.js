/**
 * QUIZ GENERATOR & INTERACTIVE EVALUATION ENGINE (P13)
 * Menghasilkan soal kuis pilihan ganda dan flashcard tanya-jawab sesuai modul aktif
 * 100% Berjalan Lokal di Browser
 */

class QuizGenerator {
  constructor() {
    this.currentModule = null;
    this.quizMode = "mcq"; // "mcq" | "flashcard" | "essay"
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { questionId: selectedIndex }
    this.isSubmitted = false;
    this.timerEnabled = false;
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.flashcardFlipped = false;
    this.flashcardMastery = { mastered: 0, review: 0 };
  }

  setModule(moduleData) {
    this.currentModule = moduleData;
    this.resetQuizState();
  }

  resetQuizState() {
    this.stopTimer();
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = {};
    this.isSubmitted = false;
    this.flashcardFlipped = false;
    this.flashcardMastery = { mastered: 0, review: 0 };
  }

  generateQuiz(options = {}) {
    if (!this.currentModule) return;
    this.resetQuizState();

    const mode = options.mode || "mcq";
    this.quizMode = mode;
    const count = options.count ? parseInt(options.count, 10) : 5;
    const filterBab = options.bab ? parseInt(options.bab, 10) : 0;
    const shuffle = options.shuffle !== false;
    this.timerEnabled = !!options.enableTimer;

    if (mode === "mcq") {
      let pool = [...this.currentModule.quizBank];
      if (filterBab > 0) {
        pool = pool.filter(q => q.bab === filterBab);
      }
      if (shuffle) {
        pool.sort(() => Math.random() - 0.5);
      }
      this.questions = pool.slice(0, Math.min(count, pool.length));
      
      // If pool had fewer questions, generate additional questions from Bab content
      if (this.questions.length < count) {
        const extra = this.generateSyntheticQuestions(count - this.questions.length, filterBab);
        this.questions.push(...extra);
      }

      if (this.timerEnabled) {
        this.timerSeconds = this.questions.length * 60; // 1 minute per question
        this.startTimer();
      }
    } else if (mode === "flashcard") {
      let pool = [...(this.currentModule.flashcards || [])];
      if (shuffle) {
        pool.sort(() => Math.random() - 0.5);
      }
      this.questions = pool.slice(0, Math.min(count, pool.length));
    }

    return this.questions;
  }

  generateSyntheticQuestions(needed, filterBab) {
    const synthetic = [];
    const babs = filterBab > 0 
      ? this.currentModule.babList.filter(b => b.bab === filterBab) 
      : this.currentModule.babList;

    for (let i = 0; i < needed && babs.length > 0; i++) {
      const b = babs[i % babs.length];
      const g = this.currentModule.glossary[i % this.currentModule.glossary.length];
      
      synthetic.push({
        id: `synth-${Date.now()}-${i}`,
        bab: b.bab,
        question: `Berdasarkan kajian materi pada Bab ${b.bab} (${b.title}), apakah fokus bahasan utama yang diuraikan?`,
        options: [
          b.content.substring(0, 70) + "...",
          "Pengujian data komparatif pada modul lain di luar kurikulum",
          "Pembatasan variabel independen tanpa verifikasi empiris",
          "Penurunan laju reaksi tanpa katalisator"
        ].sort(() => Math.random() - 0.5),
        answerIndex: 0, // will be dynamically located after sorting
        explanation: `Fokus Bab ${b.bab} menjelaskan: ${b.content}`,
        difficulty: "Sedang"
      });
      // fix answerIndex after sort
      const correctText = b.content.substring(0, 70) + "...";
      synthetic[synthetic.length - 1].answerIndex = synthetic[synthetic.length - 1].options.indexOf(correctText);
    }
    return synthetic;
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
        if (typeof this.onTimerTick === "function") {
          this.onTimerTick(this.formatTimer(this.timerSeconds));
        }
      } else {
        this.stopTimer();
        this.submitQuiz();
        if (typeof this.onTimerExpire === "function") {
          this.onTimerExpire();
        }
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTimer(totalSec) {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  selectAnswer(questionIndex, optionIndex) {
    if (this.isSubmitted) return;
    const q = this.questions[questionIndex];
    if (!q) return;
    this.userAnswers[q.id] = optionIndex;
  }

  submitQuiz() {
    this.isSubmitted = true;
    this.stopTimer();
    return this.calculateScore();
  }

  calculateScore() {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    this.questions.forEach(q => {
      const userChoice = this.userAnswers[q.id];
      if (userChoice === undefined) {
        unattempted++;
      } else if (userChoice === q.answerIndex) {
        correct++;
      } else {
        wrong++;
      }
    });

    const total = this.questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    let grade = "D";
    let message = "Perlu latihan lebih lanjut";
    let badgeClass = "badge-danger";

    if (percentage >= 90) {
      grade = "A+ (Istimewa)";
      message = "Luar biasa! Pemahaman konsep modul ini sudah sangat sempurna!";
      badgeClass = "badge-success";
    } else if (percentage >= 80) {
      grade = "A (Sangat Baik)";
      message = "Bagus sekali! Kamu sudah menguasai sebagian besar materi.";
      badgeClass = "badge-success";
    } else if (percentage >= 70) {
      grade = "B (Baik)";
      message = "Sudah baik! Tinjau kembali beberapa jawaban yang salah.";
      badgeClass = "badge-info";
    } else if (percentage >= 60) {
      grade = "C (Cukup)";
      message = "Cukup menguasai konsep dasar, pelajari kembali glosarium bab.";
      badgeClass = "badge-warning";
    }

    return {
      total,
      correct,
      wrong,
      unattempted,
      percentage,
      grade,
      message,
      badgeClass
    };
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QuizGenerator };
}

