const form = document.getElementById('regisform');
const listikut = document.getElementById('listikut');
const data= document.getElementById('dataikut');
const pesan= document.getElementById('pesan');

let pengikut = [];
const KUOTA = 3; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const hp = document.getElementById('hp').value.trim();
    const kategori = document.getElementById('kategori').value;


    if (!nama || !email || !hp) {
        showMessage("Semua wajib diisi!", "error");
        return;
    }

      if (pengikut.length >= KUOTA) {
        showMessage("Pendaftaran ditutup, kuota sudah penuh", "error"); 
        return;
    }

     if (!email.includes('@')) {
        showMessage("Email harus menggunakan '@'!", "error");
        return;
    }


    if (isNaN(hp)) {
        showMessage("Nomor hanya boleh angka!", "error");
        return;
    }
    
    const pengikutbaru = { nama, email, hp, kategori };
    pengikut.push(pengikutbaru);

    showMessage("Berhasil!", "success");

    tabelbaru(pengikutbaru);
    databaru();
    
    form.reset();
});

function showMessage(text, type) {
    pesan.textContent = text;
    pesan.className = type;
}

function tabelbaru(data) {
    const databaru = document.createElement('tr');
    databaru.innerHTML = `
        <td>${data.nama}</td>
        <td>${data.email}</td>
        <td>${data.hp}</td>
        <td>${data.kategori}</td>
    `;
  listikut.appendChild(databaru);
}

function databaru() {
    data.textContent = pengikut.length;
}