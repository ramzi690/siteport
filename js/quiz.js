const quizData = [
    {
        question: "Que signifie HTML ?",
        options: {
            a: "HyperText Markup Language",
            b: "HighText Marking Language",
            c: "HyperText Making Language"
        },
        correct: "a"
    },
    {
        question: "Que signifie CSS ?",
        options: {
            a: "Computer Style Sheets",
            b: "Cascading Style Sheets",
            c: "Creative Style Sheets"
        },
        correct: "b"
    },
    {
        question: "Quel langage est principalement utilisé pour ajouter de l'interactivité à une page web ?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript"
        },
        correct: "c"
    },
    {
        question: "Quelle balise est utilisée pour insérer une image dans une page HTML ?",
        options: {
            a: "<img>",
            b: "<image>",
            c: "<pic>"
        },
        correct: "a"
    },
    {
        question: "Comment spécifier une couleur en CSS ?",
        options: {
            a: "background: #000000;",
            b: "bg: #000000;",
            c: "color: hex(#000000);"
        },
        correct: "a"
    },
    {
        question: "Quel attribut HTML est utilisé pour définir un identifiant unique ?",
        options: {
            a: "class",
            b: "id",
            c: "name"
        },
        correct: "b"
    },
    {
        question: "Quelle balise est utilisée pour créer un lien hypertexte en HTML",
        options: {
            a: "<link>",
            b: "<a>",
            c: "<href>",
            d:"<ul>"
        },
        correct: "b"
    },
    {
        question: "Quel est le bon format de commentaire en JavaScript ?",
        options: {
            a: "// Ceci est un commentaire",
            b: "<!-- Ceci est un commentaire -->",
            c: "** Ceci est un commentaire **"
        },
        correct: "a"
    },
    {
        question: "Quel attribut CSS contrôle la taille de la police ?",
        options: {
            a: "font-weight",
            b: "text-size",
            c: "font-size"
        },
        correct: "c"
    },
    {
        question: "Quelle méthode JavaScript peut être utilisée pour sélectionner un élément par son ID ?",
        options: {
            a: "document.querySelector()",
            b: "document.getElementById()",
            c: "document.getElementsByClassName()"
        },
        correct: "b"
    }
];

document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    let corrections = [];

    quizData.forEach((q, index) => {
        const answer = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (answer && answer.value === q.correct) {
            score++;
        }
        corrections.push(`
            <p>Question ${index + 1}: ${answer ? (answer.value === q.correct ? '✅' : '❌') : '❌'}</p>
            <p>Réponse correcte: ${q.options[q.correct]}</p>
        `);
    });

    document.getElementById('score').textContent = score;
    document.getElementById('corrections').innerHTML = corrections.join('');
    document.getElementById('result').style.display = 'block';
});
