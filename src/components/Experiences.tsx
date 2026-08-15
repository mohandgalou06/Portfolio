

import Title from './title'
import { useState } from "react" ;
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgC from "../assets/techno/c.svg";
import imgJAVA from "../assets/techno/java.svg";
import imgMYSQL from "../assets/techno/mysql.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPYTHON from "../assets/techno/python.svg";

 
// ---------- DONNÉES DES COMPÉTENCES ----------
const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "java", image: imgJAVA },
  { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 7, name: "MySql", image: imgMYSQL },
  { id: 8, name: "C", image: imgC },
  { id: 9, name: "Python", image: imgPYTHON },
];

// ⚠️ Les commentaires JSX ne fonctionnent PAS ici
// → on utilise un commentaire TypeScript classique
/*
const experiences = [
  ...
];
*/

// ---------- COMPOSANT ----------
export default function Experiences() {
  // État pour afficher / cacher le nom de la compétence
  const [active, setActive] = useState<number | null>(null);

  // Rayon du cercle
  const radius = 180;

  // Nombre total de compétences
  const count = skills.length;

  return (
    <div id="Experiences" className='mb-70'>
      <Title title="Experiences" />

      <div className="flex justify-center items-center mt-10">
        {/* Conteneur */}
        <div className="flex justify-center items-center h-[300px]">
          {/* Cercle en rotation */}
          <div className="relative w-[250px] h-[250px] animate-spin-slow">
            {skills.map((skill, index) => {
              // Calcul de l’angle pour placer chaque icône
              const angle = (360 / count) * index;

              return (
                <div
                  key={skill.id}
                  onClick={() =>
                    setActive(active === skill.id ? null : skill.id)
                  }
                  className="absolute top-1/2 left-1/2 cursor-pointer text-center select-none"
                  style={{
                    transform: `
                      rotate(${angle}deg)
                      translate(${radius}px)
                      rotate(-${angle}deg)
                    `,
                  }}
                >
                  {/* Icône */}
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10"
                  />

                  {/* Nom affiché seulement au clic */}
                  {active === skill.id && (
                    <div className="mt-1 text-xs text-white bg-black/70 px-2 py-1 rounded">
                      {skill.name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Animation CSS intégrée */}
          <style>{`
            .animate-spin-slow {
              animation: spin 20s linear infinite;
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}




  











