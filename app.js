/**
 * ASISTEN BELAJAR OFFLINE (P13)
 * Logic sesuai visual target: Sidebar 10 Modul, Tab AI Chatbot & Generator Kuis
 */

document.addEventListener("DOMContentLoaded", () => {
  // Core Engines
  const chatbot = new OfflineChatbot();
  const quizGen = new QuizGenerator();

  // DOM Elements
  const modulesListEl = document.getElementById("modules-list");
  const tabChatbotBtn = document.getElementById("tab-chatbot");
  const tabQuizBtn = document.getElementById("tab-quiz");
  const paneChatbot = document.getElementById("pane-chatbot");
  const paneQuiz = document.getElementById("pane-quiz");

  const chatMessagesEl = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");
  const btnKirim = document.getElementById("btn-kirim");
  const btnRangkum = document.getElementById("btn-rangkum");

  const quizContainer = document.getElementById("quiz-container");

  // State
  let currentModuleId = "modul-02"; // Default to Modul 02 as shown in screenshot
  let currentModule = null;
  let activeTab = "chatbot";

  // Sidebar names matching target mockup
  const moduleSidebarNames = {
    "modul-02": "Modul_02_Biologi...",
    "modul-01": "Modul_01_Sejarah...",
    "modul-03": "Modul_03_Fisika...",
    "modul-04": "Modul_04_Kimia...",
    "modul-05": "Modul_05_Matematika...",
    "modul-06": "Modul_06_Sosiologi...",
    "modul-07": "Modul_07_Geografi...",
    "modul-08": "Modul_08_Ekonomi...",
    "modul-09": "Modul_09_Informatika...",
    "modul-10": "Modul_10_B.Indonesia..."
  };

  // 1. RENDER SIDEBAR MODULES
  function initSidebar() {
    modulesListEl.innerHTML = "";
    // Ordered as in screenshot: Modul 2, 1, 3, 4, 5, 6, 7, 8, 9, 10
    const orderedIds = [
      "modul-02", "modul-01", "modul-03", "modul-04", "modul-05",
      "modul-06", "modul-07", "modul-08", "modul-09", "modul-10"
    ];

    orderedIds.forEach(id => {
      const mod = getModuleById(id);
      if (!mod) return;
      const item = document.createElement("div");
      item.className = `module-item ${id === currentModuleId ? "active" : ""}`;
      item.setAttribute("data-id", id);
      item.title = mod.title;

      item.innerHTML = `
        <div class="module-icon-doc"></div>
        <span>${moduleSidebarNames[id] || mod.shortTitle}</span>
      `;

      item.addEventListener("click", () => {
        selectModule(id);
      });

      modulesListEl.appendChild(item);
    });
  }

  // 2. SWITCH ACTIVE MODULE
  function selectModule(id) {
    currentModuleId = id;
    currentModule = getModuleById(id);

    // Update sidebar active item
    document.querySelectorAll(".module-item").forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-id") === id);
    });

    // Update Chatbot Context
    chatbot.setModule(currentModule);
    initChatbotMessages();

    // Update Quiz Generator
    quizGen.setModule(currentModule);
    startQuizSession();
  }

  // 3. TAB NAVIGATION
  function switchTab(tabName) {
    activeTab = tabName;
    if (tabName === "chatbot") {
      tabChatbotBtn.classList.add("active");
      tabQuizBtn.classList.remove("active");
      paneChatbot.classList.add("active");
      paneQuiz.classList.remove("active");
    } else {
      tabChatbotBtn.classList.remove("active");
      tabQuizBtn.classList.add("active");
      paneChatbot.classList.remove("active");
      paneQuiz.classList.add("active");
      // Render or resume quiz
      if (!quizGen.questions || quizGen.questions.length === 0) {
        startQuizSession();
      }
    }
  }

  tabChatbotBtn.addEventListener("click", () => switchTab("chatbot"));
  tabQuizBtn.addEventListener("click", () => switchTab("quiz"));

  // 4. CHATBOT LOGIC & RENDERING
  function initChatbotMessages() {
    chatMessagesEl.innerHTML = "";

    // Default initial greeting matching screenshot
    appendMessage(
      "bot",
      "Halo! Saya Asisten Belajar Offline. Pilih modul di sidebar kiri, lalu ketik pertanyaanmu atau klik Rangkum.",
      null
    );

    // If Modul 02, preload example conversation from screenshot for quick reference
    if (currentModuleId === "modul-02") {
      appendMessage("user", "Jelaskan fungsi asam klorida (HCl) dan pepsin dalam sistem pencernaan!", null);
      appendMessage(
        "bot",
        "Asam klorida (HCl) diproduksi sel parietal lambung. Fungsinya: (1) mengaktifkan pepsinogen menjadi pepsin, (2) membunuh bakteri patogen, (3) menciptakan pH asam untuk kerja enzim. Pepsin sendiri berfungsi memecah protein menjadi polipeptida melalui hidrolisis ikatan peptida.",
        "Sumber: Modul_02_Biologi... - Bab 3, Hal. 14"
      );
    }
  }

  function appendMessage(sender, text, sourceText) {
    const row = document.createElement("div");
    row.className = `chat-bubble-row ${sender}`;

    const isBot = sender === "bot";
    const avatar = document.createElement("div");
    avatar.className = `chat-avatar ${isBot ? "bot-avatar" : "user-avatar"}`;
    avatar.textContent = isBot ? "AI" : "S";

    const content = document.createElement("div");
    content.className = "chat-bubble-content";

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.innerHTML = text.replace(/\n/g, "<br/>");
    content.appendChild(bubble);

    if (sourceText) {
      const note = document.createElement("div");
      note.className = "chat-source-note";
      note.textContent = sourceText;
      content.appendChild(note);
    }

    row.appendChild(avatar);
    row.appendChild(content);
    chatMessagesEl.appendChild(row);
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  }

  function handleSendQuery() {
    const query = chatInput.value.trim();
    if (!query) return;

    chatInput.value = "";
    appendMessage("user", query, null);

    // Get bot response
    const res = chatbot.generateResponse(query);
    const sourceString = res.sources && res.sources.length > 0 
      ? `Sumber: ${moduleSidebarNames[currentModule.id] || currentModule.shortTitle} - ${res.sources[0]}`
      : `Sumber: ${moduleSidebarNames[currentModule.id] || currentModule.shortTitle}`;

    setTimeout(() => {
      appendMessage("bot", res.text.replace(/###\s*[^\n]+\n/g, ''), sourceString);
    }, 200);
  }

  btnKirim.addEventListener("click", handleSendQuery);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendQuery();
    }
  });

  // "Rangkum" button action
  btnRangkum.addEventListener("click", () => {
    appendMessage("user", `Rangkum materi utama untuk ${currentModule.title}`, null);

    const summaryText = currentModule.babList
      .map(b => `• Bab ${b.bab} (${b.title}): ${b.content.substring(0, 140)}...`)
      .join("\n\n");

    setTimeout(() => {
      appendMessage(
        "bot",
        `Berikut adalah rangkuman inti pembelajaran ${currentModule.shortTitle}:\n\n${summaryText}`,
        `Sumber: ${moduleSidebarNames[currentModule.id] || currentModule.shortTitle} - Rangkuman Eksekutif Bab 1 s.d. 7`
      );
    }, 250);
  });

  // 5. QUIZ GENERATOR LOGIC & RENDERING (IMAGE 1)
  function startQuizSession() {
    quizGen.generateQuiz({
      mode: "mcq",
      count: 5,
      shuffle: false
    });
    quizGen.userAnswers = {};
    quizGen.currentIndex = 0;
    renderQuizQuestion(0);
  }

  function renderQuizQuestion(index) {
    quizGen.currentIndex = index;
    const q = quizGen.questions[index];
    if (!q) return;

    const total = quizGen.questions.length;
    const currentSoalNum = index + 1;
    const modShortName = (moduleSidebarNames[currentModule.id] || currentModule.shortTitle).replace("...", "");

    // Calculate score so far
    let correctCount = 0;
    let answeredCount = 0;
    quizGen.questions.forEach((item, idx) => {
      if (quizGen.userAnswers[item.id] !== undefined) {
        answeredCount++;
        if (quizGen.userAnswers[item.id] === item.answerIndex) {
          correctCount++;
        }
      }
    });

    const isCurrentAnswered = quizGen.userAnswers[q.id] !== undefined;
    const userSelected = quizGen.userAnswers[q.id];
    const letters = ["A", "B", "C", "D"];

    // Progress bar percentage
    const progressPercent = Math.round((currentSoalNum / total) * 100);

    let optionsHtml = "";
    q.options.forEach((optText, optIdx) => {
      let stateClass = "";
      if (isCurrentAnswered) {
        if (optIdx === q.answerIndex) {
          stateClass = "state-correct";
        } else if (userSelected === optIdx) {
          stateClass = "state-wrong";
        }
      }

      optionsHtml += `
        <button class="quiz-option-item ${stateClass}" data-opt="${optIdx}">
          <span class="quiz-option-pill">${letters[optIdx]}</span>
          <span class="quiz-option-label">${optText}</span>
        </button>
      `;
    });

    // Feedback banner if answered
    let feedbackBannerHtml = "";
    if (isCurrentAnswered) {
      const correctOptionText = q.options[q.answerIndex];
      const nextNum = currentSoalNum < total ? currentSoalNum + 1 : total;
      const isLast = currentSoalNum === total;

      feedbackBannerHtml = `
        <div class="quiz-feedback-box">
          <div class="feedback-text-wrap">
            <span class="big-stat-number">${correctCount}</span>
            <span>dari ${answeredCount} soal benar sejauh ini. Jawaban benar: <strong>${correctOptionText}</strong>.${!isLast ? ` Lanjut ke soal ${nextNum}.` : ' Kuis selesai!'}</span>
          </div>
          ${
            !isLast 
              ? `<button class="btn-next-action" id="btn-next-question">Lanjut ke soal ${nextNum} →</button>`
              : `<button class="btn-next-action" id="btn-finish-quiz">Lihat Hasil Akhir 🏁</button>`
          }
        </div>
      `;
    }

    quizContainer.innerHTML = `
      <div class="quiz-header-meta">
        <span class="quiz-info-left">Soal ${currentSoalNum} dari ${total} • ${modShortName}</span>
        <span class="quiz-score-right">Skor: ${correctCount}/${answeredCount}</span>
      </div>

      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="quiz-question-title">
        ${q.question}
      </div>

      <div class="quiz-options-group">
        ${optionsHtml}
      </div>

      ${feedbackBannerHtml}
    `;

    // Bind option click
    const optButtons = quizContainer.querySelectorAll(".quiz-option-item");
    optButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (isCurrentAnswered) return;
        const selectedOpt = parseInt(btn.getAttribute("data-opt"), 10);
        quizGen.selectAnswer(index, selectedOpt);
        renderQuizQuestion(index);
      });
    });

    // Next question button
    const nextBtn = document.getElementById("btn-next-question");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (index < total - 1) {
          renderQuizQuestion(index + 1);
        }
      });
    }

    // Finish quiz button
    const finishBtn = document.getElementById("btn-finish-quiz");
    if (finishBtn) {
      finishBtn.addEventListener("click", () => {
        renderQuizComplete(correctCount, total);
      });
    }
  }

  function renderQuizComplete(correct, total) {
    const percentage = Math.round((correct / total) * 100);
    quizContainer.innerHTML = `
      <div class="quiz-complete-card">
        <h3>🎉 Kuis Selesai!</h3>
        <p>Kamu telah menyelesaikan <strong>${total} soal</strong> untuk <strong>${currentModule.shortTitle}</strong>.</p>
        <div style="font-size: 32px; font-weight: 800; color: #0d9488; margin: 8px 0;">${percentage}%</div>
        <p>Benar: <strong>${correct}</strong> dari ${total} soal.</p>
        <button class="btn btn-teal" id="btn-restart-quiz" style="margin-top: 12px;">🔄 Ulangi Kuis Modul Ini</button>
      </div>
    `;

    document.getElementById("btn-restart-quiz").addEventListener("click", () => {
      startQuizSession();
    });
  }

  // INITIALIZE APP
  selectModule("modul-02");
  initSidebar();
  switchTab("chatbot");
});
