// Language translations
const translations = {
    es: {
        subtitle: "Explora Buenos Aires, descubre lo ",
        welcome: "¡Bienvenidos!",
        welcome_text: "Descubre nuestros destinos y comienza tu próxima aventura. Urban Tours Buenos Aires es reconocido como uno de los operadores turísticos más destacados de Argentina, especializado en ofrecer una diversa gama de recorridos y soluciones de transporte. Nuestro equipo de expertos en viajes se compromete a brindar servicios de primera calidad, asesoramiento personalizado y asistencia para que su experiencia en Argentina sea inolvidable y llena de emociones.",
        antesDeLlegar: "Antes de llegar",
        antesDeLlegarSubtitle: "Todo lo que necesitas saber para aprovechar al máximo tu visita a Buenos Aires",
        primeraVez: "Primera vez",
        exploraCiudad: "Explora la ciudad",
        primeraVezDescripction: "Si es tu primera vez en Buenos Aires, explora los puntos turísticos más importantes utilizando este mapa interactivo.",
        interactiveMap: "Abrir mapa completo",
        imperdibles: "Imperdibles",
        lugaresUnicos: "Lugares únicos",
        tipsLocales: "Tips Locales",
        consejosUtiles: "Consejos útiles",
        transporte: "🚇 Transporte",
        transporteDesc: "Subte económico, colectivo (bus), Uber para distancias largas",
        murales: "🎨 Murales",
        muralesDesc: "Maradona, Messi, \"El Dibu\" Martinez, Carlos Gardel",
        selfies: "📸 Selfies",
        selfiesDesc: "Obelisco, Plaza de Mayo, Caminito, Puerto Madero, La Boca, San Telmo",
        navAntesDeLlegar: "Antes de llegar",
        navNuestrosTours: "Nuestros Tours",
        navCircuitosAutor: "Circuitos de Autor",
        navTurismoSalud: "Turismo y Salud",
        navSaludBienestar: "Salud y bienestar",
        nuestrosTours: "Nuestros Tours",
        verMas: "Ver más",
        verMenos: "Ver menos",
        duracion4horas: "Duración: 4 horas",
        duracion3dias: "Duración: 3 días",
        tour1_title: "Circuito Casco Histórico de la Ciudad",
        tour1_desc1: "Es el lugar donde nació la ciudad y donde todavía se perciben con más fuerza sus orígenes coloniales. Allí se concentran edificios que cuentan la historia política, social y cultural del país, desde la época del Virreinato hasta la formación del Estado argentino.",
        tour1_desc2: "Visitaremos Plaza de Mayo, destacada por la Pirámide de Mayo y los emblemáticos edificios de su entorno: la Casa Rosada, sede del Gobierno Nacional, la Catedral Metropolitana que alberga el Mausoleo del Libertador Gral. San Martín, el Cabildo, Banco Nación – Casa Central –, Iglesia San Ignacio, Manzana de las Luces y más.",
        tour2_title: "Circuito La Boca: Vuelta de Rocha - Caminito",
        tour2_desc1: "El arte y el fútbol argentino están muy vinculados con este paseo lleno de vida y color, donde veremos bailar tango a cada paso. El antiguo puerto al cual llegaron y donde vivieron tantos inmigrantes.",
        tour2_desc2: "Visitaremos Caminito, Estadio de Boca Juniors, Museo Benito Quinquela Martín, Fundación Proa, Teatro Colón Fabrica, Vuelta de Rocha, Puente Transbordador y más.",
        tour3_title: "Circuito Puerto Madero",
        tour3_desc1: "El barrio más nuevo, moderno y exclusivo de Buenos Aires.",
        tour3_desc2: "Visitaremos el Puente de la Mujer, diseñado por el famoso arquitecto Santiago Calatrava, Buque Museo Fragata Sarmiento, Buque Museo Corbeta Uruguay, Fundación Fortabat y más.",
        tour4_title: "Circuito Recoleta y Cementerio",
        tour4_desc1: "El barrio más elegante de Buenos Aires, destacado por su arquitectura francesa, cafés históricos y su famoso cementerio donde descansan personalidades históricas.",
        tour4_desc2: "Visitaremos Avenida Alvear y sus palacios, la Iglesia del Pilar, cementerio de Recoleta, donde destaca el mausoleo de Evita, Museo de Bellas Artes y más.",
        tour5_title: "Circuito Palermo y Parques",
        tour5_desc1: "El barrio más grande de Buenos Aires, conocido por sus parques, bares de moda y vida nocturna.",
        tour5_desc2: "Visitaremos los Bosques de Palermo, el Rosedal, Planetario, el selecto Barrio Parque con sus embajadas y palacios, Monumento de los españoles, Jardín Botánico, Ecoparque (ex Jardín Zoológico), zona de bares de Palermo Soho y Palermo Hollywood y más.",
        tour6_title: "Circuito San Telmo y Tango",
        tour6_desc1: "El barrio bohemio por excelencia, cuna del tango argentino.",
        tour6_desc2: "Visitaremos la calle Defensa, Convento de Santo Domingo y Mausoleo del General Belgrano, Mafalda y el Paseo de la Historieta, Zanjón de Granados, Casa Mínima, Plaza Dorrego, la Feria de antigüedades, milongas, cafés históricos, Parque Lezama y su Museo Histórico Nacional y más.",
        tour7_title: "Circuito Barrio Parque. Embajadas y algo más...",
        tour7_desc1: "Visitaremos Museo Nacional de Arte Decorativo, Embajada de Italia, Embajada de España, Embajada de Grecia, Embajada de Bélgica, Casa Redonda, Casa de Victoria Ocampo, Embajada de Chile, Embajada de Polonia, Embajada de Haití, Embajada Arabia Saudita, Embajada del Líbano.",
        tour8_title: "Circuito Tigre - Delta",
        tour8_desc1: "Paisaje fluvial, patrimonio y cultura ribereña.",
        tour8_desc2: "Excursión al Delta del Tigre, con paseo por el río Luján. Recorrido por la Zona Norte del Gran Buenos Aires. Tigre y su magnífico Delta, Paseo Victorica, Museo de Arte Tigre (ex Casino), el Mercado de Puerto de Frutos, Museo de la Reconquista. Club de Regatas La Marina y más.",
        tour9_title: "La Plata",
        tour9_desc1: "Una ciudad joven, vibrante y llena de energía. Cultura, ciencia, naturaleza y diversión… todo en un mismo lugar. La ciudad de las diagonales que te invita a descubrirla a tu manera.",
        tour9_desc2: "Visitaremos Plaza Moreno, Eje Cívico: Catedral, Municipalidad, Teatro Argentino, Legislatura Provincial, Casa Curutchet, El bosque con el Museo Ciencias Naturales y los estadios de Estudiantes y Gimnasia y Esgrima, Ciudad de los Niños y más.",
        tour10_title: "Fiesta Nacional de la Cerveza – OKTOBERFEST Argentina",
        tour10_desc1: "Villa General Belgrano. Córdoba",
        tour10_desc2: "Desde 1963, Villa General Belgrano celebra su tradicional Oktoberfest, una fiesta que combina música centroeuropea, danzas típicas y cerveza artesanal.",
        tour10_desc3: "Al recorrer sus calles de estilo alpino, el visitante se encuentra con ferias, sabores tradicionales donde la camaradería, la identidad cordobesa y la herencia alemana se fusionan en un clima festivo único.",
        tour10_desc4: "Incluye alojamiento y entrada al predio",
        tour11_title: "Colonia del Sacramento / Uruguay",
        tour11_desc1: "Excursión de día completo",
        tour11_desc2: "Esta experiencia promete ser una travesía inolvidable, donde cada rincón de Colonia del Sacramento narra historias de un pasado vibrante y multicultural.",
        tour11_desc3: "A solo una hora en ferry desde Buenos Aires, en la otra orilla del Río de la Plata, se encuentra esta pintoresca ciudad de origen hispanoportugués, declarada Patrimonio de la Humanidad por la UNESCO, ideal para una escapada de día completo. Durante nuestro recorrido por sus encantadoras calles empedradas, descubriremos la Basílica del Santísimo Sacramento, el icónico Faro, la famosa Calle de los Suspiros, la histórica Puerta de la Ciudadela, y más.",
        circuitosAutorTitle: "Circuitos de Autor",
        circuitosAutorDesc: "Experiencias únicas diseñadas por nuestros expertos locales. Cada circuito es una obra maestra que combina historia, cultura, gastronomía y arte, ofreciendo una visión exclusiva y personalizada de Buenos Aires que solo nosotros podemos brindar.",
        circuito1_title: "Tras los pasos de la aristocracia",
        circuito1_subtitle: "Palacios, poder y vida social en la Buenos Aires de fines del siglo XIX y comienzos del XX.",
        circuito1_desc: "Un paseo por los grandes palacios de la Buenos Aires aristocrática que invita a descubrir estilos arquitectónicos, historias familiares y el modo en que la élite construyó y representó su poder encontrando su lugar en la ciudad.",
        circuito2_title: "Donde Buenos Aires toca el cielo",
        circuito2_subtitle: "Las cúpulas que miran la ciudad",
        circuito2_desc: "Un paseo en busca de las cúpulas porteñas más emblemáticas que invitan a ver la ciudad en las alturas, su arquitectura y los significados que coronan sus edificios, revelándonos cómo la ciudad fue pensada para ser mirada desde lo alto.",
        circuito3_title: "Tras las huellas de la fe",
        circuito3_subtitle: "Templos y órdenes religiosas del Buenos Aires histórico",
        circuito3_desc: "Un recorrido por las iglesias y conventos más antiguos del centro porteño para descubrir las órdenes y congregaciones que los habitaron, su arquitectura y el legado religioso, educativo, social y urbano que moldeó la ciudad desde sus orígenes.",
        cementerioRecoletaTitle: "Cementerio de la Recoleta: Memorial de la Nación",
        cementerioRecoletaSubtitle: "Cinco recorridos para leer la historia argentina entre majestuosos mausoleos",
        recoleta1_title: "Presidentes para la eternidad",
        recoleta1_subtitle: "El poder y la República en la Recoleta",
        recoleta1_desc: "Un recorrido por las tumbas de los presidentes constitucionales argentinos que permite reflexionar sobre el ejercicio del poder, los proyectos de país y las huellas políticas que dejaron más allá de la vida.",
        recoleta2_title: "A la sombra del poder",
        recoleta2_subtitle: "Vicepresidentes en la historia argentina",
        recoleta2_desc: "Este recorrido propone conocer a los vicepresidentes constitucionales sepultados en la Recoleta y comprender su rol político, sus trayectorias y su lugar —muchas veces silencioso— en la historia nacional.",
        recoleta3_title: "Mujeres que hicieron historia",
        recoleta3_subtitle: "Voces, luchas y legados en la Recoleta",
        recoleta3_desc: "Un paseo dedicado a mujeres de renombre que rompieron moldes, dejaron huella y construyeron legado en distintos ámbitos de la vida social, política, cultural y simbólica de la Argentina.",
        recoleta4_title: "Destinos truncos",
        recoleta4_subtitle: "Tragedia, mito y memoria en la Recoleta",
        recoleta4_desc: "Un recorrido por historias marcadas por la tragedia, el escándalo y el drama, donde la muerte prematura o violenta transformó a sus protagonistas en figuras atravesadas por el mito y la memoria colectiva.",
        recoleta5_title: "La ciudad de los símbolos",
        recoleta5_subtitle: "Arquitectura, arte y lenguaje funerario",
        recoleta5_desc: "Un recorrido que invita a leer el Cementerio de la Recoleta como un museo a cielo abierto, descubriendo estilos arquitectónicos, símbolos funerarios y mensajes ocultos sobre la vida, la muerte y la eternidad.",
        recoleta5_desc: "Un recorrido que invita a leer el Cementerio de la Recoleta como un museo a cielo abierto, descubriendo estilos arquitectónicos, símbolos funerarios y mensajes ocultos sobre la vida, la muerte y la eternidad.",
        turismoCentroBarriosTitle: "Turismo: del centro a los barrios",
        centroBarrios1_title: "Villa Devoto",
        centroBarrios1_desc: 'El barrio "Jardín de Buenos Aires", con calles arboladas, calma y espíritu barrial.',
        centroBarrios2_title: "Flores",
        centroBarrios2_desc: "Historia y diversidad en uno de los barrios más antiguos, donde vivió Jorge Mario Bergoglio: el Papa Francisco.",
        centroBarrios3_title: "Belgrano",
        centroBarrios3_desc: "Un barrio dinámico, famoso por sus verdes barrancas, casonas de estilo, el Barrio Chino, el golf y su lago de regatas.",
        centroBarrios4_title: "Villa del Parque",
        centroBarrios4_desc: "Barrio tranquilo con identidad porteña, que combina un ambiente residencial de calles arboladas, casas bajas y la emblemática estación ferroviaria con un importante y movido centro comercial a cielo abierto: la calle Cuenca.",
        centroBarrios5_title: "Paternal",
        centroBarrios5_desc: "Barrio de perfil pueblerino con un magnífico puente, de fuerte identidad fútbolera: Argentinos Juniors y Maradona; automotriz: la avenida Warnes y la añorada presencia bodeguera: Giol, Escorihuela, Gargantini, Toro, Arizu...",
        centroBarrios6_title: "Villa Crespo",
        centroBarrios6_desc: "Barrio pujante que no olvida sus orígenes tangueros y futboleros, de inmigración judía y sirio-libanesa; la fundacional fábrica de calzado y un memorable conventillo... Accesible con bus, subterráneo y tren, encontró su futuro en los outlets, bodegones y cocina de autor.",
        turismoSaludTitle: "Turismo y Salud",
        turismoSaludDesc: "Combinamos el placer de conocer Buenos Aires con el cuidado de tu bienestar. Nuestros programas especializados integran actividades turísticas con servicios de salud, creando experiencias completas que cuidan tanto tu cuerpo como tu espíritu durante tu estadía en la ciudad.",
        saludBienestarTitle: "Salud y bienestar",
        saludBienestarDesc: "Hoy debemos considerar el bienestar como un objetivo terapéutico, tan importante como los niveles de presión arterial, el azúcar o colesterol...",
        visitaYouTube: "Conoce más en MFSalud",
        aboutHeading: "Sobre Nosotros",
        aboutDesc: "Somos un equipo dedicado a ofrecer la mejor experiencia a nuestros clientes. Con años de experiencia en el turismo de Buenos Aires, nos especializamos en crear recorridos únicos que muestran la verdadera esencia de la ciudad.",
        navSobreNosotros: "Sobre Nosotros",
        contactFormTitle: "Contáctanos",
        contactNameLabel: "Nombre",
        contactEmailLabel: "Email",
        contactMessageLabel: "Consulta",
        contactSubmitBtn: "Enviar Consulta",
        contactInfoTitle: "Información de Contacto",
        emailLabel: "Email",
        whyChooseUsTitle: "¿Por qué elegirnos?",
        whyChooseUs1: "Experiencia y conocimiento local",
        whyChooseUs2: "Recorridos personalizados y únicos",
        whyChooseUs3: "Atención al cliente de primera calidad",
        whyChooseUs4: "Comprometidos con tu experiencia inolvidable",
        contactSuccess: "¡Consulta enviada!",
        turismoSaludSubtitle: "Caminar para Conocer: Los Paseos Suaves que Transforman la Ciudad en Bienestar",
        turismoSaludIntro: "Caminar es una de las formas más simples y accesibles de mejorar la salud. Y cuando esa caminata sucede en una ciudad llena de historia, parques y espacios tranquilos, el beneficio es doble: el cuerpo se activa y la mente se relaja.",
        turismoSaludExperienciaTitle: "Turismo y salud: una experiencia completa",
        turismoSaludExperienciaText: "Cada una de nuestras guiadas busca que la experiencia turística sea también una experiencia de bienestar. Conocer la ciudad sin apuro, con atención plena y a un ritmo amigable, mejora tanto el cuerpo como la mente.",
        turismoSaludExperienciaText2: "Desde urBAn Tours, creemos que el turismo saludable no solo es posible, sino necesario. Por eso diseñamos paseos suaves, accesibles y seguros donde lo importante es la calma, la comodidad y el disfrute del entorno.",
        turismoSaludRitmoTitle: "Elegir el ritmo adecuado también es turismo",
        turismoSaludRitmoText: "No hace falta recorrer largas distancias para conocer una ciudad. Un paseo corto por un parque, una plaza histórica o una costanera tranquila puede brindar más bienestar que una caminata larga y agotadora.",
        turismoSaludListIntro: "Nuestros recorridos saludables están pensados para:",
        turismoSaludList1: "Distancias cortas y accesibles",
        turismoSaludList2: "Paso suave y pausado",
        turismoSaludList3: "Zonas verdes y ventiladas",
        turismoSaludList4: "Itinerarios sin esfuerzo",
        turismoSaludList5: "Muchos puntos de descanso",
        turismoSaludConclusion: "De esta manera, cualquier persona —independientemente de su condición física— puede disfrutar de una guiada sin preocupaciones.",
        turismoSaludCTA: "¿Quieres conocer Buenos Aires de manera tranquila y saludable? ¡Contáctanos!",
        footerCopyright: "© 2025 Urban Tours. Todos los derechos reservados."
    },
    pt: {
        subtitle: "Explore Buenos Aires, descubra o ",
        welcome: "Bem-vindos!",
        welcome_text: "Descubra nossos destinos e comece sua próxima aventura. Urban Tours Buenos Aires é reconhecida como uma das operadoras de turismo mais destacadas da Argentina, especializada em oferecer uma ampla variedade de passeios e soluções de transporte. Nossa equipe de especialistas em viagens está comprometida em fornecer serviços de alta qualidade, atendimento personalizado e assistência para que sua experiência na Argentina seja inesquecível e emocionante.",
        antesDeLlegar: "Antes de chegar",
        antesDeLlegarSubtitle: "Tudo o que você precisa saber para aproveitar ao máximo sua visita a Buenos Aires",
        primeraVez: "Primeira vez",
        exploraCiudad: "Explore a cidade",
        primeraVezDescripction: "Se é sua primeira vez em Buenos Aires, explore os pontos turísticos mais importantes usando este mapa interativo.",
        interactiveMap: "Abrir mapa completo",
        imperdibles: "Imperdíveis",
        lugaresUnicos: "Lugares únicos",
        tipsLocales: "Dicas Locais",
        consejosUtiles: "Conselhos úteis",
        transporte: "🚇 Transporte",
        transporteDesc: "Metrô econômico, ônibus (coletivo), Uber para distâncias longas",
        murales: "🎨 Murais",
        muralesDesc: "Maradona, Messi, \"El Dibu\" Martinez, Carlos Gardel",
        selfies: "📸 Selfies",
        selfiesDesc: "Obelisco, Plaza de Mayo, Caminito, Puerto Madero, La Boca, San Telmo",
        navAntesDeLlegar: "Antes de chegar",
        navNuestrosTours: "Nossos Tours",
        navCircuitosAutor: "Circuitos de Autor",
        navTurismoSalud: "Turismo e Saúde",
        navSaludBienestar: "Saúde e bem-estar",
        nuestrosTours: "Nossos Tours",
        verMas: "Ver mais",
        verMenos: "Ver menos",
        duracion4horas: "Duração: 4 horas",
        duracion3dias: "Duração: 3 dias",
        tour1_title: "Circuito Casco Histórico da Cidade",
        tour1_desc1: "É o lugar onde nasceu a cidade e onde ainda se percebem com mais força suas origens coloniais. Lá se concentram edifícios que contam a história política, social e cultural do país, desde a época do Vice-Reino até a formação do Estado argentino.",
        tour1_desc2: "Visitaremos a Plaza de Mayo, destacada pela Pirâmide de Mayo e os emblemáticos edifícios de seu entorno: a Casa Rosada, sede do Governo Nacional, a Catedral Metropolitana que abriga o Mausoléu do Libertador Gral. San Martín, o Cabildo, Banco Nación – Casa Central –, Igreja San Ignacio, Manzana de las Luces e mais.",
        tour2_title: "Circuito La Boca: Vuelta de Rocha - Caminito",
        tour2_desc1: "A arte e o futebol argentino estão muito vinculados a este passeio cheio de vida e cor, onde veremos dançar tango a cada passo. O antigo porto ao qual chegaram e onde viveram tantos imigrantes.",
        tour2_desc2: "Visitaremos Caminito, Estádio de Boca Juniors, Museu Benito Quinquela Martín, Fundação Proa, Teatro Colón Fabrica, Vuelta de Rocha, Ponte Transbordador e mais.",
        tour3_title: "Circuito Puerto Madero",
        tour3_desc1: "O bairro mais novo, moderno e exclusivo de Buenos Aires.",
        tour3_desc2: "Visitaremos a Ponte da Mulher, projetada pelo famoso arquiteto Santiago Calatrava, Navio Museu Fragata Sarmiento, Navio Museu Corbeta Uruguay, Fundação Fortabat e mais.",
        tour4_title: "Circuito Recoleta e Cemitério",
        tour4_desc1: "O bairro mais elegante de Buenos Aires, destacado por sua arquitetura francesa, cafés históricos e seu famoso cemitério onde descansam personalidades históricas.",
        tour4_desc2: "Visitaremos Avenida Alvear e seus palácios, a Igreja do Pilar, cemitério de Recoleta, onde se destaca o mausoléu de Evita, Museu de Belas Artes e mais.",
        tour5_title: "Circuito Palermo e Parques",
        tour5_desc1: "O maior bairro de Buenos Aires, conhecido por seus parques, bares da moda e vida noturna.",
        tour5_desc2: "Visitaremos os Bosques de Palermo, o Rosedal, Planetário, o seletivo Barrio Parque com suas embaixadas e palácios, Monumento dos espanhóis, Jardim Botânico, Ecoparque (ex Jardim Zoológico), zona de bares de Palermo Soho e Palermo Hollywood e mais.",
        tour6_title: "Circuito San Telmo e Tango",
        tour6_desc1: "O bairro boêmio por excelência, berço do tango argentino.",
        tour6_desc2: "Visitaremos a rua Defensa, Convento de Santo Domingo e Mausoléu do General Belgrano, Mafalda e o Passeio da Historieta, Zanjón de Granados, Casa Mínima, Plaza Dorrego, a Feira de antiguidades, milongas, cafés históricos, Parque Lezama e seu Museu Histórico Nacional e mais.",
        tour7_title: "Circuito Barrio Parque. Embaixadas e algo mais...",
        tour7_desc1: "Visitaremos Museu Nacional de Arte Decorativo, Embaixada da Itália, Embaixada da Espanha, Embaixada da Grécia, Embaixada da Bélgica, Casa Redonda, Casa de Victoria Ocampo, Embaixada do Chile, Embaixada da Polônia, Embaixada do Haiti, Embaixada da Arábia Saudita, Embaixada do Líbano.",
        tour8_title: "Circuito Tigre - Delta",
        tour8_desc1: "Paisagem fluvial, patrimônio e cultura ribeirinha.",
        tour8_desc2: "Excursão ao Delta do Tigre, com passeio pelo rio Luján. Percurso pela Zona Norte da Grande Buenos Aires. Tigre e seu magnífico Delta, Passeio Victorica, Museu de Arte Tigre (ex Cassino), o Mercado de Puerto de Frutos, Museu da Reconquista. Clube de Regatas La Marina e mais.",
        tour9_title: "La Plata",
        tour9_desc1: "Uma cidade jovem, vibrante e cheia de energia. Cultura, ciência, natureza e diversão… tudo em um mesmo lugar. A cidade das diagonais que te convida a descobri-la à sua maneira.",
        tour9_desc2: "Visitaremos Plaza Moreno, Eixo Cívico: Catedral, Prefeitura, Teatro Argentino, Legislatura Provincial, Casa Curutchet, O bosque com o Museu de Ciências Naturais e os estádios de Estudiantes e Gimnasia y Esgrima, Cidade das Crianças e mais.",
        tour10_title: "Festa Nacional da Cerveja – OKTOBERFEST Argentina",
        tour10_desc1: "Villa General Belgrano. Córdoba",
        tour10_desc2: "Desde 1963, Villa General Belgrano celebra sua tradicional Oktoberfest, uma festa que combina música centro-europeia, danças típicas e cerveja artesanal.",
        tour10_desc3: "Ao percorrer suas ruas de estilo alpino, o visitante se encontra com feiras, sabores tradicionais onde a camaradagem, a identidade cordobesa e a herança alemã se fundem em um clima festivo único.",
        tour10_desc4: "Inclui hospedagem e entrada no recinto",
        tour11_title: "Colonia del Sacramento / Uruguai",
        tour11_desc1: "Excursão de dia completo",
        tour11_desc2: "Esta experiência promete ser uma travessia inesquecível, onde cada canto de Colonia del Sacramento narra histórias de um passado vibrante e multicultural.",
        tour11_desc3: "A apenas uma hora de ferry desde Buenos Aires, na outra margem do Rio da Prata, encontra-se esta pitoresca cidade de origem hispano-portuguesa, declarada Patrimônio da Humanidade pela UNESCO, ideal para uma escapada de dia completo. Durante nosso percurso por suas encantadoras ruas de paralelepípedos, descobriremos a Basílica do Santíssimo Sacramento, o icônico Farol, a famosa Rua dos Suspiros, a histórica Porta da Cidadela, e mais.",
        circuitosAutorTitle: "Circuitos de Autor",
        circuitosAutorDesc: "Experiências únicas projetadas por nossos especialistas locais. Cada circuito é uma obra-prima que combina história, cultura, gastronomia e arte, oferecendo uma visão exclusiva e personalizada de Buenos Aires que apenas nós podemos proporcionar.",
        circuito1_title: "Nos passos da aristocracia",
        circuito1_subtitle: "Palácios, poder e vida social na Buenos Aires de fins do século XIX e início do XX.",
        circuito1_desc: "Um passeio pelos grandes palácios da Buenos Aires aristocrática que convida a descobrir estilos arquitetônicos, histórias familiares e o modo em que a elite construiu e representou seu poder encontrando seu lugar na cidade.",
        circuito2_title: "Onde Buenos Aires toca o céu",
        circuito2_subtitle: "As cúpulas que olham a cidade",
        circuito2_desc: "Um passeio em busca das cúpulas portenhas mais emblemáticas que convidam a ver a cidade nas alturas, sua arquitetura e os significados que coroam seus edifícios, revelando-nos como a cidade foi pensada para ser olhada do alto.",
        circuito3_title: "Nas pegadas da fé",
        circuito3_subtitle: "Templos e ordens religiosas da Buenos Aires histórica",
        circuito3_desc: "Um percurso pelas igrejas e conventos mais antigos do centro portenho para descobrir as ordens e congregações que os habitaram, sua arquitetura e o legado religioso, educativo, social e urbano que moldou a cidade desde suas origens.",
        cementerioRecoletaTitle: "Cemitério da Recoleta: Memorial da Nação",
        cementerioRecoletaSubtitle: "Cinco percursos para ler a história argentina entre majestosos mausoléus",
        recoleta1_title: "Presidentes para a eternidade",
        recoleta1_subtitle: "O poder e a República na Recoleta",
        recoleta1_desc: "Um percurso pelas tumbas dos presidentes constitucionais argentinos que permite refletir sobre o exercício do poder, os projetos de país e as pegadas políticas que deixaram além da vida.",
        recoleta2_title: "À sombra do poder",
        recoleta2_subtitle: "Vice-presidentes na história argentina",
        recoleta2_desc: "Este percurso propõe conhecer os vice-presidentes constitucionais sepultados na Recoleta e compreender seu papel político, suas trajetórias e seu lugar —muitas vezes silencioso— na história nacional.",
        recoleta3_title: "Mulheres que fizeram história",
        recoleta3_subtitle: "Vozes, lutas e legados na Recoleta",
        recoleta3_desc: "Um passeio dedicado a mulheres de renome que quebraram moldes, deixaram marca e construíram legado em distintos âmbitos da vida social, política, cultural e simbólica da Argentina.",
        recoleta4_title: "Destinos truncados",
        recoleta4_subtitle: "Tragédia, mito e memória na Recoleta",
        recoleta4_desc: "Um percurso por histórias marcadas pela tragédia, o escândalo e o drama, onde a morte prematura ou violenta transformou seus protagonistas em figuras atravessadas pelo mito e a memória coletiva.",
        recoleta5_title: "A cidade dos símbolos",
        recoleta5_subtitle: "Arquitetura, arte e linguagem funerária",
        recoleta5_desc: "Um percurso que convida a ler o Cemitério da Recoleta como um museu a céu aberto, descobrindo estilos arquitetônicos, símbolos funerários e mensagens ocultas sobre a vida, a morte e a eternidade.",
        recoleta5_desc: "Un recorrido que invita a leer el Cementerio de la Recoleta como um museo a cielo abierto, descubriendo estilos arquitectónicos, símbolos funerarios y mensajes ocultos sobre la vida, la muerte y la eternidad.",
        turismoCentroBarriosTitle: "Turismo: del centro a los barrios",
        centroBarrios1_title: "Villa Devoto",
        centroBarrios1_desc: 'El barrio "Jardín de Buenos Aires", con calles arboladas, calma y espíritu barrial.',
        centroBarrios2_title: "Flores",
        centroBarrios2_desc: "Historia y diversidad en uno de los barrios más antiguos, donde vivió Jorge Mario Bergoglio: el Papa Francisco.",
        centroBarrios3_title: "Belgrano",
        centroBarrios3_desc: "Un barrio dinámico, famoso por sus verdes barrancas, casonas de estilo, el Barrio Chino, el golf y su lago de regatas.",
        centroBarrios4_title: "Villa del Parque",
        centroBarrios4_desc: "Barrio tranquilo con identidad porteña, que combina un ambiente residencial de calles arboladas, casas bajas y la emblemática estación ferroviaria con un importante y movido centro comercial a cielo abierto: la calle Cuenca.",
        centroBarrios5_title: "Paternal",
        centroBarrios5_desc: "Barrio de perfil pueblerino con un magnífico puente, de fuerte identidad fútbolera: Argentinos Juniors y Maradona; automotriz: la avenida Warnes y la añorada presencia bodeguera: Giol, Escorihuela, Gargantini, Toro, Arizu...",
        centroBarrios6_title: "Villa Crespo",
        centroBarrios6_desc: "Barrio pujante que no olvida sus orígenes tangueros y futboleros, de inmigración judía y sirio-libanesa; la fundacional fábrica de calzado y un memorable conventillo... Accesible con bus, subterráneo y tren, encontró su futuro en los outlets, bodegones y cocina de autor.",
        turismoSaludTitle: "Turismo e Saúde",
        turismoSaludDesc: "Combinamos o prazer de conhecer Buenos Aires com o cuidado do seu bem-estar. Nossos programas especializados integram atividades turísticas com serviços de saúde, criando experiências completas que cuidam tanto do seu corpo quanto do seu espírito durante sua estadia na cidade.",
        saludBienestarTitle: "Saúde e bem-estar",
        saludBienestarDesc: "Hoje devemos considerar o bem-estar como um objetivo terapêutico, tão importante quanto os níveis de pressão arterial, açúcar ou colesterol...",
        visitaYouTube: "Saiba mais em MFSalud",
        aboutHeading: "Sobre Nós",
        aboutDesc: "Somos uma equipe dedicada a oferecer a melhor experiência aos nossos clientes. Com anos de experiência no turismo de Buenos Aires, nos especializamos em criar percursos únicos que mostram a verdadeira essência da cidade.",
        navSobreNosotros: "Sobre Nós",
        contactFormTitle: "Entre em contato",
        contactNameLabel: "Nome",
        contactEmailLabel: "Email",
        contactMessageLabel: "Consulta",
        contactSubmitBtn: "Enviar Consulta",
        contactInfoTitle: "Informações de Contato",
        emailLabel: "Email",
        whyChooseUsTitle: "Por que nos escolher?",
        whyChooseUs1: "Experiência e conhecimento local",
        whyChooseUs2: "Percursos personalizados e únicos",
        whyChooseUs3: "Atendimento ao cliente de primeira qualidade",
        whyChooseUs4: "Comprometidos com sua experiência inesquecível",
        contactSuccess: "Consulta enviada!",
        turismoSaludSubtitle: "Caminhar para Conhecer: Passeios Suaves que Transformam a Cidade em Bem-Estar",
        turismoSaludIntro: "Caminhar é uma das formas mais simples e acessíveis de melhorar a saúde. E quando essa caminhada acontece em uma cidade cheia de história, parques e espaços tranquilos, o benefício é duplo: o corpo se ativa e a mente relaxa.",
        turismoSaludExperienciaTitle: "Turismo e saúde: uma experiência completa",
        turismoSaludExperienciaText: "Cada uma de nossas visitas guiadas busca fazer com que a experiência turística seja também uma experiência de bem-estar. Conhecer a cidade sem pressa, com atenção plena e um ritmo amigável, melhora tanto o corpo quanto a mente.",
        turismoSaludExperienciaText2: "Na urBAn Tours, acreditamos que o turismo saudável não é apenas possível, mas necessário. Por isso, desenhamos passeios suaves, acessíveis e seguros onde o importante é a calma, o conforto e o desfrute do ambiente.",
        turismoSaludRitmoTitle: "Escolher o ritmo certo também é turismo",
        turismoSaludRitmoText: "Não é preciso percorrer longas distâncias para conhecer uma cidade. Um passeio curto por um parque, uma praça histórica ou uma orla tranquila pode proporcionar mais bem-estar do que uma caminhada longa e exaustiva.",
        turismoSaludListIntro: "Nossos roteiros saudáveis são pensados para:",
        turismoSaludList1: "Distâncias curtas e acessíveis",
        turismoSaludList2: "Passo suave e pausado",
        turismoSaludList3: "Zonas verdes e ventiladas",
        turismoSaludList4: "Itinerários sem esforço",
        turismoSaludList5: "Muitos pontos de descanso",
        turismoSaludConclusion: "Dessa forma, qualquer pessoa —independentemente de sua condição física— pode desfrutar de uma visita guiada sem preocupações.",
        turismoSaludCTA: "Quer conhecer Buenos Aires de maneira tranquila e saudável? Entre em contato!",
        footerCopyright: "© 2025 Urban Tours. Todos os direitos reservados."
    },
    en: {
        subtitle: "Explore Buenos Aires, discover ",
        welcome: "Welcome!",
        welcome_text: "Discover our destinations and start your next adventure. Urban Tours Buenos Aires is recognized as one of the most outstanding tour operators in Argentina, specializing in offering a wide range of tours and transportation solutions. Our team of travel experts is committed to providing top-quality services, personalized advice, and assistance to ensure your experience in Argentina is unforgettable and exciting.",
        antesDeLlegar: "Before arriving",
        antesDeLlegarSubtitle: "Everything you need to know to make the most of your visit to Buenos Aires",
        primeraVez: "First time",
        exploraCiudad: "Explore the city",
        primeraVezDescripction: "If it's your first time in Buenos Aires, explore the most important tourist spots using this interactive map.",
        interactiveMap: "Open full map",
        imperdibles: "Must-see",
        lugaresUnicos: "Unique places",
        tipsLocales: "Local Tips",
        consejosUtiles: "Useful tips",
        transporte: "🚇 Transportation",
        transporteDesc: "Affordable subway, bus (colectivo), Uber for long distances",
        murales: "🎨 Murals",
        muralesDesc: "Maradona, Messi, \"El Dibu\" Martinez, Carlos Gardel",
        selfies: "📸 Selfies",
        selfiesDesc: "Obelisco, Plaza de Mayo, Caminito, Puerto Madero, La Boca, San Telmo",
        navAntesDeLlegar: "Before arriving",
        navNuestrosTours: "Our Tours",
        navCircuitosAutor: "Author Circuits",
        navTurismoSalud: "Tourism and Health",
        navSaludBienestar: "Health and Wellness",
        nuestrosTours: "Our Tours",
        verMas: "Read more",
        verMenos: "Read less",
        duracion4horas: "Duration: 4 hours",
        duracion3dias: "Duration: 3 days",
        tour1_title: "Historic City Center Circuit",
        tour1_desc1: "This is where the city was born and where its colonial origins are still most strongly felt. Here are concentrated buildings that tell the political, social, and cultural history of the country, from the Viceroyalty era to the formation of the Argentine state.",
        tour1_desc2: "We will visit Plaza de Mayo, highlighted by the May Pyramid and the emblematic buildings of its surroundings: the Casa Rosada, seat of the National Government, the Metropolitan Cathedral that houses the Mausoleum of Liberator Gen. San Martín, the Cabildo, Banco Nación – Central House –, San Ignacio Church, Manzana de las Luces, and more.",
        tour2_title: "La Boca Circuit: Vuelta de Rocha - Caminito",
        tour2_desc1: "Argentine art and football are closely linked to this walk full of life and color, where we will see tango dancing at every step. The old port where so many immigrants arrived and lived.",
        tour2_desc2: "We will visit Caminito, Boca Juniors Stadium, Benito Quinquela Martín Museum, Proa Foundation, Teatro Colón Fabrica, Vuelta de Rocha, Transbordador Bridge, and more.",
        tour3_title: "Puerto Madero Circuit",
        tour3_desc1: "The newest, most modern, and exclusive neighborhood in Buenos Aires.",
        tour3_desc2: "We will visit the Woman's Bridge, designed by the famous architect Santiago Calatrava, Sarmiento Frigate Museum Ship, Uruguay Corvette Museum Ship, Fortabat Foundation, and more.",
        tour4_title: "Recoleta and Cemetery Circuit",
        tour4_desc1: "The most elegant neighborhood in Buenos Aires, distinguished by its French architecture, historic cafés, and its famous cemetery where historical personalities rest.",
        tour4_desc2: "We will visit Alvear Avenue and its palaces, the Pilar Church, Recoleta Cemetery, where Evita's mausoleum stands out, Fine Arts Museum, and more.",
        tour5_title: "Palermo and Parks Circuit",
        tour5_desc1: "The largest neighborhood in Buenos Aires, known for its parks, trendy bars, and nightlife.",
        tour5_desc2: "We will visit the Palermo Woods, the Rose Garden, Planetarium, the exclusive Barrio Parque with its embassies and palaces, Monument of the Spaniards, Botanical Garden, Ecopark (former Zoo), Palermo Soho and Palermo Hollywood bar area, and more.",
        tour6_title: "San Telmo and Tango Circuit",
        tour6_desc1: "The bohemian neighborhood par excellence, birthplace of Argentine tango.",
        tour6_desc2: "We will visit Defensa Street, Santo Domingo Convent and General Belgrano Mausoleum, Mafalda and the Comic Strip Walk, Zanjón de Granados, Casa Mínima, Dorrego Square, the Antiques Fair, milongas, historic cafés, Lezama Park and its National History Museum, and more.",
        tour7_title: "Barrio Parque Circuit. Embassies and more...",
        tour7_desc1: "We will visit the National Museum of Decorative Arts, Embassy of Italy, Embassy of Spain, Embassy of Greece, Embassy of Belgium, Casa Redonda, Victoria Ocampo House, Embassy of Chile, Embassy of Poland, Embassy of Haiti, Embassy of Saudi Arabia, Embassy of Lebanon.",
        tour8_title: "Tigre - Delta Circuit",
        tour8_desc1: "River landscape, heritage, and riverside culture.",
        tour8_desc2: "Excursion to the Tigre Delta, with a ride along the Luján River. Tour of the North Zone of Greater Buenos Aires. Tigre and its magnificent Delta, Victorica Walk, Tigre Art Museum (former Casino), the Puerto de Frutos Market, Reconquista Museum. La Marina Rowing Club, and more.",
        tour9_title: "La Plata",
        tour9_desc1: "A young, vibrant, and energetic city. Culture, science, nature, and fun… all in one place. The city of diagonals that invites you to discover it your way.",
        tour9_desc2: "We will visit Plaza Moreno, Civic Axis: Cathedral, City Hall, Argentine Theater, Provincial Legislature, Curutchet House, The Forest with the Natural Sciences Museum and the Estudiantes and Gimnasia y Esgrima stadiums, Children's City, and more.",
        tour10_title: "National Beer Festival – OKTOBERFEST Argentina",
        tour10_desc1: "Villa General Belgrano. Córdoba",
        tour10_desc2: "Since 1963, Villa General Belgrano has celebrated its traditional Oktoberfest, a festival that combines Central European music, typical dances, and craft beer.",
        tour10_desc3: "As you walk through its Alpine-style streets, visitors encounter fairs, traditional flavors where camaraderie, Cordoban identity, and German heritage merge in a unique festive atmosphere.",
        tour10_desc4: "Includes accommodation and venue entry",
        tour11_title: "Colonia del Sacramento / Uruguay",
        tour11_desc1: "Full-day excursion",
        tour11_desc2: "This experience promises to be an unforgettable journey, where every corner of Colonia del Sacramento tells stories of a vibrant and multicultural past.",
        tour11_desc3: "Just one hour by ferry from Buenos Aires, on the other shore of the Río de la Plata, lies this picturesque city of Hispanic-Portuguese origin, declared a UNESCO World Heritage Site, ideal for a full-day getaway. During our tour of its charming cobblestone streets, we will discover the Basilica of the Most Holy Sacrament, the iconic Lighthouse, the famous Street of Sighs, the historic City Gate, and more.",
        circuitosAutorTitle: "Author Circuits",
        circuitosAutorDesc: "Unique experiences designed by our local experts. Each circuit is a masterpiece that combines history, culture, gastronomy, and art, offering an exclusive and personalized vision of Buenos Aires that only we can provide.",
        circuito1_title: "In the footsteps of the aristocracy",
        circuito1_subtitle: "Palaces, power, and social life in Buenos Aires of the late 19th and early 20th centuries.",
        circuito1_desc: "A walk through the great palaces of aristocratic Buenos Aires that invites you to discover architectural styles, family histories, and the way the elite built and represented their power, finding their place in the city.",
        circuito2_title: "Where Buenos Aires touches the sky",
        circuito2_subtitle: "The domes that watch the city",
        circuito2_desc: "A walk in search of the most emblematic porteño domes that invite you to see the city from the heights, its architecture, and the meanings that crown its buildings, revealing how the city was designed to be viewed from above.",
        circuito3_title: "In the footsteps of faith",
        circuito3_subtitle: "Temples and religious orders of historic Buenos Aires",
        circuito3_desc: "A tour of the oldest churches and convents in the city center to discover the orders and congregations that inhabited them, their architecture, and the religious, educational, social, and urban legacy that shaped the city from its origins.",
        cementerioRecoletaTitle: "Recoleta Cemetery: Memorial of the Nation",
        cementerioRecoletaSubtitle: "Five tours to read Argentine history among majestic mausoleums",
        recoleta1_title: "Presidents for eternity",
        recoleta1_subtitle: "Power and the Republic in Recoleta",
        recoleta1_desc: "A tour of the tombs of Argentina's constitutional presidents that allows reflection on the exercise of power, country projects, and the political footprints they left beyond life.",
        recoleta2_title: "In the shadow of power",
        recoleta2_subtitle: "Vice presidents in Argentine history",
        recoleta2_desc: "This tour proposes to learn about the constitutional vice presidents buried in Recoleta and understand their political role, their trajectories, and their place—often silent—in national history.",
        recoleta3_title: "Women who made history",
        recoleta3_subtitle: "Voices, struggles, and legacies in Recoleta",
        recoleta3_desc: "A walk dedicated to renowned women who broke molds, left their mark, and built a legacy in different spheres of Argentina's social, political, cultural, and symbolic life.",
        recoleta4_title: "Truncated destinies",
        recoleta4_subtitle: "Tragedy, myth, and memory in Recoleta",
        recoleta4_desc: "A tour of stories marked by tragedy, scandal, and drama, where premature or violent death transformed their protagonists into figures marked by myth and collective memory.",
        recoleta5_title: "The city of symbols",
        recoleta5_subtitle: "Architecture, art, and funerary language",
        recoleta5_desc: "A tour that invites you to read the Recoleta Cemetery as an open-air museum, discovering architectural styles, funerary symbols, and hidden messages about life, death, and eternity.",
        recoleta5_desc: "A tour that invites you to read the Recoleta Cemetery as an open-air museum, discovering architectural styles, funerary symbols, and hidden messages about life, death, and eternity.",
        turismoCentroBarriosTitle: "Tourism: from downtown to neighborhoods",
        centroBarrios1_title: "Villa Devoto",
        centroBarrios1_desc: 'El barrio "Jardín de Buenos Aires", con calles arboladas, calma y espíritu barrial.',
        centroBarrios2_title: "Flores",
        centroBarrios2_desc: "Historia y diversidad en uno de los barrios más antiguos, donde vivió Jorge Mario Bergoglio: el Papa Francisco.",
        centroBarrios3_title: "Belgrano",
        centroBarrios3_desc: "Un barrio dinámico, famoso por sus verdes barrancas, casonas de estilo, el Barrio Chino, el golf y su lago de regatas.",
        centroBarrios4_title: "Villa del Parque",
        centroBarrios4_desc: "Barrio tranquilo con identidad porteña, que combina un ambiente residencial de calles arboladas, casas bajas y la emblemática estación ferroviaria con un importante y movido centro comercial a cielo abierto: la calle Cuenca.",
        centroBarrios5_title: "Paternal",
        centroBarrios5_desc: "Barrio de perfil pueblerino con un magnífico puente, de fuerte identidad fútbolera: Argentinos Juniors y Maradona; automotriz: la avenida Warnes y la añorada presencia bodeguera: Giol, Escorihuela, Gargantini, Toro, Arizu...",
        centroBarrios6_title: "Villa Crespo",
        centroBarrios6_desc: "Barrio pujante que no olvida sus orígenes tangueros y futboleros, de inmigración judía y sirio-libanesa; la fundacional fábrica de calzado y un memorable conventillo... Accesible con bus, subterráneo y tren, encontró su futuro en los outlets, bodegones y cocina de autor.",
        centroBarrios1_title: "Villa Devoto",
        centroBarrios1_desc: 'The "Garden of Buenos Aires" neighborhood, with tree-lined streets, calm, and neighborhood spirit.',
        centroBarrios2_title: "Flores",
        centroBarrios2_desc: "History and diversity in one of the oldest neighborhoods, where Jorge Mario Bergoglio lived: Pope Francis.",
        centroBarrios3_title: "Belgrano",
        centroBarrios3_desc: "A dynamic neighborhood, famous for its green cliffs, stylish mansions, Chinatown, golf, and its regatta lake.",
        centroBarrios4_title: "Villa del Parque",
        centroBarrios4_desc: "Quiet neighborhood with Porteño identity, combining a residential atmosphere of tree-lined streets, low houses, and the emblematic train station with an important and busy open-air shopping center: Cuenca Street.",
        centroBarrios5_title: "Paternal",
        centroBarrios5_desc: "Neighborhood with a village profile with a magnificent bridge, strong football identity: Argentinos Juniors and Maradona; automotive: Warnes Avenue and the longed-for winery presence: Giol, Escorihuela, Gargantini, Toro, Arizu...",
        centroBarrios6_title: "Villa Crespo",
        centroBarrios6_desc: "Thriving neighborhood that does not forget its tango and football origins, of Jewish and Syrian-Lebanese immigration; the foundational shoe factory and a memorable tenement... Accessible by bus, subway, and train, it found its future in outlets, eateries, and signature cuisine.",
        turismoSaludTitle: "Tourism and Health",
        turismoSaludDesc: "We combine the pleasure of getting to know Buenos Aires with caring for your well-being. Our specialized programs integrate tourist activities with health services, creating complete experiences that care for both your body and spirit during your stay in the city.",
        saludBienestarTitle: "Health and Wellness",
        saludBienestarDesc: "Today we must consider well-being as a therapeutic objective, as important as blood pressure, sugar or cholesterol levels...",
        visitaYouTube: "Learn more at MFSalud",
        aboutHeading: "About Us",
        aboutDesc: "We are a team dedicated to offering the best experience to our clients. With years of experience in Buenos Aires tourism, we specialize in creating unique tours that show the true essence of the city.",
        navSobreNosotros: "About Us",
        contactFormTitle: "Contact Us",
        contactNameLabel: "Name",
        contactEmailLabel: "Email",
        contactMessageLabel: "Inquiry",
        contactSubmitBtn: "Send Inquiry",
        contactInfoTitle: "Contact Information",
        emailLabel: "Email",
        whyChooseUsTitle: "Why choose us?",
        whyChooseUs1: "Experience and local knowledge",
        whyChooseUs2: "Personalized and unique tours",
        whyChooseUs3: "First-class customer service",
        whyChooseUs4: "Committed to your unforgettable experience",
        contactSuccess: "Inquiry sent!",
        turismoSaludSubtitle: "Walking to Discover: Gentle Walks that Transform the City into Wellness",
        turismoSaludIntro: "Walking is one of the simplest and most accessible ways to improve health. And when that walk happens in a city full of history, parks, and quiet spaces, the benefit is double: the body activates and the mind relaxes.",
        turismoSaludExperienciaTitle: "Tourism and health: a complete experience",
        turismoSaludExperienciaText: "Each of our guided tours seeks to make the tourist experience also a wellness experience. Getting to know the city without haste, with mindfulness and at a friendly pace, improves both body and mind.",
        turismoSaludExperienciaText2: "At urBAn Tours, we believe healthy tourism is not only possible but necessary. That's why we design gentle, accessible, and safe walks where what matters is calm, comfort, and enjoyment of the surroundings.",
        turismoSaludRitmoTitle: "Choosing the right pace is also tourism",
        turismoSaludRitmoText: "You don't need to cover long distances to get to know a city. A short walk through a park, a historic square, or a quiet waterfront can provide more wellness than a long and exhausting hike.",
        turismoSaludListIntro: "Our healthy tours are designed for:",
        turismoSaludList1: "Short and accessible distances",
        turismoSaludList2: "Gentle and paused pace",
        turismoSaludList3: "Green and ventilated areas",
        turismoSaludList4: "Effortless itineraries",
        turismoSaludList5: "Many resting points",
        turismoSaludConclusion: "In this way, anyone —regardless of their physical condition— can enjoy a guided tour without worries.",
        turismoSaludCTA: "Do you want to get to know Buenos Aires in a calm and healthy way? Contact us!",
        footerCopyright: "© 2025 Urban Tours. All rights reserved."
    },
    it: {
        subtitle: "Esplora Buenos Aires, scopri ",
        welcome: "Benvenuti!",
        welcome_text: "Scopri le nostre destinazioni e inizia la tua prossima avventura. Urban Tours Buenos Aires è riconosciuta come uno degli operatori turistici più rinomati dell'Argentina, specializzata nell'offrire un'ampia gamma di tour e soluzioni di trasporto. Il nostro team di esperti di viaggio si impegna a fornire servizi di alta qualità, consulenza personalizzata e assistenza per garantire che la tua esperienza in Argentina sia indimenticabile ed emozionante.",
        antesDeLlegar: "Prima di arrivare",
        antesDeLlegarSubtitle: "Tutto ciò che devi sapere per sfruttare al meglio la tua visita a Buenos Aires",
        primeraVez: "Prima volta",
        exploraCiudad: "Esplora la città",
        primeraVezDescripction: "Se è la tua prima volta a Buenos Aires, esplora i punti turistici più importanti utilizzando questa mappa interattiva.",
        interactiveMap: "Apri mappa completa",
        imperdibles: "Imperdibili",
        lugaresUnicos: "Luoghi unici",
        tipsLocales: "Consigli Locali",
        consejosUtiles: "Consigli utili",
        transporte: "🚇 Trasporto",
        transporteDesc: "Metropolitana economica, autobus (colectivo), Uber per distanze lunghe",
        murales: "🎨 Murales",
        muralesDesc: "Maradona, Messi, \"El Dibu\" Martinez, Carlos Gardel",
        selfies: "📸 Selfie",
        selfiesDesc: "Obelisco, Plaza de Mayo, Caminito, Puerto Madero, La Boca, San Telmo",
        navAntesDeLlegar: "Prima di arrivare",
        navNuestrosTours: "I Nostri Tour",
        navCircuitosAutor: "Circuiti d'Autore",
        navTurismoSalud: "Turismo e Salute",
        navSaludBienestar: "Salute e Benessere",
        nuestrosTours: "I Nostri Tour",
        verMas: "Leggi di più",
        verMenos: "Leggi di meno",
        duracion4horas: "Durata: 4 ore",
        duracion3dias: "Durata: 3 giorni",
        tour1_title: "Circuito Casco Storico della Città",
        tour1_desc1: "È il luogo dove nacque la città e dove si percepiscono ancora con più forza le sue origini coloniali. Qui si concentrano edifici che raccontano la storia politica, sociale e culturale del paese, dall'epoca del Vicereame fino alla formazione dello Stato argentino.",
        tour1_desc2: "Visiteremo Plaza de Mayo, caratterizzata dalla Piramide di Maggio e dagli edifici emblematici del suo ambiente: la Casa Rosada, sede del Governo Nazionale, la Cattedrale Metropolitana che ospita il Mausoleo del Libertador Gral. San Martín, il Cabildo, Banco Nación – Casa Centrale –, Chiesa San Ignacio, Manzana de las Luces e altro ancora.",
        tour2_title: "Circuito La Boca: Vuelta de Rocha - Caminito",
        tour2_desc1: "L'arte e il calcio argentino sono molto legati a questa passeggiata piena di vita e colore, dove vedremo ballare il tango ad ogni passo. L'antico porto dove arrivarono e vissero tanti immigrati.",
        tour2_desc2: "Visiteremo Caminito, Stadio di Boca Juniors, Museo Benito Quinquela Martín, Fundación Proa, Teatro Colón Fabrica, Vuelta de Rocha, Ponte Transbordador e altro ancora.",
        tour3_title: "Circuito Puerto Madero",
        tour3_desc1: "Il quartiere più nuovo, moderno ed esclusivo di Buenos Aires.",
        tour3_desc2: "Visiteremo il Ponte della Donna, progettato dal famoso architetto Santiago Calatrava, Nave Museo Fragata Sarmiento, Nave Museo Corbeta Uruguay, Fundación Fortabat e altro ancora.",
        tour4_title: "Circuito Recoleta e Cimitero",
        tour4_desc1: "Il quartiere più elegante di Buenos Aires, caratterizzato dalla sua architettura francese, caffè storici e il suo famoso cimitero dove riposano personalità storiche.",
        tour4_desc2: "Visiteremo Avenida Alvear e i suoi palazzi, la Chiesa del Pilar, cimitero di Recoleta, dove spicca il mausoleo di Evita, Museo di Belle Arti e altro ancora.",
        tour5_title: "Circuito Palermo e Parchi",
        tour5_desc1: "Il quartiere più grande di Buenos Aires, conosciuto per i suoi parchi, bar alla moda e vita notturna.",
        tour5_desc2: "Visiteremo i Boschi di Palermo, il Roseto, Planetario, l'esclusivo Barrio Parque con le sue ambasciate e palazzi, Monumento degli Spagnoli, Giardino Botanico, Ecoparco (ex Giardino Zoologico), zona bar di Palermo Soho e Palermo Hollywood e altro ancora.",
        tour6_title: "Circuito San Telmo e Tango",
        tour6_desc1: "Il quartiere bohémien per eccellenza, culla del tango argentino.",
        tour6_desc2: "Visiteremo la via Defensa, Convento di Santo Domingo e Mausoleo del Generale Belgrano, Mafalda e il Paseo de la Historieta, Zanjón de Granados, Casa Mínima, Plaza Dorrego, la Fiera delle Antichità, milonghe, caffè storici, Parque Lezama e il suo Museo Storico Nazionale e altro ancora.",
        tour7_title: "Circuito Barrio Parque. Ambasciate e altro ancora...",
        tour7_desc1: "Visiteremo Museo Nazionale di Arte Decorativa, Ambasciata d'Italia, Ambasciata di Spagna, Ambasciata di Grecia, Ambasciata del Belgio, Casa Redonda, Casa di Victoria Ocampo, Ambasciata del Cile, Ambasciata della Polonia, Ambasciata di Haiti, Ambasciata dell'Arabia Saudita, Ambasciata del Libano.",
        tour8_title: "Circuito Tigre - Delta",
        tour8_desc1: "Paesaggio fluviale, patrimonio e cultura rivierasca.",
        tour8_desc2: "Escursione al Delta del Tigre, con passeggiata lungo il fiume Luján. Percorso nella Zona Nord della Grande Buenos Aires. Tigre e il suo magnifico Delta, Paseo Victorica, Museo d'Arte Tigre (ex Casinò), il Mercato di Puerto de Frutos, Museo della Reconquista. Club di Regate La Marina e altro ancora.",
        tour9_title: "La Plata",
        tour9_desc1: "Una città giovane, vibrante e piena di energia. Cultura, scienza, natura e divertimento… tutto in un unico posto. La città delle diagonali che ti invita a scoprirla a modo tuo.",
        tour9_desc2: "Visiteremo Plaza Moreno, Asse Civico: Cattedrale, Municipio, Teatro Argentino, Legislatura Provinciale, Casa Curutchet, Il bosco con il Museo di Scienze Naturali e gli stadi di Estudiantes e Gimnasia y Esgrima, Città dei Bambini e altro ancora.",
        tour10_title: "Festa Nazionale della Birra – OKTOBERFEST Argentina",
        tour10_desc1: "Villa General Belgrano. Córdoba",
        tour10_desc2: "Dal 1963, Villa General Belgrano celebra la sua tradizionale Oktoberfest, una festa che combina musica centro-europea, danze tipiche e birra artigianale.",
        tour10_desc3: "Percorrendo le sue strade in stile alpino, il visitatore si trova di fronte a fiere, sapori tradizionali dove la cameratismo, l'identità cordobese e l'eredità tedesca si fondono in un'atmosfera festiva unica.",
        tour10_desc4: "Include alloggio e ingresso al sito",
        tour11_title: "Colonia del Sacramento / Uruguay",
        tour11_desc1: "Escursione di un'intera giornata",
        tour11_desc2: "Questa esperienza promette di essere un viaggio indimenticabile, dove ogni angolo di Colonia del Sacramento racconta storie di un passato vibrante e multiculturale.",
        tour11_desc3: "A solo un'ora in traghetto da Buenos Aires, sull'altra sponda del Río de la Plata, si trova questa pittoresca città di origine ispano-portoghese, dichiarata Patrimonio dell'Umanità dall'UNESCO, ideale per una fuga di un'intera giornata. Durante il nostro percorso attraverso le sue incantevoli strade acciottolate, scopriremo la Basilica del Santissimo Sacramento, il famoso Faro, la famosa Calle de los Suspiros, la storica Porta della Cittadella, e altro ancora.",
        circuitosAutorTitle: "Circuiti d'Autore",
        circuitosAutorDesc: "Esperienze uniche progettate dai nostri esperti locali. Ogni circuito è un capolavoro che combina storia, cultura, gastronomia e arte, offrendo una visione esclusiva e personalizzata di Buenos Aires che solo noi possiamo fornire.",
        circuito1_title: "Sulle tracce dell'aristocrazia",
        circuito1_subtitle: "Palazzi, potere e vita sociale nella Buenos Aires di fine Ottocento e inizio Novecento.",
        circuito1_desc: "Una passeggiata attraverso i grandi palazzi della Buenos Aires aristocratica che invita a scoprire stili architettonici, storie familiari e il modo in cui l'élite costruì e rappresentò il suo potere trovando il suo posto nella città.",
        circuito2_title: "Dove Buenos Aires tocca il cielo",
        circuito2_subtitle: "Le cupole che guardano la città",
        circuito2_desc: "Una passeggiata alla ricerca delle cupole porteñe più emblematiche che invitano a vedere la città in alto, la sua architettura e i significati che coronano i suoi edifici, rivelando come la città fu pensata per essere guardata dall'alto.",
        circuito3_title: "Sulle tracce della fede",
        circuito3_subtitle: "Templi e ordini religiosi della Buenos Aires storica",
        circuito3_desc: "Un percorso attraverso le chiese e i conventi più antichi del centro porteño per scoprire gli ordini e le congregazioni che li abitarono, la loro architettura e il lascito religioso, educativo, sociale e urbano che modellò la città dalle sue origini.",
        cementerioRecoletaTitle: "Cimitero della Recoleta: Memoriale della Nazione",
        cementerioRecoletaSubtitle: "Cinque percorsi per leggere la storia argentina tra maestosi mausolei",
        recoleta1_title: "Presidenti per l'eternità",
        recoleta1_subtitle: "Il potere e la Repubblica nella Recoleta",
        recoleta1_desc: "Un percorso attraverso le tombe dei presidenti costituzionali argentini che permette di riflettere sull'esercizio del potere, i progetti di paese e le tracce politiche che lasciarono oltre la vita.",
        recoleta2_title: "All'ombra del potere",
        recoleta2_subtitle: "Vicepresidenti nella storia argentina",
        recoleta2_desc: "Questo percorso propone di conoscere i vicepresidenti costituzionali sepolti nella Recoleta e comprendere il loro ruolo politico, le loro traiettorie e il loro posto—spesso silenzioso—nella storia nazionale.",
        recoleta3_title: "Donne che hanno fatto la storia",
        recoleta3_subtitle: "Voci, lotte e lasciti nella Recoleta",
        recoleta3_desc: "Una passeggiata dedicata a donne di fama che hanno rotto gli schemi, lasciato il segno e costruito un lascito in diversi ambiti della vita sociale, politica, culturale e simbolica dell'Argentina.",
        recoleta4_title: "Destini troncati",
        recoleta4_subtitle: "Tragedia, mito e memoria nella Recoleta",
        recoleta4_desc: "Un percorso attraverso storie segnate dalla tragedia, lo scandalo e il dramma, dove la morte prematura o violenta trasformò i suoi protagonisti in figure attraversate dal mito e dalla memoria collettiva.",
        recoleta5_title: "La città dei simboli",
        recoleta5_subtitle: "Architettura, arte e linguaggio funerario",
        recoleta5_desc: "Un percorso che invita a leggere il Cimitero della Recoleta come un museo all'aperto, scoprendo stili architettonici, simboli funerari e messaggi nascosti sulla vita, la morte e l'eternità.",
        recoleta5_desc: "Un percorso che invita a leggere il Cimitero della Recoleta come un museo all'aperto, scoprendo stili architettonici, simboli funerari e messaggi nascosti sulla vita, la morte e l'eternità.",
        turismoCentroBarriosTitle: "Turismo: dal centro ai quartieri",
        centroBarrios1_title: "Villa Devoto",
        centroBarrios1_desc: 'El barrio "Jardín de Buenos Aires", con calles arboladas, calma y espíritu barrial.',
        centroBarrios2_title: "Flores",
        centroBarrios2_desc: "Historia y diversidad en uno de los barrios più antichi, dove visse Jorge Mario Bergoglio: il Papa Francesco.",
        centroBarrios3_title: "Belgrano",
        centroBarrios3_desc: "Un barrio dinámico, famoso por sus verdes barrancas, casonas de estilo, el Barrio Chino, el golf y su lago de regatas.",
        centroBarrios4_title: "Villa del Parque",
        centroBarrios4_desc: "Barrio tranquilo con identidad porteña, que combina un ambiente residencial de calles arboladas, casas bajas y la emblemática estación ferroviaria con un importante y movido centro comercial a cielo abierto: la calle Cuenca.",
        centroBarrios5_title: "Paternal",
        centroBarrios5_desc: "Barrio de perfil pueblerino con un magnífico puente, de fuerte identidad fútbolera: Argentinos Juniors y Maradona; automotriz: la avenida Warnes y la añorada presencia bodeguera: Giol, Escorihuela, Gargantini, Toro, Arizu...",
        centroBarrios6_title: "Villa Crespo",
        centroBarrios6_desc: "Barrio pujante que no olvida sus orígenes tangueros y futboleros, de inmigración judía y sirio-libanesa; la fundacional fábrica de calzado y un memorable conventillo... Accesible con bus, subterráneo y tren, encontró su futuro en los outlets, bodegones y cocina de autor.",
        centroBarrios1_title: "Villa Devoto",
        centroBarrios1_desc: 'Il quartiere "Giardino di Buenos Aires", con strade alberate, calma e spirito di quartiere.',
        centroBarrios2_title: "Flores",
        centroBarrios2_desc: "Storia e diversità in uno dei quartieri più antichi, dove visse Jorge Mario Bergoglio: Papa Francesco.",
        centroBarrios3_title: "Belgrano",
        centroBarrios3_desc: "Un quartiere dinamico, famoso per le sue verdi scogliere, case signorili, la Chinatown, il golf e il suo lago di regate.",
        centroBarrios4_title: "Villa del Parque",
        centroBarrios4_desc: "Quartiere tranquillo con identità portegna, che combina un'atmosfera residenziale di strade alberate, case basse ed l'emblematica stazione ferroviaria con un importante e vivace centro commerciale all'aperto: via Cuenca.",
        centroBarrios5_title: "Paternal",
        centroBarrios5_desc: "Quartiere dal profilo paesano con un magnifico ponte, di forte identità calcistica: Argentinos Juniors e Maradona; automobilistica: viale Warnes e la nostalgica presenza vinicola: Giol, Escorihuela, Gargantini, Toro, Arizu...",
        centroBarrios6_title: "Villa Crespo",
        centroBarrios6_desc: "Quartiere fiorente che non dimentica le sue origini di tango e calcio, di immigrazione ebraica e siriano-libanese; la fondamentale fabbrica di calzature e un memorabile conventillo... Accessibile con autobus, metropolitana e treno, ha trovato il suo futuro negli outlet, nelle osterie e nella cucina d'autore.",
        turismoSaludTitle: "Turismo e Salute",
        turismoSaludDesc: "Combiniamo il piacere di conoscere Buenos Aires con la cura del tuo benessere. I nostri programmi specializzati integrano attività turistiche con servizi sanitari, creando esperienze complete che si prendono cura sia del tuo corpo che del tuo spirito durante il tuo soggiorno in città.",
        saludBienestarTitle: "Salute e Benessere",
        saludBienestarDesc: "Oggi dobbiamo considerare il benessere come un obiettivo terapeutico, tanto importante quanto i livelli di pressione sanguigna, zucchero o colesterolo...",
        visitaYouTube: "Scopri di più su MFSalud",
        aboutHeading: "Chi siamo",
        aboutDesc: "Siamo un team dedicato a offrire la migliore esperienza ai nostri clienti. Con anni di esperienza nel turismo di Buenos Aires, ci specializziamo nella creazione di tour unici che mostrano la vera essenza della città.",
        navSobreNosotros: "Chi siamo",
        contactFormTitle: "Contattaci",
        contactNameLabel: "Nome",
        contactEmailLabel: "Email",
        contactMessageLabel: "Richiesta",
        contactSubmitBtn: "Invia Richiesta",
        contactInfoTitle: "Informazioni di Contatto",
        emailLabel: "Email",
        whyChooseUsTitle: "Perché sceglierci?",
        whyChooseUs1: "Esperienza e conoscenza locale",
        whyChooseUs2: "Tour personalizzati e unici",
        whyChooseUs3: "Servizio clienti di prima classe",
        whyChooseUs4: "Impegnati per la tua esperienza indimenticabile",
        contactSuccess: "Richiesta inviata!",
        turismoSaludSubtitle: "Camminare per Conoscere: Le Passeggiate Dolci che Trasformano la Città in Benessere",
        turismoSaludIntro: "Camminare è uno dei modi più semplici e accessibili per migliorare la salute. E quando questa camminata avviene in una città piena di storia, parchi e spazi tranquilli, il beneficio è doppio: il corpo si attiva e la mente si rilassa.",
        turismoSaludExperienciaTitle: "Turismo e salute: un'esperienza completa",
        turismoSaludExperienciaText: "Ognuna delle nostre visite guidate cerca di rendere l'esperienza turistica anche un'esperienza di benessere. Conoscere la città senza fretta, con attenzione piena e a un ritmo amichevole, migliora sia il corpo che la mente.",
        turismoSaludExperienciaText2: "Da urBAn Tours, crediamo che il turismo salutare non sia solo possibile, ma necessario. Per questo progettiamo passeggiate dolci, accessibili e sicure dove ciò che conta è la calma, il comfort e il godimento dell'ambiente.",
        turismoSaludRitmoTitle: "Scegliere il ritmo giusto è anche turismo",
        turismoSaludRitmoText: "Non serve percorrere lunghe distanze per conoscere una città. Una breve passeggiata in un parco, in una piazza storica o su un lungomare tranquillo può offrire più benessere di una camminata lunga ed estenuante.",
        turismoSaludListIntro: "I nostri percorsi salutari sono pensati per:",
        turismoSaludList1: "Distanze brevi e accessibili",
        turismoSaludList2: "Passo dolce e pausato",
        turismoSaludList3: "Zone verdi e ventilate",
        turismoSaludList4: "Itinerari senza sforzo",
        turismoSaludList5: "Molti punti di riposo",
        turismoSaludConclusion: "In questo modo, chiunque —indipendentemente dalla propria condizione fisica— può godersi una visita guidata senza preoccupazioni.",
        turismoSaludCTA: "Vuoi conoscere Buenos Aires in modo tranquillo e salutare? Contattaci!",
        footerCopyright: "© 2025 Urban Tours. Tutti i diritti riservati."
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
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Update "Ver más" / "Ver menos" buttons based on their current state
    document.querySelectorAll('.tour-toggle-btn span[data-key="verMas"]').forEach(span => {
        const btn = span.closest('.tour-toggle-btn');
        const card = btn.closest('.tours-slide');
        const fullContent = card.querySelector('.tour-full-content');
        if (fullContent && !fullContent.classList.contains('hidden')) {
            span.textContent = translations[language]?.verMenos || 'Ver menos';
        } else {
            span.textContent = translations[language]?.verMas || 'Ver más';
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
document.addEventListener("DOMContentLoaded", function () {
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
                indicator.className = `tours-indicator w-3 h-3 rounded-full transition-all duration-300 ${i === currentToursSlide
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

    // Tour "Ver más" functionality - Only show button if content is truncated
    function checkTourContentOverflow() {
        document.querySelectorAll('.tours-slide').forEach(slide => {
            const contentContainer = slide.querySelector('.tour-content');
            const fullContent = slide.querySelector('.tour-full-content');
            const toggleBtn = slide.querySelector('.tour-toggle-btn');

            if (!contentContainer || !fullContent || !toggleBtn) return;

            // First, show only the visible content to measure
            fullContent.classList.add('hidden');
            contentContainer.style.overflow = 'hidden';

            // Get the height of visible content only
            const visibleHeight = contentContainer.scrollHeight;
            const availableHeight = contentContainer.clientHeight;

            // Now show full content to measure total height
            fullContent.classList.remove('hidden');
            contentContainer.style.overflow = 'visible';
            const totalHeight = contentContainer.scrollHeight;

            // Check if full content fits in available space
            if (totalHeight <= availableHeight) {
                // Content fits, show everything and hide button
                fullContent.classList.remove('hidden');
                contentContainer.style.overflow = 'hidden';
                toggleBtn.style.display = 'none';
            } else {
                // Content doesn't fit, hide extra content and show button
                fullContent.classList.add('hidden');
                contentContainer.style.overflow = 'hidden';
                toggleBtn.style.display = 'flex';
            }
        });
    }

    // Check on load and after a short delay to ensure images are loaded
    setTimeout(checkTourContentOverflow, 100);
    window.addEventListener('resize', () => {
        setTimeout(checkTourContentOverflow, 100);
    });

    // Tour "Ver más" click handler
    document.querySelectorAll('.tour-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const card = this.closest('.tours-slide');
            const fullContent = card.querySelector('.tour-full-content');
            const contentContainer = card.querySelector('.tour-content');
            const icon = this.querySelector('svg');
            const span = this.querySelector('span');

            if (fullContent) {
                const isExpanded = !fullContent.classList.contains('hidden');

                if (isExpanded) {
                    // Collapse
                    fullContent.classList.add('hidden');
                    contentContainer.style.overflow = 'hidden';
                    const currentLang = document.querySelector('[data-lang].ring-2')?.getAttribute('data-lang') || 'es';
                    span.textContent = translations[currentLang]?.verMas || 'Ver más';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    // Expand
                    fullContent.classList.remove('hidden');
                    contentContainer.style.overflow = 'auto';
                    const currentLang = document.querySelector('[data-lang].ring-2')?.getAttribute('data-lang') || 'es';
                    span.textContent = translations[currentLang]?.verMenos || 'Ver menos';
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });

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

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;

            // Create mailto link
            const subject = encodeURIComponent(`Consulta de ${name}`);
            const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nConsulta:\n${message}`);
            const mailtoLink = `mailto:urbantoursargentina@gmail.com?subject=${subject}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message (optional)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const currentLang = document.querySelector('[data-lang].ring-2')?.getAttribute('data-lang') || 'es';
            submitBtn.textContent = translations[currentLang]?.contactSuccess || '¡Consulta enviada!';
            submitBtn.classList.add('bg-green-500', 'hover:bg-green-600');
            submitBtn.classList.remove('bg-primary', 'hover:bg-orange-600');

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
                submitBtn.classList.add('bg-primary', 'hover:bg-orange-600');
            }, 3000);
        });
    }

    // Background Slider for Neighborhoods
    const backgroundSlides = document.querySelectorAll('.background-slider');
    let currentBackgroundSlide = 0;

    if (backgroundSlides.length > 0) {
        setInterval(() => {
            // Fade out current
            backgroundSlides[currentBackgroundSlide].classList.remove('opacity-100');
            backgroundSlides[currentBackgroundSlide].classList.add('opacity-0');

            // Determine next
            currentBackgroundSlide = (currentBackgroundSlide + 1) % backgroundSlides.length;

            // Fade in next
            backgroundSlides[currentBackgroundSlide].classList.remove('opacity-0');
            backgroundSlides[currentBackgroundSlide].classList.add('opacity-100');
        }, 5000); // Change every 5 seconds
    }

    // 3D Tilt Effect for Neighborhood Cards
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate tilt based on cursor position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Max tilt angle
            const maxTilt = 10;

            const rotateX = ((y - centerY) / centerY) * -maxTilt; // Invert axis
            const rotateY = ((x - centerX) / centerX) * maxTilt;

            // Apply transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

            // Glare effect
            const glare = card.querySelector('.glare');
            if (glare) {
                const glareX = (x / rect.width) * 100;
                const glareY = (y / rect.height) * 100;
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 80%)`;
                glare.style.opacity = '1';
            }
        });

        card.addEventListener('mouseleave', () => {
            // Reset transform
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

            // Reset glare
            const glare = card.querySelector('.glare');
            if (glare) {
                glare.style.opacity = '0';
            }
        });
    });
});