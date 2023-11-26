// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk memulai backsound secara otomatis
    function playBacksound() {
        const backsound = document.getElementById('backsound');
        backsound.play();
    }

    // Panggil fungsi untuk memulai backsound saat halaman dimuat
    playBacksound();
});

function showMessage() {
    const messageDiv = document.getElementById('message');
    const backsound = document.getElementById('backsound');

    const response = confirm("Maukah kamu menjalani kehidupan ini bersamaku?");

    if (response) {
        const answer = confirm("Maukah kamu menjadi pacarku?");
        if (answer) {
            messageDiv.innerHTML = "terimakasih sayang.";
        } else {
            messageDiv.innerHTML = "Terimakasih Siti.";
        }
    } else {
        messageDiv.innerHTML = "Program diakhiri.";
    }
}