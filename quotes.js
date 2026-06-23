// =============================================================================
// QUOTES.JS — DAFTAR KUTIPAN UNTUK TYPING SPEED TEST
// =============================================================================
// Cara menambah/mengganti kutipan:
//   1. Setiap kutipan adalah satu objek dengan 2 bagian:
//      - text   : kalimat yang akan diketik oleh pemain
//      - source : sumber kutipan (nama buku, lagu, penulis, dst), akan
//                 ditampilkan ke pemain SETELAH mereka selesai mengetik
//   2. Tambahkan objek baru di antara tanda kurung kurawal { }, pisahkan
//      dengan koma.
//   3. JANGAN hapus tanda kutip ("), kurung kurawal ({}), atau koma (,) —
//      itu bagian dari format, kalau dihapus skripnya akan error.
//
// Contoh menambah kutipan baru:
//   { text: "Kutipan baru Anda di sini", source: "Nama Buku - Nama Penulis" },
//
// PENTING SOAL HAK CIPTA:
//   Kutipan di bawah ini sengaja dibuat generik / berupa peribahasa umum
//   (bukan jiplakan dari buku atau lagu tertentu) karena materi yang
//   benar-benar dikutip persis dari karya berhak cipta (buku, lirik lagu)
//   berisiko melanggar hak cipta jika direproduksi.
//
//   Silakan ganti/tambahkan sendiri dengan kutipan pilihan Anda (misalnya
//   dari buku atau lagu favorit Anda) — itu adalah pilihan dan tanggung
//   jawab pribadi Anda sebagai pengguna akhir aplikasi ini.
// =============================================================================

const QUOTES_LIST = [
    { text: "Kegagalan adalah guru terbaik bagi mereka yang mau belajar darinya.", source: "Peribahasa Umum" },
    { text: "Sedikit demi sedikit, lama-lama menjadi bukit.", source: "Peribahasa Indonesia" },
    { text: "Air beriak tanda tak dalam, air tenang menghanyutkan.", source: "Peribahasa Indonesia" },
    { text: "Berakit-rakit ke hulu, berenang-renang ke tepian.", source: "Peribahasa Indonesia" },
    { text: "Practice makes perfect, but nobody is asking for perfection.", source: "Kutipan Umum" },
    { text: "The journey of a thousand miles begins with a single step.", source: "Kutipan Umum" },
    { text: "Waktu adalah satu-satunya kekayaan yang sama dimiliki oleh semua orang.", source: "Kutipan Orisinal" },
    { text: "Jangan pernah menyerah pada mimpi hanya karena waktu yang dibutuhkan untuk mencapainya terasa panjang.", source: "Kutipan Orisinal" },
    { text: "A journey of growth never truly ends, it only changes direction.", source: "Kutipan Orisinal" },
    { text: "Hidup ini seperti mengetik, semakin sering dilatih semakin lancar dijalani.", source: "Kutipan Orisinal" },
    { text: "Tak ada gading yang tak retak, tak ada manusia yang tak pernah salah.", source: "Peribahasa Indonesia" },
    { text: "Like a river finding its way to the sea, persistence always finds a path forward.", source: "Kutipan Orisinal" },
    { text: "Bagai pungguk merindukan bulan, jangan biarkan harapan tanpa usaha nyata.", source: "Peribahasa Indonesia" },
    { text: "Success is not final, failure is not fatal, it is the courage to continue that counts.", source: "Kutipan Umum" },
    { text: "Rajin pangkal pandai, hemat pangkal kaya.", source: "Peribahasa Indonesia" },
    { text: "Setiap detik yang berlalu adalah kesempatan baru untuk menjadi lebih baik dari kemarin.", source: "Kutipan Orisinal" },
    { text: "The quick brown fox jumps over the lazy dog near the riverbank.", source: "Kalimat Latihan Umum" },
    { text: "Bersatu kita teguh, bercerai kita runtuh.", source: "Peribahasa Indonesia" },
    { text: "Dreams do not work unless you do, so wake up and chase them every single day.", source: "Kutipan Orisinal" },
    { text: "Malu berbuat baik adalah keuntungan setan, jangan biarkan rasa malu menghalangi kebaikan.", source: "Kutipan Orisinal" },
    { text: "Where there is a will, there is always a way, even when the path seems unclear.", source: "Kutipan Umum" },
    { text: "Karena sesungguhnya sesudah kesulitan itu ada kemudahan, maka teruslah berusaha dengan sabar.", source: "Kutipan Orisinal" },
    { text: "Setiap langkah kecil hari ini adalah pondasi untuk pencapaian besar di masa depan.", source: "Kutipan Orisinal" },
    { text: "Knowledge speaks, but wisdom listens carefully before making any decision.", source: "Kutipan Umum" },
    { text: "Buah jatuh tidak akan jauh dari pohonnya, begitu pula kebiasaan baik akan menurun.", source: "Peribahasa Indonesia" }
];
