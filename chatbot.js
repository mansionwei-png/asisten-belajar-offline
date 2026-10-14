/**
 * CHATBOT ENGINE ASISTEN BELAJAR OFFLINE (P13)
 * Menjawab pertanyaan spesifik berdasarkan modul yang sedang aktif
 * 100% Offline, menggunakan Natural Language Keyword & Semantic Matching Heuristics
 */

class OfflineChatbot {
  constructor() {
    this.currentModule = null;
    this.messages = [];
    this.chatHistoryKey = "asisten_belajar_chat_history_";
    this.speechSynthesis = (typeof window !== "undefined" && window.speechSynthesis) ? window.speechSynthesis : null;
    this.isSpeaking = false;
  }

  setModule(moduleData) {
    this.currentModule = moduleData;
    this.loadHistory();
  }

  loadHistory() {
    if (!this.currentModule) return;
    const key = this.chatHistoryKey + this.currentModule.id;
    try {
      if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem(key);
        if (saved) {
          this.messages = JSON.parse(saved);
          return;
        }
      }
      // Welcome message default for this module
      this.messages = [
        {
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: `Halo! Saya **Asisten Belajar Offline** untuk **${this.currentModule.shortTitle}** (${this.currentModule.code}).\n\nDi modul ini, kita mempelajari:\n${this.currentModule.babList.map(b => `- **Bab ${b.bab}**: ${b.title}`).join('\n')}\n\nSilakan ajukan pertanyaan seputar materi di atas, atau klik salah satu rekomendasi topik di bawah!`
        }
      ];
      this.saveHistory();
    } catch (e) {
      this.messages = [];
    }
  }

  saveHistory() {
    if (!this.currentModule) return;
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(this.chatHistoryKey + this.currentModule.id, JSON.stringify(this.messages));
      }
    } catch (e) {
      console.warn("Storage full or disabled");
    }
  }

  clearHistory() {
    if (!this.currentModule) return;
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(this.chatHistoryKey + this.currentModule.id);
    }
    this.loadHistory();
  }


  // Indonesian Stopwords for query cleaning
  getStopwords() {
    return new Set([
      "yang", "untuk", "pada", "ke", "para", "namun", "menurut", "antara", "dia", "dua",
      "ia", "seperti", "jika", "sehingga", "kembali", "dan", "ini", "itu", "atau", "adalah",
      "yaitu", "yakni", "dengan", "oleh", "dari", "dalam", "akan", "telah", "bisa", "dapat",
      "saja", "apakah", "kenapa", "mengapa", "bagaimana", "siapakah", "dimana", "kapan", "apa",
      "sih", "dong", "tolong", "mohon", "jelaskan", "sebutkan", "terangkan", "ceritakan",
      "kasih", "tahu", "tentang", "mengenai", "bab"
    ]);
  }

  tokenize(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s\+\-\/\*]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 1);
  }

  cleanQueryTokens(query) {
    const stopwords = this.getStopwords();
    const tokens = this.tokenize(query);
    const meaningful = tokens.filter(t => !stopwords.has(t));
    return meaningful.length > 0 ? meaningful : tokens;
  }

  // Main method to answer user query
  ask(query) {
    if (!this.currentModule) {
      return {
        text: "Pilih modul materi terlebih dahulu untuk memulai belajar.",
        sources: []
      };
    }

    const cleanQuery = query.trim();
    if (!cleanQuery) {
      return {
        text: "Ketikkan pertanyaan yang ingin kamu pelajari dari modul ini.",
        sources: []
      };
    }

    // Add user message to history
    this.messages.push({
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: cleanQuery
    });

    const response = this.generateResponse(cleanQuery);

    // Add bot message to history
    this.messages.push({
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: response.text,
      sources: response.sources,
      relatedPrompts: response.relatedPrompts
    });

    this.saveHistory();
    return response;
  }

  generateResponse(query) {
    const lowerQuery = query.toLowerCase();
    const tokens = this.cleanQueryTokens(query);
    const mod = this.currentModule;

    // Check greeting
    if (/^(halo|hai|hi|selamat pagi|selamat siang|selamat malam|assalamu)/i.test(lowerQuery) && tokens.length <= 3) {
      return {
        text: `Halo juga! Selamat datang di sesi belajar **${mod.shortTitle}**.\n\nSaya siap membantu kamu menguasai materi modul ini. Mau belajar konsep dasar, penjelasan rumus, atau latihan soal untuk persiapan ujian?`,
        sources: [mod.shortTitle],
        relatedPrompts: mod.suggestedPrompts.slice(0, 3)
      };
    }

    // Check if asking for module overview / list of chapters
    if (/(ringkasan|daftar bab|silabus|isi modul|pelajari apa|materi apa|semua bab)/i.test(lowerQuery)) {
      let text = `### 📚 Struktur Silabus ${mod.shortTitle}\n\n`;
      text += `**Kode Modul**: \`${mod.code}\`\n**Deskripsi**: ${mod.description}\n\n`;
      text += `**Daftar Bab Pembelajaran:**\n`;
      mod.babList.forEach(b => {
        text += `${b.bab}. **Bab ${b.bab}: ${b.title}**\n   ${b.content}\n\n`;
      });
      text += `> *Tips*: Kamu bisa menanyakan topik spesifik dari salah satu bab di atas!`;
      return {
        text,
        sources: [`Silabus ${mod.code}`],
        relatedPrompts: mod.suggestedPrompts.slice(0, 3)
      };
    }

    // Check if asking about a specific Bab number (e.g. "bab 1", "bab 3", "bab ii")
    const babNumMatch = lowerQuery.match(/\bbab\s*(\d+|i{1,3}|iv|v|vi|vii)\b/i);
    if (babNumMatch) {
      const romanMap = { i: 1, ii: 2, iii: 3, iv: 4, v: 5, vi: 6, vii: 7 };
      let babNum = parseInt(babNumMatch[1], 10);
      if (isNaN(babNum)) babNum = romanMap[babNumMatch[1].toLowerCase()];
      
      const targetBab = mod.babList.find(b => b.bab === babNum);
      if (targetBab) {
        return {
          text: `### 📖 ${mod.shortTitle} - Bab ${targetBab.bab}\n**${targetBab.title}**\n\n${targetBab.content}\n\n*Apakah kamu ingin melihat contoh soal atau penjelasan lebih rinci tentang bab ini?*`,
          sources: [`Bab ${targetBab.bab}: ${targetBab.title}`],
          relatedPrompts: [
            `Beri contoh penerapan Bab ${targetBab.bab}`,
            `Buat kuis latihan Bab ${targetBab.bab}`
          ]
        };
      }
    }

    // 1. Check Glossary Matches (Instant precise definitions)
    const isDefinitionIntent = /(apa itu|apa yang dimaksud|definisi|pengertian|artinya|makna)/i.test(lowerQuery);
    for (const item of mod.glossary) {
      const termLower = item.term.toLowerCase();
      // check if query mentions the exact term
      if (lowerQuery.includes(termLower) || (isDefinitionIntent && tokens.some(t => termLower.includes(t) && t.length >= 4))) {
        return {
          text: `### 💡 Istilah Kunci: **${item.term}**\n\n${item.def}\n\n> Konsep ini merupakan salah satu parameter penting yang diuji pada **${mod.shortTitle}** (${mod.code}).`,
          sources: [`Glosarium ${mod.code}`],
          relatedPrompts: [
            `Bagaimana penerapan ${item.term}?`,
            `Jelaskan kaitan ${item.term} dengan bab materi!`
          ]
        };
      }
    }

    // 2. Score against chatKB items (deep Q&A)
    let bestKB = null;
    let highestScore = 0;

    for (const kb of mod.chatKB) {
      let score = 0;
      // Match keywords
      for (const kw of kb.keywords) {
        if (lowerQuery.includes(kw)) score += 3;
        for (const token of tokens) {
          if (kw === token) score += 4;
          else if (kw.includes(token) || token.includes(kw)) score += 1.5;
        }
      }
      // Match title tokens
      const titleTokens = this.tokenize(kb.title);
      for (const tt of titleTokens) {
        if (tokens.includes(tt)) score += 3;
      }

      if (score > highestScore) {
        highestScore = score;
        bestKB = kb;
      }
    }

    if (bestKB && highestScore >= 4) {
      // Find related prompts from the module
      const related = mod.suggestedPrompts
        .filter(p => !p.toLowerCase().includes(bestKB.title.toLowerCase().substring(0, 10)))
        .slice(0, 3);

      return {
        text: `### 📌 ${bestKB.title}\n\n${bestKB.answer}`,
        sources: [mod.shortTitle, bestKB.title],
        relatedPrompts: related
      };
    }

    // 3. Score against Bab content
    let bestBab = null;
    let bestBabScore = 0;

    for (const bab of mod.babList) {
      let score = 0;
      const babTokens = this.tokenize(bab.title + " " + bab.content);
      for (const t of tokens) {
        if (babTokens.includes(t)) {
          score += 2;
        }
      }
      if (score > bestBabScore) {
        bestBabScore = score;
        bestBab = bab;
      }
    }

    if (bestBab && bestBabScore >= 3) {
      return {
        text: `### 📖 Penjelasan dari **Bab ${bestBab.bab}: ${bestBab.title}**\n\n${bestBab.content}\n\n> *Sumber Rujukan*: Dokumen Resmi Pembelajaran Fase F SMA - ${mod.code}.`,
        sources: [`Bab ${bestBab.bab}: ${bestBab.title}`],
        relatedPrompts: [
          `Berikan contoh soal mengenai Bab ${bestBab.bab}`,
          `Jelaskan poin-poin utama Bab ${bestBab.bab}`
        ]
      };
    }

    // 4. Check if query belongs to another module (Intelligent cross-module guidance)
    const otherMod = this.detectOtherModule(tokens, lowerQuery);
    if (otherMod && otherMod.id !== mod.id) {
      return {
        text: `⚠️ **Perhatian Topik Berbeda:**\n\nPertanyaanmu tampaknya lebih relevan dengan **${otherMod.title}** (${otherMod.subject}).\n\nSaat ini kamu sedang membuka **${mod.shortTitle}**. Karena chatbot ini berjalan sesuai modul materi masing-masing:\n1. Kamu bisa beralih ke modul **"${otherMod.shortTitle}"** melalui pemilih modul di atas.\n2. Atau, ajukan pertanyaan yang sesuai dengan materi modul aktif ini (${mod.shortTitle}).`,
        sources: [`Saran: Pindah ke ${otherMod.shortTitle}`],
        relatedPrompts: mod.suggestedPrompts.slice(0, 3)
      };
    }

    // 5. Intelligent Fallback
    return {
      text: `Maaf, saya tidak menemukan jawaban langsung untuk *"**${query}**"* di dalam materi khusus **${mod.shortTitle}**.\n\nBerikut beberapa opsi topik yang dapat kamu eksplorasi dari modul ini:\n${mod.babList.slice(0, 4).map(b => `- **Bab ${b.bab}**: ${b.title}`).join('\n')}\n\nSilakan coba pilih atau klik salah satu rekomendasi pertanyaan di bawah ini!`,
      sources: [mod.shortTitle],
      relatedPrompts: mod.suggestedPrompts.slice(0, 4)
    };
  }

  detectOtherModule(tokens, lowerQuery) {
    const all = getAllModules();
    for (const m of all) {
      if (m.id === this.currentModule.id) continue;
      // Check subject match
      if (lowerQuery.includes(m.subject.toLowerCase())) return m;
      // Check keywords from other modules
      for (const kb of m.chatKB) {
        let matchCount = 0;
        for (const kw of kb.keywords) {
          if (tokens.includes(kw)) matchCount++;
        }
        if (matchCount >= 2) return m;
      }
    }
    return null;
  }

  // Text-to-speech support for voice reading in Indonesian
  speakText(text, callbackOnEnd) {
    if (!('speechSynthesis' in window)) return;
    this.speechSynthesis.cancel();

    // Strip markdown formatting for cleaner audio
    const cleanSpeech = text
      .replace(/###\s*/g, '')
      .replace(/[\*#_`>]/g, '')
      .replace(/\[.*?\]\(.*?\)/g, '')
      .replace(/\|.*?\|/g, '')
      .replace(/-{3,}/g, '')
      .replace(/\n+/g, '. ');

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.lang = "id-ID";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick Indonesian voice if available
    const voices = this.speechSynthesis.getVoices();
    const idVoice = voices.find(v => v.lang.startsWith("id") || v.name.includes("Indonesian"));
    if (idVoice) utterance.voice = idVoice;

    utterance.onend = () => {
      this.isSpeaking = false;
      if (callbackOnEnd) callbackOnEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (callbackOnEnd) callbackOnEnd();
    };

    this.isSpeaking = true;
    this.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      this.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { OfflineChatbot };
}

