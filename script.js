
console.log("ur big!");

const hoverAudio = document.getElementById('hoverSound');

const socialButtons = document.querySelectorAll('.social-button');

if (hoverAudio && socialButtons.length > 0) {
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverAudio.currentTime = 0;
            hoverAudio.play().catch(error => {
                console.error("Audio play failed:", error);
            });
        });

    });
} else {
    if (!hoverAudio) console.error("Audio element with ID 'hoverSound' not found.");
    if (socialButtons.length === 0) console.error("No elements with class 'social-button' found.");
}


// card tilt sigma dont touch
const card = document.querySelector('.card');

if (card) {
    document.body.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const maxTilt = 5;
        const tiltX = (y / (rect.height / 2)) * -maxTilt;
        const tiltY = (x / (rect.width / 2)) * maxTilt;
        card.style.setProperty('--tiltX', `${tiltX}deg`);
        card.style.setProperty('--tiltY', `${tiltY}deg`);
        card.style.transform = `perspective(1000px) rotateX(var(--tiltX, 0)) rotateY(var(--tiltY, 0))`;
    });

    document.body.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
    });

    card.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
}
