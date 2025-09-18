const languageButtons = {
    es: document.getElementById("es-btn"),
    pt: document.getElementById("pt-btn"),
    en: document.getElementById("en-btn"),
    it: document.getElementById("it-btn"),
};

const translations = {
    es: {
        about_text: "Somos un equipo dedicado a ofrecer la mejor experiencia a nuestros clientes.",
        homelink: "Inicio",
        explorelink: "Explorar",
        aboutlink: "Sobre Nosotros",
        title: "URBAN TOURS",
        subtitle: "Explora Buenos Aires, descubre lo ",
        exploreHeading: "Explora Buenos Aires",
        aboutHeading: "Sobre Nosotros",
        welcome: "¡Bienvenidos!",
        welcome_sub: "Descubre nuestros destinos y comienza tu próxima aventura.",
        explore_text: "Urban Tours Buenos Aires es reconocido como uno de los operadores turísticos más destacados de Argentina, especializado en ofrecer una diversa gama de recorridos y soluciones de transporte. Nuestro equipo de expertos en viajes se compromete a brindar servicios de primera calidad, asesoramiento personalizado y asistencia para que su experiencia en Argentina sea inolvidable y llena de emociones. Ponemos a tu disposición numerosas opciones para descubrir los destinos más fascinantes, las atracciones más icónicas, maravillas naturales únicas y sumergirte en la vibrante cultura, historia y legado de Buenos Aires, además de disfrutar de emocionantes actividades de aventura. Nuestro personal altamente capacitado puede organizar un recorrido excepcional por la Ciudad de Buenos Aires, diseñado para ajustarse a tus preferencias y presupuesto. Como especialistas en turismo, creamos itinerarios personalizados para maximizar tu tiempo en el país. Si buscas un guía profesional, experimentado y de confianza, somos la elección perfecta. Nos apasiona convertir tu visita a Argentina en una experiencia única.",
        tour1title: "Circuito Casco Histórico de la Ciudad",
        tour1description: "La Plaza de Mayo, destacada por Pirámide de Mayo y los emblemáticos edificios de su entorno...",
        tour2title: "Circuito La Boca: Vuelta de Rocha - Caminito",
        tour2description: "El arte y el fútbol argentino están muy vinculados con este paseo lleno de vida y color...",
        antesDeLlegar: "Antes de llegar",
        primeraVez: "Primera vez",
        primeraVezDescription: "Si es tu primera vez en Buenos Aires, explora los puntos turísticos más importantes utilizando este mapa interactivo. ¡Planifica tus recorridos con facilidad!",
        interactiveMap: "Ver mapa interactivo"
    },
    pt: {
        about_text: "Somos uma equipe dedicada a oferecer a melhor experiência para nossos clientes.",
        homelink: "Início",
        explorelink: "Explorar",
        aboutlink: "Sobre Nós",
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, descubra o ",
        exploreHeading: "Explore Buenos Aires",
        aboutHeading: "Sobre Nós",
        welcome: "Bem-vindos!",
        welcome_sub: "Descubra nossos destinos e comece sua próxima aventura.",
        explore_text: "Urban Tours Buenos Aires é reconhecida como uma das operadoras de turismo mais destacadas da Argentina, especializada em oferecer uma ampla variedade de passeios e soluções de transporte. Nossa equipe de especialistas em viagens está comprometida em fornecer serviços de alta qualidade, atendimento personalizado e assistência para que sua experiência na Argentina seja inesquecível e emocionante. Oferecemos inúmeras opções para explorar os destinos mais fascinantes, as atrações mais icônicas, maravilhas naturais únicas e mergulhar na vibrante cultura, história e legado de Buenos Aires, além de aproveitar atividades de aventura emocionantes. Nossa equipe altamente qualificada pode organizar um passeio excepcional pela cidade de Buenos Aires, projetado para atender às suas preferências e orçamento. Como especialistas em turismo, criamos itinerários personalizados para maximizar seu tempo no país. Se você procura um guia profissional, experiente e confiável, somos a escolha perfeita. Estamos apaixonados por tornar sua visita à Argentina uma experiência única.",
        tour1title: "Circuito Centro Histórico da Cidade",
        tour1description: "A Praça de Maio, destacada pela Pirâmide de Maio e os emblemáticos edifícios ao seu redor...",
        tour2title: "Circuito La Boca: Vuelta de Rocha - Caminito",
        tour2description: "A arte e o futebol argentino estão intimamente ligados a este passeio cheio de vida e cor...",
        antesDeLlegar: "Antes de chegar",
        primeraVez: "Primeira vez",
        primeraVezDescription: "Se é sua primeira vez em Buenos Aires, explore os pontos turísticos mais importantes usando este mapa interativo. Planeje seus passeios com facilidade!",
        interactiveMap: "Ver mapa interativo"
    },
    en: {
        about_text: "We are a team dedicated to providing the best experience for our clients.",
        homelink: "Home",
        explorelink: "Explore",
        aboutlink: "About Us",
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, discover ",
        exploreHeading: "Explore Buenos Aires",
        aboutHeading: "About Us",
        welcome: "Welcome!",
        welcome_sub: "Discover our destinations and start your next adventure.",
        explore_text: "Urban Tours Buenos Aires is recognized as one of the most outstanding tour operators in Argentina, specializing in offering a wide range of tours and transportation solutions. Our team of travel experts is committed to providing top-quality services, personalized advice, and assistance to ensure your experience in Argentina is unforgettable and exciting. We offer numerous options to discover the most fascinating destinations, iconic attractions, unique natural wonders, and immerse yourself in the vibrant culture, history, and legacy of Buenos Aires, as well as enjoy thrilling adventure activities. Our highly trained staff can organize an exceptional tour of Buenos Aires, designed to suit your preferences and budget. As tourism specialists, we create personalized itineraries to maximize your time in the country. If you are looking for a professional, experienced, and reliable guide, we are the perfect choice. We are passionate about making your visit to Argentina a unique experience.",
        tour1title: "Historic City Center Circuit",
        tour1description: "The Plaza de Mayo, highlighted by the May Pyramid and its iconic surrounding buildings...",
        tour2title: "La Boca Circuit: Vuelta de Rocha - Caminito",
        tour2description: "Art and Argentine football are closely linked to this vibrant and colorful tour...",
        antesDeLlegar: "Before arriving",
        primeraVez: "First time",
        primeraVezDescription: "If it's your first time in Buenos Aires, explore the most important tourist spots using this interactive map. Plan your routes with ease!",
        interactiveMap: "View interactive map"
    },
    it: {
        about_text: "Siamo un team dedicato a offrire la migliore esperienza ai nostri clienti.",
        homelink: "Home",
        explorelink: "Esplora",
        aboutlink: "Chi siamo",
        title: "URBAN TOURS",
        subtitle: "Esplora Buenos Aires, scopri ",
        exploreHeading: "Esplora Buenos Aires",
        aboutHeading: "Chi siamo",
        welcome: "Benvenuti!",
        welcome_sub: "Scopri le nostre destinazioni e inizia la tua prossima avventura.",
        explore_text: "Urban Tours Buenos Aires è riconosciuta come uno degli operatori turistici più rinomati dell'Argentina, specializzata nell'offrire un'ampia gamma di tour e soluzioni di trasporto. Il nostro team di esperti di viaggio si impegna a fornire servizi di alta qualità, consulenza personalizzata e assistenza per garantire che la tua esperienza in Argentina sia indimenticabile ed emozionante. Offriamo numerose opzioni per scoprire le destinazioni più affascinanti, le attrazioni più iconiche, meraviglie naturali uniche e immergerti nella vibrante cultura, storia e patrimonio di Buenos Aires, oltre a goderti attività di avventura emozionanti. Il nostro personale altamente qualificato può organizzare un tour eccezionale della città di Buenos Aires, progettato per adattarsi alle tue preferenze e al tuo budget. Come specialisti del turismo, creiamo itinerari personalizzati per ottimizzare il tuo tempo nel paese. Se stai cercando una guida professionale, esperta e affidabile, siamo la scelta perfetta. Siamo appassionati di trasformare la tua visita in Argentina in un'esperienza unica.",
        tour1title: "Circuito Centro Storico della Città",
        tour1title: "Circuito del Centro Storico della Città",
        tour1description: "La Plaza de Mayo, con la Piramide di Maggio e i suoi iconici edifici circostanti...",
        tour2title: "Circuito La Boca: Vuelta de Rocha - Caminito",
        tour2description: "L'arte e il calcio argentino sono strettamente legati a questo tour vibrante e colorato...",
        antesDeLlegar: "Prima di arrivare",
        primeraVez: "Prima volta",
        primeraVezDescription: "Se è la tua prima volta a Buenos Aires, esplora i punti turistici più importanti utilizzando questa mappa interattiva. Pianifica i tuoi percorsi con facilità!",
        interactiveMap: "Visualizza mappa interattiva"
    }
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

    // Actualizar el estado activo del selector de idiomas
    Object.keys(languageButtons).forEach((lang) => {
        languageButtons[lang].classList.remove('active');
    });
    languageButtons[language].classList.add('active');

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
    // Inicializar el carrusel con mejor configuración
    const glider = new Glider(document.querySelector(".glider"), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: false,
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
        },
        scrollLock: true,
        scrollLockDelay: 100,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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

    // Auto-play del carrusel
    setInterval(() => {
        glider.scrollItem('next');
    }, 5000);

    // Pausar auto-play al hacer hover
    const gliderContainer = document.querySelector('.glider-contain');
    gliderContainer.addEventListener('mouseenter', () => {
        glider.scrollLock = true;
    });
    
    gliderContainer.addEventListener('mouseleave', () => {
        glider.scrollLock = false;
    });

    // Animaciones de scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar todas las secciones
    document.querySelectorAll('.welcome-section, .explore-section, .antes-de-llegar-section, .tours-section, .circuits-section').forEach(section => {
        section.classList.add('section-animate');
        observer.observe(section);
    });

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
