// Variable pour suivre le nombre de clics sur le titre
let clickCount = 0;
const clickThreshold = 5; // Nombre de clics pour activer le mode chaotique

// Fonction pour basculer entre le mode normal et chaotique
function toggleChaoticMode() {
    document.body.classList.toggle('chaotic-mode');
}

// Fonction pour vérifier le nombre de clics
function checkClicks() {
    clickCount++;

    if (clickCount >= clickThreshold) {
        toggleChaoticMode(); // Active ou désactive le mode chaotique
        clickCount = 0; // Réinitialise le compteur de clics
    }
}

// Ajout d'un événement de clic sur le titre (h1)
const title = document.querySelector('h1');
title.addEventListener('click', checkClicks);