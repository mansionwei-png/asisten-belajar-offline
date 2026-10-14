/**
 * DATABASE PENGETAHUAN & BANK KUIS 10 MODUL BAHAN LATIHAN P13
 * SMA Mutiara Bangsa 2 / Kurikulum Mandiri Fase F
 * 100% Berjalan Lokal & Offline di Browser
 */

const MODULES_DATA = [
  {
    id: "modul-01",
    code: "MOD-SEJ-11-01",
    title: "Sejarah Indonesia: Dinamika Proklamasi Kemerdekaan & Diplomasi Kedaulatan",
    shortTitle: "Modul 01: Sejarah Kemerdekaan",
    subject: "Sejarah",
    icon: "🇮🇩",
    color: "#ef4444",
    pdfFile: "Modul_01_Sejarah_Kemerdekaan_Indonesia.pdf",
    txtFile: "Modul_01_Sejarah_Kemerdekaan.txt",
    description: "Membahas peristiwa penting detik-detik Proklamasi 17 Agustus 1945, Peristiwa Rengasdengklok, perumusan naskah di rumah Laksamana Maeda, hingga perjuangan diplomasi kedaulatan RI.",
    babList: [
      {
        bab: 1,
        title: "Latar Belakang Kekalahan Jepang & Berita Radio BBC",
        content: "Pada 14 Agustus 1945, Jepang menyerah tanpa syarat kepada Sekutu setelah bom atom di Hiroshima (6 Agustus) dan Nagasaki (9 Agustus 1945). Berita ini disadap oleh pemuda pejuang Indonesia seperti Sutan Sjahrir melalui siaran radio luar negeri (BBC), memicu desakan agar Indonesia segera memproklamasikan kemerdekaan."
      },
      {
        bab: 2,
        title: "Peristiwa Rengasdengklok (16 Agustus 1945)",
        content: "Perbedaan pendapat tajam terjadi antara Golongan Tua (Ir. Soekarno & Drs. Moh. Hatta) dan Golongan Muda (Chaerul Saleh, Wikana, Sukarni, Darwis). Golongan muda menginginkan kemerdekaan murni hasil perjuangan bangsa tanpa campur tangan PPKI (badan bentukan Jepang). Pada 16 Agustus 1945 pukul 03.00 WIB, Soekarno-Hatta dibawa ke Rengasdengklok, Karawang agar terbebas dari tekanan militer Jepang."
      },
      {
        bab: 3,
        title: "Perumusan Teks Proklamasi di Rumah Laksamana Maeda",
        content: "Mr. Ahmad Soebardjo menengahi dan menjamin keselamatan Soekarno-Hatta untuk kembali ke Jakarta. Perumusan naskah dilakukan pada malam 16 Agustus 1945 di kediaman Laksamana Tadashi Maeda (Jl. Imam Bonjol No. 1). Naskah ditulis tangan oleh Soekarno, lalu diketik oleh Sayuti Melik dengan perubahan kata 'tempoh' menjadi 'tempo' dan format tanggal 'Djakarta, hari 17 boelan 8 tahoen 05'."
      },
      {
        bab: 4,
        title: "Pembacaan Naskah Proklamasi 17 Agustus 1945",
        content: "Jumat, 17 Agustus 1945 pukul 10.00 WIB di Jl. Pegangsaan Timur No. 56 Jakarta. Soekarno membacakan naskah didampingi Moh. Hatta. Bendera Merah Putih dijahit tangan oleh Ibu Fatmawati dan dikibarkan oleh Latief Hendraningrat serta Suhud Sastro Kusumo diiringi lagu kebangsaan Indonesia Raya ciptaan W.R. Supratman."
      },
      {
        bab: 5,
        title: "Sidang PPKI dan Pembentukan Kelengkapan Negara",
        content: "Sidang PPKI tanggal 18-22 Agustus 1945 menghasilkan keputusan fundamental: Mengesahkan UUD 1945, memilih Ir. Soekarno sebagai Presiden dan Drs. Moh. Hatta sebagai Wakil Presiden, membentuk Komite Nasional Indonesia Pusat (KNIP), membagi wilayah menjadi 8 provinsi, serta membentuk Badan Keamanan Rakyat (BKR)."
      },
      {
        bab: 6,
        title: "Perjuangan Diplomasi Kedaulatan RI",
        content: "Indonesia menempuh jalur perundingan internasional: Perjanjian Linggarjati (1946, pengakuan de facto Jawa, Madura, Sumatra), Perjanjian Renville (1948, garis demarkasi Van Mook), Perjanjian Roem-Royen (1949), hingga Konferensi Meja Bundar (KMB) di Den Haag (1949) yang menghasilkan penyerahan kedaulatan penuh."
      },
      {
        bab: 7,
        title: "Republik Indonesia Serikat (RIS) dan Kembali ke NKRI",
        content: "Hasil KMB membentuk negara federal RIS pada akhir 1949. Namun, atas aspirasi rakyat di berbagai negara bagian yang ingin bersatu, pada 17 Agustus 1950 Indonesia resmi membubarkan RIS dan kembali menjadi Negara Kesatuan Republik Indonesia (NKRI)."
      }
    ],
    glossary: [
      { term: "Proklamasi", def: "Pernyataan resmi kemerdekaan dan kedaulatan bangsa Indonesia kepada seluruh rakyat dan dunia internasional pada 17 Agustus 1945." },
      { term: "Rengasdengklok", def: "Kecamatan di Karawang tempat Soekarno dan Hatta diasingkan oleh golongan pemuda pada 16 Agustus 1945 dini hari." },
      { term: "Golongan Muda", def: "Kelompok pemuda revolusioner (Chaerul Saleh, Wikana, Sukarni, Darwis) yang mendesak kemerdekaan segera tanpa campur tangan Jepang/PPKI." },
      { term: "Golongan Tua", def: "Tokoh-tokoh senior perjuangan (Soekarno, Hatta, Ahmad Soebardjo) yang mempertimbangkan perhitungan politis dan hukum internasional." },
      { term: "Sayuti Melik", def: "Tokoh pemuda yang mengetik naskah proklamasi autentik dengan melakukan beberapa penyesuaian ejaan kata." },
      { term: "Laksamana Tadashi Maeda", def: "Perwira tinggi Angkatan Laut Jepang yang bersimpati dan meminjamkan rumah dinasnya sebagai tempat aman perumusan naskah proklamasi." },
      { term: "Fatmawati", def: "Istri Bung Karno yang menjahit Bendera Pusaka Merah Putih yang pertama kali dikibarkan pada 17 Agustus 1945." },
      { term: "KMB (Konferensi Meja Bundar)", def: "Konferensi di Den Haag tahun 1949 di mana Belanda akhirnya secara resmi mengakui kedaulatan Indonesia." }
    ],
    suggestedPrompts: [
      "Kapan Jepang menyerah kepada Sekutu dan bagaimana pemuda mengetahuinya?",
      "Mengapa terjadi Peristiwa Rengasdengklok dan siapa tokoh yang terlibat?",
      "Di mana naskah proklamasi dirumuskan dan siapa yang mengetiknya?",
      "Sebutkan isi perubahan kata saat naskah proklamasi diketik oleh Sayuti Melik!",
      "Bagaimana proses pengibaran bendera saat proklamasi 17 Agustus 1945?",
      "Apa saja hasil sidang PPKI pada tanggal 18 Agustus 1945?",
      "Jelaskan jalur diplomasi Indonesia dari Linggarjati hingga KMB!"
    ],
    chatKB: [
      {
        keywords: ["latar", "belakang", "jepang", "menyerah", "sekutu", "hiroshima", "nagasaki", "bbc", "radio", "sjahrir"],
        title: "Latar Belakang Kemerdekaan & Menyerahnya Jepang",
        answer: "Pada tanggal **14 Agustus 1945**, Kaisar Hirohito mengumumkan bahwa Kekaisaran Jepang menyerah tanpa syarat kepada Sekutu setelah kota **Hiroshima** (6 Agustus 1945) dan **Nagasaki** (9 Agustus 1945) hancur akibat bom atom Sekutu.\n\nBerita kekalahan ini dirahasiakan oleh pihak Jepang di Indonesia, namun berhasil disadap oleh para pemuda pejuang (seperti Sutan Sjahrir) melalui siaran radio luar negeri (**BBC London**). Momen ini menciptakan *vacuum of power* (kekosongan kekuasaan) di Hindia Belanda, yang dimanfaatkan pejuang untuk segera memproklamasikan kemerdekaan."
      },
      {
        keywords: ["rengasdengklok", "golongan", "muda", "tua", "sukarni", "wikana", "chaerul", "saleh", "dini", "hari", "karawang"],
        title: "Peristiwa Rengasdengklok",
        answer: "**Peristiwa Rengasdengklok** terjadi pada dini hari **16 Agustus 1945 (pukul 03.00 WIB)**.\n\n* **Penyebab**: Perbedaan sikap antara **Golongan Tua** (Ir. Soekarno & Drs. Moh. Hatta) dan **Golongan Muda** (Chaerul Saleh, Wikana, Sukarni, Darwis).\n* Golongan Muda menginginkan kemerdekaan segera diumumkan secara mandiri tanpa campur tangan badan bentukan Jepang (PPKI).\n* Soekarno dan Hatta dibawa ke **Rengasdengklok, Karawang** dengan tujuan mengamankan mereka dari intimidasi militer Jepang dan memastikan proklamasi segera terlaksana."
      },
      {
        keywords: ["perumusan", "teks", "naskah", "proklamasi", "maeda", "imam", "bonjol", "soebardjo", "sayuti", "melik", "perubahan", "kata"],
        title: "Perumusan Naskah Proklamasi",
        answer: "Perumusan naskah proklamasi berlangsung di rumah **Laksamana Tadashi Maeda**, Jalan Imam Bonjol No. 1, Jakarta pada malam hingga dini hari tanggal 16-17 Agustus 1945 setelah Ahmad Soebardjo menjamin kembalinya Soekarno-Hatta.\n\n* **Konseptor**: Ir. Soekarno, Drs. Moh. Hatta, dan Mr. Ahmad Soebardjo.\n* **Juru Ketik**: **Sayuti Melik** ditemani B.M. Diah.\n* **Perubahan Redaksi**:\n  1. Kata *'tempoh'* diubah menjadi *'tempo'*.\n  2. Kalimat *'wakil-wakil bangsa Indonesia'* diganti menjadi *'Atas nama bangsa Indonesia'*.\n  3. Penulisan tanggal *'Djakarta, 17-08-05'* diubah menjadi *'Djakarta, hari 17 boelan 8 tahoen 05'* (tahun 05 adalah tahun penanggalan Jepang 2605)."
      },
      {
        keywords: ["pembacaan", "17", "agustus", "pegangsaan", "timur", "fatmawati", "bendera", "latief", "suhud", "supratman"],
        title: "Detik-Detik Proklamasi 17 Agustus 1945",
        answer: "Pembacaan teks Proklamasi Kemerdekaan dilaksanakan pada hari **Jumat, 17 Agustus 1945, pukul 10.00 WIB** di halaman rumah Bung Karno, **Jalan Pegangsaan Timur No. 56, Jakarta**.\n\n* **Acara**: Diawali pidato pengantar Bung Karno dilanjutkan pembacaan teks Proklamasi.\n* **Pengibaran Bendera**: Sang Saka Merah Putih yang dijahit tangan oleh **Ibu Fatmawati** dikibarkan oleh **Latief Hendraningrat** dan **Suhud Sastro Kusumo**.\n* **Lagu Kebangsaan**: Seluruh hadirin spontan menyanyikan lagu *Indonesia Raya* ciptaan W.R. Supratman."
      },
      {
        keywords: ["sidang", "ppki", "18", "agustus", "uud", "presiden", "wapres", "knip", "hasil"],
        title: "Hasil Sidang PPKI 18 Agustus 1945",
        answer: "Pada 18 Agustus 1945, PPKI mengadakan sidang pertamanya di Gedung Kesenian Jakarta dengan 3 keputusan penting:\n1. **Mengesahkan UUD 1945** sebagai konstitusi negara.\n2. **Memilih Ir. Soekarno** sebagai Presiden dan **Drs. Moh. Hatta** sebagai Wakil Presiden RI.\n3. **Membentuk Komite Nasional Indonesia Pusat (KNIP)** untuk membantu tugas kepresidenan sebelum lembaga legislatif (DPR/MPR) terbentuk."
      },
      {
        keywords: ["diplomasi", "perundingan", "linggarjati", "renville", "roem", "royen", "kmb", "den", "haag", "kedaulatan"],
        title: "Jalur Diplomasi Mempertahankan Kemerdekaan",
        answer: "Selain pertempuran fisik, Indonesia menempuh jalur diplomasi internasional:\n* **Perjanjian Linggarjati (1946)**: Belanda mengakui de facto wilayah RI meliputi Jawa, Madura, dan Sumatra.\n* **Perjanjian Renville (1948)**: Menetapkan Garis Demarkasi Van Mook yang merugikan RI.\n* **Perjanjian Roem-Royen (1949)**: Menghentikan aksi militer dan mengembalikan ibu kota RI ke Yogyakarta.\n* **Konferensi Meja Bundar / KMB (1949)**: Di Den Haag, Belanda akhirnya mengakui kedaulatan Republik Indonesia Serikat (RIS) tanpa syarat."
      }
    ],
    quizBank: [
      {
        id: "q-sej-01",
        bab: 1,
        question: "Kaisar Hirohito secara resmi mengumumkan kekalahan Jepang tanpa syarat kepada Sekutu setelah peristiwa bom atom pada tanggal...",
        options: ["10 Agustus 1945", "14 Agustus 1945", "16 Agustus 1945", "17 Agustus 1945"],
        answerIndex: 1,
        explanation: "Jepang menyerah tanpa syarat kepada Sekutu pada tanggal 14 Agustus 1945 menyusul pemboman atom Hiroshima (6 Agustus) dan Nagasaki (9 Agustus 1945).",
        difficulty: "Mudah"
      },
      {
        id: "q-sej-02",
        bab: 2,
        question: "Alasan utama Golongan Muda membawa Soekarno dan Hatta ke Rengasdengklok pada 16 Agustus 1945 adalah...",
        options: [
          "Menyusun strategi perang gerilya melawan Sekutu",
          "Menjauhkan kedua tokoh dari pengaruh dan tekanan tentara Jepang",
          "Meminta perlindungan markas PETA dari kejaran NICA",
          "Menunggu kedatangan bantuan logistik Sekutu di Karawang"
        ],
        answerIndex: 1,
        explanation: "Golongan Muda membawa Soekarno-Hatta ke Rengasdengklok agar kedua pemimpin tidak dipengaruhi atau dihalangi oleh pihak militer Jepang dalam memproklamasikan kemerdekaan.",
        difficulty: "Sedang"
      },
      {
        id: "q-sej-03",
        bab: 3,
        question: "Perumusan naskah proklamasi kemerdekaan Indonesia diselenggarakan di kediaman perwira Jepang yang bersimpati bernama...",
        options: ["Jenderal Terauchi", "Laksamana Tadashi Maeda", "Marsekal Nishimura", "Jenderal Kumakichi Harada"],
        answerIndex: 1,
        explanation: "Perumusan teks proklamasi dilakukan di rumah Laksamana Tadashi Maeda di Jalan Imam Bonjol No. 1, Jakarta Pusat.",
        difficulty: "Mudah"
      },
      {
        id: "q-sej-04",
        bab: 3,
        question: "Manakah perubahan redaksi yang dilakukan oleh Sayuti Melik saat mengetik naskah proklamasi kemerdekaan?",
        options: [
          "Kata 'tempoh' diganti menjadi 'tempo'",
          "Kata 'Merdeka' diganti menjadi 'Proklamasi'",
          "Tanggal '17-08-1945' diubah menjadi '17 Agustus 1945'",
          "Penambahan nama semua anggota PPKI sebagai penandatangan"
        ],
        answerIndex: 0,
        explanation: "Sayuti Melik melakukan beberapa perubahan ejaan: kata 'tempoh' menjadi 'tempo', 'wakil-wakil bangsa Indonesia' menjadi 'Atas nama bangsa Indonesia', dan penanggalan 'Djakarta, hari 17 boelan 8 tahoen 05'.",
        difficulty: "Sedang"
      },
      {
        id: "q-sej-05",
        bab: 4,
        question: "Tokoh yang bertugas mengibarkan Bendera Merah Putih saat pembacaan proklamasi 17 Agustus 1945 adalah...",
        options: [
          "Chaerul Saleh dan Wikana",
          "Sayuti Melik dan B.M. Diah",
          "Latief Hendraningrat dan Suhud Sastro Kusumo",
          "Mr. Ahmad Soebardjo dan Sutan Sjahrir"
        ],
        answerIndex: 2,
        explanation: "Pengibaran bendera Merah Putih yang dijahit Ibu Fatmawati dilakukan oleh Latief Hendraningrat dan Suhud Sastro Kusumo di Jl. Pegangsaan Timur 56.",
        difficulty: "Sedang"
      },
      {
        id: "q-sej-06",
        bab: 5,
        question: "Salah satu hasil penting Sidang Pertama PPKI pada tanggal 18 Agustus 1945 adalah...",
        options: [
          "Membentuk Tentara Nasional Indonesia (TNI)",
          "Mengesahkan UUD 1945 serta memilih Soekarno dan Hatta sebagai Presiden & Wapres",
          "Menandatangani Piagam Jakarta",
          "Menyepakati garis demarkasi Van Mook"
        ],
        answerIndex: 1,
        explanation: "Hasil sidang PPKI 18 Agustus 1945: Mengesahkan UUD 1945, memilih Ir. Soekarno sebagai Presiden dan Drs. Moh. Hatta sebagai Wakil Presiden, serta membentuk KNIP.",
        difficulty: "Sedang"
      },
      {
        id: "q-sej-07",
        bab: 6,
        question: "Konferensi internasional di Den Haag pada tahun 1949 yang secara definitif mengakhiri persengketaan militer dan mengakui kedaulatan Indonesia adalah...",
        options: ["Perjanjian Linggarjati", "Perjanjian Renville", "Perjanjian Roem-Royen", "Konferensi Meja Bundar (KMB)"],
        answerIndex: 3,
        explanation: "Konferensi Meja Bundar (KMB) di Den Haag Belanda (1949) menghasilkan pengakuan kedaulatan resmi kepada Republik Indonesia Serikat.",
        difficulty: "HOTS"
      }
    ],
    flashcards: [
      { q: "Kapan dan di mana naskah proklamasi kemerdekaan RI dibacakan?", a: "Jumat, 17 Agustus 1945 pukul 10.00 WIB di Jl. Pegangsaan Timur No. 56, Jakarta." },
      { q: "Siapa penjahit Sang Saka Merah Putih pertama?", a: "Ibu Fatmawati (istri Bung Karno)." },
      { q: "Apa nama kota tempat Soekarno-Hatta diamankan oleh pemuda?", a: "Rengasdengklok di Karawang, Jawa Barat." },
      { q: "Siapa penengah yang menjamin Soekarno-Hatta di Rengasdengklok?", a: "Mr. Ahmad Soebardjo." },
      { q: "Siapa juru ketik naskah proklamasi kemerdekaan?", a: "Sayuti Melik." },
      { q: "Apa lembaga pembantu presiden hasil sidang PPKI 18 Agustus 1945?", a: "KNIP (Komite Nasional Indonesia Pusat)." }
    ]
  },

  {
    id: "modul-02",
    code: "MOD-BIO-11-02",
    title: "Biologi: Saluran Pencernaan Makanan, Kinetika Enzim & Metabolisme",
    shortTitle: "Modul 02: Biologi Pencernaan",
    subject: "Biologi",
    icon: "🧬",
    color: "#10b981",
    pdfFile: "Modul_02_Biologi_Sistem_Pencernaan_dan_Metabolisme.pdf",
    txtFile: "Modul_02_Biologi_Pencernaan.txt",
    description: "Mempelajari organ saluran pencernaan manusia, proses mekanik dan kimiawi, fungsi enzim amilase, pepsin, renin, tripsin, lipase, serta patofisiologi sistem pencernaan.",
    babList: [
      {
        bab: 1,
        title: "Saluran dan Organ Pencernaan Manusia",
        content: "Saluran pencernaan tersusun dari: mulut -> kerongkongan (esofagus) -> lambung (ventrikulus) -> usus halus (intestinum tenue) -> usus besar (kolon) -> rektum -> anus. Pencernaan berlangsung mekanik (mengubah ukuran makanan) dan kimiawi (hidrolisis molekul oleh enzim)."
      },
      {
        bab: 2,
        title: "Pencernaan di Rongga Mulut & Esofagus",
        content: "Di rongga mulut terjadi pencernaan mekanik oleh gigi dan kimiawi oleh air liur (saliva) yang mengandung enzim ptialin (amilase) untuk mengubah amilum (polisakarida) menjadi maltosa (disakarida) pada pH netral (~6.8). Makanan ditelan melewati esofagus dengan gerakan peristaltik menuju lambung."
      },
      {
        bab: 3,
        title: "Fisiologi dan Enzim di Lambung",
        content: "Lambung menghasilkan getah lambung bersifat sangat asam (pH 1.5 - 2.5) karena mengandung HCl (Asam Klorida). HCl membunuh patogen dan mengaktifkan pepsinogen menjadi enzim pepsin aktif (memecah protein menjadi pepton/polipeptida). Enzim renin berfungsi mengendapkan kasein susu."
      },
      {
        bab: 4,
        title: "Pencernaan Usus Halus (Duodenum, Jejunum, Ileum)",
        content: "Usus halus terbagi 3: duodenum (12 jari), jejunum (kosong), ileum (penyerapan). Di duodenum bermuara getah pankreas (amilase, tripsinogen diaktifkan jadi tripsin untuk protein, lipase untuk lemak) dan empedu dari hati untuk mengemulsikan lemak agar mudah dicerna lipase."
      },
      {
        bab: 5,
        title: "Penyerapan Sari Nutrisi di Jonjot Usus (Vili)",
        content: "Dinding usus halus dipenuhi tonjolan mikroskopis bernama vili dan mikrovili untuk memperluas area absorpsi. Glukosa, asam amino, vitamin B & C, serta mineral diserap ke pembuluh darah kapiler menuju hati. Asam lemak dan gliserol diserap ke pembuluh kil (lakteal/getah bening)."
      },
      {
        bab: 6,
        title: "Fungsi Usus Besar & Pembusukan Feses",
        content: "Usus besar (kolon) menyerap kembali air dan elektrolit dari sisa makanan yang tidak tercerna. Bakteri simbiosis Escherichia coli membantu pembusukan sisa makanan serta mensintesis vitamin K dan vitamin B12 sebelum dibuang melalui defekasi."
      },
      {
        bab: 7,
        title: "Gangguan Klinis Sistem Pencernaan",
        content: "Gastritis (radang mukosa lambung), GERD (refluks asam lambung ke esofagus), Ulkus Peptikum (luka dinding lambung oleh infeksi H. pylori), Konstipasi / Sembelit (penyerapan air berlebih akibat kurang serat), Diare (peristaltik cepat akibat infeksi sehingga air kurang diserap), Apendisitis (radang usus buntu)."
      }
    ],
    glossary: [
      { term: "Enzim Ptialin (Amilase)", def: "Enzim dalam saliva yang menghidrolisis amilum menjadi maltosa di rongga mulut." },
      { term: "Peristaltik", def: "Gerak gelombang kontraksi dan relaksasi otot dinding saluran cerna yang mendorong bolus makanan." },
      { term: "HCl (Asam Klorida)", def: "Asam kuat getah lambung yang membunuh bakteri patogen dan mengaktifkan pepsinogen menjadi pepsin." },
      { term: "Pepsin", def: "Enzim lambung pemecah ikatan peptida protein menjadi rantai polipeptida / pepton." },
      { term: "Renin", def: "Enzim lambung yang mengendapkan protein kasein dari susu cair." },
      { term: "Empedu", def: "Cairan kehijauan hasil hati yang disimpan di kantung empedu untuk mengemulsikan lemak menjadi butiran kecil." },
      { term: "Lipase Pankreas", def: "Enzim pankreas yang menghidrolisis lemak (trigliserida) menjadi asam lemak dan gliserol." },
      { term: "Vili Usus", def: "Jonjot-jonjot mukosa usus halus yang memperbesar luas permukaan absorpsi nutrisi." }
    ],
    suggestedPrompts: [
      "Apa perbedaan pencernaan mekanik dan kimiawi di rongga mulut?",
      "Jelaskan fungsi asam klorida (HCl) dan enzim pepsin di lambung!",
      "Sebutkan 3 bagian usus halus dan enzim yang bekerja di duodenum!",
      "Bagaimana peran cairan empedu dalam pencernaan lemak?",
      "Bagaimana glukosa dan asam lemak diserap di vili usus halus?",
      "Apa fungsi bakteri Escherichia coli di usus besar?",
      "Jelaskan perbedaan antara gastritis, konstipasi, dan diare!"
    ],
    chatKB: [
      {
        keywords: ["mulut", "ptialin", "amilase", "saliva", "esofagus", "peristaltik", "mekanik", "kimiawi", "air liur"],
        title: "Pencernaan di Rongga Mulut dan Kerongkongan",
        answer: "Di dalam **rongga mulut**, makanan mengalami dua proses pencernaan:\n1. **Pencernaan Mekanik**: Dilakukan oleh gigi (memotong, merobek, mengunyah) dibantu lidah yang membolak-balik bolus makanan.\n2. **Pencernaan Kimiawi**: Dilakukan oleh enzim **ptialin (amilase saliva)** yang mengubah karbohidrat kompleks (**amilum**) menjadi disakarida (**maltosa**).\n\nSetelah dikunyah, bolus makanan ditelan melewati faring menuju **esofagus** (kerongkongan), di mana kontraksi otot dinding esofagus menghasilkan **gerak peristaltik** yang mendorong makanan masuk ke lambung."
      },
      {
        keywords: ["lambung", "hcl", "asam", "klorida", "pepsin", "pepsinogen", "renin", "getah", "pepton"],
        title: "Fisiologi dan Enzim di Lambung",
        answer: "Lambung (*ventrikulus*) menghasilkan **getah lambung** yang mengandung 3 zat penting:\n1. **Asam Klorida (HCl)**:\n   * Menciptakan suasana asam ekstrem (pH 1.5 - 2.5) untuk membunuh bakteri patogen pada makanan.\n   * Mengaktifkan *pepsinogen* (zimogen pasif) menjadi enzim **pepsin** aktif.\n2. **Enzim Pepsin**:\n   * Memecah molekul protein berukuran besar menjadi rantai peptida yang lebih pendek (**pepton**).\n3. **Enzim Renin**:\n   * Menggumpalkan atau mengendapkan **kasein** (protein susu) agar dapat dicerna oleh pepsin."
      },
      {
        keywords: ["usus", "halus", "duodenum", "jejunum", "ileum", "tripsin", "lipase", "amilase", "empedu", "pankreas"],
        title: "Pencernaan di Usus Halus dan Sekresi Pankreas",
        answer: "Usus halus terdiri dari tiga segmen berurutan:\n* **Duodenum (Usus 12 Jari)**: Tempat bermuaranya saluran empedu dan pankreas.\n  * **Cairan Empedu (Hati)**: Mengemulsi lemak menjadi droplet kecil agar enzim lipase dapat bekerja optimal.\n  * **Tripsin (Pankreas)**: Memecah pepton menjadi asam amino.\n  * **Amilase Pankreas**: Melanjutkan penguraian amilum menjadi maltosa.\n  * **Lipase Pankreas**: Menghidrolisis lemak menjadi **asam lemak + gliserol**.\n* **Jejunum (Usus Kosong)**: Melanjutkan hidrolisis makanan oleh enzim usus (maltase, sukrase, laktase, erepsin).\n* **Ileum (Usus Penyerapan)**: Tempat penyerapan akhir sari makanan melalui mikrovili."
      },
      {
        keywords: ["penyerapan", "absorpsi", "vili", "lakteal", "kapiler", "glukosa", "asam", "lemak", "nutrisi"],
        title: "Mekanisme Penyerapan Nutrisi di Jonjot Usus (Vili)",
        answer: "Struktur dinding usus halus memiliki lipatan jonjot bernama **vili** (*villus*) yang memperluas bidang serap hingga ratusan meter persegi:\n* **Jalur Kapiler Darah**: Glukosa, asam amino, vitamin larut air (B & C), air, dan mineral diserap masuk ke kapiler darah lalu dibawa oleh vena porta hepatika menuju **hati** untuk dimetabolisme.\n* **Jalur Pembuluh Kil / Lakteal (Getah Bening)**: Asam lemak dan gliserol diserap dalam bentuk kilomikron menuju pembuluh limfa/kil sebelum masuk ke sirkulasi darah sistemik."
      },
      {
        keywords: ["usus", "besar", "kolon", "e.", "coli", "escherichia", "feses", "defekasi", "air", "vitamin", "k"],
        title: "Usus Besar dan Peran Bakteri Simbion",
        answer: "Fungsi utama **usus besar (kolon)**:\n1. **Reabsorpsi Air**: Mengatur kadar air feses agar tidak terlalu cair maupun terlalu keras.\n2. **Pembusukan**: Bakteri mutualistik **Escherichia coli** membusukkan sisa makanan menjadi feses.\n3. **Sintesis Vitamin**: Bakteri E. coli membantu menghasilkan **vitamin K** (penting untuk pembekuan darah) dan vitamin B kompleks.\n4. Penyimpanan feses di rektum sebelum dikeluarkan melalui **sfingter anus** (defekasi)."
      },
      {
        keywords: ["gangguan", "penyakit", "gastritis", "maag", "konstipasi", "sembelit", "diare", "gerd", "ulkus"],
        title: "Gangguan Klinis Sistem Pencernaan",
        answer: "* **Gastritis (Maag)**: Peradangan pada lapisan mukosa lambung akibat stres, asam lambung berlebih, atau pola makan tidak teratur.\n* **Ulkus Peptikum**: Luka / tukak pada dinding lambung akibat infeksi bakteri *Helicobacter pylori*.\n* **GERD (Gastroesophageal Reflux Disease)**: Naiknya asam lambung ke esofagus akibat melemahnya katup sfingter esofagus bawah.\n* **Konstipasi (Sembelit)**: Penyerapan air yang berlebihan di usus besar karena kurang serat dan cairan, membuat feses keras.\n* **Diare**: Gangguan penyerapan air akibat peristaltik terlalu cepat karena iritasi/infeksi bakteri mikroba."
      }
    ],
    quizBank: [
      {
        id: "q-bio-01",
        bab: 2,
        question: "Enzim di rongga mulut yang menghidrolisis amilum menjadi disakarida maltosa adalah...",
        options: ["Pepsin", "Lipase", "Ptialin (Amilase)", "Tripsin"],
        answerIndex: 2,
        explanation: "Ptialin (amilase saliva) dihasilkan oleh kelenjar ludah dan berfungsi memecah amilum menjadi maltosa pada pH netral di mulut.",
        difficulty: "Mudah"
      },
      {
        id: "q-bio-02",
        bab: 3,
        question: "Asam Klorida (HCl) yang diproduksi di lambung memiliki fungsi esensial yaitu...",
        options: [
          "Mengemulsi lemak menjadi butiran halus",
          "Membunuh kuman penyakit dan mengaktifkan pepsinogen menjadi pepsin",
          "Mengubah maltosa menjadi glukosa",
          "Menyerap kembali kelebihan air dari sisa makanan"
        ],
        answerIndex: 1,
        explanation: "HCl membunuh bakteri patogen yang masuk bersama makanan dan mengubah pepsinogen inaktif menjadi enzim pepsin aktif.",
        difficulty: "Mudah"
      },
      {
        id: "q-bio-03",
        bab: 4,
        question: "Organ manakah yang menghasilkan enzim lipase, amilase, dan tripsin untuk pencernaan di usus halus?",
        options: ["Hati (hepar)", "Pankreas", "Lambung (gaster)", "Usus besar (kolon)"],
        answerIndex: 1,
        explanation: "Pankreas menghasilkan getah pankreas yang mengandung enzim amilase, tripsin, dan lipase yang disalurkan ke usus 12 jari (duodenum).",
        difficulty: "Sedang"
      },
      {
        id: "q-bio-04",
        bab: 4,
        question: "Cairan empedu yang dihasilkan oleh hati disalurkan ke duodenum dengan tujuan...",
        options: [
          "Membunuh bakteri patogen pada makanan",
          "Mengemulsikan lemak agar mudah dihidrolisis oleh enzim lipase",
          "Mengubah protein menjadi asam amino bebas",
          "Menetralkan racun sianida"
        ],
        answerIndex: 1,
        explanation: "Garam empedu berfungsi mengemulsikan lemak (menurunkan tegangan permukaan) sehingga enzim lipase pankreas dapat bekerja efektif.",
        difficulty: "Sedang"
      },
      {
        id: "q-bio-05",
        bab: 5,
        question: "Asam lemak dan gliserol hasil pencernaan diserap di vili usus halus melalui pembuluh...",
        options: ["Vena porta hepatika", "Arteri pulmonalis", "Pembuluh kil (lakteal/limfa)", "Kapiler vena kava"],
        answerIndex: 2,
        explanation: "Asam lemak dan gliserol diresorpsi ke dalam pembuluh kil (lakteal getah bening) sebelum bermuara ke peredaran darah.",
        difficulty: "HOTS"
      },
      {
        id: "q-bio-06",
        bab: 6,
        question: "Bakteri Escherichia coli yang hidup di usus besar manusia memiliki peran penting dalam...",
        options: [
          "Menghidrolisis amilum menjadi glukosa",
          "Membusukkan sisa makanan dan memproduksi Vitamin K",
          "Menghasilkan getah empedu",
          "Mencegah terjadinya refluks asam lambung"
        ],
        answerIndex: 1,
        explanation: "E. coli membusukkan zat sisa yang tidak dapat dicerna dan menghasilkan Vitamin K serta vitamin B kompleks bagi inangnya.",
        difficulty: "Sedang"
      },
      {
        id: "q-bio-07",
        bab: 7,
        question: "Gejala feses mengeras dan sulit dikeluarkan akibat penyerapan air berlebihan pada usus besar disebut...",
        options: ["Gastritis", "Apendisitis", "Konstipasi (Sembelit)", "Diare"],
        answerIndex: 2,
        explanation: "Konstipasi terjadi ketika feses berada terlalu lama di kolon sehingga cairan terserap berlebihan, menyebabkan feses padat dan keras.",
        difficulty: "Mudah"
      }
    ],
    flashcards: [
      { q: "Apa nama gerak meremas pada kerongkongan?", a: "Gerak Peristaltik." },
      { q: "Apa fungsi enzim pepsin di lambung?", a: "Memecah protein menjadi pepton (polipeptida pendek)." },
      { q: "Sebutkan 3 bagian usus halus secara urut!", a: "Duodenum (12 jari), Jejunum (kosong), dan Ileum (penyerapan)." },
      { q: "Enzim apa saja yang dihasilkan oleh pankreas?", a: "Tripsin, Amilase pankreas, dan Lipase pankreas." },
      { q: "Apa nama radang lambung akibat kelebihan asam?", a: "Gastritis." },
      { q: "Apa nama struktur lipatan penyerap pada usus halus?", a: "Vili dan Mikrovili." }
    ]
  },

  {
    id: "modul-03",
    code: "MOD-FIS-11-03",
    title: "Fisika: Dinamika Partikel, Vektor Gaya & Hukum Gerak Newton",
    shortTitle: "Modul 03: Fisika Hukum Newton",
    subject: "Fisika",
    icon: "⚡",
    color: "#3b82f6",
    pdfFile: "Modul_03_Fisika_Mekanika_Klasik_dan_Hukum_Newton.pdf",
    txtFile: "Modul_03_Fisika_Hukum_Newton.txt",
    description: "Mempelajari Hukum I Newton (Kelembaman), Hukum II Newton (F = m.a), Hukum III Newton (Aksi-Reaksi), gaya gesek, tegangan tali, bidang miring, dan usaha-energi.",
    babList: [
      {
        bab: 1,
        title: "Hukum I Newton (Kelembaman / Inersia)",
        content: "Jika resultan gaya pada suatu benda bernilai nol (Sigma F = 0), maka benda yang diam akan tetap diam, dan benda yang bergerak lurus beraturan (GLB) akan terus bergerak dengan kecepatan konstan. Sifat benda mempertahankan keadaan geraknya disebut inersia atau kelembaman. Contoh: Tubuh terdorong ke depan saat mobil direm mendadak."
      },
      {
        bab: 2,
        title: "Hukum II Newton: Percepatan & Gaya",
        content: "Percepatan (a) yang dialami benda berbanding lurus dengan resultan gaya (Sigma F) dan berbanding terbalik dengan massa kelembaman (m). Rumus: Sigma F = m x a. Satuan gaya dalam SI adalah Newton (N = kg.m/s^2). Contoh: Balok 5 kg ditarik gaya 20 N di lantai licin menghasilkan percepatan a = 20 / 5 = 4 m/s^2."
      },
      {
        bab: 3,
        title: "Hukum III Newton: Aksi-Reaksi",
        content: "Ketika benda A memberikan gaya F_aksi pada benda B, maka benda B memberikan gaya F_reaksi pada benda A yang besarnya sama namun berlawanan arah (F_aksi = -F_reaksi). Syarat pasangan aksi-reaksi: besarnya sama, arah berlawanan, terjadi serentak, dan bekerja pada DUA BENDA YANG BERBEDA. Contoh: Dorongan gas roket ke bawah dan gaya dorong roket melesat ke atas."
      },
      {
        bab: 4,
        title: "Analisis Vektor Gaya: Berat, Normal, dan Gesek",
        content: "Gaya Berat: W = m x g (arah menuju pusat bumi). Gaya Normal (N): gaya kontak tegak lurus bidang sentuh. Gaya Gesek (f): f_statis maksimal = mu_s x N, f_kinetis = mu_k x N. Gaya gesek kinetis selalu melawan arah gerak relatif benda."
      },
      {
        bab: 5,
        title: "Penerapan pada Bidang Miring dan Sistem Katrol",
        content: "Pada bidang miring licin bersudut theta: komponen berat sejajar bidang adalah W sin(theta) dan komponen tegak lurus bidang adalah W cos(theta). Gaya normal N = W cos(theta). Percepatan benda meluncur bebas adalah a = g sin(theta). Pada katrol Atwood: a = (m2 - m1)g / (m1 + m2)."
      },
      {
        bab: 6,
        title: "Hukum Gravitasi Universal Newton",
        content: "Setiap partikel bermassa di alam semesta saling menarik dengan gaya gravitasi F = G (m1.m2) / r^2, dengan konstanta G = 6.674 x 10^-11 N.m^2/kg^2. Percepatan gravitasi pada permukaan planet berjari-jari R adalah g = G.M / R^2."
      },
      {
        bab: 7,
        title: "Teorema Usaha-Energi & Kekekalan Energi Mekanik",
        content: "Usaha W = F . s . cos(theta). Teorema Usaha-Energi menyatakan W_total = Delta Ek = 1/2 m(vt^2 - v0^2). Dalam medan konservatif tanpa gesekan, Energi Mekanik kekal: Em = Ep + Ek = konstan."
      }
    ],
    glossary: [
      { term: "Inersia (Kelembaman)", def: "Kecenderungan alami suatu objek material untuk mempertahankan keadaan diam atau gerak lurus beraturannya jika tidak ada gaya luar yang mempengaruhinya." },
      { term: "Hukum I Newton", def: "Prinsip dinamika Sigma F = 0 yang menyatakan kekekalan kecepatan linier saat resultan gaya total adalah nol." },
      { term: "Hukum II Newton", def: "Hubungan fundamental Sigma F = m . a antara gaya resultan, massa, dan percepatan benda." },
      { term: "Hukum III Newton", def: "Prinsip aksi-reaksi F_aksi = - F_reaksi yang terjadi pada dua benda berbeda secara simultan." },
      { term: "Gaya Normal", def: "Gaya reaksi tegak lurus dari permukaan bidang sentuh terhadap tekanan benda." },
      { term: "Koefisien Gesek (mu)", def: "Ukuran kekasaran relatif dua permukaan bidang yang bersentuhan (mu_s > mu_k)." },
      { term: "Gaya Gravitasi", def: "Gaya tarik-menarik antar benda bermassa berbanding terbalik dengan kuadrat jaraknya." }
    ],
    suggestedPrompts: [
      "Jelaskan bunyi dan contoh penerapan Hukum I Newton!",
      "Bagaimana rumus Hukum II Newton dan contoh cara menghitung percepatan balok?",
      "Apa saja syarat sah pasangan gaya aksi-reaksi menurut Hukum III Newton?",
      "Hitung percepatan benda 10 kg yang ditarik gaya 50 N dengan gaya gesek 10 N!",
      "Bagaimana rumus gaya berat dan gaya normal pada bidang miring bersudut theta?",
      "Mengapa tubuh terdorong ke depan saat bus direm mendadak?",
      "Jelaskan hubungan antara usaha total dan perubahan energi kinetik!"
    ],
    chatKB: [
      {
        keywords: ["hukum", "1", "i", "newton", "inersia", "kelembaman", "sigma", "f", "= 0", "diam", "glb", "bus", "rem"],
        title: "Hukum I Newton (Hukum Kelembaman)",
        answer: "**Hukum I Newton (Inersia/Kelembaman)**:\n> *\"Jika resultan gaya yang bekerja pada suatu benda sama dengan nol ($\\Sigma F = 0$), maka benda yang diam akan tetap diam, dan benda yang bergerak lurus beraturan akan tetap bergerak dengan kecepatan konstan.\"*\n\n* **Makna Fisika**: Benda memiliki kelembaman alami, yaitu kecenderungan mempertahankan keadaan awalnya.\n* **Contoh Kehidupan Sehari-hari**:\n  1. Penumpang terdorong ke depan saat bus yang melaju tiba-tiba direm mendadak.\n  2. Koin di atas kertas tetap di tempat saat kertas ditarik secara sangat cepat dan mendadak."
      },
      {
        keywords: ["hukum", "2", "ii", "newton", "sigma", "f", "m", "a", "percepatan", "massa", "gaya", "rumus", "contoh"],
        title: "Hukum II Newton (Dinamika Gerak)",
        answer: "**Hukum II Newton** menyatakan bahwa laju perubahan momentum atau percepatan suatu benda sebanding dengan resultan gaya yang bekerja padanya dan berbanding terbalik dengan massa benda.\n\n* **Persamaan Fundamental**:\n  $$\\Sigma F = m \\times a$$\n  atau\n  $$a = \\frac{\\Sigma F}{m}$$\n* **Keterangan Satuan**:\n  * $\\Sigma F$ = Resultan gaya ($N$ atau $kg \\cdot m/s^2$)\n  * $m$ = Massa benda ($kg$)\n  * $a$ = Percepatan ($m/s^2$)\n* **Contoh Soal**:\n  Balok bermassa $m = 5\\text{ kg}$ ditarik gaya horizontal $F = 35\\text{ N}$ di lantai kasar dengan gaya gesek $f_k = 10\\text{ N}$.\n  $$\\Sigma F = F - f_k = 35 - 10 = 25\\text{ N}$$\n  $$a = \\frac{25}{5} = 5\\text{ m/s}^2$$"
      },
      {
        keywords: ["hukum", "3", "iii", "newton", "aksi", "reaksi", "roket", "syarat", "dua", "benda", "lawan", "arah"],
        title: "Hukum III Newton (Aksi-Reaksi)",
        answer: "**Hukum III Newton (Aksi-Reaksi)**:\n> *\"Untuk setiap aksi selalu ada reaksi yang sama besar dan berlawanan arah.\"*\n\n$$\\vec{F}_{\\text{aksi}} = -\\vec{F}_{\\text{reaksi}}$$\n\n* **Syarat Mutlak Pasangan Aksi-Reaksi**:\n  1. Memiliki **besar gaya yang persis sama**.\n  2. Memiliki **arah yang berlawanan ($180^\\circ$)**.\n  3. Garis kerjanya terletak pada satu garis lurus.\n  4. Bekerja pada **DUA BENDA YANG BERBEDA** (karenanya tidak saling meniadakan!).\n* **Contoh**:\n  * Roket menyemburkan gas panas ke bawah (aksi), gas mendorong roket ke atas (reaksi).\n  * Perenang mendorong air ke belakang (aksi), air mendorong perenang ke depan (reaksi)."
      },
      {
        keywords: ["gaya", "gesek", "normal", "berat", "statis", "kinetis", "koefisien", "mu_s", "mu_k"],
        title: "Gaya Berat, Normal, dan Gaya Gesek",
        answer: "* **Gaya Berat ($W$)**: $W = m \\times g$, arah menuju pusat bumi.\n* **Gaya Normal ($N$)**: Gaya reaksi kontak tegak lurus bidang permukaan.\n  * Pada lantai datar horizontal: $N = W = m \\cdot g$\n* **Gaya Gesek ($f$)**:\n  * **Gesek Statis ($f_s$)**: Bekerja saat benda diam. Nilai maksimum: $f_{s,\\text{max}} = \\mu_s \\times N$\n  * **Gesek Kinetis ($f_k$)**: Bekerja saat benda sudah meluncur/bergerak: $f_k = \\mu_k \\times N$\n  * Catatan: Koefisien gesek statis selalu lebih besar daripada kinetis ($\mu_s > \mu_k$)."
      },
      {
        keywords: ["bidang", "miring", "sin", "cos", "theta", "katrol", "atwood"],
        title: "Gerak pada Bidang Miring dan Katrol",
        answer: "Pada bidang miring bersudut kemiringan $\\theta$ terhadap horizontal:\n* Gaya berat diuraikan menjadi dua komponen:\n  * Sejajar bidang: $W_{\\parallel} = W \\sin\\theta = m \\cdot g \\cdot \\sin\\theta$ (menarik benda ke bawah)\n  * Tegak lurus bidang: $W_{\\perp} = W \\cos\\theta = m \\cdot g \\cdot \\cos\\theta$\n* Gaya Normal: $N = W \\cos\\theta$\n* Percepatan meluncur pada bidang miring licin tanpa gesekan:\n  $$a = g \\sin\\theta$$\n* Jika ada koefisien gesek kinetis $\\mu_k$:\n  $$a = g (\\sin\\theta - \\mu_k \\cos\\theta)$$"
      }
    ],
    quizBank: [
      {
        id: "q-fis-01",
        bab: 1,
        question: "Peristiwa penumpang mobil yang terdorong ke depan saat mobil direm mendadak merupakan manifestasi dari...",
        options: [
          "Hukum II Newton tentang percepatan",
          "Hukum Kekekalan Momentum Sudut",
          "Hukum I Newton tentang kelembaman (inersia)",
          "Hukum Gravitasi Universal"
        ],
        answerIndex: 2,
        explanation: "Tubuh penumpang cenderung mempertahankan kecepatan awalnya yang bergerak ke depan sesuai sifat inersia (Hukum I Newton: Sigma F = 0).",
        difficulty: "Mudah"
      },
      {
        id: "q-fis-02",
        bab: 2,
        question: "Sebuah kotak bermassa 4 kg ditarik dengan gaya mendatar 24 N pada lantai licin tanpa gesekan. Percepatan kotak tersebut adalah...",
        options: ["4 m/s²", "6 m/s²", "8 m/s²", "12 m/s²"],
        answerIndex: 1,
        explanation: "Berdasarkan Hukum II Newton: a = F / m = 24 N / 4 kg = 6 m/s².",
        difficulty: "Mudah"
      },
      {
        id: "q-fis-03",
        bab: 3,
        question: "Ciri mutlak dari pasangan gaya aksi-reaksi menurut Hukum III Newton adalah...",
        options: [
          "Bekerja pada satu benda yang sama sehingga resultannya nol",
          "Bekerja pada dua benda yang berbeda dengan besar sama dan arah berlawanan",
          "Gaya aksi selalu terjadi lebih dulu sebelum gaya reaksi muncul",
          "Hanya berlaku pada benda yang bergerak dengan percepatan konstan"
        ],
        answerIndex: 1,
        explanation: "Pasangan aksi-reaksi bekerja pada dua benda berbeda secara simultan dengan magnitudo sama dan arah saling bertolak belakang.",
        difficulty: "Sedang"
      },
      {
        id: "q-fis-04",
        bab: 2,
        question: "Balok bermassa 10 kg ditarik dengan gaya horizontal 50 N. Jika lantai kasar menimbulkan gaya gesek kinetik 20 N, percepatan balok adalah...",
        options: ["2 m/s²", "3 m/s²", "5 m/s²", "7 m/s²"],
        answerIndex: 1,
        explanation: "Sigma F = F - f_k = 50 - 20 = 30 N. Percepatan a = Sigma F / m = 30 / 10 = 3 m/s².",
        difficulty: "Sedang"
      },
      {
        id: "q-fis-05",
        bab: 5,
        question: "Sebuah balok meluncur turun pada bidang miring licin dengan sudut kemiringan 30° terhadap bidang datar. Jika g = 10 m/s², percepatannya adalah... (sin 30° = 0.5)",
        options: ["2.5 m/s²", "5 m/s²", "8.6 m/s²", "10 m/s²"],
        answerIndex: 1,
        explanation: "Percepatan luncur bidang miring licin adalah a = g sin(theta) = 10 * sin(30°) = 10 * 0.5 = 5 m/s².",
        difficulty: "Sedang"
      },
      {
        id: "q-fis-06",
        bab: 4,
        question: "Jika koefisien gesek statis suatu benda mu_s = 0.4 dan gaya normalnya N = 200 N, maka gaya gesek statis maksimum benda tersebut adalah...",
        options: ["50 N", "80 N", "100 N", "120 N"],
        answerIndex: 1,
        explanation: "f_s,maks = mu_s * N = 0.4 * 200 N = 80 N.",
        difficulty: "Mudah"
      },
      {
        id: "q-fis-07",
        bab: 7,
        question: "Mobil bermassa 1000 kg melaju dari kecepatan 10 m/s menjadi 20 m/s. Usaha total yang dilakukan mesin mobil adalah...",
        options: ["50.000 Joule", "100.000 Joule", "150.000 Joule", "200.000 Joule"],
        answerIndex: 2,
        explanation: "W = Delta Ek = 1/2 m (v2² - v1²) = 0.5 * 1000 * (400 - 100) = 500 * 300 = 150.000 Joule.",
        difficulty: "HOTS"
      }
    ],
    flashcards: [
      { q: "Apa rumus dasar Hukum II Newton?", a: "Sigma F = m x a." },
      { q: "Apa bunyi rumus pasangan aksi-reaksi?", a: "F_aksi = - F_reaksi." },
      { q: "Berapa percepatan balok jika resultan gaya Sigma F = 0?", a: "Percepatan a = 0 m/s² (kecepatan konstan atau diam)." },
      { q: "Komponen gaya berat sejajar bidang miring dengan sudut θ adalah...", a: "W sejajar = W sin θ = m . g . sin θ." },
      { q: "Manakah yang nilainya lebih besar antara koefisien gesek statis (μs) dan kinetis (μk)?", a: "Koefisien gesek statis selalu lebih besar (μs > μk)." },
      { q: "Apa satuan SI dari Gaya?", a: "Newton (N) setara dengan kg·m/s²." }
    ]
  },

  {
    id: "modul-04",
    code: "MOD-KIM-11-04",
    title: "Kimia: Termodinamika Kimia, Entalpi Reaksi & Laju Reaksi",
    shortTitle: "Modul 04: Kimia Termokimia",
    subject: "Kimia",
    icon: "⚗️",
    color: "#8b5cf6",
    pdfFile: "Modul_04_Kimia_Termokimia_dan_Laju_Reaksi.pdf",
    txtFile: null,
    description: "Mempelajari sistem dan lingkungan, reaksi eksoterm vs endoterm, perubahan entalpi standar (Delta H), kalorimeter, hukum Hess, energi ikatan rata-rata, teori tumbukan, dan faktor laju reaksi.",
    babList: [
      {
        bab: 1,
        title: "Sistem dan Lingkungan: Reaksi Eksoterm vs Endoterm",
        content: "Sistem adalah bagian alam semesta yang menjadi fokus kajian, sedangkan lingkungan adalah segala sesuatu di luar sistem. Reaksi Eksoterm: melepaskan kalor dari sistem ke lingkungan, entalpi produk lebih kecil dari reaktan (Delta H < 0), suhu lingkungan naik. Reaksi Endoterm: menyerap kalor dari lingkungan ke sistem, entalpi produk lebih besar dari reaktan (Delta H > 0), suhu lingkungan turun."
      },
      {
        bab: 2,
        title: "Perubahan Entalpi Standar (Delta H°)",
        content: "Entalpi Pembentukan Standar (Delta Hf°): kalor pembentukan 1 mol senyawa dari unsur-unsur bebasnya pada kondisi standar (25°C, 1 atm). Entalpi Penguraian Standar (Delta Hd°): kebalikan Delta Hf°. Entalpi Pembakaran Standar (Delta Hc°): pembakaran sempurna 1 mol senyawa dengan O2 (selalu eksoterm/negatif)."
      },
      {
        bab: 3,
        title: "Penentuan Kalor Reaksi Menggunakan Kalorimeter",
        content: "Kalorimeter mengukur kalor reaksi melalui asas Black: q_reaksi = -(q_larutan + q_kalorimeter). Rumus q_larutan = m x c x Delta T, dan q_kalorimeter = C_k x Delta T. Pada kalorimeter sederhana bertekanan konstan: Delta H = q_reaksi / n (mol pembatas)."
      },
      {
        bab: 4,
        title: "Hukum Hess dan Siklus Termokimia",
        content: "Hukum Hess menyatakan: 'Perubahan entalpi suatu reaksi hanya bergantung pada keadaan awal reaktan dan keadaan akhir produk, serta tidak bergantung pada jalannya reaksi bertahap'. Delta H_reaksi = Sigma Delta Hf°(produk) - Sigma Delta Hf°(reaktan)."
      },
      {
        bab: 5,
        title: "Energi Ikatan Rata-rata Reaksi Gas",
        content: "Energi ikatan adalah energi yang dibutuhkan untuk memutuskan 1 mol ikatan kovalen gas menjadi atom-atomnya. Delta H_reaksi = Sigma Energi Pemutusan Ikatan (Reaktan/Kiri) - Sigma Energi Pembentukan Ikatan (Produk/Kanan)."
      },
      {
        bab: 6,
        title: "Teori Tumbukan dan Konsep Energi Aktivasi (Ea)",
        content: "Reaksi kimia terjadi bila partikel reaktan bertumbukan secara efektif (memiliki energi kinetik cukup dan orientasi tumbukan tepat). Energi Aktivasi (Ea) adalah batas energi kinetik minimum yang harus dilewati pereaksi agar dapat menghasilkan reaksi (Persamaan Arrhenius: k = A.e^(-Ea/RT))."
      },
      {
        bab: 7,
        title: "Faktor-Faktor yang Mempengaruhi Laju Reaksi",
        content: "1. Konsentrasi: Makin pekat partikel, makin sering frekuensi tumbukan. 2. Luas Permukaan bidang sentuh: Serbuk lebih cepat bereaksi daripada bongkahan. 3. Suhu: Kenaikan 10°C umumnya melipatgandakan laju reaksi 2-3 kali karena partikel lebih kinetis. 4. Katalisator: Mempercepat laju dengan menurunkan Energi Aktivasi (Ea) tanpa ikut habis terkonsumsi."
      }
    ],
    glossary: [
      { term: "Entalpi (H)", def: "Kandungan kalor atau energi dalam suatu sistem pada tekanan konstan." },
      { term: "Reaksi Eksoterm", def: "Reaksi kimia yang membebaskan kalor ke lingkungan (Delta H bernilai negatif, suhu naik)." },
      { term: "Reaksi Endoterm", def: "Reaksi kimia yang menyerap kalor dari lingkungan ke dalam sistem (Delta H bernilai positif, suhu turun)." },
      { term: "Hukum Hess", def: "Prinsip termokimia bahwa perubahan entalpi reaksi hanya ditentukan oleh keadaan awal dan akhir proses reaksi." },
      { term: "Energi Aktivasi (Ea)", def: "Batas energi kinetik minimum yang harus dimiliki partikel agar menghasilkan tumbukan efektif." },
      { term: "Katalisator", def: "Zat yang mempercepat laju reaksi dengan menyediakan rute reaksi baru berenergi aktivasi lebih rendah." },
      { term: "Laju Reaksi", def: "Berkurangnya konsentrasi reaktan atau bertambahnya konsentrasi produk per satuan waktu." }
    ],
    suggestedPrompts: [
      "Apa perbedaan mendasar reaksi eksoterm dan endoterm beserta tandanya?",
      "Bagaimana bunyi Hukum Hess dan bagaimana rumus menghitung entalpi dari data Delta Hf?",
      "Jelaskan prinsip pengukuran kalor menggunakan Kalorimeter Bom!",
      "Bagaimana menghitung Delta H reaksi menggunakan data energi ikatan rata-rata?",
      "Jelaskan Teori Tumbukan dan konsep Energi Aktivasi (Ea)!",
      "Sebutkan 4 faktor yang mempengaruhi laju reaksi dan penjelasannya!",
      "Mengapa katalisator dapat mempercepat laju reaksi kimia?"
    ],
    chatKB: [
      {
        keywords: ["eksoterm", "endoterm", "entalpi", "delta", "h", "sistem", "lingkungan", "suhu", "kalor"],
        title: "Reaksi Eksoterm vs Reaksi Endoterm",
        answer: "Perbedaan esensial **Eksoterm** dan **Endoterm**:\n\n| Parameter | Reaksi Eksoterm | Reaksi Endoterm |\n|---|---|---|\n| **Aliran Kalor** | Dari Sistem $\\rightarrow$ Lingkungan | Dari Lingkungan $\\rightarrow$ Sistem |\n| **Tanda $\\Delta H$** | Bertanda **Negatif** ($\\Delta H < 0$) | Bertanda **Positif** ($\\Delta H > 0$) |\n| **Entalpi** | $H_{\\text{produk}} < H_{\\text{reaktan}}$ | $H_{\\text{produk}} > H_{\\text{reaktan}}$ |\n| **Suhu Lingkungan** | Mengalami kenaikan (terasa panas) | Mengalami penurunan (terasa dingin) |\n| **Contoh** | Pembakaran kayu, reaksi respirasi | Fotosintesis, es mencair, pelarutan urea |"
      },
      {
        keywords: ["hukum", "hess", "delta", "hf", "siklus", "tahapan", "awal", "akhir", "rumus"],
        title: "Hukum Hess dan Perhitungan Entalpi",
        answer: "**Hukum Hess (Germain Henri Hess)**:\n> *\"Perubahan entalpi suatu reaksi kimia adalah sama, baik reaksi tersebut berlangsung dalam satu langkah maupun melalui beberapa tahapan bertingkat.\"*\n\nHal ini karena entalpi ($H$) merupakan **fungsi keadaan** yang nilainya hanya bergantung pada keadaan awal (reaktan) dan akhir (produk).\n\n* **Rumus berdasarkan Entalpi Pembentukan Standar ($\\Delta H_f^\\circ$)**:\n  $$\\Delta H_{\\text{reaksi}} = \\sum \\Delta H_f^\\circ(\\text{Produk/Kanan}) - \\sum \\Delta H_f^\\circ(\\text{Reaktan/Kiri})$$\n* Unsur bebas dalam wujud stabilnya ($O_2(g)$, $N_2(g)$, $C(grafit)$, $H_2(g)$) memiliki $\\Delta H_f^\\circ = 0\\text{ kJ/mol}$."
      },
      {
        keywords: ["energi", "ikatan", "rata-rata", "pemutusan", "pembentukan", "gas", "kovalen"],
        title: "Perhitungan Entalpi dari Energi Ikatan Rata-Rata",
        answer: "Pada reaksi senyawa gas, ikatan kovalen pereaksi diputus terlebih dahulu (menyerap energi, endoterm), lalu ikatan baru produk dibentuk (membebaskan energi, eksoterm).\n\n$$\\Delta H = \\sum E_{\\text{ikatan reaktan (pemutusan/kiri)}} - \\sum E_{\\text{ikatan produk (pembentukan/kanan)}}$$\n\n* *Tips singkat*: $\\Delta H = \\text{Kiri} - \\text{Kanan}$."
      },
      {
        keywords: ["tumbukan", "aktivasi", "ea", "teori", "arrhenius", "efektif", "laju", "reaksi"],
        title: "Teori Tumbukan & Energi Aktivasi",
        answer: "Menurut **Teori Tumbukan**, reaksi kimia baru akan terjadi jika terjadi **tumbukan efektif**, yang memenuhi 2 syarat:\n1. **Orientasi Ruang Tepat**: Molekul pereaksi bertubrukan pada sudut posisi yang tepat untuk membentuk ikatan baru.\n2. **Energi Kinetik Cukup**: Energi tabrakan harus minimal sama atau melampaui **Energi Aktivasi ($E_a$)**.\n\n$E_a$ adalah penghalang energi potensial (*energy barrier*) minimum yang diperlukan untuk membentuk kompleks teraktivasi."
      },
      {
        keywords: ["faktor", "laju", "reaksi", "konsentrasi", "luas", "permukaan", "suhu", "katalis", "katalisator"],
        title: "4 Faktor yang Mempengaruhi Laju Reaksi",
        answer: "1. **Konsentrasi Pereaksi**: Konsentrasi makin tinggi $\\rightarrow$ kerapatan partikel bertambah $\\rightarrow$ frekuensi tumbukan efektif makin sering $\\rightarrow$ laju reaksi bertambah cepat.\n2. **Luas Permukaan Bidang Sentuh**: Partikel bentuk serbuk/halus memiliki bidang sentuh jauh lebih luas daripada butiran kasar, sehingga lebih cepat bereaksi.\n3. **Temperatur/Suhu**: Suhu naik $\\rightarrow$ energi kinetik partikel meningkat $\\rightarrow$ makin banyak molekul yang energinya melampaui $E_a$. Secara empiris, kenaikan $10^\\circ\\text{C}$ melipatgandakan laju $2-3$ kali.\n4. **Katalisator**: Menyediakan mekanisme reaksi alternatif dengan $E_a$ yang jauh lebih rendah, sehingga mempercepat laju tanpa ikut habis terpakai."
      }
    ],
    quizBank: [
      {
        id: "q-kim-01",
        bab: 1,
        question: "Ciri utama dari reaksi kimia yang bersifat eksoterm adalah...",
        options: [
          "Sistem menyerap kalor dari lingkungan dan Delta H bernilai positif",
          "Sistem melepas kalor ke lingkungan dan Delta H bernilai negatif",
          "Tidak terjadi perpindahan kalor dan suhu konstan",
          "Entalpi produk lebih besar dari entalpi pereaksi"
        ],
        answerIndex: 1,
        explanation: "Reaksi eksoterm membebaskan energi kalor dari sistem ke lingkungan, menghasilkan Delta H < 0 (negatif) dan kenaikan suhu lingkungan.",
        difficulty: "Mudah"
      },
      {
        id: "q-kim-02",
        bab: 4,
        question: "Hukum Hess menyatakan bahwa perubahan entalpi reaksi hanya ditentukan oleh...",
        options: [
          "Jumlah langkah atau tahapan jalannya reaksi",
          "Keberadaan katalisator anorganik",
          "Keadaan awal zat pereaksi dan keadaan akhir zat hasil reaksi",
          "Volume wadah dan tekanan parsial gas"
        ],
        answerIndex: 2,
        explanation: "Hukum Hess menegaskan bahwa entalpi adalah fungsi keadaan; Delta H reaksi hanya bergantung pada kondisi awal reaktan dan akhir produk, terlepas dari rute reaksinya.",
        difficulty: "Sedang"
      },
      {
        id: "q-kim-03",
        bab: 7,
        question: "Peran utama katalisator dalam mempercepat laju reaksi kimia adalah...",
        options: [
          "Menaikkan entalpi reaksi (Delta H)",
          "Menurunkan Energi Aktivasi (Ea) dengan menyediakan rute reaksi alternatif",
          "Meningkatkan suhu sistem secara drastis",
          "Mengubah produk akhir menjadi senyawa baru"
        ],
        answerIndex: 1,
        explanation: "Katalis menurunkan energi aktivasi (Ea) yang harus dilampaui partikel, sehingga proporsi tumbukan efektif meningkat drastis.",
        difficulty: "Mudah"
      },
      {
        id: "q-kim-04",
        bab: 5,
        question: "Rumus perhitungan perubahan entalpi reaksi menggunakan data energi ikatan rata-rata adalah...",
        options: [
          "Delta H = Sigma Energi Ikatan Produk - Sigma Energi Ikatan Reaktan",
          "Delta H = Sigma Energi Ikatan Pemutusan (Reaktan) - Sigma Energi Ikatan Pembentukan (Produk)",
          "Delta H = Sigma Energi Aktivasi / Suhu Kelvins",
          "Delta H = Kalor jenis x massa x Delta T"
        ],
        answerIndex: 1,
        explanation: "Delta H dihitung dari energi pemutusan ikatan di sisi reaktan (kiri) dikurangi energi pembentukan ikatan di sisi produk (kanan).",
        difficulty: "Sedang"
      },
      {
        id: "q-kim-05",
        bab: 7,
        question: "Jika suatu reaksi berlangsung 4 kali lebih cepat setiap kenaikan suhu 20°C, pada suhu 60°C reaksi berlangsung 8 detik. Waktu reaksi pada suhu 20°C adalah...",
        options: ["32 detik", "64 detik", "128 detik", "256 detik"],
        answerIndex: 2,
        explanation: "Kenaikan dari 20°C ke 60°C adalah Delta T = 40°C = 2 interval 20°C. Laju reaksi naik 4^2 = 16 kali, sehingga waktu pada 20°C adalah 16 * 8 detik = 128 detik.",
        difficulty: "HOTS"
      },
      {
        id: "q-kim-06",
        bab: 2,
        question: "Perubahan entalpi pada pembakaran sempurna 1 mol senyawa dengan gas oksigen pada kondisi standar disebut...",
        options: [
          "Entalpi Pembentukan Standar (Delta Hf°)",
          "Entalpi Penguraian Standar (Delta Hd°)",
          "Entalpi Pembakaran Standar (Delta Hc°)",
          "Entalpi Netralisasi Standar (Delta Hn°)"
        ],
        answerIndex: 2,
        explanation: "Delta Hc° (Standard Enthalpy of Combustion) adalah kalor pembakaran sempurna 1 mol zat dengan gas O2 pada keadaan standar.",
        difficulty: "Mudah"
      }
    ],
    flashcards: [
      { q: "Apa arti Delta H bertanda negatif?", a: "Reaksi Eksoterm (melepaskan kalor ke lingkungan)." },
      { q: "Apa rumus Asas Black pada kalorimeter larutan?", a: "q_reaksi = -(m x c x Delta T)." },
      { q: "Apa bunyi rumus Hukum Hess dengan Delta Hf?", a: "Delta H = Sigma Delta Hf (Produk) - Sigma Delta Hf (Reaktan)." },
      { q: "Apa nama energi minimum yang diperlukan untuk reaksi?", a: "Energi Aktivasi (Ea)." },
      { q: "Mengapa serbuk seng bereaksi lebih cepat dibanding lempeng seng?", a: "Karena serbuk memiliki luas permukaan bidang sentuh yang jauh lebih besar." }
    ]
  },

  {
    id: "modul-05",
    code: "MOD-MAT-11-05",
    title: "Matematika: Limit Fungsi Aljabar, Turunan & Aplikasi Integral",
    shortTitle: "Modul 05: Matematika Kalkulus",
    subject: "Matematika",
    icon: "📐",
    color: "#f59e0b",
    pdfFile: "Modul_05_Matematika_Kalkulus_Diferensial_dan_Integral.pdf",
    txtFile: null,
    description: "Mempelajari limit fungsi aljabar, limit tak hingga, definisi turunan f'(x), aturan rantai, aplikasi titik stasioner / maksimum-minimum, integral tentu dan tak tentu, serta luas daerah di bawah kurva.",
    babList: [
      {
        bab: 1,
        title: "Konsep Intuitif dan Definisi Formal Limit Fungsi",
        content: "Limit fungsi f(x) untuk x mendekati c bernilai L ditulis lim_{x->c} f(x) = L jika nilai f(x) dapat dibuat sedekat mungkin ke L saat x mendekati c dari kiri (limit kiri) maupun kanan (limit kanan). Syarat keberadaan limit: lim_{x->c^-} f(x) = lim_{x->c^+} f(x) = L."
      },
      {
        bab: 2,
        title: "Limit Fungsi Aljabar Bentuk Tak Tentu & Menuju Tak Hingga",
        content: "Bentuk tak tentu 0/0 diselesaikan dengan metode pemfaktoran, perkalian sekawan akar, atau aturan L'Hopital. Untuk limit menuju tak hingga lim_{x->~} f(x)/g(x), bagi pembilang dan penyebut dengan x berpangkat tertinggi."
      },
      {
        bab: 3,
        title: "Definisi Turunan Pertama sebagai Laju Perubahan Sesaat",
        content: "Turunan fungsi f'(x) didefinisikan sebagai limit gradien tali busur: f'(x) = lim_{h->0} [f(x+h) - f(x)] / h. Aturan pangkat dasar: jika f(x) = a x^n, maka turunan f'(x) = a.n x^(n-1)."
      },
      {
        bab: 4,
        title: "Aturan Operasi Turunan dan Aturan Rantai",
        content: "Aturan Perkalian: (u.v)' = u'v + uv'. Aturan Pembagian: (u/v)' = (u'v - uv') / v^2. Aturan Rantai untuk fungsi komposisi y = f(g(x)): dy/dx = (dy/du) x (du/dx)."
      },
      {
        bab: 5,
        title: "Aplikasi Turunan: Gradien Garis Singgung & Titik Stasioner",
        content: "Gradien garis singgung kurva y = f(x) di titik (x1, y1) adalah m = f'(x1). Persamaan garis singgung: y - y1 = m(x - x1). Titik stasioner diperoleh saat f'(x) = 0. Uji turunan kedua f''(x): jika f''(x) > 0 maka titik minimum lokal, jika f''(x) < 0 maka titik maksimum lokal."
      },
      {
        bab: 6,
        title: "Anti-Turunan (Integral Tak Tentu) & Teknik Substitusi",
        content: "Integral adalah operasi invers dari turunan: integral [x^n dx] = [1 / (n+1)] x^(n+1) + C, untuk n != -1. Teknik substitusi digunakan saat terdapat integran berupa fungsi dan turunannya: integral [f(u) u' dx] = integral [f(u) du]."
      },
      {
        bab: 7,
        title: "Teorema Dasar Kalkulus & Penghitungan Luas Daerah",
        content: "Teorema Dasar Kalkulus: integral batas a ke b [f(x) dx] = F(b) - F(a), di mana F'(x) = f(x). Luas daerah antara kurva y = f(x) dengan sumbu X dari x=a ke x=b dihitung dengan Luas = integral_{a}^{b} f(x) dx."
      }
    ],
    glossary: [
      { term: "Limit Fungsi", def: "Nilai pendekatan suatu fungsi matematika f(x) saat peubah x mendekati suatu nilai titik tertentu." },
      { term: "Bentuk Tak Tentu (0/0)", def: "Kondisi evaluasi limit yang membutuhkan manipulasi aljabar lanjutan seperti pemfaktoran atau dalil L'Hopital." },
      { term: "Turunan Pertama f'(x)", def: "Laju perubahan nilai fungsi f terhadap variabel bebas x atau gradien garis singgung kurva." },
      { term: "Aturan Rantai", def: "Formula diferensiasi untuk mendiferensialkan komposisi dua fungsi atau lebih (dy/dx = dy/du * du/dx)." },
      { term: "Titik Stasioner", def: "Titik kritis pada kurva di mana garis singgungnya horizontal sempurna (turunan pertama f'(x) = 0)." },
      { term: "Integral Tak Tentu", def: "Operasi invers penentuan keluarga fungsi anti-turunan yang menyertakan konstanta integrasi C." },
      { term: "Teorema Dasar Kalkulus", def: "Teorema fundamental yang menghubungkan konsep diferensiasi turunan dengan integrasi tentu." }
    ],
    suggestedPrompts: [
      "Bagaimana cara menyelesaikan limit aljabar bentuk tak tentu 0/0?",
      "Jelaskan aturan turunan untuk perkalian fungsi (u . v) dan pembagian (u / v)!",
      "Bagaimana langkah menentukan persamaan garis singgung kurva di titik tertentu?",
      "Bagaimana cara menentukan jenis titik stasioner (maksimum atau minimum) menggunakan turunan kedua?",
      "Hitung integral tak tentu dari fungsi f(x) = 6x^2 - 4x + 5!",
      "Jelaskan Teori Dasar Kalkulus untuk menghitung integral tentu!",
      "Bagaimana rumus menghitung luas daerah di bawah kurva y = f(x)?"
    ],
    chatKB: [
      {
        keywords: ["limit", "0/0", "tak", "tentu", "pemfaktoran", "sekawan", "akar", "l'hopital"],
        title: "Menyelesaikan Limit Aljabar Bentuk Tak Tentu (0/0)",
        answer: "Jika substitusi langsung menghasilkan $\\frac{0}{0}$, gunakan salah satu metode berikut:\n1. **Metode Pemfaktoran**: Faktorkan pembilang dan penyebut untuk mencoret pembuat nol $(x - c)$.\n   $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$$\n2. **Perkalian Sekawan Akar**: Kalikan pembilang dan penyebut dengan bentuk sekawan $(\\sqrt{a} + b)$.\n3. **Aturan L'Hôpital**: Turunkan pembilang dan penyebut secara terpisah: $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$."
      },
      {
        keywords: ["turunan", "aturan", "perkalian", "pembagian", "rantai", "u", "v", "dy/dx"],
        title: "Aturan Diferensiasi Turunan Aljabar",
        answer: "Aturan-aturan esensial turunan fungsi aljabar:\n* **Aturan Pangkat**: $y = a x^n \\implies y' = a \\cdot n \\cdot x^{n-1}$\n* **Penjumlahan/Pengurangan**: $(u \\pm v)' = u' \\pm v'$\n* **Aturan Perkalian**: $(u \\cdot v)' = u'v + uv'$\n* **Aturan Pembagian**: $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$\n* **Aturan Rantai**: Jika $y = [u(x)]^n$, maka $y' = n [u(x)]^{n-1} \\cdot u'(x)$"
      },
      {
        keywords: ["garis", "singgung", "gradien", "stasioner", "ekstrem", "maksimum", "minimum", "f''(x)"],
        title: "Aplikasi Turunan: Titik Stasioner & Garis Singgung",
        answer: "1. **Gradien & Persamaan Garis Singgung**:\n   * Gradien garis singgung di titik $(x_1, y_1)$ adalah $m = f'(x_1)$.\n   * Persamaan garis: $y - y_1 = m(x - x_1)$.\n2. **Titik Stasioner**:\n   * Dicapai saat $f'(x) = 0$.\n3. **Uji Turunan Kedua ($f''(x)$)**:\n   * Jika $f''(x) > 0 \\implies$ Titik **Balik Minimum**.\n   * Jika $f''(x) < 0 \\implies$ Titik **Balik Maksimum**.\n   * Jika $f''(x) = 0 \\implies$ Titik Belok."
      },
      {
        keywords: ["integral", "tak", "tentu", "substitusi", "anti", "turunan", "c"],
        title: "Integral Tak Tentu dan Teknik Substitusi",
        answer: "Rumus dasar integral aljabar:\n$$\\int a x^n \\, dx = \\frac{a}{n+1} x^{n+1} + C \\quad (n \\neq -1)$$\n\n* **Contoh**:\n  $$\\int (6x^2 - 4x + 3) \\, dx = \\frac{6}{3}x^3 - \\frac{4}{2}x^2 + 3x + C = 2x^3 - 2x^2 + 3x + C$$\n* **Teknik Substitusi**: Misalkan $u = g(x)$ sehingga $du = g'(x)dx$, lalu ubah integran menjadi fungsi $u$."
      },
      {
        keywords: ["teorema", "dasar", "kalkulus", "integral", "tentu", "luas", "daerah", "kurva"],
        title: "Teorema Dasar Kalkulus & Luas Daerah",
        answer: "**Teorema Dasar Kalkulus (TDK)**:\n$$\\int_{a}^{b} f(x) \\, dx = \\left[ F(x) \\right]_a^b = F(b) - F(a)$$\ndi mana $F'(x) = f(x)$.\n\n* **Luas Daerah di Bawah Kurva $y = f(x)$** di atas sumbu X dari $x=a$ sampai $x=b$:\n  $$L = \\int_{a}^{b} f(x) \\, dx$$\n* Jika daerah berada di antara dua kurva $y_1$ (atas) dan $y_2$ (bawah):\n  $$L = \\int_{a}^{b} (y_1 - y_2) \\, dx$$"
      }
    ],
    quizBank: [
      {
        id: "q-mat-01",
        bab: 2,
        question: "Nilai dari limit lim_{x->3} (x² - 9) / (x - 3) adalah...",
        options: ["0", "3", "6", "9"],
        answerIndex: 2,
        explanation: "Faktorkan pembilang: (x-3)(x+3)/(x-3) = x+3. Masukkan x=3: 3 + 3 = 6.",
        difficulty: "Mudah"
      },
      {
        id: "q-mat-02",
        bab: 3,
        question: "Jika f(x) = 4x³ - 5x² + 7x - 9, maka turunan pertama f'(x) adalah...",
        options: [
          "12x² - 10x + 7",
          "12x³ - 10x² + 7x",
          "4x² - 5x + 7",
          "12x² - 10x"
        ],
        answerIndex: 0,
        explanation: "f'(x) = 4*3x^(3-1) - 5*2x^(2-1) + 7*1 = 12x² - 10x + 7.",
        difficulty: "Mudah"
      },
      {
        id: "q-mat-03",
        bab: 5,
        question: "Gradien garis singgung kurva y = x² - 4x + 5 pada titik berabsis x = 3 adalah...",
        options: ["1", "2", "3", "4"],
        answerIndex: 1,
        explanation: "y' = 2x - 4. Pada x = 3: m = 2(3) - 4 = 6 - 4 = 2.",
        difficulty: "Sedang"
      },
      {
        id: "q-mat-04",
        bab: 5,
        question: "Titik stasioner dari suatu fungsi f(x) diperoleh pada saat memenuhi syarat...",
        options: ["f(x) = 0", "f'(x) = 0", "f''(x) > 0", "f'(x) = 1"],
        answerIndex: 1,
        explanation: "Kondisi stasioner terjadi saat laju perubahan sesaat nol, yaitu turunan pertama f'(x) = 0.",
        difficulty: "Mudah"
      },
      {
        id: "q-mat-05",
        bab: 6,
        question: "Hasil dari integral ∫ (3x² + 4x - 5) dx adalah...",
        options: [
          "x³ + 2x² - 5x + C",
          "6x + 4 + C",
          "3x³ + 4x² - 5x + C",
          "x³ + 4x² - 5 + C"
        ],
        answerIndex: 0,
        explanation: "∫ (3x² + 4x - 5) dx = (3/3)x³ + (4/2)x² - 5x + C = x³ + 2x² - 5x + C.",
        difficulty: "Sedang"
      },
      {
        id: "q-mat-06",
        bab: 7,
        question: "Nilai integral tentu ∫ (dari 0 sampai 2) (3x²) dx adalah...",
        options: ["6", "8", "12", "16"],
        answerIndex: 1,
        explanation: "Anti-turunan dari 3x² adalah x³. Batas dari 0 ke 2: [x³] (0->2) = 2³ - 0³ = 8 - 0 = 8.",
        difficulty: "Sedang"
      }
    ],
    flashcards: [
      { q: "Apa turunan pertama dari f(x) = a x^n?", a: "f'(x) = n · a · x^(n-1)." },
      { q: "Apa rumus turunan perkalian dua fungsi (u · v)'?", a: "u'v + uv'." },
      { q: "Syarat kurva mencapai titik stasioner adalah...", a: "f'(x) = 0." },
      { q: "Jika f'(c) = 0 dan f''(c) < 0, jenis titik tersebut adalah...", a: "Titik balik maksimum lokal." },
      { q: "Apa rumus anti-turunan ∫ x^n dx untuk n != -1?", a: "[1 / (n+1)] x^(n+1) + C." },
      { q: "Apa rumus Teorema Dasar Kalkulus ∫ (a ke b) f(x) dx?", a: "F(b) - F(a), di mana F'(x) = f(x)." }
    ]
  },

  {
    id: "modul-06",
    code: "MOD-SOS-11-06",
    title: "Sosiologi: Struktur Sosial, Diferensiasi & Dinamika Konflik",
    shortTitle: "Modul 06: Sosiologi Struktur Sosial",
    subject: "Sosiologi",
    icon: "👥",
    color: "#ec4899",
    pdfFile: "Modul_06_Sosiologi_Struktur_Sosial_dan_Diferensiasi.pdf",
    txtFile: null,
    description: "Mempelajari struktur sosial, diferensiasi sosial (ras, etnis, agama, gender), stratifikasi sosial terbuka/tertutup, teori konflik (Marx, Dahrendorf, Coser), akomodasi konflik, dan integrasi sosial.",
    babList: [
      {
        bab: 1,
        title: "Konsep Hakiki Struktur Sosial Komunitas",
        content: "Struktur sosial adalah tatanan hierarkis dan jaringan relasi sosial berpola dalam masyarakat yang mengatur hak, kewajiban, status, dan peranan individu. Ciri struktur sosial bersifat abstrak, dinamis, dan menjadi landasan kontrol sosial."
      },
      {
        bab: 2,
        title: "Diferensiasi Sosial Horizontal",
        content: "Diferensiasi sosial adalah pengelompokan masyarakat secara horizontal atau sejajar tanpa tingkatan hierarki kekuasaan (tidak ada yang lebih tinggi atau lebih rendah). Parameter diferensiasi meliputi ras (ciri fisik), suku bangsa/etnis (kebudayaan), klan, agama, dan gender."
      },
      {
        bab: 3,
        title: "Stratifikasi Sosial: Terbuka, Tertutup, dan Campuran",
        content: "Stratifikasi sosial adalah pembedaan anggota masyarakat secara vertikal bertingkat (berkelas-kelas) berdasarkan kriteria kekayaan, kekuasaan, kehormatan, atau ilmu pengetahuan. Sifat stratifikasi: Tertutup (kasta, sulit mobilitas), Terbuka (meritokrasi, mobilitas sosial tinggi), Campuran."
      },
      {
        bab: 4,
        title: "Konsekuensi Stratifikasi terhadap Peluang & Gaya Hidup",
        content: "Stratifikasi mempengaruhi 'life chances' (akses pendidikan, kesehatan, harapan hidup) dan 'life styles' (kebiasaan konsumsi, selera berpakaian, perumahan, prestise) antar lapisan sosial."
      },
      {
        bab: 5,
        title: "Akar Penyebab Konflik Sosial & Pandangan Tokoh",
        content: "Konflik timbul akibat perbedaan individu, perbedaan kepentingan ekonomi/politik, dan perubahan sosial cepat. Karl Marx memandang konflik bersumber dari pertentangan kelas (Borjuis vs Proletar). Lewis Coser menekankan fungsi positif konflik dalam mempererat solidaritas internal kelompok (in-group cohesion)."
      },
      {
        bab: 6,
        title: "Bentuk-Bentuk Akomodasi dan Resolusi Konflik",
        content: "Bentuk akomodasi sosial: Mediasi (pihak ketiga netral sebagai penasihat tanpa hak memutuskan), Arbitrase (pihak ketiga berwenang memutuskan), Kompromi (saling mengurangi tuntutan), Koersi (paksaan fisik/kekuasaan), Konsiliasi, Ajudikasi (jalur pengadilan hukum)."
      },
      {
        bab: 7,
        title: "Integrasi Sosial, Multikulturalisme & Kohesi Nasional",
        content: "Integrasi sosial adalah proses penyesuaian unsur-unsur yang berbeda hingga membentuk kesatuan harmonis. Menuntut sikap multikulturalisme dan toleransi dalam masyarakat majemuk Indonesia berlandaskan semboyan Bhinneka Tunggal Ika."
      }
    ],
    glossary: [
      { term: "Struktur Sosial", def: "Pola relasi terorganisasi antara status dan peranan sosial dalam suatu sistem kemasyarakatan." },
      { term: "Diferensiasi Sosial", def: "Klasifikasi anggota masyarakat secara horizontal tanpa menciptakan stratifikasi hierarkis atas-bawah." },
      { term: "Stratifikasi Sosial", def: "Pengelompokan vertikal masyarakat ke dalam lapisan-lapisan hierarkis berjenjang (kelas sosial)." },
      { term: "Mediasi", def: "Upaya resolusi konflik menggunakan mediator netral yang hanya memberi masukan tanpa hak memutus perkara." },
      { term: "Arbitrase", def: "Penyelesaian sengketa melalui pihak ketiga yang ditunjuk secara resmi dan keputusannya bersifat mengikat." },
      { term: "Akomodasi", def: "Proses meredakan pertentangan antarpihak demi tercapainya kestabilan sosial." },
      { term: "Multikulturalisme", def: "Pandangan pengakuan kesetaraan dan penghargaan terhadap keberagaman latar kultural." }
    ],
    suggestedPrompts: [
      "Apa perbedaan mendasar antara diferensiasi sosial dan stratifikasi sosial?",
      "Sebutkan parameter diferensiasi sosial horizontal dalam masyarakat majemuk!",
      "Jelaskan perbedaan sistem stratifikasi tertutup, terbuka, dan campuran!",
      "Bagaimana teori konflik menurut Karl Marx vs Lewis Coser?",
      "Jelaskan perbedaan resolusi konflik melalui mediasi dan arbitrase!",
      "Apa saja faktor pendorong integrasi sosial di Indonesia?"
    ],
    chatKB: [
      {
        keywords: ["diferensiasi", "stratifikasi", "horizontal", "vertikal", "perbedaan", "hierarki", "kasta"],
        title: "Perbedaan Diferensiasi dan Stratifikasi Sosial",
        answer: "* **Diferensiasi Sosial (Horizontal)**: Pembedaan masyarakat secara mendatar sejajar tanpa ada tingkatan superior-inferior. Parameter: ras, suku bangsa/etnik, agama, klan, jenis kelamin. Contoh: Perbedaan profesi dokter dan guru tidak menjadikan satu suku lebih mulia dari suku lain.\n* **Stratifikasi Sosial (Vertikal)**: Pelapisan masyarakat secara bertingkat hierarkis atas-bawah (*social classes*). Dasar pelapisan: kekayaan materi, kekuasaan politik, kehormatan feodal/gelar, dan jenjang pendidikan formal."
      },
      {
        keywords: ["stratifikasi", "terbuka", "tertutup", "campuran", "mobilitas", "sosial"],
        title: "Bentuk-Bentuk Stratifikasi Sosial",
        answer: "1. **Stratifikasi Tertutup**: Membatasi kemungkinan mobilitas sosial pindah lapisan. Posisi diperoleh melalui kelahiran (*ascribed status*). Contoh: Sistem Kasta di India kuno dan sistem feodal bangsawan.\n2. **Stratifikasi Terbuka**: Memberikan kesempatan setiap anggota untuk naik atau turun lapisan melalui usaha dan prestasi (*achieved status*). Contoh: Masyarakat industri modern meritokrasi.\n3. **Stratifikasi Campuran**: Kombinasi keduanya. Contoh: Kasta Brahmana di Bali sangat dihormati secara kultural (tertutup), namun di Jakarta ia dinilai berdasarkan status pekerjaan atau kekayaan ekonominya (terbuka)."
      },
      {
        keywords: ["konflik", "teori", "marx", "borjuis", "proletar", "coser", "fungsi", "solidaritas"],
        title: "Teori Konflik Sosial: Marx vs Coser",
        answer: "* **Karl Marx**: Memandang masyarakat terbelah menjadi dua kelas yang saling bermusuhan: kaum **Borjuis** (pemilik modal/alat produksi) yang mengeksploitasi kaum **Proletar** (buruh pekerja). Konflik kelas adalah motor penggerak transformasi historis.\n* **Lewis Coser**: Menekankan **fungsi positif konflik**. Konflik dengan kelompok luar (*out-group conflict*) dapat memperkuat kembali solidaritas, kohesi, dan identitas kelompok ke dalam (*in-group solidarity*)."
      },
      {
        keywords: ["akomodasi", "mediasi", "arbitrase", "kompromi", "koersi", "ajudikasi", "resolusi"],
        title: "Bentuk-Bentuk Akomodasi Konflik",
        answer: "* **Mediasi**: Pihak ketiga bersikap **netral** dan bertindak sebagai fasilitator/penasihat, tidak memiliki otoritas memaksakan keputusan (hasil ditentukan kesepakatan kedua belah pihak).\n* **Arbitrase**: Pihak ketiga memiliki **kewenangan formal memutuskan** sengketa, dan keputusannya mengikat kedua belah pihak.\n* **Kompromi**: Para pihak saling mengurangi tuntutan demi mufakat damai.\n* **Ajudikasi**: Penyelesaian konflik melalui meja hijau pengadilan hukum resmi.\n* **Koersi**: Bentuk penyelesaian dengan paksaan fisik/ancaman oleh pihak dominan."
      }
    ],
    quizBank: [
      {
        id: "q-sos-01",
        bab: 2,
        question: "Pengelompokan masyarakat berdasarkan suku bangsa, agama, dan jenis kelamin tergolong ke dalam...",
        options: [
          "Stratifikasi sosial vertikal",
          "Diferensiasi sosial horizontal",
          "Mobilitas sosial antargenerasi",
          "Disorganisasi kultural"
        ],
        answerIndex: 1,
        explanation: "Diferensiasi sosial membagi masyarakat ke dalam kelompok mendatar tanpa derajat hierarki tinggi-rendah.",
        difficulty: "Mudah"
      },
      {
        id: "q-sos-02",
        bab: 3,
        question: "Sistem pelapisan sosial yang tidak memungkinkan seseorang berpindah lapisan kedudukan disebut...",
        options: [
          "Stratifikasi sosial terbuka",
          "Stratifikasi sosial tertutup",
          "Diferensiasi fungsional",
          "Mobilitas struktural"
        ],
        answerIndex: 1,
        explanation: "Stratifikasi tertutup (seperti sistem kasta feodal) menutup peluang mobilitas sosial vertikal anggotanya.",
        difficulty: "Mudah"
      },
      {
        id: "q-sos-03",
        bab: 6,
        question: "Perbedaan mendasar antara mediasi dan arbitrase dalam penyelesaian konflik adalah...",
        options: [
          "Mediasi melibatkan aparat polisi sedangkan arbitrase melibatkan keluarga",
          "Pihak ketiga pada arbitrase berwenang mengambil keputusan mengikat, sedangkan mediator hanya fasilitator",
          "Mediasi berlangsung di pengadilan sedangkan arbitrase di luar pengadilan",
          "Arbitrase tidak memerlukan pihak ketiga"
        ],
        answerIndex: 1,
        explanation: "Mediator hanya memfasilitasi dan memberi nasihat tanpa hak memutus, sedangkan arbiter memiliki wewenang memutuskan penyelesaian yang wajib dipatuhi.",
        difficulty: "Sedang"
      },
      {
        id: "q-sos-04",
        bab: 5,
        question: "Menurut Lewis Coser, salah satu fungsi positif dari konflik dengan kelompok luar (out-group) adalah...",
        options: [
          "Menghancurkan seluruh struktur kebudayaan",
          "Memperkuat solidaritas dan kohesi internal kelompok (in-group)",
          "Menghilangkan keberadaan norma sosial",
          "Menciptakan stratifikasi tertutup secara paksa"
        ],
        answerIndex: 1,
        explanation: "Coser menyatakan konflik eksternal menyatukan anggota dan menguatkan ikatan solidaritas ke dalam kelompok in-group.",
        difficulty: "Sedang"
      },
      {
        id: "q-sos-05",
        bab: 3,
        question: "Dasar pembentukan stratifikasi sosial dalam masyarakat modern yang menganut meritokrasi terutama bertumpu pada...",
        options: [
          "Keturunan darah bangsawan",
          "Pendidikan, keahlian, dan profesi (Achieved status)",
          "Jenis kelamin dan ras primordial",
          "Tingkat kesalehan magis"
        ],
        answerIndex: 1,
        explanation: "Masyarakat modern terbuka menghargai prestasi, keahlian, dan jenjang pendidikan formal (achieved status) sebagai parameter kedudukan sosial.",
        difficulty: "Sedang"
      }
    ],
    flashcards: [
      { q: "Apa nama pembedaan masyarakat secara horizontal?", a: "Diferensiasi Sosial." },
      { q: "Apa nama pembedaan masyarakat secara hierarkis bertingkat?", a: "Stratifikasi Sosial." },
      { q: "Apa perbedaan peran mediator dan arbiter?", a: "Mediator tidak berhak memutus perkara, sedangkan arbiter berhak memutuskan secara mengikat." },
      { q: "Siapa sosiolog yang mencetuskan teori konflik pertentangan kelas borjuis vs proletar?", a: "Karl Marx." },
      { q: "Apa nama penyelesaian konflik melalui jalur hukum pengadilan?", a: "Ajudikasi." }
    ]
  },

  {
    id: "modul-07",
    code: "MOD-GEO-11-07",
    title: "Geografi: Geodinamika Litosfer, Tektonisme, Vulkanisme & Seismologi",
    shortTitle: "Modul 07: Geografi Litosfer",
    subject: "Geografi",
    icon: "🌋",
    color: "#06b6d4",
    pdfFile: "Modul_07_Geografi_Litosfer_dan_Dinamika_Planet_Bumi.pdf",
    txtFile: null,
    description: "Mempelajari struktur interior bumi, teori tektonik lempeng Alfred Wegener, batas lempeng (konvergen, divergen, transform), vulkanisme, seismologi gempa bumi, dan mitigasi bencana.",
    babList: [
      {
        bab: 1,
        title: "Struktur Interior Planet Bumi",
        content: "Bumi tersusun dari lapisan konsentris: 1. Kerak Bumi (Crust: Sial & Sima, tebal 5-70 km). 2. Mantel Bumi (Astenosfer tempat arus konveksi magma, tebal ~2900 km). 3. Inti Luar (Outer Core: cair, besi-nikel, tebal ~2200 km). 4. Inti Dalam (Inner Core: padat, suhu ~5500°C)."
      },
      {
        bab: 2,
        title: "Teori Tektonik Lempeng dan Pergeseran Benua (Wegener)",
        content: "Alfred Wegener (1912) mengajukan hipotesis Continental Drift: bahwa dulu benua bersatu dalam superbenua Pangea yang dikelilingi Panthalassa. Bukti: kecocokan garis pantai Amerika Selatan dan Afrika, kesamaan fosil Mesosaurus dan Glossopteris di dua benua berbeda, serta bukti glasiasi purba."
      },
      {
        bab: 3,
        title: "Batas Lempeng: Konvergen, Divergen, dan Transform",
        content: "1. Batas Konvergen: lempeng saling bertumbukan (subduksi kerak samudera ke bawah kerak benua membentuk palung dan jajaran gunung api Ring of Fire). 2. Batas Divergen: lempeng saling menjauh membentuk mid-ocean ridge. 3. Batas Transform (Sesar Mendatar): lempeng saling bergesekan lateral (seperti Sesar San Andreas dan Sesar Semangko di Sumatra)."
      },
      {
        bab: 4,
        title: "Dinamika Vulkanisme & Bentuk Gunung Api",
        content: "Vulkanisme adalah penerobosan magma dari mantel ke kerak/permukaan bumi. Intrusi magma (batolit, lakolit, sill, dyke). Ekstrusi magma membentuk gunung api tipe Maar (letusan gas), Perisai (lava cair efusif), dan Strato (berlapis-lapis material piroklastik dan lava, tipe dominan di Indonesia)."
      },
      {
        bab: 5,
        title: "Seismologi Gempa Bumi: Gelombang Primer & Sekunder",
        content: "Gempa bumi diakibatkan pelepasan energi akibat patahan sesar batuan. Gelombang Primer (P-Wave): longitudinal, merambat paling cepat, tembus zat padat dan cair. Gelombang Sekunder (S-Wave): transversal, lebih lambat, hanya merambat di zat padat. Pusat gempa di dalam bumi disebut hiposentrum, titik di permukaan tepat di atasnya disebut episentrum. Skala Richter mengukur magnitudo energi."
      },
      {
        bab: 6,
        title: "Proses Eksogen: Pelapukan, Erosi, dan Sedimentasi",
        content: "Tenaga dari luar bumi: Pelapukan mekanik/fisika, kimiawi (pelarutan karst), dan biologis. Erosi oleh air, angin (deflasi), gletser, dan gelombang laut (abrasi). Sedimentasi menghasilkan delta, tombolo, dan bukit pasir barchan."
      },
      {
        bab: 7,
        title: "Sistem Peringatan Dini & Mitigasi Kebencanaan",
        content: "Mitigasi struktural (pembangunan rumah tahan gempa, tanggul pemecah gelombang tsunami) dan non-struktural (edukasi jalur evakuasi, sistem peringatan dini sensor InaTEWS untuk tsunami)."
      }
    ],
    glossary: [
      { term: "Litosfer", def: "Lapisan batuan kerak bumi terluar yang membungkus bola planet bumi." },
      { term: "Astenosfer", def: "Lapisan mantel atas bumi bersifat semi-plastis tempat terjadinya arus konveksi penggerak lempeng tektonik." },
      { term: "Ring of Fire", def: "Cincin api Pasifik, zona tapal kuda aktif di mana banyak terjadi gempa tektonik dan letusan gunung api." },
      { term: "Batas Konvergen", def: "Zona pertemuan dua lempeng litosfer yang saling bertubrukan dan menimbulkan penunjaman (subduksi)." },
      { term: "Hiposentrum", def: "Titik pusat pelepasan energi gempa bumi yang terletak di dalam lapisan bumi." },
      { term: "Episentrum", def: "Titik proyeksi pada permukaan bumi yang berada tepat vertikal di atas hiposentrum." },
      { term: "Gelombang Primer (P)", def: "Gelombang seismik longitudinal tercepat yang pertama kali tiba dan tercatat pada seismograf." }
    ],
    suggestedPrompts: [
      "Sebutkan lapisan-lapisan interior bumi dari kerak hingga inti!",
      "Apa saja bukti teori pergeseran benua (Continental Drift) menurut Alfred Wegener?",
      "Jelaskan 3 jenis pergerakan batas lempeng tektonik (konvergen, divergen, transform)!",
      "Apa perbedaan gunung api tipe Strato, Maar, dan Perisai?",
      "Jelaskan perbedaan hiposentrum dan episentrum gempa bumi!",
      "Bagaimana perbedaan karakteristik gelombang gempa primer (P) dan sekunder (S)?",
      "Apa saja langkah mitigasi bencana gempa bumi dan tsunami?"
    ],
    chatKB: [
      {
        keywords: ["lapisan", "bumi", "kerak", "mantel", "astenosfer", "inti", "luar", "dalam", "sial", "sima"],
        title: "Struktur Lapisan Interior Bumi",
        answer: "Bumi tersusun dari 4 lapisan utama:\n1. **Kerak Bumi (*Crust*)**: Lapisan terluar padat (tebal 5-70 km), terdiri dari lapisan Sial (Silisium-Aluminium) dan Sima (Silisium-Magnesium).\n2. **Mantel Bumi (*Mantle*)**: Lapisan batuan pijar setebal ~2.900 km. Di bagian atas mantel terdapat **Astenosfer** yang cair-liat dan memiliki arus konveksi yang menggerakkan lempeng tektonik.\n3. **Inti Luar (*Outer Core*)**: Lapisan cair bersuhu ~4.000-5.000°C setebal ~2.200 km tersusun dari besi cair dan nikel yang menghasilkan medan magnet bumi.\n4. **Inti Dalam (*Inner Core*)**: Bola besi padat bersuhu ~5.500°C di pusat bumi dengan kerapatan dan tekanan sangat tinggi."
      },
      {
        keywords: ["batas", "lempeng", "konvergen", "divergen", "transform", "subduksi", "ring", "of", "fire", "sesar"],
        title: "Tiga Jenis Batas Lempeng Tektonik",
        answer: "1. **Batas Konvergen (Bertubrukan)**:\n   * Lempeng saling mendekat dan bertumbukan.\n   * Menghasilkan zona penunjaman (*subduksi*), palung laut dalam, gempa megathrust, dan deretan gunung api busur magmatik (seperti cincin api Pasifik / *Ring of Fire* di Indonesia).\n2. **Batas Divergen (Menjauh)**:\n   * Lempeng bergerak saling memisah.\n   * Magma dari mantel keluar mengisi celah membentuk punggungan tengah samudra (*Mid-Ocean Ridge*).\n3. **Batas Sesar Mendatar / Transform (Bergesekan Lateral)**:\n   * Dua lempeng saling bergesekan menyamping tanpa membentuk atau menghancurkan litosfer.\n   * Menghasilkan sesar mendatar aktif (seperti Sesar Semangko di Sumatra dan Sesar Palu-Koro di Sulawesi)."
      },
      {
        keywords: ["gempa", "seismologi", "hiposentrum", "episentrum", "gelombang", "p", "s", "richter"],
        title: "Karakteristik Gempa Bumi & Gelombang Seismik",
        answer: "* **Hiposentrum**: Titik fokus pusat pelepasan energi gempa di dalam perut bumi.\n* **Episentrum**: Titik koordinat di permukaan bumi tepat tegak lurus di atas hiposentrum.\n* **Gelombang Primer (P-Wave)**:\n  * Bersifat **longitudinal** (arah getar sejajar arah rambat).\n  * Merambat paling cepat ($5-8\\text{ km/s}$) dan tiba pertama kali pada seismograf.\n  * Mampu menembus medium padat, cair, dan gas.\n* **Gelombang Sekunder (S-Wave)**:\n  * Bersifat **transversal** (arah getar tegak lurus arah rambat).\n  * Kecepatan lebih rendah ($3-5\\text{ km/s}$) dan tiba kedua.\n  * **Hanya bisa menembus zat padat** (membuktikan inti luar bumi bersifat cair)."
      },
      {
        keywords: ["gunung", "api", "vulkanisme", "strato", "maar", "perisai", "magma", "efusif", "eksplosif"],
        title: "Tipe Bentuk Gunung Api",
        answer: "1. **Gunung Api Strato (Kerucut Berlapis)**:\n   * Tipe paling umum di Indonesia (Gunung Merapi, Semeru, Sinabung).\n   * Terbentuk dari erupsi eksplosif dan efusif bergantian sehingga membentuk lapisan lava dan piroklastik berseling-seling.\n2. **Gunung Api Maar (Danau Kawah)**:\n   * Terbentuk dari letusan gas eksplosif sekali yang kuat, menghasilkan kawah dangkal yang sering terisi air danau.\n3. **Gunung Api Perisai (Shield Volcano)**:\n   * Terbentuk dari lelehan lava basal yang sangat encer (efusif) mengalir luas membentuk lereng yang sangat landai (seperti Gunung Mauna Loa di Hawaii)."
      }
    ],
    quizBank: [
      {
        id: "q-geo-01",
        bab: 1,
        question: "Lapisan interior bumi yang memiliki arus konveksi magma dan menjadi penggerak lempeng tektonik adalah...",
        options: ["Kerak benua (Sial)", "Astenosfer di mantel bumi", "Inti dalam bumi", "Litosfer samudra"],
        answerIndex: 1,
        explanation: "Astenosfer di bagian mantel atas bersifat liat semi-cair dan mengalami arus konveksi termal yang menyeret lempeng litosfer di atasnya.",
        difficulty: "Sedang"
      },
      {
        id: "q-geo-02",
        bab: 3,
        question: "Tumbukan antara lempeng samudera Indo-Australia dengan lempeng benua Eurasia yang membentuk palung dan gunung api di Indonesia merupakan contoh batas lempeng...",
        options: ["Divergen", "Transform", "Konvergen (Subduksi)", "Patahan sesar mendatar"],
        answerIndex: 2,
        explanation: "Batas konvergen terjadi saat lempeng saling bertumbukan; lempeng samudera yang lebih padat menunjam ke bawah lempeng benua.",
        difficulty: "Mudah"
      },
      {
        id: "q-geo-03",
        bab: 5,
        question: "Pusat pelepasan gelombang gempa bumi yang terletak di dalam lapisan kerak bumi dinamakan...",
        options: ["Episentrum", "Hiposentrum", "Isoseista", "Pleistoseista"],
        answerIndex: 1,
        explanation: "Hiposentrum adalah pusat gempa di kedalaman bumi, sedangkan episentrum adalah proyeksi titik di permukaan bumi.",
        difficulty: "Mudah"
      },
      {
        id: "q-geo-04",
        bab: 5,
        question: "Karakteristik penting dari gelombang sekunder (S-wave) dalam seismologi adalah...",
        options: [
          "Merambat paling cepat dibanding gelombang primer",
          "Mampu menembus lapisan cair dan gas",
          "Hanya mampu merambat melalui medium zat padat",
          "Menyebabkan getaran longitudinal searah rambatan"
        ],
        answerIndex: 2,
        explanation: "Gelombang S adalah gelombang geser transversal yang tidak dapat merambat melalui cairan, membuktikan bahwa inti luar bumi berfase cair.",
        difficulty: "Sedang"
      },
      {
        id: "q-geo-05",
        bab: 4,
        question: "Mayoritas gunung api di kepulauan Indonesia bertipe Strato karena...",
        options: [
          "Letusannya hanya mengeluarkan gas belerang",
          "Lavanya sangat encer sehingga membentuk lereng sangat landai",
          "Erupsinya berselang-seling antara lelehan lava efusif dan lontaran piroklastik eksplosif",
          "Terletak di tengah lempeng tektonik stabil"
        ],
        answerIndex: 2,
        explanation: "Gunung api strato terbentuk dari endapan berselang-seling antara material piroklastik saat erupsi eksplosif dan lelehan lava efusif.",
        difficulty: "Sedang"
      }
    ],
    flashcards: [
      { q: "Apa nama superbenua purba menurut teori Alfred Wegener?", a: "Pangea." },
      { q: "Apa nama titik gempa di dalam bumi?", a: "Hiposentrum." },
      { q: "Apa nama titik gempa di permukaan bumi?", a: "Episentrum." },
      { q: "Apa jenis gelombang gempa yang hanya merambat di zat padat?", a: "Gelombang Sekunder (S-Wave)." },
      { q: "Apa nama zona batas lempeng tempat terjadinya tumbukan?", a: "Batas Konvergen (Zona Subduksi)." },
      { q: "Sebutkan tipe gunung api yang dominan di Indonesia!", a: "Tipe Strato (berlapis kerucut)." }
    ]
  },

  {
    id: "modul-08",
    code: "MOD-EKO-11-08",
    title: "Ekonomi: Sistem Moneter, Bank Sentral, Pasar Modal & Kebijakan Fiskal",
    shortTitle: "Modul 08: Ekonomi Manajemen Keuangan",
    subject: "Ekonomi",
    icon: "📈",
    color: "#14b8a6",
    pdfFile: "Modul_08_Ekonomi_Manajemen_Keuangan_dan_Pasar_Modal.pdf",
    txtFile: null,
    description: "Mempelajari sejarah uang dan sistem pembayaran digital, peran Bank Indonesia, instrumen kebijakan moneter, pasar modal BEI (saham, obligasi, reksadana), OJK, serta analisis laporan keuangan.",
    babList: [
      {
        bab: 1,
        title: "Uang dan Sistem Pembayaran Modern",
        content: "Evolusi uang: sistem barter -> uang barang -> uang logam mulia -> uang kertas bertanda tangan -> uang giral -> uang elektronik/digital (QRIS, BI-FAST, dompet digital). Fungsi asli uang: alat tukar umum (medium of exchange) dan satuan hitung (unit of account). Fungsi turunan: alat pembayaran utang, penimbun kekayaan, dan pendorong kegiatan ekonomi."
      },
      {
        bab: 2,
        title: "Fungsi dan Peran Bank Sentral (Bank Indonesia)",
        content: "Bank Indonesia (BI) adalah bank sentral independen dengan tujuan tunggal: mencapai dan memelihara kestabilan nilai rupiah (terhadap barang/jasa melalui inflasi yang rendah, serta terhadap mata uang asing/kurs valas). Tugas utama: menetapkan kebijakan moneter, mengatur kelancaran sistem pembayaran, dan menjaga stabilitas sistem keuangan."
      },
      {
        bab: 3,
        title: "Perbankan Umum & Prinsip Intermediasi Keuangan",
        content: "Bank berfungsi sebagai lembaga perantara keuangan (financial intermediary) yang menghimpun dana pihak ketiga (tabungan, deposito, giro) dan menyalurkannya kembali sebagai kredit pinjaman kepada dunia usaha. Bank konvensional menggunakan sistem suku bunga, sedangkan Bank Syariah menggunakan akad bagi hasil (mudharabah/musyarakah) tanpa riba."
      },
      {
        bab: 4,
        title: "Pasar Modal: Saham, Obligasi, dan Reksadana",
        content: "Pasar Modal (Bursa Efek Indonesia / BEI) mempertemukan pihak yang membutuhkan dana jangka panjang (emiten/korporasi) dengan investor pemilik modal. Instrumen: Saham (bukti kepemilikan modal perusahaan, potensi dividen & capital gain), Obligasi (surat pengakuan utang dengan kupon bunga), Reksadana (wadah kelolaan dana masyarakat oleh Manajer Investasi)."
      },
      {
        bab: 5,
        title: "Lembaga Penunjang Pasar Modal: OJK, BEI, KSEI, KPEI",
        content: "OJK (Otoritas Jasa Keuangan): regulator dan pengawas seluruh sektor jasa keuangan (perbankan, pasar modal, asuransi, fintech). BEI: penyelenggara perdagangan efek. KPEI: lembaga kliring dan penjaminan transaksi. KSEI: kustodian sentral penyimpan surat berharga efek."
      },
      {
        bab: 6,
        title: "Kebijakan Moneter dan Kebijakan Fiskal",
        content: "Kebijakan Moneter (oleh Bank Indonesia): Operasi Pasar Terbuka (jual/beli Sertifikat BI), Tingkat Diskonto (menaikkan/menurunkan suku bunga acuan BI Rate), dan Giro Wajib Minimum (GWM). Kebijakan Fiskal (oleh Pemerintah/Kemenkeu): pengaturan APBN melalui pajak dan belanja negara untuk menstabilkan pertumbuhan ekonomi dan inflasi."
      },
      {
        bab: 7,
        title: "Analisis Fundamental & Laporan Keuangan",
        content: "Membaca Laporan Keuangan Neraca (Aset = Liabilitas + Ekuitas) dan Laporan Laba Rugi (Pendapatan - Beban = Laba Bersih). Rasio keuangan penting: ROE (Return on Equity), PER (Price to Earnings Ratio), dan DER (Debt to Equity Ratio) untuk menilai kesehatan bisnis emiten."
      }
    ],
    glossary: [
      { term: "Bank Indonesia", def: "Bank sentral Republik Indonesia yang memiliki tugas menjaga stabilitas nilai mata uang Rupiah dan sistem pembayaran." },
      { term: "Inflasi", def: "Kenaikan harga barang dan jasa secara umum dan terus menerus dalam jangka waktu tertentu." },
      { term: "Kebijakan Diskonto", def: "Instrumen moneter Bank Sentral dengan mengatur suku bunga pinjaman bagi bank umum." },
      { term: "Otoritas Jasa Keuangan (OJK)", def: "Lembaga independen pengawas dan pemeriksa seluruh industri jasa keuangan di Indonesia." },
      { term: "Saham", def: "Surat bukti kepemilikan bagian modal pada suatu perseroan terbatas (PT)." },
      { term: "Dividen", def: "Bagian keuntungan laba bersih perusahaan yang dibagikan kepada para pemegang saham." },
      { term: "Capital Gain", def: "Keuntungan modal yang diperoleh dari selisih lebih antara harga jual efek dibanding harga belinya." }
    ],
    suggestedPrompts: [
      "Apa fungsi asli dan fungsi turunan uang?",
      "Apa tujuan tunggal Bank Indonesia dan bagaimana cara mencapainya?",
      "Jelaskan 3 instrumen kebijakan moneter Bank Indonesia dalam menekan inflasi!",
      "Apa perbedaan investasi saham, obligasi, dan reksadana?",
      "Jelaskan peran OJK, BEI, KSEI, dan KPEI di pasar modal!",
      "Apa perbedaan kebijakan moneter dan kebijakan fiskal?",
      "Bagaimana rumus persamaan dasar akuntansi pada neraca keuangan?"
    ],
    chatKB: [
      {
        keywords: ["uang", "fungsi", "asli", "turunan", "barter", "qris", "satuan", "hitung", "alat", "tukar"],
        title: "Fungsi Asli dan Fungsi Turunan Uang",
        answer: "* **Fungsi Asli Uang**:\n  1. **Sebagai Alat Tukar Umum (*Medium of Exchange*)**: Mengatasi kelemahan sistem barter (*double coincidence of wants*).\n  2. **Sebagai Satuan Hitung (*Unit of Account*)**: Menentukan nilai harga suatu barang atau jasa secara seragam.\n* **Fungsi Turunan Uang**:\n  1. Alat pembayaran yang sah atas transaksi jual-beli dan utang piutang.\n  2. Alat penyimpan nilai / penimbun kekayaan (*Store of Value*).\n  3. Alat pemindah kekayaan (misal menjual tanah di desa untuk beli rumah di kota).\n  4. Pendorong mobilitas aktivitas perekonomian."
      },
      {
        keywords: ["bank", "indonesia", "bi", "moneter", "inflasi", "diskonto", "gwm", "operasi", "pasar", "terbuka"],
        title: "Kebijakan Moneter Bank Indonesia",
        answer: "Untuk mengendalikan inflasi dan menjaga stabilitas nilai Rupiah, Bank Indonesia menerapkan instrumen moneter:\n1. **Operasi Pasar Terbuka (OPT)**:\n   * Menjual Sertifikat Bank Indonesia (SBI) untuk menyerap kelebihan uang beredar (kontraksi moneter).\n   * Membeli surat berharga untuk menambah likuiditas uang beredar (ekspansi moneter).\n2. **Kebijakan Diskonto (*Discount Rate*)**:\n   * Menaikkan suku bunga acuan BI Rate agar masyarakat gemar menabung sehingga inflasi mereda.\n3. **Giro Wajib Minimum (GWM)**:\n   * Mengatur persentase cadangan likuiditas minimum yang wajib disimpan bank umum di BI.\n4. **Imbauan Moral (*Moral Suasion*)**: Memberi arahan persuasif kepada pimpinan bank umum."
      },
      {
        keywords: ["pasar", "modal", "saham", "obligasi", "reksadana", "dividen", "capital", "gain", "bei"],
        title: "Instrumen Pasar Modal: Saham, Obligasi, dan Reksadana",
        answer: "* **Saham**:\n  * Bukti kepemilikan modal pada perseroan terbatas (*emiten*).\n  * Imbal hasil: **Dividen** (bagian laba bersih) dan **Capital Gain** (keuntungan selisih kenaikan harga jual saham).\n  * Risiko: *Capital Loss* dan risiko likuidasi.\n* **Obligasi**:\n  * Surat utang jangka menengah/panjang yang diterbitkan korporasi atau negara (SBN/ORI).\n  * Pemegang obligasi menerima imbal hasil bunga berkala yang disebut **Kupon**.\n* **Reksadana**:\n  * Wadah penghimpun dana dari masyarakat pemodal untuk diinvestasikan ke portofolio efek oleh **Manajer Investasi** profesional."
      },
      {
        keywords: ["ojk", "bei", "ksei", "kpei", "lembaga", "penunjang", "regulator"],
        title: "Lembaga Regulator & Penunjang Pasar Modal",
        answer: "* **OJK (Otoritas Jasa Keuangan)**: Lembaga independen pengawas dan regulator terintegrasi seluruh kegiatan sektor jasa keuangan.\n* **BEI (Bursa Efek Indonesia)**: Pihak yang menyelenggarakan dan menyediakan infrastruktur perdagangan efek saham dan obligasi.\n* **KPEI (Kliring Penjaminan Efek Indonesia)**: Lembaga yang menjamin kepastian pemenuhan hak dan kewajiban transaksi bursa.\n* **KSEI (Kustodian Sentral Efek Indonesia)**: Lembaga penyimpanan efek dan penyelesaian transaksi secara terpusat (*scripless trading*)."
      }
    ],
    quizBank: [
      {
        id: "q-eko-01",
        bab: 2,
        question: "Tujuan tunggal dari Bank Indonesia sebagaimana diamanatkan oleh Undang-Undang adalah...",
        options: [
          "Mencapai keuntungan maksimal dari cadangan emas negara",
          "Mencapai dan memelihara kestabilan nilai Rupiah",
          "Menyalurkan kredit pinjaman konsumtif langsung kepada masyarakat",
          "Mengumpulkan pajak penghasilan dari seluruh wajib pajak"
        ],
        answerIndex: 1,
        explanation: "UU Bank Indonesia menetapkan tujuan tunggal BI yaitu mencapai dan memelihara kestabilan nilai Rupiah terhadap barang/jasa dan kurs asing.",
        difficulty: "Mudah"
      },
      {
        id: "q-eko-02",
        bab: 6,
        question: "Jika perekonomian menghadapi laju inflasi yang terlalu tinggi, langkah kebijakan moneter kontraktif yang tepat oleh Bank Indonesia adalah...",
        options: [
          "Menurunkan tingkat suku bunga acuan diskonto",
          "Membeli kembali surat-surat berharga dari masyarakat",
          "Menaikkan suku bunga diskonto dan menaikkan Giro Wajib Minimum (GWM)",
          "Menurunkan persentase cadangan kas minimum bank umum"
        ],
        answerIndex: 2,
        explanation: "Menaikkan suku bunga diskonto dan GWM menarik likuiditas dari pasar sehingga laju inflasi dapat diredam.",
        difficulty: "Sedang"
      },
      {
        id: "q-eko-03",
        bab: 4,
        question: "Keuntungan yang diperoleh investor dari selisih lebih antara harga jual saham dengan harga beli saham disebut...",
        options: ["Dividen", "Kupon", "Capital Gain", "Bagi Hasil"],
        answerIndex: 2,
        explanation: "Capital Gain adalah keuntungan atas kenaikan harga pasar instrumen efek ketika dijual kembali.",
        difficulty: "Mudah"
      },
      {
        id: "q-eko-04",
        bab: 5,
        question: "Lembaga independen yang bertugas mengatur, mengawasi, dan melindungi konsumen di seluruh industri jasa keuangan Indonesia adalah...",
        options: ["Bappebti", "KPK", "Otoritas Jasa Keuangan (OJK)", "Kementerian Perdagangan"],
        answerIndex: 2,
        explanation: "OJK dibentuk khusus mengawasi industri perbankan, pasar modal, perasuransian, dana pensiun, dan lembaga keuangan lainnya.",
        difficulty: "Mudah"
      },
      {
        id: "q-eko-05",
        bab: 7,
        question: "Persamaan dasar akuntansi yang menjadi fondasi penyusunan Laporan Posisi Keuangan (Neraca) adalah...",
        options: [
          "Aset = Liabilitas + Ekuitas",
          "Aset = Liabilitas - Beban",
          "Laba Bersih = Aset + Pendapatan",
          "Ekuitas = Liabilitas + Kas"
        ],
        answerIndex: 0,
        explanation: "Persamaan fundamental akuntansi neraca menyatakan bahwa total Harta/Aset sama dengan total Kewajiban/Liabilitas ditambah Modal/Ekuitas pemilik.",
        difficulty: "Mudah"
      }
    ],
    flashcards: [
      { q: "Sebutkan 2 fungsi asli uang!", a: "1. Alat tukar umum, 2. Satuan hitung." },
      { q: "Apa nama keuntungan bagian laba perusahaan yang dibagikan ke investor saham?", a: "Dividen." },
      { q: "Lembaga apa yang bertugas mengawasi seluruh sektor keuangan di Indonesia?", a: "OJK (Otoritas Jasa Keuangan)." },
      { q: "Apa instrumen moneter BI dengan menjual surat berharga?", a: "Operasi Pasar Terbuka (OPT)." },
      { q: "Apa nama lembaga penyimpanan efek sentral di BEI?", a: "KSEI (Kustodian Sentral Efek Indonesia)." }
    ]
  },

  {
    id: "modul-09",
    code: "MOD-INF-11-09",
    title: "Informatika: Arsitektur Komputer, Jaringan TCP/IP & Keamanan Siber",
    shortTitle: "Modul 09: Informatika Komputer & Jaringan",
    subject: "Informatika",
    icon: "💻",
    color: "#6366f1",
    pdfFile: "Modul_09_Informatika_Arsitektur_Komputer_dan_Jaringan.pdf",
    txtFile: null,
    description: "Mempelajari Arsitektur Von Neumann, CPU registers, hierarki memori, representasi data biner/heksadesimal, model jaringan OSI 7-layer vs TCP/IP, IP addressing CIDR, protokol internet, dan enkripsi keamanan siber.",
    babList: [
      {
        bab: 1,
        title: "Arsitektur Von Neumann & Siklus Fetch-Decode-Execute",
        content: "Arsitektur Von Neumann mendasari komputer modern: CPU (ALU untuk operasi logika dan aritmatika, Control Unit untuk kendali instruksi, Register untuk penyimpanan super cepat), Memori Utama (RAM tempat instruksi & data disimpan bersamaan), serta Bus Antarmuka I/O. Siklus instruksi CPU: Fetch (mengambil instruksi dari RAM ke IR), Decode (menerjemahkan op-code oleh CU), Execute (menjalankan instruksi di ALU)."
      },
      {
        bab: 2,
        title: "Hierarki Memori Komputer",
        content: "Hierarki memori dirancang berdasarkan trade-off kecepatan vs kapasitas vs biaya: Register CPU (tercepat, kapasitas sangat kecil, paling mahal) -> Cache L1, L2, L3 (SRAM) -> Memori Utama (DRAM/RAM volatile) -> Penyimpanan Sekunder (SSD NVMe, HDD non-volatile)."
      },
      {
        bab: 3,
        title: "Representasi Data Biner, Heksadesimal & Gerbang Logika",
        content: "Bit (binary digit: 0 atau 1) dan Byte (8 bit). Heksadesimal (basis 16: 0-9 dan A-F) meringkas 4 bit biner. Gerbang Logika dasar: AND (1 jika semua masukan 1), OR (1 jika minimal ada satu masukan 1), NOT (invers pembalik), NAND, NOR, XOR (1 jika jumlah masukan 1 ganjil/berbeda)."
      },
      {
        bab: 4,
        title: "Model OSI 7-Layer vs TCP/IP 4-Layer",
        content: "OSI 7-Layer: 7. Application, 6. Presentation, 5. Session, 4. Transport (segmen, TCP/UDP), 3. Network (paket, IP), 2. Data Link (frame, MAC address), 1. Physical (bit kabel/sinyal). TCP/IP 4-Layer: Application, Transport, Internet, Network Access. Enkapsulasi: penambahan header protokol saat data bergerak turun layer."
      },
      {
        bab: 5,
        title: "Alamat IPv4, Subnetting CIDR, dan Alokasi Privat",
        content: "Alamat IPv4 terdiri dari 32 bit (4 oktet desimal titik). Notasi CIDR (misal /24 memiliki netmask 255.255.255.0 dan 256 alamat IP total, 254 host usable). Rentang IP Privat (RFC 1918): Kelas A (10.0.0.0/8), Kelas B (172.16.0.0/12), Kelas C (192.168.0.0/16) yang diterjemahkan ke IP publik melalui NAT."
      },
      {
        bab: 6,
        title: "Protokol Routing, DNS, DHCP, dan Arsitektur Web",
        content: "DNS (Domain Name System): menerjemahkan nama domain (seperti google.com) menjadi IP address (port 53). DHCP (Dynamic Host Configuration Protocol): memberikan konfigurasi IP otomatis kepada host klien (port 67/68). HTTP/HTTPS: protokol web transfer dokumen hiperteks (port 80 dan 443 dengan SSL/TLS)."
      },
      {
        bab: 7,
        title: "Keamanan Siber Dasar: Kriptografi & Firewall",
        content: "Enkripsi Simetris (AES): menggunakan satu kunci rahasia yang sama untuk enkripsi dan dekripsi. Enkripsi Asimetris (RSA): menggunakan pasangan Public Key (untuk enkripsi) dan Private Key (untuk dekripsi). Hashing (SHA-256): fungsi satu arah untuk verifikasi integritas data. Firewall: filter penyaring paket data masuk dan keluar berdasarkan aturan keamanan."
      }
    ],
    glossary: [
      { term: "Von Neumann", def: "Model arsitektur sistem komputer dengan konsep program tersimpan di mana instruksi dan data berada di ruang memori yang sama." },
      { term: "CPU Register", def: "Lokasi memori internal prosesor dengan latensi akses tercepat untuk menampung operand komputasi langsung." },
      { term: "Siklus Fetch-Execute", def: "Siklus berulang penjemputan instruksi dari RAM, penerjemahan kode instruksi, dan eksekusi komputasi oleh prosesor." },
      { term: "Model OSI", def: "Kerangka acuan standar 7 lapisan arsitektur jaringan komunikasi data telekomunikasi komputer." },
      { term: "Subnetting CIDR", def: "Metode pemecahan ruang alokasi jaringan IP menggunakan panjang awalan prefiks bit network." },
      { term: "DNS", def: "Layanan penamaan domain terdistribusi yang memetakan nama host menjadi alamat numerik IP." },
      { term: "Firewall", def: "Sistem keamanan perangkat keras atau lunak yang menyaring lalu lintas paket jaringan berdasarkan aturan tertentu." }
    ],
    suggestedPrompts: [
      "Jelaskan komponen utama arsitektur Von Neumann dan siklus Fetch-Decode-Execute!",
      "Urutkan hierarki memori komputer dari yang tercepat ke yang paling lambat!",
      "Sebutkan 7 lapisan dalam model OSI beserta fungsi transport dan network layer!",
      "Bagaimana cara menghitung subnet mask dan jumlah host pada notasi /24 dan /26?",
      "Jelaskan cara kerja protokol DNS dan DHCP di jaringan!",
      "Apa perbedaan antara enkripsi simetris (AES) dan enkripsi asimetris (RSA)?",
      "Apa fungsi firewall dalam keamanan jaringan komputer?"
    ],
    chatKB: [
      {
        keywords: ["von", "neumann", "cpu", "alu", "cu", "register", "fetch", "decode", "execute", "siklus"],
        title: "Arsitektur Von Neumann & Siklus Instruksi CPU",
        answer: "**Arsitektur Von Neumann** adalah fondasi komputasi modern dengan komponen kunci:\n1. **CPU (*Central Processing Unit*)**:\n   * **ALU (*Arithmetic Logic Unit*)**: Melakukan perhitungan matematika (+, -, *, /) dan logika boolean (AND, OR, NOT).\n   * **Control Unit (CU)**: Mengatur koordinasi aliran data dan sinyal kendali.\n   * **Registers**: Memori internal sangat kecil berkecepatan tinggi (seperti *Program Counter (PC)*, *Instruction Register (IR)*, dan *Accumulator*).\n2. **Memori Utama (RAM)**: Menyimpan program instruksi dan data secara serentak (*Stored-program concept*).\n\n**Siklus Fetch-Decode-Execute**:\n* **Fetch**: CU mengambil instruksi dari alamat memori yang ditunjuk oleh *Program Counter*.\n* **Decode**: Instruksi diterjemahkan maknanya ke dalam mikrokode.\n* **Execute**: ALU mengeksekusi operasi tersebut dan hasilnya disimpan ke register/RAM."
      },
      {
        keywords: ["hierarki", "memori", "register", "cache", "l1", "l2", "ram", "dram", "ssd", "kecepatan"],
        title: "Hierarki Memori Komputer",
        answer: "Peringkat memori dari **kecepatan tercepat (latensi terendah)** hingga yang paling lambat:\n1. **Register CPU**: Berada di dalam inti prosesor (~0.5 nanodetik, hitungan Byte-Kilobyte).\n2. **Cache CPU (L1, L2, L3)**: Menggunakan SRAM super cepat (~1-10 ns, Megabyte).\n3. **Memori Utama (RAM / DRAM)**: Bersifat *volatile* (~50-100 ns, 8-64 Gigabyte).\n4. **Penyimpanan Sekunder (*Solid State Drive / SSD NVMe*)**: Non-volatile (~10-100 mikrodetik, Terabyte).\n5. **Hard Disk Drive (HDD) & Optical**: Menggunakan piringan magnetik mekanik (~5-10 milidetik)."
      },
      {
        keywords: ["osi", "7", "layer", "tcp/ip", "aplikasi", "transport", "network", "enkapsulasi"],
        title: "Model OSI 7-Layer dan TCP/IP",
        answer: "Tujuh lapisan model referensi OSI (dari atas ke bawah):\n\n| No | Layer OSI | Satuan Data | Protokol / Perangkat |\n|---|---|---|---|\n| 7 | **Application** | Data | HTTP, DNS, DHCP, FTP, SMTP |\n| 6 | **Presentation** | Data | TLS/SSL, JPEG, ASCII |\n| 5 | **Session** | Data | NetBIOS, RPC |\n| 4 | **Transport** | Segmen | TCP (andal, handshake), UDP (cepat) |\n| 3 | **Network** | Paket | IP (IPv4/IPv6), ICMP, Router |\n| 2 | **Data Link** | Frame | Ethernet, Wi-Fi, MAC Address, Switch |\n| 1 | **Physical** | Bit | Kabel UTP, Serat Optik, Hub, NIC |\n\n*Proses pengiriman data membungkus header dari layer 7 ke layer 1 disebut **Enkapsulasi**.*"
      },
      {
        keywords: ["ip", "ipv4", "cidr", "subnetting", "subnet", "mask", "host", "/24", "/26"],
        title: "Alamat IPv4 dan Subnetting CIDR",
        answer: "* **IPv4**: Terdiri dari 32 bit biner yang dibagi menjadi 4 oktet desimal (contoh: `192.168.1.1`).\n* **Notasi CIDR (*Classless Inter-Domain Routing*)**:\n  * `/24` $\\implies$ 24 bit network, 8 bit host ($2^8 = 256$ IP, **254 host usable**), Netmask: `255.255.255.0`.\n  * `/26` $\\implies$ 26 bit network, 6 bit host ($2^6 = 64$ IP, **62 host usable**), Netmask: `255.255.255.192`.\n  * *(2 IP dikurangi untuk Alamat Network dan Alamat Broadcast).* \n* **IP Privat (RFC 1918)**: Digunakan di jaringan lokal LAN dan tidak dapat dirouting langsung di internet publik:\n  * `10.0.0.0` - `10.255.255.255`\n  * `172.16.0.0` - `172.31.255.255`\n  * `192.168.0.0` - `192.168.255.255`"
      },
      {
        keywords: ["enkripsi", "simetris", "asimetris", "rsa", "aes", "hash", "sha", "firewall", "keamanan"],
        title: "Kriptografi & Firewall Keamanan Siber",
        answer: "* **Enkripsi Simetris (misal AES)**: Menggunakan satu kunci rahasia yang sama untuk enkripsi dan dekripsi. Sangat cepat, cocok untuk transmisi data jumlah besar.\n* **Enkripsi Asimetris (misal RSA)**: Menggunakan pasangan kunci:\n  * **Public Key**: Disebarkan bebas untuk mengenkripsi data.\n  * **Private Key**: Dirahasiakan oleh pemilik untuk mendekripsi data.\n* **Fungsi Hash Kriptografis (SHA-256)**: Mengonversi data sembarang menjadi nilai string unik tetap (satu arah). Jika data berubah 1 bit saja, nilai hash akan berbeda total (*Avalanche effect*).\n* **Firewall**: Perangkat pelindung yang memeriksa paket data masuk/keluar berdasarkan *port*, alamat IP sumber/tujuan, dan aturan keamanan protokol."
      }
    ],
    quizBank: [
      {
        id: "q-inf-01",
        bab: 1,
        question: "Komponen dalam CPU yang bertanggung jawab melakukan operasi perhitungan aritmatika dan perbandingan logika adalah...",
        options: ["Control Unit (CU)", "Arithmetic Logic Unit (ALU)", "Memory Data Register", "System Bus"],
        answerIndex: 1,
        explanation: "ALU (Arithmetic Logic Unit) bertugas melakukan operasi perhitungan numerik dan evaluasi gerbang logika.",
        difficulty: "Mudah"
      },
      {
        id: "q-inf-02",
        bab: 2,
        question: "Di antara pilihan media penyimpan berikut, manakah yang memiliki kecepatan akses (latensi) tercepat?",
        options: ["Register CPU", "Cache L3", "RAM (DRAM)", "Solid State Drive (SSD NVMe)"],
        answerIndex: 0,
        explanation: "Register CPU berada tepat di dalam inti silikon prosesor dan dapat diakses dalam hitungan sepersekian nanodetik.",
        difficulty: "Mudah"
      },
      {
        id: "q-inf-03",
        bab: 4,
        question: "Protokol TCP dan UDP bertugas mengatur keandalan dan transmisi pengiriman data pada layer model OSI yaitu...",
        options: ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 7 (Application)"],
        answerIndex: 2,
        explanation: "Transport Layer (Lapisan 4) bertanggung jawab menyediakan transfer data end-to-end melalui protokol TCP atau UDP.",
        difficulty: "Sedang"
      },
      {
        id: "q-inf-04",
        bab: 5,
        question: "Pada subnet mask dengan notasi CIDR /26, jumlah alamat IP yang dapat digunakan untuk host klien adalah...",
        options: ["30 host", "62 host", "126 host", "254 host"],
        answerIndex: 1,
        explanation: "Prefix /26 menyisakan 32 - 26 = 6 bit host. Jumlah alamat total = 2^6 = 64. Usable host = 64 - 2 (network & broadcast) = 62 host.",
        difficulty: "HOTS"
      },
      {
        id: "q-inf-05",
        bab: 6,
        question: "Layanan jaringan yang bertugas menerjemahkan nama domain (seperti kemdikbud.go.id) menjadi alamat numerik IP adalah...",
        options: ["DHCP", "DNS (Domain Name System)", "FTP", "ARP"],
        answerIndex: 1,
        explanation: "DNS (Domain Name System) berfungsi sebagai buku telepon internet yang memetakan nama domain ke alamat IP.",
        difficulty: "Mudah"
      },
      {
        id: "q-inf-06",
        bab: 7,
        question: "Perbedaan esensial antara kriptografi simetris dan asimetris adalah...",
        options: [
          "Kriptografi simetris tidak membutuhkan kunci rahasia",
          "Kriptografi simetris menggunakan satu kunci sama, sedangkan asimetris menggunakan sepasang public key dan private key",
          "Kriptografi asimetris hanya bisa digunakan secara offline",
          "Kriptografi simetris selalu menghasilkan file berukuran lebih besar"
        ],
        answerIndex: 1,
        explanation: "Enkripsi simetris memakai 1 kunci bersama, sedangkan asimetris memakai sepasang kunci terpisah (public key untuk enkripsi, private key untuk dekripsi).",
        difficulty: "Sedang"
      }
    ],
    flashcards: [
      { q: "Apa nama siklus rutin instruksi prosesor CPU?", a: "Siklus Fetch - Decode - Execute." },
      { q: "Sebutkan 3 komponen utama arsitektur Von Neumann!", a: "CPU (ALU, CU, Registers), Memori Utama (RAM), dan Sistem I/O." },
      { q: "Sebutkan urutan 7 layer OSI dari atas ke bawah!", a: "Application, Presentation, Session, Transport, Network, Data Link, Physical." },
      { q: "Berapa banyak bit yang menyusun satu alamat IPv4?", a: "32 bit (terbagi dalam 4 oktet)." },
      { q: "Apa nama protokol yang memberikan alamat IP secara otomatis kepada klien?", a: "DHCP (Dynamic Host Configuration Protocol)." },
      { q: "Apa nama fungsi satu arah untuk memverifikasi keaslian integritas file?", a: "Fungsi Hash Kriptografis (seperti SHA-256)." }
    ]
  },

  {
    id: "modul-10",
    code: "MOD-IND-11-10",
    title: "Bahasa Indonesia: Ragam Bahasa Ilmiah, Sistematika KTI & Kajian Sastra",
    shortTitle: "Modul 10: Bahasa Indonesia Akademik & Sastra",
    subject: "Bahasa Indonesia",
    icon: "📚",
    color: "#f43f5e",
    pdfFile: "Modul_10_Bahasa_Indonesia_Kajian_Sastra_dan_Teks_Akademik.pdf",
    txtFile: null,
    description: "Mempelajari kaidah bahasa ragam ilmiah (lugas, baku, denotatif), sistematika karya tulis ilmiah (KTI), teknik kutipan dan parafrase anti-plagiarisme, format rujukan APA Style, teks resensi kritis, serta analisis unsur intrinsik cerpen/novel.",
    babList: [
      {
        bab: 1,
        title: "Karakteristik Bahasa Ragam Ilmiah",
        content: "Ciri bahasa ragam ilmiah: 1. Baku (taat kaidah EYD dan PUEBI). 2. Lugas dan hemat (tidak bertele-tele, bebas dari mubazir kata). 3. Denotatif (makna sebenarnya, menghindari konotasi/makna ganda). 4. Objektif (berdasarkan fakta empiris, meminimalisir opini subjektif emosional). 5. Kohesif dan koheren."
      },
      {
        bab: 2,
        title: "Sistematika Penyusunan Karya Tulis Ilmiah (KTI)",
        content: "Struktur standar KTI: Bagian Awal (Halaman Judul, Abstrak, Kata Pengantar, Daftar Isi). Bab I Pendahuluan (Latar Belakang Masalah, Rumusan Masalah, Tujuan Penelitian, Manfaat Penelitian). Bab II Kajian Pustaka / Landasan Teori. Bab III Metodologi Penelitian. Bab IV Hasil dan Pembahasan. Bab V Penutup (Kesimpulan dan Saran). Bagian Akhir (Daftar Pustaka, Lampiran)."
      },
      {
        bab: 3,
        title: "Abstrak Penelitian: Ciri dan Struktur Komponen",
        content: "Abstrak adalah ringkasan padat dan komprehensif isi karya ilmiah (umumnya 150-250 kata, satu paragraf spasi tunggal). Komponen wajib: Latar belakang singkat, tujuan penelitian, metodologi yang digunakan, temuan utama/hasil, kesimpulan, serta 3-5 kata kunci (keywords)."
      },
      {
        bab: 4,
        title: "Teknik Pengutipan & Parafrase Anti-Plagiarisme",
        content: "Kutipan langsung (menyalin persis teks asli: pendek kurang dari 4 baris dimasukkan dalam teks dengan tanda petik, panjang 4 baris atau lebih dipisahkan dalam blok spasi tunggal). Parafrase: mengungkapkan kembali ide gagasan penulis lain dengan susunan kata dan kalimat sendiri tanpa mengubah makna asli, wajib menyertakan sumber penulis dan tahun."
      },
      {
        bab: 5,
        title: "Penulisan Daftar Pustaka Standar APA Style",
        content: "Format APA (American Psychological Association) edisi terbaru: Nama Belakang Penulis, Inisial. (Tahun Publikasi). Judul Buku Miring. Kota Terbit: Penerbit (atau untuk artikel jurnal: Judul Artikel. Nama Jurnal Miring, Volume(Nomor), Halaman. DOI/URL)."
      },
      {
        bab: 6,
        title: "Struktur & Ciri Kebahasaan Teks Resensi Kritis",
        content: "Resensi adalah ulasan kritis terhadap karya sastra/buku. Struktur: Identitas karya (judul, pengarang, penerbit, tebal), Sinopsis ringkas, Analisis kelebihan (keunggulan) dan kelemahan (kekurangan) karya, serta Rekomendasi/pertimbangan bagi pembaca."
      },
      {
        bab: 7,
        title: "Analisis Unsur Intrinsik & Ekstrinsik Cerpen / Sastra",
        content: "Unsur Intrinsik: Tema (gagasan sentral), Tokoh & Penokohan (watak), Alur/Plot (maju, mundur, campuran; tahap eksposisi, komplikasi, klimaks, resolusi), Latar/Setting (tempat, waktu, suasana), Sudut Pandang (orang pertama 'aku', orang ketiga 'dia/ia'), Gaya Bahasa (majas), dan Amanat. Unsur Ekstrinsik: Latar belakang pengarang, kondisi sosial-politik, nilai moral/agama/budaya."
      }
    ],
    glossary: [
      { term: "Karya Tulis Ilmiah", def: "Laporan tertulis yang memaparkan hasil kajian atau penelitian empiris menurut metodologi dan etika keilmuan yang baku." },
      { term: "Bahasa Baku", def: "Ragam bahasa yang kaidah tata bahasa, ejaan, dan kosakatanya telah distandarisasi secara resmi dalam KBBI dan PUEBI." },
      { term: "Abstrak Penelitian", def: "Rangkuman representatif mini dari keseluruhan karya ilmiah yang memuat tujuan, metode, hasil, dan simpulan." },
      { term: "Parafrase", def: "Teknik pengungkapan kembali suatu pernyataan/gagasan menggunakan kosakata pribadi demi menghindari indikasi plagiasi." },
      { term: "Daftar Pustaka APA", def: "Pedoman tata cara perujukan sumber sitasi standar yang dikeluarkan oleh American Psychological Association." },
      { term: "Unsur Intrinsik", def: "Elemen-elemen internal yang secara langsung membangun keutuhan suatu karya fiksi sastra dari dalam." },
      { term: "Resensi Kritis", def: "Ulasan penilaian objektif mengenai bobot kualitas, nilai estetis, dan kekurangan suatu karya pustaka." }
    ],
    suggestedPrompts: [
      "Apa saja ciri-ciri utama bahasa ragam ilmiah yang baik dan benar?",
      "Jelaskan sistematika bab-bab dalam penulisan Karya Tulis Ilmiah (KTI)!",
      "Bagaimana aturan penulisan abstrak penelitian ilmiah?",
      "Apa perbedaan kutipan langsung dan teknik parafrase anti-plagiasi?",
      "Bagaimana contoh format penulisan daftar pustaka menggunakan standar APA Style?",
      "Sebutkan unsur-unsur intrinsik dalam karya sastra cerpen beserta penjelasannya!",
      "Apa saja komponen yang wajib ada dalam teks resensi buku?"
    ],
    chatKB: [
      {
        keywords: ["ragam", "ilmiah", "karakteristik", "lugas", "baku", "denotatif", "objektif", "bahasa"],
        title: "Karakteristik Bahasa Ragam Ilmiah",
        answer: "Ciri-ciri pokok bahasa dalam karya tulis ilmiah:\n1. **Baku**: Mengikuti kaidah tata bahasa baku dan Pedoman Umum Ejaan Bahasa Indonesia (PUEBI/EYD V).\n2. **Denotatif**: Setiap kata yang digunakan memiliki arti sebenarnya secara gamblang, menghindari majas atau kata bermakna ganda (*konotasi*).\n3. **Lugas dan Hemat**: Bersifat ringkas, langsung ke inti gagasan tanpa kalimat berbunga-bunga atau mubazir kata (seperti *'adalah merupakan'*, *'agar supaya'*).\n4. **Objektif**: Berdasarkan bukti fakta empiris, bukan opini subjektif tanpa dasar ilmiah.\n5. **Kohesif & Koheren**: Antarparagraf dan antarkalimat tersusun padu dengan konjungsi yang logis."
      },
      {
        keywords: ["sistematika", "kti", "bab", "pendahuluan", "kajian", "pustaka", "metodologi", "pembahasan", "struktur"],
        title: "Sistematika Penyusunan Karya Tulis Ilmiah (KTI)",
        answer: "Struktur standar batang tubuh KTI:\n* **Bab I: Pendahuluan**\n  * Latar Belakang Masalah\n  * Rumusan Masalah\n  * Tujuan Penelitian\n  * Manfaat Penelitian\n* **Bab II: Kajian Pustaka / Landasan Teoretis**\n  * Tinjauan Pustaka & Kajian Hasil Riset Terdahulu\n  * Kerangka Berpikir & Hipotesis (bila kuantitatif)\n* **Bab III: Metodologi Penelitian**\n  * Jenis Penelitian, Tempat/Waktu, Populasi/Sampel, Teknik Pengumpulan Data, dan Teknik Analisis Data\n* **Bab IV: Hasil Penelitian dan Pembahasan**\n* **Bab V: Penutup**\n  * Kesimpulan komprehensif & Saran praktis/akademis\n* **Daftar Pustaka & Lampiran**"
      },
      {
        keywords: ["parafrase", "kutipan", "langsung", "plagiarisme", "anti-plagiasi", "sitasi", "apa"],
        title: "Teknik Kutipan dan Parafrase",
        answer: "* **Kutipan Langsung**: Mengambil persis teks asli kata demi kata.\n  * Kutipan pendek (< 4 baris): Diintegrasikan langsung dalam paragraf menggunakan tanda kutip ganda (\").\n  * Kutipan panjang (>= 4 baris): Ditulis terpisah menjadi blok teks sendiri, menjorok masuk, berspasi tunggal.\n* **Teknik Parafrase**: Menuliskan kembali konsep/pendapat dari rujukan memakai struktur kalimat dan kosakata sendiri:\n  1. Baca teks berulang kali hingga paham inti maknanya.\n  2. Tuliskan kembali tanpa melihat teks asli.\n  3. Bandingkan makna agar tidak terdistorsi.\n  4. Selalu cantumkan sumber nama pengarang dan tahun (misal: *Sugiyono, 2023*)."
      },
      {
        keywords: ["daftar", "pustaka", "apa", "style", "contoh", "buku", "jurnal"],
        title: "Format Penulisan Daftar Pustaka Standar APA",
        answer: "Aturan penulisan daftar pustaka gaya APA (*American Psychological Association*) disusun alfabetis:\n\n* **Buku Fisik**:\n  > Nama Belakang, Inisial. (Tahun). *Judul Buku Dimiringkan* (Edisi). Penerbit.\n  > **Contoh**: Sugiyono, A. (2022). *Metode Penelitian Kuantitatif, Kualitatif, dan R&D*. Alfabeta.\n* **Artikel Jurnal Ilmiah**:\n  > Nama Belakang, Inisial. (Tahun). Judul artikel tegak. *Nama Jurnal Ilmiah Dimiringkan*, *Volume*(Nomor), Halaman. https://doi.org/xxxx\n  > **Contoh**: Sartika, D. (2024). Analisis kompetensi literasi sains siswa SMA. *Jurnal Pembelajaran Sains*, *15*(2), 112-124."
      },
      {
        keywords: ["intrinsik", "cerpen", "sastra", "tema", "tokoh", "alur", "latar", "sudut", "pandang", "amanat"],
        title: "Unsur Intrinsik Karya Sastra Fiksi",
        answer: "Unsur intrinsik pembangun cerpen/novel dari dalam teks:\n1. **Tema**: Ide sentral pokok persoalan yang menjiwai cerita.\n2. **Tokoh dan Penokohan**: Karakter dalam cerita dan bagaimana watak mereka digambarkan (analitik langsung atau dramatik melalui dialog/tindakan).\n3. **Alur (*Plot*)**: Rangkaian kausalitas peristiwa (Eksposisi $\\rightarrow$ Konflik $\\rightarrow$ Klimaks $\\rightarrow$ Anti-klimaks $\\rightarrow$ Resolusi).\n4. **Latar (*Setting*)**: Tempat, waktu kejadian, dan suasana lingkungan cerita berlangsung.\n5. **Sudut Pandang (*Point of View*)**: Posisi pencerita (Orang Pertama 'Aku/Saya', atau Orang Ketiga 'Dia/Ia/Nama').\n6. **Amanat**: Pesan moral atau nilai kebijaksanaan yang ingin disampaikan pengarang kepada pembaca."
      }
    ],
    quizBank: [
      {
        id: "q-ind-01",
        bab: 1,
        question: "Ciri bahasa ragam ilmiah yang menggunakan kata-kata bermakna sebenarnya dan bebas dari penafsiran ganda disebut bersikap...",
        options: ["Konotatif", "Denotatif", "Metaforis", "Asosiatif"],
        answerIndex: 1,
        explanation: "Bahasa ilmiah wajib bersifat denotatif (makna leksikal lugas yang sebenarnya) guna menjamin objektivitas informasi.",
        difficulty: "Mudah"
      },
      {
        id: "q-ind-02",
        bab: 2,
        question: "Pada struktur karya tulis ilmiah (KTI), rumusan masalah, tujuan penelitian, dan latar belakang masalah berada pada bagian...",
        options: ["Bab I Pendahuluan", "Bab II Kajian Teori", "Bab III Metodologi", "Bab IV Pembahasan"],
        answerIndex: 0,
        explanation: "Bab I Pendahuluan memuat latar belakang fenomena masalah, batasan masalah, rumusan masalah, serta tujuan dan kegunaan penelitian.",
        difficulty: "Mudah"
      },
      {
        id: "q-ind-03",
        bab: 4,
        question: "Teknik menyajikan kembali gagasan penulis lain dengan susunan kalimat dan bahasa kita sendiri tanpa mengubah esensi maknanya disebut...",
        options: ["Plagiarisme", "Parafrase", "Resensi", "Sinopsis"],
        answerIndex: 1,
        explanation: "Parafrase adalah teknik perumusan ulang ide pustaka dengan kata-kata sendiri untuk menghindari plagiarisme langsung.",
        difficulty: "Mudah"
      },
      {
        id: "q-ind-04",
        bab: 5,
        question: "Berdasarkan pedoman penulisan sitasi APA Style, unsur yang ditulis miring (italic) pada rujukan buku cetak adalah...",
        options: ["Nama pengarang", "Tahun terbit", "Judul buku", "Nama kota terbit"],
        answerIndex: 2,
        explanation: "Dalam format APA Style, judul buku ditulis dengan huruf miring (italics), sedangkan nama penulis ditulis tegak diawali nama belakang.",
        difficulty: "Sedang"
      },
      {
        id: "q-ind-05",
        bab: 7,
        question: "Jika pengarang menceritakan kisah dengan menyebut dirinya menggunakan kata ganti 'aku' atau 'saya', maka sudut pandang yang digunakan adalah...",
        options: [
          "Sudut pandang orang ketiga serba tahu",
          "Sudut pandang orang ketiga pengamat",
          "Sudut pandang orang pertama pelaku utama / sampingan",
          "Sudut pandang campuran anonim"
        ],
        answerIndex: 2,
        explanation: "Penggunaan kata 'aku/saya' mencirikan sudut pandang orang pertama (first-person point of view).",
        difficulty: "Mudah"
      }
    ],
    flashcards: [
      { q: "Apa nama sifat kata yang bermakna sebenarnya dalam karya ilmiah?", a: "Denotatif." },
      { q: "Apa nama teknik menyusun ulang kalimat sumber tanpa ubah makna?", a: "Parafrase." },
      { q: "Sebutkan 3 bagian struktur Bab I Pendahuluan KTI!", a: "Latar Belakang, Rumusan Masalah, dan Tujuan Penelitian." },
      { q: "Apa nama unsur internal pembangun cerita sastra dari dalam?", a: "Unsur Intrinsik." },
      { q: "Unsur apa yang dicetak miring pada penulisan buku di daftar pustaka APA?", a: "Judul Buku." }
    ]
  }
];

// Helper functions to get module data
function getAllModules() {
  return MODULES_DATA;
}

function getModuleById(id) {
  return MODULES_DATA.find(m => m.id === id) || MODULES_DATA[0];
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { MODULES_DATA, getAllModules, getModuleById };
}

