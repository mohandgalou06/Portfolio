import Title from "./title"

import img1 from '../assets/projects/7.png';
import img2 from '../assets/projects/Amazon.png';
import img3 from '../../../../DARKFORGE/screenshots/Screenshot 2024-06-14 144413.png';
import img4 from '../assets/projects/8.png';
import img5 from '../assets/projects/9.png';
import img6 from '../../../../Trice/2.png';
import { Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'App de location de scooters',
        description: 'Le Scoot est une application de bureau développée en Java, conçue pour gérer efficacement les scooters dans un parc. L’objectif principal est de faciliter les opérations de location, de scooters',
        technologies: ['javaSwing ', 'java', ' MVC'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme E-commerce',
        description: 'Site web pour la vente des produits Amazon',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Site de vente de jeux',
        description: 'une entreprise fictive spécialisée dans le développement de jeux vidéo innovants et de haute qualité.À l ère des technologies avancées et des attentes changeantes des utilisateurs, DARKFORGE doit maîtriser ses systèmes d information et de gestion de projets.',
        technologies:  ['Python', 'Django', 'HTML'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Café Florette',
        description: 'Site web pour réserver une place dans une cafétéria avec la page de contact et toutes les infos qui concernent la cafétéria (horaire d ouverture, horaire de fermeture...)',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 5,
        title: 'Création de jeux Puissance4',
        description: 'l’utilisation des algo de l’intelligence artificielle dans le jeux minimax , avoir intégré le minimax avec un parametre de profondeur modifiable , utiliser un outil qui permet de visualiser le contenu de votre base, de naviguer dans les parties, de naviguer dans les parties symétriques',
        technologies: ['Python (tkinter)', 'MySQL', '#'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    {
        id: 6,
        title: 'Projet-Trice Analyse et conception d’un systéme d’information',
        description: 'La société TRICE est une entreprise multisectorielle active dans trois domaines principaux :le transport, les bâtiments connectés et l’électronique embarquée. Pour améliorer son fonctionnement, TRICE souhaite mettre en place un système d’information unifié capable de créer des liens entre ses différentes activités. L’objectif est de centraliser dans une seule application :  La gestion des cartes de transport, La commande de cartes.La recharge des cartes. La consultation des itinéraires via l’intégration avec IDF Mobilités. La réservation de vélos situés proches des gares et stations de transport. Les outils de suivi administratif pour les administrateurs.',
        technologies: ['Diagrammes (UML)', 'maquettes', '#'],
        demoLink: '#',
        repoLink: '#',
        image: img6,
    },
];


const Projects = () => {
    return (
        <div className="mt-20" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div
  key={project.id}
  className="bg-base-300 rounded-xl shadow-lg flex flex-col h-full p-6"
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full rounded-xl h-56 object-cover"
  />

  <h1 className="my-2 font-bold">{project.title}</h1>

  <p className="text-sm">
    {project.description}
  </p>

  {/* Tout ce qui suit sera poussé vers le bas */}
  <div className="mt-auto">
    <div className="flex flex-wrap gap-2 my-3">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="badge badge-accent badge-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex">
      <a className="btn btn-accent w-2/3" href={project.demoLink}>
        Demo
      </a>

      <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
        <Github className="w-4" />
      </a>
    </div>
  </div>
</div>
                ))}
            </div>
        </div>
    )
}

export default Projects














