import project1 from "../assets/projects/sistema-ehora.jpg";
import project2 from "../assets/projects/Moodle.jpg";
import project4 from "../assets/projects/SISGER.jpg";
import project5 from "../assets/projects/portfolio.jpg";

export const HERO_CONTENT = `Sou um profissional dedicado e focado em desenvolver soluções. 
Com mais de 3 anos de experiência, trabalhei com as linguagens Java, JavaScript e PHP, aprimorei habilidades em front-end com o React, assim como habilidades em back-end com Node.js, Laravel, MySQL e MongoDB.
 Tenho como foco analisar e desenvolver soluções práticas e precisas de acordo com as necessidades.`;

export const ABOUT_TEXT = `Graduado no curso de Ciência da Computação, tive a oportunidade de estudar e aprimorar minhas habilidades na programação, tenho trabalhado principalmente com desenvolvimento full stack, utilizando as linguagens PHP e JavaScript,
 incluindo React, Node.js, Laravel, CodeIgniter e banco de dados MySQL. Tenho experiência também com Ambientes Virtuais de Aprendizagem, utilizando a plataforma Moodle,
  atuando diretamente como administrador de sistemas, desenvolvendo melhorias e implementando novas ferramentas.
   Busco fazer entregas de alta qualidade e com foco na experiência do usuário.`;

export const EXPERIENCES = [
  {
    year: "03/2025 - Presente",
    role: "Professor",
    company: "Secretaria de Educação do Estado de Pernambuco",
    description: `Professor Subsequente na Escola Técnica Estadual Cícero Dias no curso técnico Desenvolvimento de sistemas. Disciplinas lecionadas: Lógica e Pensamento Computacional, Programação em Novas Tecnologias(Desktop), Administração de Banco de Dados e Projeto Integrador`,
    technologies: ["JavaScript", "Python", "Java", "Desenvolvimento Web", "MySQL", "SQL Server", "MongoDB"],
  },
  {
    year: "02/2025 - Presente",
    role: "Desenvolvedor de sistemas",
    company: "Autoimune - Unidade de Terapia Biológica Ltda",
    description: `Desenvolvimento de sistemas web fullstack. Arquitetura MVC. Atualização e manutenção de sistemas web utilizando o framework Laravel com as linguagens PHP e JavaScript e banco de dados MySQL.`,
    technologies: ["Javascript", "PHP", "Laravel", "MySQL"],
  },
  {
    year: "08/2021 - 03/2025",
    role: "Monitor de sistema e suporte ao usuário",
    company: "Montreal Informática",
    description: `Responsável pelo desenvolvimento e manutenção de aplicações web utilizando principalmente JavaScript (React.js e Node.js), PHP (Laravel) e integração com banco de dados MySQL.
     Manutenção e administração de Ambiente Virtual de Aprendizagem(AVA) através da plataforma Moodle. Utilizando sempre das melhores práticas e metodologias ágeis.`,
    technologies: ["Javascript", "React.js", "Node.js", "PHP", "Laravel", "CodeIgniter", "Java", "Spring Boot", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "SISGER - Sistema de Gerenciamento de Reunião",
    image: project4,
    description:
      "Sistema de agendamento desenvolvido para Diretoria Geral de Telessaúde da Secretaria Estadual de Saúde de Pernambuco, com foco no serviço de telegestão para auxiliar no controle de agendamentos de reuniões e melhorar a experiência dos usuários.",
    technologies: ["JavaScript", "React", "Node.js", "MySQL"],
  },
  {
    title: "Estruturação de Ambiente Virtual de Aprendizagem",
    image: project2,
    description:
      "Estruturação e implementação de Ambiente Virtual de Aprendizagem para Diretoria Geral de Telessaúde da Secretaria Estadual de Saúde de Pernambuco, através da plataforma Moodle.",
    technologies: ["PHP", "JavaScript", "Moodle", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Portfólio Web",
    image: project5,
    description:
      "Portfólio Web profissional utilizando as tecnologias mais atuais do mercado.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Sistema e-Hora",
    image: project1,
    description:
      "O software de agendamento para atendimento no posto de saúde e-Hora é uma solução intuitiva e eficiente projetada para facilitar o agendamento de consultas médicas e garantir uma melhor experiência para os pacientes.",
    technologies: ["JavaScript", "React", "Node.js", "MySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+55 81 99636-3981 ",
  email: "meso.xavier@gmail.com",
};
