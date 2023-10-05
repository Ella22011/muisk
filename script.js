document.addEventListener('DOMContentLoaded', function () {
    const kissButton = document.getElementById('kissButton');
    const floatingImages = document.querySelectorAll('.floating-image img');
    const muiskText = document.getElementById('muiskText');
    let isKissing = false;

    kissButton.addEventListener('click', () => {
        // Move the images towards each other
        floatingImages[0].style.transform = 'translateX(38px)';
        floatingImages[1].style.transform = 'translateX(-10px)';
        
        // Show the "muisk" text
        muiskText.style.display = 'block';

        // After a short delay, move the images back to their original positions
        setTimeout(() => {
            floatingImages[0].style.transform = 'translateX(0)';
            floatingImages[1].style.transform = 'translateX(0)';
            
            // Hide the "muisk" text again
            muiskText.style.display = 'none';
        }, 800); // Adjust the delay (in milliseconds) as needed
    });
});
