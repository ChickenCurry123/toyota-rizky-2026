function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("product-item");
    
    // 1. Sembunyikan semua item
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("hidden");
        // Opsional: hapus class aos-animate agar animasi bisa terulang dari awal
        x[i].classList.remove("aos-animate"); 
    }
    
    // 2. Tampilkan item yang kategorinya dipilih
    let selected = document.getElementsByClassName(c);
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove("hidden");
    }

    // 3. Mengatur warna tombol aktif
    let btns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove("tab-active", "bg-gray-900", "text-white");
        btns[i].classList.add("bg-white", "text-gray-600");

        if (btns[i].getAttribute("onclick").includes(c)) {
            btns[i].classList.add("tab-active", "bg-gray-900", "text-white");
            btns[i].classList.remove("bg-white", "text-gray-600");
        }
    }

    // 4. Jurus Refresh AOS agar animasi muncul kembali
    setTimeout(() => {
        AOS.refresh();
    }, 100);
}

// Gabungkan semua inisialisasi dalam satu DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Jalankan Feather Icons (untuk icon phone, map-pin, dll)
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Set default tampilan ke Hatchback saat pertama kali buka
    filterSelection('hatchback');
});
function updateActiveButton(category) {
    const btns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("tab-active");
        
        // Ambil teks tombol atau parameter untuk menentukan yang aktif
        let btnType = btns[i].getAttribute("onclick").match(/'([^']+)'/)[1];
        if (btnType === category) {
            btns[i].classList.add("tab-active");
        }
    }
}

// Default saat web dibuka: Hatchback
document.addEventListener("DOMContentLoaded", function() {
    filterSelection('hatchback');
});