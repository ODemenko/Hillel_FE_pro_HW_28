document.addEventListener('DOMContentLoaded', function() {
    
    let currentIndex = 0;
    const sliderImage = document.getElementById('slider-image');

    function updateImage() {
        sliderImage.src = images[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    let intervalId = setInterval(nextImage, 3000);

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, 3000);
    }

    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    
    arrowLeft.addEventListener('click', () => {
        previousImage();
        resetInterval();
    });
    
    arrowRight.addEventListener('click', () => {
        nextImage();
        resetInterval();
    });

    updateImage();
});