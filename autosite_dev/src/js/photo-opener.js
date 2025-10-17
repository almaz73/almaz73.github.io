const mainPhoto = document.getElementById('mainPhoto');

mainPhoto && mainPhoto.addEventListener('dblclick', function() {
    if (mainPhoto.requestFullscreen) {
        mainPhoto.requestFullscreen(); // Запрашиваем полноэкранный режим
    } else if (mainPhoto.mozRequestFullScreen) { // Firefox
        mainPhoto.mozRequestFullScreen();
    } else if (mainPhoto.webkitRequestFullscreen) { // Chrome, Safari, Opera
        mainPhoto.webkitRequestFullscreen();
    } else if (mainPhoto.msRequestFullscreen) { // IE/Edge
        mainPhoto.msRequestFullscreen();
    }
});