export const supportedLanguages = [
  { code: "uz", label: "O'zbekcha" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" }
] as const

export type LanguageCode = (typeof supportedLanguages)[number]["code"]

export type TranslationContent = {
  languageName: string
  header: {
    languageLabel: string
  }
  nav: {
    about: string
    skills: string
    projects: string
    contact: string
    contactCta: string
  }
  hero: {
    titleStart: string
    highlightedName: string
    titleEnd: string
    subtitle: string
    ctaGithub: string
    ctaTelegram: string
    ctaResume: string
  }
  about: {
    badge: string
    paragraphs: string[]
    languagesTitle: string
    languageSkills: string[]
  }
  skills: {
    badge: string
    heading: string
    subtitle: string
    frontendTitle: string
    frontendDescription: string
    backendTitle: string
    backendDescription: string
    otherTitle: string
    otherDescription: string
  }
  projects: {
    badge: string
    heading: string
    subtitle: string
    viewSite: string
    viewGithub: string
    viewAll: string
    phoneTech: {
      badge: string
      description: string
    }
    firewise: {
      badge: string
      description: string
    }
    turonDrain: {
      badge: string
      description: string
    }
    sbmFood: {
      badge: string
      description: string
    }
    upcoming: {
      title: string
      description: string
    }
  }
  contact: {
    badge: string
    heading: string
    subtitle: string
    emailCardTitle: string
    emailButton: string
    telegramCardTitle: string
    telegramHandle: string
    telegramButton: string
    instagramCardTitle: string
    instagramHandle: string
    instagramButton: string
  }
  footer: {
    rights: string
    twitter: string
    github: string
    linkedin: string
  }
  mobileMenu: {
    openMenu: string
  }
  themeToggle: {
    ariaLabel: string
    light: string
    dark: string
    system: string
  }
}

export const translations: Record<LanguageCode, TranslationContent> = {
  uz: {
    languageName: "O'zbekcha",
    header: {
      languageLabel: "Til",
    },
    nav: {
      about: "Haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
      contactCta: "Bog'lanish",
    },
    hero: {
      titleStart: "Salom, men",
      highlightedName: "Abdulazizbek Abdusodiqov",
      titleEnd: "— o'zbek fullstack dasturchiman",
      subtitle: "Zamonaviy va chiroyli veb-saytlar va ilovalar yarataman.",
      ctaGithub: "GitHub profilim",
      ctaTelegram: "Telegram",
      ctaResume: "Resume yuklash",
    },
    about: {
      badge: "Haqimda",
      paragraphs: [
        "Men Abdulazizbek Abdusodiqov (Abdulaziz-dev), 19 yoshli FullStack Developer man. 2006-yil may oyida tug'ilganman. O'rta maxsus ma'lumotga egaman.",
        "Men zamonaviy veb-texnologiyalar bilan ishlashni yaxshi ko'raman va har doim yangi bilimlarni o'rganishga intilaman. Frontend va backend texnologiyalarini uyg'unlashtirib, to'liq funksional veb-ilovalarni ishlab chiqaman.",
      ],
      languagesTitle: "Til ko'nikmalari:",
      languageSkills: [
        "O'zbek tili: Mahalliy",
        "Rus tili: A2 (boshlang'ich)",
        "Ingliz tili: A2 (boshlang'ich)",
      ],
    },
    skills: {
      badge: "Ko'nikmalar",
      heading: "Mening texnik ko'nikmalarim",
      subtitle: "Men quyidagi texnologiyalar bilan ishlashda tajribaga egaman:",
      frontendTitle: "Frontend",
      frontendDescription: "HTML, CSS, SCSS, JavaScript, React, Next.js, Tailwind CSS",
      backendTitle: "Backend",
      backendDescription: "Node.js, NestJS, MongoDB, MySQL, PostgreSQL, Sequelize, Prisma",
      otherTitle: "Boshqalar",
      otherDescription: "Git, GitHub, RESTful API, TypeScript",
    },
    projects: {
      badge: "Loyihalar",
      heading: "Mening ishlarim",
      subtitle: "Men yaratgan loyihalar va veb-saytlar",
      viewSite: "Saytni ko'rish",
      viewGithub: "GitHub'da ko'rish",
      viewAll: "Barcha loyihalarni GitHub'da ko'rish",
      phoneTech: {
        badge: "E-commerce",
        description:
          "Telefon va texnika e'lonlari uchun zamonaviy marketplace platformasi. React va Next.js frontend, NestJS va PostgreSQL backend bilan yaratilgan. Foydalanuvchilar mahsulotlarini sotish va xarid qilish imkoniyatiga ega.",
      },
      firewise: {
        badge: "Backend API",
        description:
          "Yong'in xavfsizligi uskunalari uchun korporativ veb-sayt. Backend qismini ishlab chiqdim — mahsulotlar boshqaruvi, buyurtmalar tizimi, ko'p tillik va admin panel API'lari NestJS va MongoDB asosida.",
      },
      turonDrain: {
        badge: "Korporativ",
        description:
          "TuronDrain uchun korporativ veb-sayt. Frontend Next.js va Tailwind CSS bilan, backend esa NestJS, MongoDB va Mongoose asosida qurilgan.",
      },
      sbmFood: {
        badge: "E-commerce",
        description:
          "SBM Food uchun oziq-ovqat e-commerce platformasi. Frontend Next.js bilan, backend MongoDB, Mongoose va JWT autentifikatsiyasi bilan. To'lovlar Payme va Click orqali.",
      },
      upcoming: {
        title: "Keyingi loyiha",
        description: "Tez orada yangi loyihalar qo'shiladi",
      },
    },
    contact: {
      badge: "Aloqa",
      heading: "Men bilan bog'laning",
      subtitle: "Loyihangiz haqida gaplashmoqchimisiz? Menga xabar yuboring.",
      emailCardTitle: "Email",
      emailButton: "Email yuborish",
      telegramCardTitle: "Telegram",
      telegramHandle: "@dev_abu",
      telegramButton: "Telegramda bog'lanish",
      instagramCardTitle: "Instagram",
      instagramHandle: "@abu_dev0",
      instagramButton: "Instagramga o'tish",
    },
    footer: {
      rights: "Abdulaziz-dev (Abdulazizbek Abdusodiqov). Barcha huquqlar himoyalangan.",
      twitter: "Twitter",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    mobileMenu: {
      openMenu: "Menyuni ochish",
    },
    themeToggle: {
      ariaLabel: "Mavzuni o'zgartirish",
      light: "Yorug'",
      dark: "Qorong'i",
      system: "Tizim",
    },
  },
  en: {
    languageName: "English",
    header: {
      languageLabel: "Language",
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      contactCta: "Contact",
    },
    hero: {
      titleStart: "Hi, I'm",
      highlightedName: "Abdulazizbek Abdusodiqov",
      titleEnd: "— a fullstack developer from Uzbekistan",
      subtitle: "I build modern, polished web applications and digital experiences.",
      ctaGithub: "My GitHub Profile",
      ctaTelegram: "Telegram",
      ctaResume: "Download Resume",
    },
    about: {
      badge: "About",
      paragraphs: [
        "I'm Abdulazizbek Abdusodiqov (Abdulaziz-dev), a 19-year-old fullstack developer. I was born in May 2006 and hold a specialized secondary education.",
        "I enjoy working with modern web technologies and constantly seek new knowledge. I combine frontend and backend tools to deliver complete, production-ready web applications.",
      ],
      languagesTitle: "Language skills:",
      languageSkills: [
        "Uzbek: Native",
        "Russian: A2 (elementary)",
        "English: A2 (elementary)",
      ],
    },
    skills: {
      badge: "Skills",
      heading: "My technical skills",
      subtitle: "I've gained hands-on experience with the technologies below:",
      frontendTitle: "Frontend",
      frontendDescription: "HTML, CSS, SCSS, JavaScript, React, Next.js, Tailwind CSS",
      backendTitle: "Backend",
      backendDescription: "Node.js, NestJS, MongoDB, MySQL, PostgreSQL, Sequelize, Prisma",
      otherTitle: "Other",
      otherDescription: "Git, GitHub, RESTful API, TypeScript",
    },
    projects: {
      badge: "Projects",
      heading: "My work",
      subtitle: "Web projects and products I've built",
      viewSite: "View site",
      viewGithub: "View on GitHub",
      viewAll: "See all projects on GitHub",
      phoneTech: {
        badge: "E-commerce",
        description:
          "A modern marketplace platform for phone and tech listings. Built with React and Next.js on the frontend, NestJS and PostgreSQL on the backend, enabling users to sell and purchase devices.",
      },
      firewise: {
        badge: "Backend API",
        description:
          "A corporate website for fire safety equipment. I delivered the backend: product management, ordering system, multilingual support, and admin panel APIs powered by NestJS and MongoDB.",
      },
      turonDrain: {
        badge: "Corporate",
        description:
          "Corporate website for TuronDrain. Built with a Next.js + Tailwind CSS frontend and a NestJS backend backed by MongoDB and Mongoose.",
      },
      sbmFood: {
        badge: "E-commerce",
        description:
          "SBM Food e-commerce platform. Next.js frontend with MongoDB, Mongoose, and JWT authentication, plus Payme and Click payment integrations.",
      },
      upcoming: {
        title: "Next project",
        description: "New projects are coming soon",
      },
    },
    contact: {
      badge: "Contact",
      heading: "Get in touch",
      subtitle: "Want to discuss your project? Send me a message.",
      emailCardTitle: "Email",
      emailButton: "Send email",
      telegramCardTitle: "Telegram",
      telegramHandle: "@dev_abu",
      telegramButton: "Message on Telegram",
      instagramCardTitle: "Instagram",
      instagramHandle: "@abu_dev0",
      instagramButton: "Visit Instagram",
    },
    footer: {
      rights: "Abdulaziz-dev (Abdulazizbek Abdusodiqov). All rights reserved.",
      twitter: "Twitter",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    mobileMenu: {
      openMenu: "Open menu",
    },
    themeToggle: {
      ariaLabel: "Toggle theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },
  ru: {
    languageName: "Русский",
    header: {
      languageLabel: "Язык",
    },
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
      contactCta: "Связаться",
    },
    hero: {
      titleStart: "Привет, я",
      highlightedName: "Абдулазизбек Абдусодиков",
      titleEnd: "— fullstack-разработчик из Узбекистана",
      subtitle: "Создаю современные и продуманные веб-сайты и приложения.",
      ctaGithub: "Мой профиль на GitHub",
      ctaTelegram: "Telegram",
      ctaResume: "Скачать резюме",
    },
    about: {
      badge: "Обо мне",
      paragraphs: [
        "Я Абдулазизбек Абдусодиков (Abdulaziz-dev), 19-летний fullstack-разработчик. Родился в мае 2006 года и имею среднее специальное образование.",
        "Мне нравится работать с современными веб-технологиями и постоянно учиться новому. Я совмещаю инструменты фронтенда и бекенда, чтобы создавать полноценные веб-приложения.",
      ],
      languagesTitle: "Языковые навыки:",
      languageSkills: [
        "Узбекский: родной",
        "Русский: A2 (элементарный)",
        "Английский: A2 (элементарный)",
      ],
    },
    skills: {
      badge: "Навыки",
      heading: "Мои технические навыки",
      subtitle: "У меня практический опыт работы со следующими технологиями:",
      frontendTitle: "Фронтенд",
      frontendDescription: "HTML, CSS, SCSS, JavaScript, React, Next.js, Tailwind CSS",
      backendTitle: "Бэкенд",
      backendDescription: "Node.js, NestJS, MongoDB, MySQL, PostgreSQL, Sequelize, Prisma",
      otherTitle: "Другое",
      otherDescription: "Git, GitHub, RESTful API, TypeScript",
    },
    projects: {
      badge: "Проекты",
      heading: "Мои работы",
      subtitle: "Веб-проекты и продукты, которые я создал",
      viewSite: "Посмотреть сайт",
      viewGithub: "Посмотреть на GitHub",
      viewAll: "Все проекты на GitHub",
      phoneTech: {
        badge: "E-commerce",
        description:
          "Современная платформа объявлений по продаже телефонов и техники. Фронтенд на React и Next.js, бэкенд на NestJS и PostgreSQL, что позволяет пользователям продавать и покупать устройства.",
      },
      firewise: {
        badge: "Backend API",
        description:
          "Корпоративный сайт для оборудования по пожарной безопасности. Я разработал только бэкенд: управление товарами, система заказов, мультиязычность и API админ-панели на NestJS и MongoDB.",
      },
      turonDrain: {
        badge: "Корпоративный",
        description:
          "Корпоративный сайт для TuronDrain. Фронтенд на Next.js и Tailwind CSS, бэкенд на NestJS с базой MongoDB и Mongoose.",
      },
      sbmFood: {
        badge: "E-commerce",
        description:
          "E-commerce платформа SBM Food. Фронтенд на Next.js, база MongoDB с Mongoose и JWT авторизацией, платежи через Payme и Click.",
      },
      upcoming: {
        title: "Следующий проект",
        description: "Скоро появятся новые проекты",
      },
    },
    contact: {
      badge: "Контакты",
      heading: "Свяжитесь со мной",
      subtitle: "Хотите обсудить проект? Напишите мне.",
      emailCardTitle: "Email",
      emailButton: "Отправить email",
      telegramCardTitle: "Telegram",
      telegramHandle: "@dev_abu",
      telegramButton: "Связаться в Telegram",
      instagramCardTitle: "Instagram",
      instagramHandle: "@abu_dev0",
      instagramButton: "Открыть Instagram",
    },
    footer: {
      rights: "Abdulaziz-dev (Абдулазизбек Абдусодиков). Все права защищены.",
      twitter: "Twitter",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    mobileMenu: {
      openMenu: "Открыть меню",
    },
    themeToggle: {
      ariaLabel: "Сменить тему",
      light: "Светлая",
      dark: "Тёмная",
      system: "Системная",
    },
  },
}

export const defaultLanguage: LanguageCode = "uz"
