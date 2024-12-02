const translations = {
    es: {
        title: "URBAN TOURS",
        subtitle: "Explora Buenos Aires, descubrí lo <span class='dynamic-word'></span>",
        welcome: "Bienvenidos a urBAn Tours",
        description: "Tu guía experta para explorar los mejores lugares de Buenos Aires y alrededores.",
        home: "Inicio",
        about: "Nosotros",
        contact: "Contacto",
        circuits: "Circuitos",
        tours: "Tours"
    },
    en: {
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, discover the <span class='dynamic-word'></span>",
        welcome: "Welcome to urBAn Tours",
        description: "Your expert guide to exploring the best places in Buenos Aires and beyond.",
        home: "Home",
        about: "About Us",
        contact: "Contact Us",
        circuits: "Circuits",
        tours: "Tours"
    },
    pt: {
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, descubra o <span class='dynamic-word'></span>",
        welcome: "Bem-vindo ao urBAn Tours",
        description: "Seu guia especializado para explorar os melhores lugares de Buenos Aires e arredores.",
        home: "Início",
        about: "Sobre Nós",
        contact: "Contato",
        circuits: "Circuitos",
        tours: "Tours"
    }
};

const words = {
    es: ["auténtico", "único", "maravilloso"],
    en: ["authentic", "unique", "wonderful"],
    pt: ["autêntico", "único", "impressionante"]
};

let currentWordIndex = 0;
let currentLanguage = 'es'; // Asigna el idioma inicial
let dynamicWord = document.querySelector('.dynamic-word'); // Selecciona el elemento inicial

// Configuración de eventos para los botones de idioma
document.getElementById('es-btn').addEventListener('click', () => setLanguage('es'));
document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));
document.getElementById('pt-btn').addEventListener('click', () => setLanguage('pt'));

// Cambia el idioma y reinicia el efecto de tipeo
function setLanguage(lang) {
    currentLanguage = lang; // Actualiza el idioma actual
    currentWordIndex = 0; // Reinicia el índice de las palabras dinámicas

    // Actualiza el contenido de los elementos según el idioma seleccionado
    updateContent(lang);

    // Resetea el texto dinámico y muestra la primera palabra del nuevo idioma
    dynamicWord.textContent = words[currentLanguage][currentWordIndex]; // Muestra la primera palabra
}

// Actualiza el contenido de los elementos con las traducciones
function updateContent(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = translations[lang][key];
    });

    document.querySelectorAll('.nav-link').forEach((link, index) => {
        link.textContent = translations[lang][Object.keys(translations[lang])[index + 4]];
    });
}

// Inicia el ciclo de palabras dinámicas
function startTypingEffect() {
    typeEffect(words[currentLanguage][currentWordIndex], cycleWords);
}

// Efecto de tipeo
function typeEffect(word, callback) {
    let i = 0;
    dynamicWord.textContent = ""; // Limpia el texto antes de comenzar el efecto
    let typingInterval = setInterval(() => {
        dynamicWord.textContent = word.substring(0, i + 1);
        i++;
        if (i === word.length) {
            clearInterval(typingInterval);
            setTimeout(callback, 1000); // Espera 1 segundo antes de llamar al callback
        }
    }, 150);
}

// Efecto de borrado
function deleteEffect(callback) {
    let i = dynamicWord.textContent.length;
    let deletingInterval = setInterval(() => {
        dynamicWord.textContent = dynamicWord.textContent.substring(0, i - 1);
        i--;
        if (i === 0) {
            clearInterval(deletingInterval);
            callback();
        }
    }, 100);
}

// Ciclo de palabras dinámicas
function cycleWords() {
    deleteEffect(() => {
        currentWordIndex = (currentWordIndex + 1) % words[currentLanguage].length;
        typeEffect(words[currentLanguage][currentWordIndex], cycleWords);
    });
}

// Inicia el ciclo de palabras dinámicas para el idioma inicial
startTypingEffect();