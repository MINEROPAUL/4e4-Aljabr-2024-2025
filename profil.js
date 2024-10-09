const profile = document.getElementById('profile');
const generateBtn = document.getElementById('generate-btn');

const students = ["Youssef", "Badr", "Rayan", "Nada", "Salma", "Benmoussa", "Malak.B", "Hamza", "Anas", "Nour", 
    "Mohammed", "Arwa", "Sofia", "Zemamma", "Celine", "Amine", "Zaid", "Ghina", "Mariam", "Malak.G", "Rich", 
    "Iyad", "Joudia", "Ghita", "Kenza", "Ghita.C", "Basma"];

function generateProfile() {
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    const traits = [
        "Nombre de siestes en classe : " + Math.floor(Math.random() * 20),
        "Talent pour éviter les devoirs : " + ["Expert", "Débutant", "Champion"][Math.floor(Math.random() * 3)],
        "Champion du bavardage : " + ["Oui", "Non", "Maître absolu"][Math.floor(Math.random() * 3)],
        "Note en cours d'EPS : " + Math.floor(Math.random() * 20) + "/20",
        "Excuses inventées pour les retards : " + Math.floor(Math.random() * 10),
        "Compétences en siestes instantanées : " + ["10/10", "5/10", "3/10"][Math.floor(Math.random() * 3)],
        "Maître des excuses pour ne pas rendre les devoirs : " + ["Oui", "Non", "Peut mieux faire"][Math.floor(Math.random() * 3)]
    ];

    profile.innerHTML = `<h2>Profil de ${randomStudent} :</h2>`;
    traits.forEach(trait => {
        profile.innerHTML += `<p>${trait}</p>`;
    });
}

// Génère un profil aléatoire au chargement de la page
generateProfile();

// Génère un nouveau profil lors du clic sur le bouton
generateBtn.addEventListener('click', generateProfile);
