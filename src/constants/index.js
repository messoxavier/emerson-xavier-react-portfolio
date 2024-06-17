import project1 from "../assets/projects/sistema-ehora.jpg";
import project2 from "../assets/projects/Moodle.jpg";
import project3 from "../assets/projects/meteora.png";
import project4 from "../assets/projects/SISGER.jpg";
import project5 from "../assets/projects/portfolio.jpg";

export const HERO_CONTENT = `Sou um profissional dedicado e focado em desenvolver soluções. 
Com mais de 2 anos de experiência, trabalhei com as linguagens JavaScript e PHP, aprimorei habilidades em front-end com o React, assim como habilidades em back-end com Node.js, Laravel, MySQL e MongoDB.
 Tenho como foco analisar e desenvolver soluções práticas e precisas de acordo com as necessidades.`;

export const ABOUT_TEXT = `Graduando no curso de Ciência da Computação, tive a oportunidade de estudar e aprimorar minhas habilidades na programação, tenho trabalhado principalmente com desenvolvimento full stack, utilizando as linguagens PHP e JavaScript,
 incluindo React, Node.js, Laravel e banco de dados MySQL. Tenho experiência também com Ambientes Virtuais de Aprendizagem, utilizando a plataforma Moodle,
  atuando diretamente como administrador de sistemas e desenvolvendo melhorias e implementando novas ferramentas.
   Busco fazer entregas de alta qualidade e com foco na experiência do usuário.`;

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
    title: "SISGER",
    image: project4,
    description:
      "O serviço de Telegestão conecta e aproxima os profissionais e gestores de saúde, facilitando a implementação dos processos administrativos e operacionais. Utilizando a webconferência como principal estratégia de transformação digital desde o início de suas atividades, a Diretoria Geral de Telessaúde constituiu a Rede de Videocolaboração em Saúde (RVS), que se tornou um importante recurso para interação on-line entre gestores, médicos e demais profissionais de saúde no estado de Pernambuco. A gestão à distância é aperfeiçoada por meio das ferramentas de videocolaboração, como videoconferência, webconferência e streaming. O sistema anteriormente criado é simples e pode ser acessado por computador, smartphone ou tablet. Através de um sistema de agendamento, o solicitante pode realizar o agendamento dos serviços oferecidos e o foco deste projeto é justamente trazer melhorias e satisfazer as necessidades dos usuários. A Rede de Videocolaboração em Saúde (RVS) será substituída por um novo sistema, chamado Sistema de Gerenciamento de Reunião (SISGER), que trará um novo visual, melhorias e uma segurança maior.",
    technologies: ["JavaScript", "React", "Node.js", "MySQL"],
  },
  {
    title: "Estruturação de Ambiente Virtual de Aprendizagem",
    image: project2,
    description:
      "Estruturação e implementação de Ambiente Virtual de Aprendizagem para Diretoria Geral de Telessaúde da Secretaria Estadual de Saúde de Pernambuco, através da plataforma Moodle.",
    technologies: ["PHP", "Moodle", "HTML", "MySQL"],
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
  {
    title: "Meteora",
    image: project3,
    description:
      "Meteora é uma loja virtual ficticia criada apenas para o projeto. A ideia do projeto é criar uma loja virtual utilizando e trabalhando conceitos do Bootstrap5.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const CONTACT = {
  phoneNo: "+55 81 9963-3981 ",
  email: "meso.xavier@gmail.com",
};
