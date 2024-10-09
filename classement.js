const ranking = document.getElementById('ranking');
const generateBtn = document.getElementById('generate-btn');

const ranks = [
    "Élève le plus rapide à copier les devoirs", "Maître du bavardage",
    "Excuses les plus inventives pour ne pas rendre les devoirs", "Siestes les plus discrètes en classe",
    "Expert en lancers de gomme", "Meilleure imitation de voix", "Pro des retards sans excuse", 
    "Le roi du silence mystérieux", "Champion des excuses trop évidentes", "Le plus timide", 
    "Le plus distrait", "Champion des petites blagues", "Élève le plus cool", "Champion des cahiers impeccables", 
    "Fainéant ultime", "Stylé mais fainéant", "Expert en bavardage discret", "Le plus rapide à tout oublier",
    "L'experte des pauses interminables", "Champion des mini-siestes", "Mystérieux mais populaire", 
    "Le plus rapide en maths", "Expert en cacher ses gadgets", "La plus stylée"
];

const students = ["Youssef", "Badr", "Rayan", "Nada", "Salma", "Benmoussa", "Malak.B", "Hamza", "Anas", "Nour", 
    "Mohammed", "Arwa", "Sofia", "Zemamma", "Celine", "Amine", "Zaid", "Ghina", "Mariam", "Malak.G", "Rich", 
    "Iyad", "Joudia", "Ghita", "Kenza", "Ghita.C", "Basma"];

function generateRanking() {
    ranking.innerHTML = "<h2>Classement :</h2>";
    for (let i = 0; i < ranks.length; i++) {
        const randomStudent = students[Math.floor(Math.random() * students.length)];
        ranking.innerHTML += `<p>${i+1}. ${ranks[i]} : ${randomStudent}</p>`;
    }
}

// Génère un classement aléatoire au chargement de la page
generateRanking();

// Génère un nouveau classement lors du clic sur le bouton
generateBtn.addEventListener('click', generateRanking);
