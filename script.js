document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    const numberOfSnowflakes = 150; // guess what "numberOfSnowflakes" means haha 

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const size = Math.random() * 4 + 2; // size (px)
        const startX = Math.random() * 100; // start position (precentage i think not sure anymore)
        const fallDuration = Math.random() * 10 + 8; // duration (seconds)
        const fallDelay = Math.random() * 10; // start delay (seconds)
        const opacity = Math.random() * 0.5 + 0.4; // opacity

        // random horizontal sway using CSS variable (nerd emoj)
         const swayX = (Math.random() - 0.5) * 20; 
         snowflake.style.setProperty('--sway-x', `${swayX}px`); 

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}vw`; 
        snowflake.style.opacity = opacity;

        snowflake.style.animationDuration = `${fallDuration}s`;
        snowflake.style.animationDelay = `${fallDelay}s`;

        snowflake.style.top = '-10px';

        snowContainer.appendChild(snowflake);
    }

    // create the glorified css dots
    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
});
