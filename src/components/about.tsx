
//import React from 'react'
import Title from "./title" 
import img from "../assets/img4.jpg"
import { BrainCircuit, CalendarSync, LetterText } from "lucide-react";

 const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
         id: 3,
         title: "Passionné par l'intelligence artificielle",
         description:"Je maîtrise plusieurs algorithmes d'intelligence artificielle, notamment BFS, DFS, Minimax et les algorithmes génétiques, pour résoudre des problèmes de recherche, de décision et d'optimisation.",
         icon: <BrainCircuit className="text-accent scale-150" />,
      },
];


const About = () => {
   return (
     <div className="bg-base-300 p-10 mb-10 md:mb-32 "id="About">
         <Title title="A propos"/>               
       <div className="md:h-screen flex justify-center">
       <div>
            <img src={img}  alt="" className="w-96  object-cover border-8 border-accent shadow-xl rounded-xl "
            />
             

       </div>
         <div className="md: ml-4 space-y-4 ">
           { aboutSections.map((section) => (

              <div key={section.id} 
                 className=" flex flex-col md:flex-row items-center
                 bg-base-100 p-5 rouded-xl md:w-96 shadow-xl">
                  <div className="mb-2 md:mb-0">
                    {section.icon} </div>
                  <div className="md:ml-4 text-center md:text-left ">
                     <h2 className="text-xl font-bold mb-1">
                        {section.title}
                     </h2>
                      <p className="text-sm">
                         {section.description}
                      </p>

                  </div>
              </div>

            ) ) 
          }
            </div>

        <div className="md:h-screen flex justify-center item-center">


        </div>
       </div>
     </div>

   )
}

export default About 

















