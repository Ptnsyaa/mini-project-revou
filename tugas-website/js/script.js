// Fungsi untuk memanggil nama di awal
function askName() {
    let name = prompt("Silakan masukkan nama Anda:", "");
    if (name == null || name == "") {
        document.getElementById("user-name").innerHTML = "Guest";
    } else {
        document.getElementById("user-name").innerHTML = name;
    }
}

// Jalankan fungsi prompt saat halaman selesai loading
window.onload = askName;

// Logika Form
const form = document.getElementById("message-form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Supaya halaman tidak refresh

    // Ambil input
    const nama = document.getElementById("input-nama").value;
    const tgl = document.getElementById("input-tgl").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("input-pesan").value;
    const time = new Date();

    // Validasi sederhana
    if (nama == "" || tgl == "" || pesan == "") {
        alert("Mohon isi semua kolom!");
        return false;
    }

    // Tampilkan hasil
    document.getElementById("current-time").innerText = time.toLocaleString();
    document.getElementById("res-nama").innerText = nama;
    document.getElementById("res-tgl").innerText = tgl;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-pesan").innerText = pesan;

    alert("Pesan Terkirim!");
});