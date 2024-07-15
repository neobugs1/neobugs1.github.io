import RecentActivity from "@/components/RecentActivity.vue";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: {
      name: "Nikola Smileski",
      title: "Software Engineer",
    },
    experience: {
      sectionTitle: "Experience",
      jobs: [
        {
          title: "Software Engineer Internship",
          company: "InTec System",
          duration: "March 2024 - June 2024 • Skopje, Macedonia",
          description: "Worked as a software engineering intern at InTec System.",
          points: [
            "Developed Document Management Systems (DMS) and automation processes.",
            "Focused on front-end development using React.",
            "Contributed to creating user-friendly interfaces and integrating DMS features.",
            "Gained practical experience in building efficient and scalable web applications.",
          ],
        },
        {
          title: "Student",
          company: "Faculty of Computer Science and Engineering",
          duration: "September 2019 - Present • Skopje, Macedonia",
          description: "As a student I learned many things, including:",
          points: [
            "Algorithms and Data Structures",
            "Object Oriented Programming",
            "Structural Programming",
            "Web Development",
            "Operating Systems",
            "Computer Networks",
            "Computer Architecture",
            "Database Management Systems",
          ],
        },
      ],
    },
    aboutMe: {
      title: "About Me",
      desc: "Software engineer with a passion for web development, algorithms, and user-friendly interfaces. Currently studying at the Faculty of Computer Science and Engineering. Enthusiastic about creating efficient solutions and exploring new technologies.",
    },
    projects: {
      sectionTitle: "Projects",
      description: "This page lists some of my personal and work projects. Every project has some story, click on the title to read.",
      filters: {
        all: "all",
      },
      projectList: [
        {
          title: "Offer Oasis",
          description: "Offer Oasis is a web application for sharing ads.",
          tags: ["laravel", "inertia", "react", "postgres"],
          link: "https://github.com/neobugs1/Offer-Oasis",
        },
        {
          title: "Justice is Served",
          description: "Web application containing a database of all prison locations and prisoners in Macedonia.",
          tags: ["spring", "bootstrap", "docker", "postgres"],
          link: "https://github.com/neobugs1/DAS_PROEKT",
        },
        {
          title: "Chip8 Emulator",
          description: "Chip-8 emulator/interpreter.",
          tags: ["c", "makefile"],
          link: "https://github.com/neobugs1/Chip-8-Emulator",
        },
        {
          title: "Click To Win",
          description:
            "Click To Win is an incremental game. The goal is to collect as many points as possible by clicking until you have enough to buy upgrades that will bring you points over time.",
          tags: ["csharp", "windows forms"],
          link: "https://github.com/neobugs1/Click-To-Win",
        },
      ],
    },
    mySkills: {
      title: "My Skills",
      programmingLanguages: "Programming Languages",
      backendAndDatabases: "Back-end and Databases",
    },
    recentActivity: "Recent Activity",
    contactMe: {
      title: "Contact Me",
      name: "Name",
      message: "Message",
      submit: "Send",
    },
    footer: {
      name: "Nikola",
      lastName: "Smileski",
      openSource: "This portfolio project is open source and available on GitHub.",
    },
  },
  mk: {
    welcome: {
      name: "Никола Смилески",
      title: "Софтверски Инженер",
    },
    experience: {
      sectionTitle: "Искуство",
      jobs: [
        {
          title: "Пракса за софтверски инженер",
          company: "ИнТек Систем",
          duration: "Март 2024 - Јуни 2024 • Скопје, Македонија",
          description: "Бев на пракса за софтверско инженерство во ИнТек Систем.",
          points: [
            "Развивав системи за управување со документи (DMS) и автоматизација на процеси.",
            "Се фокусирав на front-end развој користејќи React.",
            "Придонесов за создавање кориснички интерфејси и интегрирање на DMS функции.",
            "Стекнав практично искуство во градење ефикасни и скалабилни веб апликации.",
          ],
        },
        {
          title: "Студент",
          company: "Факултет за компјутерски науки и инженерство",
          duration: "Септември 2019 - Сега • Скопје, Македонија",
          description: "Како студент научив многу работи, вклучувајќи:",
          points: [
            "Алгоритми и податочни структури",
            "Објектно-ориентирано програмирање",
            "Структурно програмирање",
            "Веб развој",
            "Оперативни системи",
            "Компјутерски мрежи",
            "Компјутерска архитектура",
            "Системи за управување со бази на податоци",
          ],
        },
      ],
    },
    aboutMe: {
      title: "За менe",
      desc: "Софтверски инженер со пасија за развој на веб апликации и кориснички интерфејси. Моментално студира на Факултетот за компјутерски науки и инженерство. Ентузијазен за создавање ефикасни решенија и истражување на нови технологии.",
    },
    projects: {
      sectionTitle: "Проекти",
      description: "Оваа страница ги листа некои од моите лични и работни проекти. Секој проект има своја приказна, кликнете на насловот за да прочитате.",
      filters: {
        all: "сите",
      },
      projectList: [
        {
          title: "Offer Oasis",
          description: "Offer Oasis е веб апликација која служи за споделување огласи.",
          tags: ["laravel", "inertia", "react", "postgres"],
          link: "https://github.com/neobugs1/Offer-Oasis",
        },
        {
          title: "Justice is Served",
          description: "Веб апликација која содржи база со сите локации на затвори и затвореници во Македонија.",
          tags: ["spring", "bootstrap", "docker", "postgres"],
          link: "https://github.com/neobugs1/DAS_PROEKT",
        },
        {
          title: "Chip8 Emulator",
          description: "Емулатор / интерпретер Chip-8.",
          tags: ["c", "makefile"],
          link: "https://github.com/neobugs1/Chip-8-Emulator",
        },
        {
          title: "Click To Win",
          description:
            "Click To Win е инркрементална игра. Целта на играта е да се соберат што е можно повеќе поени со кликање се додека немаш доволно за да купиш надградби кои со тек на време сами ќе ти носат поени.",
          tags: ["csharp", "windows forms"],
          link: "https://github.com/neobugs1/Click-To-Win",
        },
      ],
    },
    mySkills: {
      title: "Мои вештини",
      programmingLanguages: "Програмски јазици",
      backendAndDatabases: "Back-end и Бази на податоци",
    },
    recentActivity: "Неодамнешна активност",
    contactMe: {
      title: "Контактирај ме",
      name: "Име",
      message: "Порака",
      submit: "Испрати",
    },
    footer: {
      name: "Никола",
      lastName: "Смилески",
      openSource: "Овој проект е Open Source и достапен е на GitHub.",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "mk",
  fallbackLocale: "mk",
  messages,
});

export default i18n;
