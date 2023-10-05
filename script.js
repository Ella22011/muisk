document.addEventListener('DOMContentLoaded', function () {
    const kissButton = document.getElementById('kissButton');
    const floatingImages = document.querySelectorAll('.floating-image img');

    let isKissing = false;

    kissButton.addEventListener('click', () => {
        // Move the images towards each other
        floatingImages[0].style.transform = 'translateX(35px)';
        floatingImages[1].style.transform = 'translateX(-10px)';
        
        // After a short delay, move the images back to their original positions
        setTimeout(() => {
            floatingImages[0].style.transform = 'translateX(0)';
            floatingImages[1].style.transform = 'translateX(0)';
        }, 500); // Adjust the delay (in milliseconds) as needed
    });
});
