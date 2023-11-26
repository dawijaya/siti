// script.js
document.addEventListener('DOMContentLoaded', function() {
    const backsound = document.getElementById('backsound');
    const button = document.querySelector('button');

    function playBacksound() {
        backsound.play().then(function() {
            // Musik dimainkan
        }).catch(function(error) {
            // Autoplay tidak diizinkan, tidak perlu melakukan apa-apa
        });
    }

    // Panggil fungsi untuk memulai backsound saat halaman dimuat
    playBacksound();

    // Event listener untuk memulai backsound saat dokumen diklik
    document.addEventListener('click', function() {
        playBacksound();
        // Hapus event listener setelah interaksi pertama kali
        document.removeEventListener('click', arguments.callee);

        // Setelah klik, tambahkan event listener untuk menyembunyikan tombol setelah perintah selesai
        document.addEventListener('click', function() {
            hideButton();
        });
    });
});

function showMessage() {
    const messageDiv = document.getElementById('message');
    const response = confirm("Maukah kamu menjalani kehidupan ini bersamaku?");

    if (response) {
        const answer = confirm("Maukah kamu menjadi pacarku?");
        if (answer) {
            // Mengubah warna teks menjadi merah, contoh
            messageDiv.innerHTML = "<span style='color: white;'>Terimakasih sayang, Sekarang lihat aku.</span>";
        } else {
            messageDiv.innerHTML = "Terimakasih Siti.";
        }
    } else {
        messageDiv.innerHTML = "Program diakhiri.";
    }
}


function hideButton() {
    const button = document.querySelector('button');
    button.style.display = 'none';
}
