// Selección de elementos
const languageButtons = {
    es: document.getElementById("es-btn"),
    pt: document.getElementById("pt-btn"),
    en: document.getElementById("en-btn"),
};

const translations = {
    es: {
        title: "URBAN TOURS",
        subtitle: "Explora Buenos Aires, descubra lo ",
        exploreHeading: "Explora Buenos Aires",
        aboutHeading: "Sobre Nosotros",
    },
    pt: {
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, descubra o ",
        exploreHeading: "Explore Buenos Aires",
        aboutHeading: "Sobre Nós",
    },
    en: {
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, discover the ",
        exploreHeading: "Explore Buenos Aires",
        aboutHeading: "About Us",
    },
};

const dynamicWordOptions = {
    es: ["único", "bello", "emocionante"],
    pt: ["único", "belo", "emocionante"],
    en: ["unique", "beautiful", "exciting"],
};

const dynamicWordElement = document.querySelector(".dynamic-word");
let typingInterval, dynamicWordTimeout;

function typeWriterEffect(words) {
    let wordIndex = 0;
    let charIndex = 0;

    // Limpiar cualquier intervalo o timeout previo
    clearInterval(typingInterval);
    clearTimeout(dynamicWordTimeout);

    function typeNextChar() {
        const currentWord = words[wordIndex];

        if (charIndex < currentWord.length) {
            dynamicWordElement.textContent += currentWord.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
            dynamicWordTimeout = setTimeout(() => {
                // Limpiar palabra actual y pasar a la siguiente
                charIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
                dynamicWordElement.textContent = "";
                typingInterval = setInterval(typeNextChar, 150); // Reiniciar efecto
            }, 2000); // Pausa después de escribir cada palabra
        }
    }

    // Iniciar el efecto de máquina de escribir
    dynamicWordElement.textContent = "";
    typingInterval = setInterval(typeNextChar, 150);
}

function setLanguage(language) {
    const { title, subtitle, exploreHeading, aboutHeading } = translations[language];
    document.querySelector(".hero-title h1").textContent = title;
    document.querySelector(".subtitle").childNodes[0].textContent = subtitle;
    document.querySelector(".explore-section h2").textContent = exploreHeading;
    document.querySelector(".circuits-section h2").textContent = aboutHeading;

    // Actualizar las palabras dinámicas con efecto de máquina de escribir
    const words = dynamicWordOptions[language];
    typeWriterEffect(words);
}

// Asignar eventos de cambio de idioma
Object.keys(languageButtons).forEach((lang) => {
    languageButtons[lang].addEventListener("click", () => setLanguage(lang));
});

// Inicializar en español
setLanguage("es");

// Lógica del carrusel
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Cambiar imagen cada 5 segundos
setInterval(nextSlide, 5000);

// Mostrar la primera diapositiva
showSlide(currentSlide);