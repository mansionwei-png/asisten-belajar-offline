# 🎓 Asisten Belajar Offline (Bahan Latihan P13)

Aplikasi Web modern (*HTML, CSS, JavaScript*) yang berjalan **100% lokal di browser tanpa koneksi internet (offline)** untuk mendampingi siswa mempelajari seluruh modul materi pada folder **Bahan Latihan P13 (Koleksi_Modul_P13)**.

---

## ✨ Fitur Utama

### 1. 🤖 Panel Kiri: AI Chatbot Asisten Belajar (Aktif Default)
- **Kontekstual per Modul**: Chatbot secara ketat menjawab pertanyaan hanya berdasarkan materi modul yang sedang aktif dibuka.
- **Natural Language & Semantic Matching**: Mengenali pertanyaan definisi, rumus, tahapan proses, peristiwa sejarah, tokoh, perbandingan konsep, dan istilah glosarium.
- **Rekomendasi Pertanyaan Pintar (Chips)**: Menampilkan rekomendasi pertanyaan populer yang dapat diklik langsung oleh siswa.
- **Text-to-Speech (Suara Bahasa Indonesia)**: Siswa dapat mendengarkan penjelasan materi dengan tombol suara `🔊 Baca`.
- **Ekspor & Reset**: Mendukung penyalinan jawaban ke clipboard dan ekspor ringkasan percakapan menjadi file Markdown (`.md`).

### 2. 📝 Panel Kanan: Generator Kuis & Uji Pemahaman Interaktif
- **Sinkronisasi Modul**: Kuis otomatis menghasilkan soal-soal latihan sesuai kurikulum modul yang sedang aktif.
- **Pilihan Ganda (MCQ)**:
  - Soal dengan opsi A, B, C, D dan indikator interaktif.
  - Pembahasan kunci jawaban dan penjelasan rasional (*feedback* instan).
  - Navigasi nomor soal fleksibel dan indikator soal yang telah terjawab.
- **Kartu Belajar (Flashcard 3D)**:
  - Animasi kartu 3D flip untuk menghafal konsep dan tanya jawab cepat.
  - Pencatat pemahaman: *"Saya Paham 👍"* vs *"Perlu Diulang 🔄"*.
- **Mode Ujian Berwaktu (Timer)**: Hitung mundur waktu ujian dengan pengumpulan otomatis.
- **Kartu Hasil & Skor Komprehensif**: Nilai akhir, persentase kelulusan, predikat (*A+, A, B, C, D*), serta opsi cetak lembar belajar.

### 3. 📚 Cakupan 10 Modul Bahan Latihan P13 Lengkap
1. **Modul 01: Sejarah Indonesia** - Dinamika Kemerdekaan, Rengasdengklok & Diplomasi Kedaulatan RI
2. **Modul 02: Biologi** - Saluran Pencernaan Makanan, Kinetika Enzim & Metabolisme
3. **Modul 03: Fisika** - Dinamika Partikel, Vektor Gaya & Hukum Gerak Newton
4. **Modul 04: Kimia** - Termokimia, Entalpi Reaksi, Kalorimeter & Laju Reaksi
5. **Modul 05: Matematika** - Kalkulus Lanjut: Limit Aljabar, Turunan & Aplikasi Integral
6. **Modul 06: Sosiologi** - Struktur Sosial, Diferensiasi Kultural & Dinamika Konflik
7. **Modul 07: Geografi** - Geodinamika Litosfer, Tektonisme, Vulkanisme & Seismologi
8. **Modul 08: Ekonomi** - Sistem Moneter, Bank Indonesia, Pasar Modal BEI & Fiskal
9. **Modul 09: Informatika** - Arsitektur Komputer Von Neumann, TCP/IP & Keamanan Siber
10. **Modul 10: Bahasa Indonesia** - Kaidah Ragam Bahasa Ilmiah, Sistematika KTI & Kajian Sastra

### 4. 🎨 Desain & Estetika Premium
- **Tema Terang & Gelap (Dark & Light Mode)** dengan transisi halus.
- **Tampilan Fleksibel**: Pilihan mode **Split Screen (Berdampingan)** untuk layar desktop/laptop, atau mode **Tab** untuk tampilan fokus dan layar mobile.
- **Efek Suara Sintetis (Web Audio API)**: Memberikan feedback suara lembut saat klik tombol, jawaban benar, atau salah (dapat diheningkan sewaktu-waktu).
- **Buku Panduan & Glosarium Modal**: Buka seluruh silabus materi 7 bab per modul secara lengkap langsung dari dalam aplikasi.

---

## 🚀 Cara Menjalankan

### Cara 1: Menggunakan Local Server (Direkomendasikan)
1. Buka terminal di folder ini, lalu jalankan:
   ```bash
   node server.js
   ```
2. Atau cukup **klik ganda** file [start.bat](file:///c:/Users/Student/Documents/asisten-belajar-offline/start.bat) pada Windows.
3. Buka browser pada alamat:
   ```
   http://127.0.0.1:8080/
   ```

### Cara 2: Membuka Langsung File HTML
- Klik ganda file [index.html](file:///c:/Users/Student/Documents/asisten-belajar-offline/index.html) di file explorer untuk membukanya di browser apa pun (Google Chrome, Microsoft Edge, Firefox, Brave).
- Seluruh logika, dataset modul, dan stylesheet bersifat *self-contained* sehingga dapat berjalan secara offline!