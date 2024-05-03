var slideIndex = 0;
var slideshowTimeout;

showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    // Menyembunyikan semua slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Menghilangkan kelas "active" dari semua titik
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Memastikan index slide tidak melewati batas
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    
    // Menampilkan slide yang dipilih
    slides[slideIndex].style.display = "block";
    
    // Memberi kelas "active" pada titik yang sesuai
    dots[slideIndex].className += " active";
}

// Fungsi untuk menampilkan slide berdasarkan nomor slide
function currentSlide(n) {
    slideIndex = n;
    clearTimeout(slideshowTimeout); // Menghentikan slideshow otomatis saat ada interaksi dengan dot
    showSlides();
    
    // Menjalankan slideshow otomatis kembali setelah beberapa detik tanpa interaksi
    setTimeout(() => {
        startSlideshow();
    }, 5000); // Misalnya, slideshow otomatis akan kembali setelah 5 detik tanpa interaksi
}

// Fungsi untuk memulai slideshow otomatis
function startSlideshow() {
    slideIndex++;
    showSlides();
    slideshowTimeout = setTimeout(startSlideshow, 2000);
}

// Fungsi untuk menghentikan slideshow otomatis
function stopSlideshow() {
    clearTimeout(slideshowTimeout);
}

// Fungsi untuk menampilkan slide selanjutnya atau sebelumnya
function plusSlides(n) {
    slideIndex += n;
    clearTimeout(slideshowTimeout); // Menghentikan slideshow otomatis saat ada interaksi dengan dot
    showSlides();
    
    // Menjalankan slideshow otomatis kembali setelah beberapa detik tanpa interaksi
    setTimeout(() => {
        startSlideshow();
    }, 5000); // Misalnya, slideshow otomatis akan kembali setelah 5 detik tanpa interaksi
}

// Memulai slideshow otomatis saat halaman dimuat
startSlideshow();
