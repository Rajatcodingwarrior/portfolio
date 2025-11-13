// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/school1.jpg';
import bsaLogo from './assets/education_logo/college1.png';
import vpsLogo from './assets/education_logo/school1.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/quickit.png';
import csprepLogo from './assets/work_logo/moneymanager.png';
import movierecLogo from './assets/work_logo/minbot.jpeg';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    
  ];
  
  export const education = [
    {
      id: 1,
      img: bsaLogo,
      school: "Motilal Nehru National Institute of Technology, Allahabad",
      date: "Nov 2022 - June 2026",
      grade: "Currently Pursuing with 8.05 CGPA",
     desc: "I am currently pursuing my Bachelor's degree in Computer Science and Engineering (B.Tech) from Motilal Nehru National Institute of Technology (MNNIT), Allahabad. My coursework covers a wide range of subjects including Data Structures, Algorithms, Operating Systems, and Web Development, helping me strengthen both my theoretical foundation and practical problem-solving skills. Being part of MNNIT’s competitive and innovative environment continually inspires me to push my limits and grow as a software engineer.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Lucknow Public School Jankipuram, Lucknow",
      date: "Apr 2020 - March 2021",
      grade: "95.8%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Lucknow Public School Jankipuram, Lucknow",
      date: "Apr 2018 - March 2019",
      grade: "94.8%",
      desc: "I completed my class 10 education from Lucknow Public School, Jankipuram, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Information Practices",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Quickit",
      description:
        "I designed and developed a robust quick-commerce platform that allows users to seamlessly browse, search, and purchase products with an intuitive and responsive interface. The platform integrates secure payment gateways using Stripe and features user authentication and authorization powered by JWT and bcrypt encryption, ensuring data privacy and transaction safety. It includes comprehensive admin functionalities such as adding categories, sub-categories, and products, along with efficient cart management for users. Additionally, I optimized the platform’s performance and responsiveness to deliver a smooth experience across all devices and browsers. To enhance usability, I implemented advanced search and filtering algorithms leveraging indexing and full-text search, enabling users to quickly find relevant products with precision.",
      image: githubdetLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rajatcodingwarrior/Quickit",
      webapp: "https://quickit-arf5.vercel.app/",
    },
    {
      id: 1,
      title: "Money Manager",
      description:
        "This project is a full-stack MERN application deployed on Vercel, featuring secure authentication and authorization implemented with JWT and cookies to ensure user data protection. It includes an intuitive transaction management system that allows users to categorize and track their income and expenses effectively. Additionally, I integrated search and sorting functionalities to enable users to easily filter transactions by date and amount, enhancing the overall usability and financial tracking experience.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rajatcodingwarrior/MoneyManager2",
      webapp: "https://money-manager2-2a6o.vercel.app/",
    },
    {
      id: 2,
      title: "Chatbot - MinBot",
      description:
        "This project is a mining‑domain chatbot built with the open‑source Rasa framework and deployed on Telegram using the BotFather API. The chatbot is trained to understand domain‑specific terminology and user intents relevant to mining and resource extraction, thanks to Rasa’s advanced NLU (intent recognition + entity extraction) and Core (dialogue management) pipelines. Once users initiate a conversation in Telegram, the bot receives the messages via a webhook, processes them through Rasa’s models, and replies with precise, context‑aware responses—whether it’s answering an equipment query, providing safety protocol information, or guiding users through operational workflows. The integration is seamless: Telegram handles message delivery, while Rasa serves as the intelligent backend making decisions, tracking dialogue state, and invoking custom actions if needed. Deployment on Telegram ensures broad accessibility and real‑time interaction, making the bot a powerful conversational assistant for the mining domain.",
      image: movierecLogo,
      tags: ["Python", "Rasa", "Telegram Bot API", "BotFather", "NLP", "Dialog Management", "API", "Git", "GitHub"]
,
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://github.com/dipanshiTyagi/CHATBOT",
    },

  ];  