document.addEventListener('DOMContentLoaded', function () {
    const kissButton = document.getElementById('kissButton');
    const floatingImages = document.querySelectorAll('.floating-image img');
    const muiskText = document.getElementById('muiskText');
    let isKissing = false;

    kissButton.addEventListener('click', () => {
        floatingImages[0].style.transform = 'translateX(38px)';
        floatingImages[1].style.transform = 'translateX(-10px)';
        
        muiskText.style.display = 'block';

        setTimeout(() => {
            floatingImages[0].style.transform = 'translateX(0)';
            floatingImages[1].style.transform = 'translateX(0)';
            
            muiskText.style.display = 'none';
        }, 800);
    });
});
