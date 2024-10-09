const quote = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

const students = ["Youssef", "Badr", "Rayan", "Nada", "Salma", "Benmoussa", "Malak.B", "Hamza", "Anas", "Nour", 
    "Mohammed", "Arwa", "Sofia", "Zemamma", "Celine", "Amine", "Zaid", "Ghina", "Mariam", "Malak.G", "Rich", 
    "Iyad", "Joudia", "Ghita", "Kenza", "Ghita.C", "Basma"];

const quotes = [
    "Je ne savais pas qu'on avait un contrôle aujourd'hui !",
    "Est-ce que quelqu'un a fait les devoirs ?",
    "Quand est-ce que la pause commence ?",
    "Je suis sûr qu'on n'avait pas de devoirs pour aujourd'hui...",
    "Qui peut me prêter un stylo ?",
    "Tu as vu la vidéo sur TikTok ?",
    "On va encore jouer au foot à la récré ?",
    "La dernière fois que j'ai fait ça, c'était en primaire !",
    "Je suis fatigué, je vais faire une sieste pendant ce cours.",
    "La cantine aujourd'hui, c'est pizza ?",
    "Je crois que j'ai perdu mon carnet...",
    "Personne n'a vu le prof de maths aujourd'hui, non ?"
];

function generateQuote() {
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = `<p><strong>${randomStudent}</strong> a dit : « ${randomQuote} »</p>`;
}

// Génère une citation aléatoire au chargement de la page
generateQuote();

// Génère une nouvelle citation lors du clic sur le bouton
generateBtn.addEventListener('click', generateQuote);
