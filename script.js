const languageButtons = {
    es: document.getElementById("es-btn"),
    pt: document.getElementById("pt-btn"),
    en: document.getElementById("en-btn"),
};

const translations = {
    es: {
        about_text:"Somos un equipo dedicado a ofrecer la mejor experiencia a nuestros clientes.",
        "home-link": "Inicio", 
        "explore-link": "Explorar",  
        "about-link": "Sobre Nosotros", 
        title: "URBAN TOURS",
        subtitle: "Explora Buenos Aires, descubra lo ",
        exploreHeading: "Explora Buenos Aires",
        aboutHeading: "Sobre Nosotros",
        welcome: "Bienvenido",
        welcome_sub: "Descubra nuestros increíbles servicios y descubra lo que podemos hacer por usted.",
        explore_text: "Urban Tours Buenos Aires se enorgullece de ser uno de los operadores turísticos más reputados de Argentina, enfocados en organizar una amplia variedad de tours y soluciones de traslados. Nuestro grupo de especialistas en viajes experimentados y conocedores está dedicado a ofrecer un servicio de alta calidad, orientación y asistencia para hacer que tu viaje a Argentina sea emocionante y lleno de diversión. Ofrecemos una gran cantidad de oportunidades que te ayudarán a explorar los mejores destinos, principales atracciones, maravillas naturales y experimentar la rica cultura, historia y patrimonio de Buenos Aires, además de disfrutar de actividades emocionantes y aventureras. Nuestro equipo altamente experimentado puede organizar un maravilloso tour por Argentina que se adapte perfectamente a tus necesidades y presupuesto. Como especialistas en viajes en Buenos Aires, podemos organizar el mejor tour para aprovechar al máximo tu estadía. Si deseas un guía turístico confiable y experimentado en Buenos Aires, confía en nosotros. Nos dedicamos a hacer que tu viaje a Argentina sea inolvidable."
    },
    pt: {
        about_text:"Somos uma equipe dedicada a proporcionar a melhor experiência para nossos clientes.",
        "home-link": "Início", 
        "explore-link": "Explorar", 
        "about-link": "Sobre Nós", 
        home: "Início",
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, descubra o ",
        exploreHeading: "Explore Buenos Aires",
        aboutHeading: "Sobre Nós",
        welcome: "Bem-vindo",
        welcome_sub: "Descubra nossos incríveis serviços e descubra o que podemos fazer por você.",
        explore_text:"A Tours Buenos Aires se orgulha de ser uma das mais conceituadas operadoras de turismo da Argentina, com foco na organização de uma ampla variedade de passeios e soluções de traslado. Nosso grupo de especialistas em viagens, experientes e bem informados, dedica-se a oferecer serviços, orientação e assistência de alta qualidade para tornar sua viagem à Argentina empolgante e divertida. Oferecemos uma grande variedade de oportunidades que o ajudarão a explorar os melhores destinos, as principais atrações, as maravilhas naturais e a conhecer a rica cultura, história e patrimônio de Buenos Aires, além de desfrutar de atividades emocionantes e aventureiras. Nossa equipe altamente experiente pode organizar um passeio maravilhoso pela Argentina que se adapte perfeitamente às suas necessidades e ao seu orçamento. Como especialistas em viagens a Buenos Aires, podemos organizar o melhor passeio para aproveitar ao máximo sua estadia. Se você quer um guia turístico confiável e experiente em Buenos Aires, confie em nós. Estamos empenhados em tornar sua viagem à Argentina inesquecível."
    },
    en: {
        about_text:"We are a team dedicated to providing the best experience for our clients.",
        "home-link": "Home",  
        "explore-link": "Explore", 
        "about-link": "About Us",
        home: "Home",
        title: "URBAN TOURS",
        subtitle: "Explore Buenos Aires, discover the ",
        exploreHeading: "Explore Buenos Aires",
        aboutHeading: "About Us",
        welcome: "Welcome",
        welcome_sub: "Discover our amazing services and find out what we can do for you!",
        explore_text:"Tours Buenos Aires is proud to be rated as one of the most reputable tour operators in Argentina that focuses on arranging a wide variety of tours and transfer solutions. Our group of experienced and knowledgeable travel specialists is dedicated to delivering superior-quality service, guidance, and assistance to make your Argentina trip an exciting and fun-filled affair. We offer a wealth of opportunities that help you explore the best destinations, top attractions, natural wonders, and experience the rich culture, history, and heritage of Buenos Aires as well as indulge in exciting and adventurous activities. Our highly experienced team can arrange a wonderful Argentina tour that can be suitably tailored to meet your requirements and budget. As the travel specialists in Buenos Aires, we can arrange for you the best tour to make the most of your stay. If you want a reliable and knowledgeable travel guide in Buenos Aires, then trust us. We are dedicated to making your trip to Argentina a memorable one."
    }
}


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
                typingInterval = setInterval(typeNextChar, 150)
            }, 2000);
        }
    }

    dynamicWordElement.textContent = "";
    typingInterval = setInterval(typeNextChar, 150);
}

function setLanguage(language) {
    const { title, subtitle, exploreHeading, aboutHeading, welcome, welcome_sub, explore_text, about_text, "home-link": homeLink, "explore-link": exploreLink, "about-link": aboutLink } = translations[language];    
    // Actualiza los títulos de las secciones
    document.querySelector(".hero-title h1").textContent = title;
    document.querySelector(".subtitle").childNodes[0].textContent = subtitle;
    document.querySelector(".explore-section h2").textContent = exploreHeading;
    document.querySelector(".circuits-section h2").textContent = aboutHeading;
    document.querySelector(".welcome-section h2").textContent = welcome; 
    document.querySelector(".welcome-section p").textContent = welcome_sub; 

    document.querySelector('[data-key="home-link"]').textContent = homeLink;
    document.querySelector('[data-key="explore-link"]').textContent = exploreLink;
    document.querySelector('[data-key="about-link"]').textContent = aboutLink;
    document.querySelector(".explore-section p").textContent = explore_text;
    document.querySelector(".circuits-section p").textContent = about_text;

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