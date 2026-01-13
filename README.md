# UAS-Maulana-Ardhian-Ismail
Projek ini adalah sebuah Landing Page Pendaftaran Seminar UI/UX yang bertujuan untuk memfasilitasi pendaftaran peserta secara digital. Aplikasi web ini memiliki antarmuka yang bersih dengan informasi acara seperti tanggal (20 Januari 2026) dan lokasi (Aula STIKOM ELRAHMA). Fitur utamanya mencakup formulir pendaftaran dengan validasi data di sisi klien dan sistem tampilan daftar peserta yang diperbarui secara otomatis menggunakan JavaScript. Secara desain, projek ini sudah responsif, di mana tata letak akan berubah menjadi dua kolom pada layar besar (minimal 992px) menggunakan CSS Grid.

Alur Logika / Algoritma
Berikut adalah tahapan logika yang dijalankan oleh aplikasi saat pengguna berinteraksi dengan formulir:

Inisialisasi Sistem:
Sistem menetapkan variabel untuk elemen-elemen penting seperti formulir (regisform), tabel (listikut), dan area pesan (pesan).
Sistem menyiapkan sebuah array kosong bernama pengikut untuk menyimpan data dan menetapkan batasan KUOTA maksimal sebanyak 3 orang.

Input dan Pengiriman (Submit):
Sistem menunggu pengguna menekan tombol "Daftar Sekarang".
Saat dikirim, sistem mencegah halaman melakukan pemuatan ulang (refresh) secara otomatis menggunakan e.preventDefault().
Sistem mengambil nilai dari input nama, email, nomor HP, dan kategori.

Proses Validasi (Penyaringan):
Pengecekan Kekosongan: Sistem memeriksa apakah ada kolom yang belum diisi; jika kosong, muncul pesan error.
Pengecekan Tipe Data HP: Sistem memastikan bahwa input nomor HP hanya berisi angka.
Pengecekan Kuota: Sistem memverifikasi apakah jumlah pendaftar saat ini sudah mencapai atau melebihi kuota 3 orang.
Pengecekan Format Email: Sistem memastikan alamat email yang dimasukkan mengandung karakter @.

Pemrosesan Data Berhasil:
Jika semua validasi terpenuhi, data baru dimasukkan ke dalam array pengikut.
Sistem menampilkan pesan sukses "Berhasil!" di layar.

Pembaruan Tampilan (Update UI):
Fungsi tabelbaru() dipanggil untuk membuat baris tabel (tr) baru secara dinamis dan menambahkannya ke dalam tabel daftar peserta.
Fungsi updateCounter() dijalankan untuk memperbarui angka jumlah pendaftar yang tampil di judul tabel.
Formulir dikosongkan kembali (form.reset()) agar siap digunakan oleh pendaftar berikutnya.
