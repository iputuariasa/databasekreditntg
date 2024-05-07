// Mendapatkan elemen yang ingin Anda berikan kelas saat di-scroll
var elemen = document.getElementById("elemenAnda");

// Menentukan jarak scroll yang diinginkan sebelum kelas ditambahkan
var jarakScroll = 200; // Ganti dengan nilai jarak scroll yang diinginkan

// Menambahkan event listener untuk menangani peristiwa scroll
window.addEventListener("scroll", function() {
    // Mendapatkan posisi scroll vertikal saat ini
    var posisiScroll = window.scrollY || window.pageYOffset;

    // Memeriksa jika posisi scroll mencapai jarak yang diinginkan
    if (posisiScroll > jarakScroll) {
        // Menambahkan kelas ke elemen
        elemen.classList.add("kelasAnda");
    } else {
        // Menghapus kelas jika scroll tidak cukup jauh
        elemen.classList.remove("kelasAnda");
    }
});
