function openEnvelope() {
    const flap = document.querySelector('.envelope-flap');
    const letter = document.querySelector('.letter');

    // Open the envelope flap (stays under letter)
    flap.style.transform = 'rotateX(180deg)';

    // Slide out the letter higher
    setTimeout(() => {
        letter.style.transform = 'translateX(-50%) translateY(-250px)';
        letter.style.opacity = '1';
    }, 500);
}


