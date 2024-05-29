import project1 from "../assets/projects/sistema-ehora.jpg";
import project3 from "../assets/projects/meteora.png";

export const HERO_CONTENT = `Graduando no curso de Ciência da Computação, sou um profissional dedicado e focado em desenvolver soluções. 
Com mais de 2 anos de experiência, trabalhei com as linguagens JavaScript e PHP, aprimorei habilidades em front-end com o React, assim como habilidades em back-end com Node.js, Laravel, MySQL e MongoDB.
 Tenho como foco analisar e desenvolver soluções práticas e precisas de acordo com as necessidades.`;

export const ABOUT_TEXT = `Com mais de 2 anos de experiência profissional, tenho trabalhado principalmente com desenvolvimento full stack, utilizando as linguagens PHP e JavaScript,
 incluindo React, Node.js, Laravel e banco de dados MySQL. Tenho experiência também com Ambientes Virtuais de Aprendizagem, utilizando a plataforma Moodle,
  atuando diretamente como administrador de sistemas e desenvolvendo melhorias e implementando novas ferramentas.
   Busco fazer entregas de alta qualidade e foco sempre na experiência do usuário.`;

export const EXPERIENCES = [
  {
    year: "08/2021 - Presente",
    role: "Monitor de sistema e suporte ao usuário",
    company: "Montreal Informática",
    description: `Responsável pelo desenvolvimento e manutenção de aplicações web utilizando principalmente JavaScript (React.js e Node.js), PHP (Laravel) e integração com banco de dados MySQL.
     Manutenção e administração de Ambiente Virtual de Aprendizagem(AVA) através da plataforma Moodle. Utilizando sempre das melhores práticas e metodologias ágeis.`,
    technologies: ["Javascript", "React.js", "Node.js", "PHP", "Laravel", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Sistema e-hora",
    image: project1,
    description:
      "O software de agendamento para atendimento no posto de saúde e-Hora é uma solução intuitiva e eficiente projetada para facilitar o agendamento de consultas médicas e garantir uma melhor experiência para os pacientes.",
    technologies: ["JavaScript", "React", "Node.js", "MySQL"],
  },
  {
    title: "Meteora",
    image: project3,
    description:
      "Meteora é uma loja virtual ficticia criada apenas para o projeto. A ideia do projeto é criar uma loja virtual utilizando e trabalhando conceitos do Bootstrap5.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+55 81 9963-3981 ",
  email: "meso.xavier@gmail.com",
};
