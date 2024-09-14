 export interface Language {
    code: string;
    name: string;
  }
  
// export interface Translation {
//     [key: string]: string;
//   }

  export type Translation = {
    navigation: {
      home: string;
      features: string;
      about: string;
      journals: string;
      testimonials: string;
      faq: string;
    };
    dashboard: string;
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      promo: string;
    };
    features: {
      title: string;
      items: {
        icon: string;
        title: string;
        description: string;
      }[];
    };
    about: {
      title: string;
      description: string;
      description2: string;
      cta: string;
    };
    about2: {
      title: string;
      description: string;
      description2: string;
      cta: string;
    };
    journals: {
      title: string;
      description: string;
      cta: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      title2:string;
      description: string;
    };
    blog: {
        title: string;
        subtitle: string;
        description: string;
      };
    faq: {
      title: string;
      description: string;
    };
    map: {
        title: string;
        description: string;
      };
    footer: {
      copyright: string;
      contact: string;
      primaryPages: string[];
      utilityPages: string[];
      resources: string[];
    };
  };
  


export const translations: { [key: string]: Translation }  = 
{
    en: {
      navigation: {
        home: "Home",
        features: "Features",
        about: "About",
        journals: "Journals",
        testimonials: "Testimonials",
        faq: "FAQ"
      },
      dashboard: "Dashboard",
      hero: {
        title: "Spotlighting African Journals",
        subtitle: "Welcome to AfriJour, your gateway to the rich and diverse world of African scholarship. We are dedicated to amplifying the voices of African journals, offering a platform where their unique narratives and perspectives can shine brightly.",
        cta: "Get Started Now",
        promo: "Latest Journals are available"
      },
      features: {
        title: "Special features that make AfriJour the best",
        items: [
          {
            icon: "icon-violet-feature-1",
            title: "Journals",
            description: "A diverse collection of African journals from various disciplines, hosted on our platform."
          },
          {
            icon: "icon-violet-feature-2",
            title: "Repositories",
            description: "Secure and stable platforms for hosting journals, ensuring their long-term preservation and accessibility."
          },
          {
            icon: "icon-violet-feature-3",
            title: "Indexes",
            description: "African Journals Indexers that increase visibility and accessibility of African journals in the global scholarly community."
          },
          {
            icon: "icon-violet-feature-4",
            title: "Reviewers",
            description: "African scholars who contribute to the peer review process, ensuring high-quality standards and rigorous academic discourse."
          }
        ]
      },
      about: {
        title: "Discover the Vibrant Tapestry of African Knowledge",
        description: "At AfriJour, we believe that African scholarship deserves a prominent place on the global stage. Our platform is committed to showcasing the intellectual richness and diversity emanating from the African continent. Through innovative analytics and dedicated curation, we empower African scholars and researchers, fostering global collaboration and knowledge exchange.",
        description2:" Our innovative indexing system ensures that the wealth of African academic work is organized and easily searchable, facilitating efficient discovery of relevant content. To uphold the integrity and quality of the research we feature, AfriJour relies on a dedicated team of Reviewers who meticulously evaluate each submission.",
        cta: "Explore More"
      },
      about2: {
        title: "Empowering African Scholars, Researchers and Professors.",
        description: "At AfriJour, our mission is to elevate and support African scholars, researchers, and professors by providing a platform that amplifies their contributions and enhances their global impact. We offer extensive access to a wide range of African journals and research publications, ensuring that their work gains the visibility it deserves.",
        description2: "In addition to visibility and access, AfriJour fosters collaboration and networking opportunities within the academic community. Our innovative indexing system and rigorous peer review process create an environment where quality research is highlighted and scholarly dialogue is encouraged.",
        cta: "Explore More"
      },
      journals: {
        title: "Browse our journals that are just right for you",
        description: "Choose from over 20,700 journals and learning paths, with dozens added every week. Top it off with courses that round out your skills and enrich your day-to-day.",
        cta: "Go to Dashboard"
      },
      blog: {
          title:"Here are numerous topics that will enhance your research",
          subtitle:"Browse our journals that are just right for you",
          description:"Choose from over 20,700 journals and learning paths, with dozens added every week. Top it off with courses that round out your skills and enrich your day-to-day.",
      },
      testimonials: {
        title: "Share your knowledge & experience with others",
        subtitle:"Researchers like you achieve their goals through our journals",
        title2:"Researchers like you achieve their goals through our journals",
        description: "We envision AfriJour as the premier gateway to African journals, fostering a vibrant ecosystem of scholarly exchange and discovery. We aspire to be a catalyst for the global recognition and appreciation of African scholarship, inspiring and empowering the next generation of African scholars and thought leaders."
      },
      faq: {
        title: "Start learning today and expand your knowledge at any level",
        description: "We have easily downloadable learning app on any device and anywhere to experience an exclusive e-learning platform for world-class education."
      },
      map: {
        title: "Frequently asked questions about our Afrijour",
        description: "We encourage our students, researchers, Professors to ask us any questions regarding our journals. Our skilled mentors are ready to answer all your questions 24/7."
      },
      footer: {
        copyright: "© Copyright 2024, All Rights Reserved",
        contact: "info@afrijour.com",
        primaryPages: [
          "Home",
          "About Us",
          "Services",
          "Pricing",
          "Contact"
        ],
        utilityPages: [
          "Signup",
          "Login",
          "404 Not found",
          "Password Reset"
        ],
        resources: [
          "Support",
          "Privacy policy",
          "Terms & Conditions",
          "Strategic finance",
          "Video guide"
        ]
      }
    },
    es: {
      navigation: {
        home: "Inicio",
        features: "Características",
        about: "Acerca de",
        journals: "Revistas",
        testimonials: "Testimonios",
        faq: "Preguntas frecuentes"
      },
      dashboard: "Tablero",
      hero: {
        title: "Enfocando Revistas Africanas",
        subtitle: "Bienvenido a AfriJour, tu puerta de entrada al mundo rico y diverso de la scholarship africana. Estamos dedicados a amplificar las voces de las revistas africanas, ofreciendo una plataforma donde sus narrativas y perspectivas únicas pueden brillar con fuerza.",
        cta: "Comenzar ahora",
         promo: "Las últimas revistas están disponibles"
      },
      features: {
        title: "Características especiales que hacen de AfriJour lo mejor",
        items: [
          {
            icon: "icon-violet-feature-1",
            title: "Revistas",
            description: "Una colección diversa de revistas africanas de diversas disciplinas, alojadas en nuestra plataforma."
          },
          {
            icon: "icon-violet-feature-2",
            title: "Repositorios",
            description: "Plataformas seguras y estables para alojar revistas, asegurando su preservación y accesibilidad a largo plazo."
          },
          {
            icon: "icon-violet-feature-3",
            title: "Índices",
            description: "Índices de Revistas Africanas que aumentan la visibilidad y accesibilidad de las revistas africanas en la comunidad académica global."
          },
          {
            icon: "icon-violet-feature-4",
            title: "Revisores",
            description: "Académicos africanos que contribuyen al proceso de revisión por pares, asegurando estándares de calidad altos y un riguroso debate académico."
          }
        ]
      },
      about: {
        title: "Descubre el Vibrante Tapiz del Conocimiento Africano",
        description: "En AfriJour, creemos que la scholarship africana merece un lugar destacado en el escenario global. Nuestra plataforma está comprometida con mostrar la riqueza intelectual y la diversidad que emana del continente africano. A través de análisis innovadores y una curación dedicada, empoderamos a académicos y investigadores africanos, fomentando la colaboración y el intercambio de conocimientos a nivel global.",
        description2:"Nuestro sistema de indexación innovador garantiza que la riqueza del trabajo académico africano está organizado y fácilmente buscable, facilitando el descubrimiento eficiente del contenido relevante. Para mantener la integridad y la calidad de la investigación que presentamos, AfriJour se basa en un equipo dedicado de Revisores que evalúan cuidadosamente cada envío.",
        cta: "Explorar más"
      },
      about2: {
        title: "Empoderar a académicos, investigadores y profesores africanos.",
        description: "En AfriJour, nuestra misión es elevar y apoyar a los académicos, investigadores y profesores africanos, brindándoles una plataforma que amplifique sus contribuciones y aumente su impacto global. Ofrecemos acceso extenso a una amplia gama de revistas y publicaciones de investigación africanas, asegurando que su trabajo obtenga la visibilidad que merece.",
        description2: "Además de la visibilidad y el acceso, AfriJour fomenta la colaboración y las oportunidades de establecer contactos dentro de la comunidad académica. Nuestro innovador sistema de indexación y nuestro riguroso proceso de revisión por pares crean un entorno donde se destaca la investigación de calidad y se fomenta el diálogo académico.",
        cta: "Explorar más"
      },
            journals: {
        title: "Explora nuestras revistas que son justo lo que necesitas",
        description: "Elige entre más de 20,700 revistas y senderos de aprendizaje, con docenas agregadas cada semana. ¡Cúbrelo con cursos que redondean tus habilidades y enriquecen tu día a día!",
        cta: "Ir al Tablero"
      },
      testimonials: {
        title: "Comparte tu conocimiento y experiencia con otros",
        subtitle:"Researchers like you achieve their goals through our journals",
        title2:"Los investigadores como tú logran sus objetivos a través de nuestras revistas",
        description: "Vemos AfriJour como la puerta de entrada principal a las revistas africanas, fomentando un ecosistema vibrante de intercambio y descubrimiento académico. Aspiramos a ser un catalizador para el reconocimiento y la apreciación globales de la scholarship africana, inspirando y empoderando a la próxima generación de académicos y líderes de pensamiento africanos."
      },
      blog: {
        title:"Aquí hay numerosos temas que mejorarán tu investigación",
        subtitle:"Explora nuestras revistas que son justo lo que necesitas",
        description:"Elige entre más de 20,700 revistas y senderos de aprendizaje, con docenas agregadas cada semana. ¡Termínalo con cursos que redondeen tus habilidades y enriquezcan tu día a día!",
    },
    map: {
        title: "Comienza a aprender hoy y amplía tus conocimientos a cualquier nivel",
        description: "Tenemos una aplicación de aprendizaje fácilmente descargable en cualquier dispositivo y en cualquier lugar para experimentar una plataforma de e-learning exclusiva para educación de clase mundial."
      },
      faq: {
        title: "Preguntas frecuentes sobre nuestro Afrijour",
        description: "Animamos a nuestros estudiantes, investigadores y profesores a hacernos cualquier pregunta sobre nuestras revistas. Nuestros mentores capacitados están listos para responder todas tus preguntas las 24 horas del día, los 7 días de la semana."
      },
      footer: {
        copyright: "© Derechos de autor 2024, todos los derechos reservados",
        contact: "info@afrijour.com",
        primaryPages: [
          "Inicio",
          "Acerca de nosotros",
          "Servicios",
          "Precios",
          "Contacto"
        ],
        utilityPages: [
          "Registrarse",
          "Iniciar sesión",
          "404 No encontrado",
          "Restablecer contraseña"
        ],
        resources: [
          "Soporte",
          "Política de privacidad",
          "Términos y condiciones",
          "Finanzas estratégicas",
          "Guía de video"
        ]
      }
    },
    fr: {
      navigation: {
        home: "Accueil",
        features: "Fonctionnalités",
        about: "À propos",
        journals: "Revues",
        testimonials: "Témoignages",
        faq: "FAQ"
      },
      dashboard: "Tableau de bord",
      hero: {
        title: "Mettre en valeur les revues africaines",
        subtitle: "Bienvenue sur AfriJour, votre porte d'entrée dans le monde riche et diversifié des études africaines. Nous sommes dédiés à amplifier les voix des revues africaines, offrant une plateforme où leurs narratifs et perspectives uniques peuvent briller vivement.",
        cta: "Commencer maintenant",
        promo:"Les dernières revues sont disponibles"
      },
      features: {
        title: "Fonctionnalités spéciales qui font d'AfriJour le meilleur",
        items: [
          {
            icon: "icon-violet-feature-1",
            title: "Revues",
            description: "Une collection diverse de revues africaines de diverses disciplines, hébergées sur notre plateforme."
          },
          {
            icon: "icon-violet-feature-2",
            title: "Rep",
            description: "sds"
          },
          {
            icon: "icon-violet-feature-3",
            title: "Index",
            description: "Index des revues africaines qui augmentent la visibilité et l'accessibilité des revues africaines dans la communauté académique mondiale."
          },
          {
            icon: "icon-violet-feature-4",
            title: "Réviseurs",
            description: "Des universitaires africains qui contribuent au processus de révision par pairs, garantissant des normes de qualité élevées et un débat académique rigoureux."
          }
        ]
      },
      about: {
        title: "Découvrez la riche tapisserie du savoir africain",
        description: "Chez AfriJour, nous croyons que les études africaines méritent une place de choix sur la scène mondiale. Notre plateforme s'engage à mettre en valeur la richesse intellectuelle et la diversité qui émanent du continent africain. Grâce à des analyses innovantes et une sélection dédiée, nous renforçons les universitaires et chercheurs africains, favorisant la collaboration et l'échange de connaissances à l'échelle mondiale.",
        description2:"Notre système d'indexation innovant garantit que la richesse du travail académique africain est organisée et facilement recherchable, facilitant la découverte efficace du contenu pertinent. Pour maintenir l'intégrité et la qualité de la recherche que nous présentons, AfriJour s'appuie sur une équipe dédiée de Réviseurs qui évaluent soigneusement chaque soumission.",
        cta: "Explorez plus"
      },
      about2: {
        title: "Autonomiser les universitaires, chercheurs et professeurs africains.",
        description: "Chez AfriJour, notre mission est d'élever et de soutenir les universitaires, chercheurs et professeurs africains en fournissant une plate-forme qui amplifie leurs contributions et améliore leur impact mondial. Nous offrons un accès étendu à un large éventail de revues et de publications de recherche africaines, garantissant ainsi que leurs travaux obtiennent la visibilité qu'ils méritent.",
        description2: "En plus de la visibilité et de l'accès, AfriJour favorise les opportunités de collaboration et de réseautage au sein de la communauté universitaire. Notre système d'indexation innovant et notre processus rigoureux d'examen par les pairs créent un environnement où la qualité de la recherche est mise en valeur et le dialogue scientifique est encouragé.",
        cta: "Explorez plus"
      },
      journals: {
        title: "Parcourez nos revues qui vous conviennent parfaitement",
        description: "Choisissez parmi plus de 20 700 revues et parcours d'apprentissage, avec des douzaines ajoutées chaque semaine. Terminez avec des cours qui affinent vos compétences et enrichissent votre vie quotidienne !",
        cta: "Aller au tableau de bord"
      },
      blog: {
        title:"Voici de nombreux sujets qui amélioreront vos recherches",
        subtitle:"Parcourez nos revues qui vous conviennent parfaitement",
        description:"Choisissez parmi plus de 20 700 revues et parcours d'apprentissage, avec des douzaines ajoutées chaque semaine. Terminez avec des cours qui affinent vos compétences et enrichissent votre vie quotidienne !",
    },
    map: {
        title: "Commencez à apprendre dès aujourd'hui et élargissez vos connaissances à tout niveau",
        description: "Nous avons une application d'apprentissage facilement téléchargeable sur tout appareil et en tout lieu pour expérimenter une plateforme d'apprentissage en ligne exclusive pour une éducation de classe mondiale."
      },
      testimonials: {
        title: "Partagez vos connaissances et votre expérience avec les autres",
        subtitle:"Researchers like you achieve their goals through our journals",
        title2:"Les chercheurs comme vous atteignent leurs objectifs grâce à nos revues",
        description: "Nous voyons AfriJour comme la porte d'entrée principale des revues africaines, favorisant un écosystème vibrant d'échange et de découverte académique. Nous aspirons à être un catalyseur pour la reconnaissance et l'appréciation mondiales des études africaines, inspirant et renforçant la prochaine génération d'universitaires et de penseurs africains."
      },
      faq: {
        title: "Questions fréquemment posées sur notre Afrijour",
        description: "Nous encourageons nos étudiants, chercheurs et professeurs à nous poser des questions concernant nos revues. Nos mentors qualifiés sont prêts à répondre à toutes vos questions 24h/24 et 7j/7."
      },
      footer: {
        copyright: "© Droits d'auteur 2024, tous droits réservés",
        contact: "info@afrijour.com",
        primaryPages: [
          "Accueil",
          "À propos de nous",
          "Services",
          "Tarification",
          "Contact"
        ],
        utilityPages: [
          "Inscription",
          "Connexion",
          "404 Non trouvé",
          "Réinitialiser le mot de passe"
        ],
        resources: [
          "Support",
          "Politique de confidentialité",
          "Conditions d'utilisation",
          "Finance stratégique",
          "Guide vidéo"
        ]
      }
    }
  };

  export const languages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];