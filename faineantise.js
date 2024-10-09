const fainéantise = document.getElementById('fainéantise');
const generateBtn = document.getElementById('generate-btn');

const students = ["Youssef", "Badr", "Rayan", "Nada", "Salma", "Benmoussa", "Malak.B", "Hamza", "Anas", "Nour", 
    "Mohammed", "Arwa", "Sofia", "Zemamma", "Celine", "Amine", "Zaid", "Ghina", "Mariam", "Malak.G", "Rich", 
    "Iyad", "Joudia", "Ghita", "Kenza", "Ghita.C", "Basma"];

function generateFaineantise() {
    const messages = [
        `100% Fainéant ! On te conseille de faire une sieste, ${students[Math.floor(Math.random() * students.length)]}.`,
        `50% Fainéant, tu pourrais travailler un peu plus, ${students[Math.floor(Math.random() * students.length)]} !`,
        `20% Fainéant, presque un modèle, ${students[Math.floor(Math.random() * students.length)]} !`
    ];

    fainéantise.innerHTML = "<h2>Résultat :</h2>";
    fainéantise.innerHTML += `<p>${messages[Math.floor(Math.random() * messages.length)]}</p>`;
}

// Génère un test aléatoire au chargement de la page
generateFaineantise();

// Génère un nouveau test lors du clic sur le bouton
generateBtn.addEventListener('click', generateFaineantise);
