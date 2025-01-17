const languageButtons = {
    es: document.getElementById("es-btn"),
    pt: document.getElementById("pt-btn"),
    en: document.getElementById("en-btn"),
    it: document.getElementById("it-btn"),
};

const translations = {
    es: {
        about_text: "Somos un equipo dedicado a ofrecer la mejor experiencia a nuestros clientes.",
        "home-link": "Inicio",
        "explore-link": "Explorar",
        "about-link": "Sobre Nosotros",
        title: "URBAN TOURS",
        subtitle: "Explora Buenos Aires, descubre lo ",
        exploreHeading: "Explora Buenos Aires",
        aboutHeading: "Sobre Nosotros",
        welcome: "¡Bienvenidos!",
        welcome_sub: "Descubre nuestros destinos y comienza tu próxima aventura.",
        explore_text: "Urban Tours Buenos Aires es reconocido como uno de los operadores turísticos más destacados de Argentina, especializado en ofrecer una diversa gama de recorridos y soluciones de transporte.",
        "tour1-title": "Circuito Casco Histórico de la Ciudad",
        "tour1-description": "La Plaza de Mayo, destacada por Pirámide de Mayo y los emblemáticos edificios de su entorno...",
        "tour2-title": "Circuito La Boca: Vuelta de Rocha - Caminito",
        "tour2-description": "El arte y el fútbol argentino están muy vinculados con este paseo lleno de vida y color...",
    },
    pt: {
        about_text: "Somos uma equipe dedicada a proporcionar a melhor experiência para nossos clientes.",
        "home-link": "Início",
        "explore-link": "Explorar",
        "about-link": "Sobre Nós",
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, descubra o ",
        exploreHeading: "Explore Buenos Aires",
        aboutHeading: "Sobre Nós",
        welcome: "Bem-vindos!",
        welcome_sub: "Descubra nossos incríveis serviços e descubra o que podemos fazer por você.",
        explore_text: "A Tours Buenos Aires se orgulha de ser uma das mais conceituadas operadoras de turismo da Argentina, com foco na organização de uma ampla variedade de passeios e soluções de traslado.",
        "tour1-title": "Circuito Centro Histórico da Cidade",
        "tour1-description": "A Plaza de Mayo, destacada pela Pirâmide de Mayo e os edifícios emblemáticos ao seu redor...",
        "tour2-title": "Circuito La Boca: Vuelta de Rocha - Caminito",
        "tour2-description": "A arte e o futebol argentino estão muito ligados a este passeio cheio de vida e cor...",
    },
    en: {
        about_text: "We are a team dedicated to providing the best experience for our clients.",
        "home-link": "Home",
        "explore-link": "Explore",
        "about-link": "About Us",
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, discover the ",
        exploreHeading: "Explore Buenos Aires",
        aboutHeading: "About Us",
        welcome: "Welcome!",
        welcome_sub: "Discover our amazing services and find out what we can do for you!",
        explore_text: "Tours Buenos Aires is proud to be rated as one of the most reputable tour operators in Argentina that focuses on arranging a wide variety of tours and transfer solutions.",
        "tour1-title": "City Historical Center Circuit",
        "tour1-description": "Plaza de Mayo, highlighted by the Pyramid of May and the emblematic buildings around it...",
        "tour2-title": "La Boca Circuit: Vuelta de Rocha - Caminito",
        "tour2-description": "Argentine art and football are closely linked to this lively and colorful walk...",
    },
    it: {
        about_text: "Siamo un team dedicato a offrire la migliore esperienza ai nostri clienti.",
        "home-link": "Home",
        "explore-link": "Esplora",
        "about-link": "Chi Siamo",
        title: "URBAN TOURS",
        subtitle: "Esplora Buenos Aires, scopri il ",
        exploreHeading: "Esplora Buenos Aires",
        aboutHeading: "Chi Siamo",
        welcome: "Benvenuti!",
        welcome_sub: "Scopri le nostre incredibili destinazioni e inizia la tua prossima avventura.",
        explore_text: "Tours Buenos Aires è orgogliosa di essere una delle agenzie di viaggio più rinomate in Argentina, specializzata nell'organizzazione di un'ampia gamma di tour e soluzioni di trasferimento.",
        "tour1-title": "Circuito Centro Storico della Città",
        "tour1-description": "Plaza de Mayo, evidenziata dalla Piramide de Mayo e dagli edifici emblematici nei dintorni...",
        "tour2-title": "Circuito La Boca: Vuelta de Rocha - Caminito",
        "tour2-description": "L'arte e il calcio argentino sono strettamente legati a questa passeggiata piena di vita e colore...",
    },
};

const dynamicWordOptions = {
    es: ["único", "bello", "emocionante"],
    pt: ["único", "belo", "emocionante"],
    en: ["unique", "beautiful", "exciting"],
    it: ["unico", "bello", "emozionante"],
};

const dynamicWordElement = document.querySelector(".dynamic-word");
let typingInterval, dynamicWordTimeout;

function typeWriterEffect(words) {
    let wordIndex = 0;
    let charIndex = 0;

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
                charIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
                dynamicWordElement.textContent = "";
                typingInterval = setInterval(typeNextChar, 150);
            }, 2000);
        }
    }

    dynamicWordElement.textContent = "";
    typingInterval = setInterval(typeNextChar, 150);
}

function setLanguage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-key]");

    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    const words = dynamicWordOptions[language];
    typeWriterEffect(words);
}

Object.keys(languageButtons).forEach((lang) => {
    languageButtons[lang].addEventListener("click", () => setLanguage(lang));
});

setLanguage("es");

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

setInterval(nextSlide, 8000);

showSlide(currentSlide);

document.addEventListener("DOMContentLoaded", function () {
    new Glider(document.querySelector(".glider"), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: false,
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
