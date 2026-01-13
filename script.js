// Language translations
const translations = {
    es: {
        subtitle: "Explora Buenos Aires, descubra lo ",
        welcome: "¡Bienvenidos!",
        welcome_text: "Descubre nuestros destinos y comienza tu próxima aventura. Urban Tours Buenos Aires es reconocido como uno de los operadores turísticos más destacados de Argentina, especializado en ofrecer una diversa gama de recorridos y soluciones de transporte. Nuestro equipo de expertos en viajes se compromete a brindar servicios de primera calidad, asesoramiento personalizado y asistencia para que su experiencia en Argentina sea inolvidable y llena de emociones.",
        antesDeLlegar: "Antes de llegar",
        primeraVez: "Primera vez",
        primeraVezDescripction: "Si es tu primera vez en Buenos Aires, explora los puntos turísticos más importantes utilizando este mapa interactivo. ¡Planifica tus recorridos con facilidad!",
        interactiveMap: "Abrir mapa en nueva ventana",
        aboutHeading: "Sobre Nosotros"
    },
    pt: {
        subtitle: "Explore Buenos Aires, descubra o ",
        welcome: "Bem-vindos!",
        welcome_text: "Descubra nossos destinos e comece sua próxima aventura. Urban Tours Buenos Aires é reconhecida como uma das operadoras de turismo mais destacadas da Argentina, especializada em oferecer uma ampla variedade de passeios e soluções de transporte. Nossa equipe de especialistas em viagens está comprometida em fornecer serviços de alta qualidade, atendimento personalizado e assistência para que sua experiência na Argentina seja inesquecível e emocionante.",
        antesDeLlegar: "Antes de chegar",
        primeraVez: "Primeira vez",
        primeraVezDescripction: "Se é sua primeira vez em Buenos Aires, explore os pontos turísticos mais importantes usando este mapa interativo. Planeje seus passeios com facilidade!",
        interactiveMap: "Abrir mapa em nova janela",
        aboutHeading: "Sobre Nós"
    },
    en: {
        subtitle: "Explore Buenos Aires, discover ",
        welcome: "Welcome!",
        welcome_text: "Discover our destinations and start your next adventure. Urban Tours Buenos Aires is recognized as one of the most outstanding tour operators in Argentina, specializing in offering a wide range of tours and transportation solutions. Our team of travel experts is committed to providing top-quality services, personalized advice, and assistance to ensure your experience in Argentina is unforgettable and exciting.",
        antesDeLlegar: "Before arriving",
        primeraVez: "First time",
        primeraVezDescripction: "If it's your first time in Buenos Aires, explore the most important tourist spots using this interactive map. Plan your routes with ease!",
        interactiveMap: "Open map in new window",
        aboutHeading: "About Us"
    },
    it: {
        subtitle: "Esplora Buenos Aires, scopri ",
        welcome: "Benvenuti!",
        welcome_text: "Scopri le nostre destinazioni e inizia la tua prossima avventura. Urban Tours Buenos Aires è riconosciuta come uno degli operatori turistici più rinomati dell'Argentina, specializzata nell'offrire un'ampia gamma di tour e soluzioni di trasporto. Il nostro team di esperti di viaggio si impegna a fornire servizi di alta qualità, consulenza personalizzata e assistenza per garantire che la tua esperienza in Argentina sia indimenticabile ed emozionante.",
        antesDeLlegar: "Prima di arrivare",
        primeraVez: "Prima volta",
        primeraVezDescripction: "Se è la tua prima volta a Buenos Aires, esplora i punti turistici più importanti utilizzando questa mappa interattiva. Pianifica i tuoi percorsi con facilità!",
        interactiveMap: "Apri mappa in nuova finestra",
        aboutHeading: "Chi siamo"
    }
};

// Dynamic word options for typewriter effect
const dynamicWordOptions = {
    es: ["único", "bello", "emocionante"],
    pt: ["único", "belo", "emocionante"],
    en: ["unique", "beautiful", "exciting"],
    it: ["unico", "bello", "emozionante"]
};

// Typewriter effect
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

// Language switching
function setLanguage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-key]");

    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Update active language button
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.classList.remove('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-background-light');
    });
    
    const activeBtn = document.querySelector(`[data-lang="${language}"]`);
    if (activeBtn) {
        activeBtn.classList.add('ring-2', 'ring-primary', 'ring-offset-2', 'ring-offset-background-light');
    }

    const words = dynamicWordOptions[language];
    typeWriterEffect(words);
}

// Initialize language buttons
document.addEventListener("DOMContentLoaded", function() {
    // Language switching
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initialize with Spanish
    setLanguage('es');

    // Hero Image Slider
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize first slide
    showSlide(currentSlide);

    // Tours Carousel with Timeline Indicators
    const toursCarouselWrapper = document.querySelector('.tours-carousel-wrapper');
    const toursContainer = document.querySelector('.tours-carousel-container');
    const toursPrev = document.querySelector('.tours-prev');
    const toursNext = document.querySelector('.tours-next');
    const toursSlides = document.querySelectorAll('.tours-slide');
    const toursIndicators = document.querySelector('.tours-indicators');
    
    if (toursContainer && toursSlides.length > 0) {
        let currentToursSlide = 0;
        let toursPerView = 1;
        let maxToursSlides = 0;

        function updateToursPerView() {
            if (window.innerWidth >= 1024) {
                toursPerView = 3; // Desktop: 3 tours
            } else if (window.innerWidth >= 768) {
                toursPerView = 2; // Tablet: 2 tours
            } else {
                toursPerView = 1; // Mobile: 1 tour
            }
            maxToursSlides = Math.max(0, toursSlides.length - toursPerView);
            if (currentToursSlide > maxToursSlides) {
                currentToursSlide = maxToursSlides;
            }
        }

        function createIndicators() {
            if (!toursIndicators) return;
            toursIndicators.innerHTML = '';
            const totalIndicators = maxToursSlides + 1;
            
            for (let i = 0; i < totalIndicators; i++) {
                const indicator = document.createElement('button');
                indicator.className = `tours-indicator w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentToursSlide 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                }`;
                indicator.setAttribute('aria-label', `Ir al tour ${i + 1}`);
                indicator.addEventListener('click', () => goToSlide(i));
                toursIndicators.appendChild(indicator);
            }
        }

        function updateToursCarousel() {
            if (!toursContainer) return;
            const slideWidth = 100 / toursPerView;
            const translateX = -currentToursSlide * slideWidth;
            toursContainer.style.transform = `translateX(${translateX}%)`;
            createIndicators();
        }

        function goToSlide(index) {
            currentToursSlide = Math.max(0, Math.min(index, maxToursSlides));
            updateToursCarousel();
        }

        function nextToursSlide() {
            if (currentToursSlide < maxToursSlides) {
                currentToursSlide++;
            } else {
                currentToursSlide = 0; // Loop back to start
            }
            updateToursCarousel();
        }

        function prevToursSlide() {
            if (currentToursSlide > 0) {
                currentToursSlide--;
            } else {
                currentToursSlide = maxToursSlides; // Loop to end
            }
            updateToursCarousel();
        }

        // Event listeners for tours carousel
        if (toursNext) {
            toursNext.addEventListener('click', nextToursSlide);
        }
        
        if (toursPrev) {
            toursPrev.addEventListener('click', prevToursSlide);
        }

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateToursPerView();
                updateToursCarousel();
            }, 250);
        });

        // Auto-advance tours carousel every 8 seconds (pause on hover)
        let autoAdvanceInterval;
        function startAutoAdvance() {
            autoAdvanceInterval = setInterval(() => {
                nextToursSlide();
            }, 8000);
        }

        function stopAutoAdvance() {
            if (autoAdvanceInterval) {
                clearInterval(autoAdvanceInterval);
            }
        }

        if (toursCarouselWrapper) {
            toursCarouselWrapper.addEventListener('mouseenter', stopAutoAdvance);
            toursCarouselWrapper.addEventListener('mouseleave', startAutoAdvance);
        }

        // Initialize
        updateToursPerView();
        updateToursCarousel();
        startAutoAdvance();
    }

    // Smooth scrolling for navigation links
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

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.parallax-bg');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.querySelector('button[class*="md:hidden"]');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Add mobile menu functionality here if needed
            console.log('Mobile menu clicked');
        });
    }
});