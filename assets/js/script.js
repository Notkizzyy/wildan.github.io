// script.js
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content h2");
    let text = heroText.textContent;
    heroText.textContent = "";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
