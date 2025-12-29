
import React from 'react'
import Title from './title'

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

 import google from "../assets/companies/google.png";
 import meta from "../assets/companies/meta.webp";
 import amazon from "../assets/companies/amazon.png"


const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];


  const experiences =  [

  {
      id:1 ,
      role: "Softxare ",    
      company: "Google",  
      period:"Sep 2022 - present",
      description: [
        " developpement de nouvelles fonctionnalites pour google maps." ,
        " optimisation des performances de l'application",  
  ],
      image : google 
     },
   {
    id: 2 ,
    role: "Fullstack Developer" ,   
    company: "Meta",
    period: "Jan 2021 - Aout 2022",
    description: [
     " Creation d'une "


    ], 
    image: meta, 
   } ,
    
   {
     id:3 ,
     role:"Frontend Developer", 
     company:"Amazon",
     period:" Mai 2019 - Dec 2020",
     description: [
       "Developpement d'une interface utilisateur pour Amazon Web Services",
       "Implemente des tests unitaires et E2E." ,
         
     ],
    image: amazon,  
}, 
  
];


















const Experiences = (  ) => {
   return (
     <div>
        <Title title="Experiences"/>
        <div className="flex md:flex-row justify-center items-center"> 
            <div className="flex flex-wrap gap-4 justify-center items-center 
               md:w-2/3 mt-4 md:mt-0 " >   
             
             {
               skills.map((skill) => (   
                 <div  key={skill.id} className="flex justifiy-center items-center">
                    <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                      <img src={skill.image} alt={skill.name} className="object-cover  rounded-full h-full w-full"/>
                   </div>  
                 <span className="mt-2 text-sm">{skill.name}</span> 
                   
                       
                         
                   
                </div>

                     
               ))}
            </div>  
            <div className='md:ml-4 flex flex-col space-y-4'>
              {
                experiences.map((experience) => (

                  <div 
                   key = {experience.id}
                   className = "flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                  >
                   <div className="flex items-center ">
                     <img src={experience.image} 
                      alt= {experience.company}
                      className="object-cover h-10 w-10"
                      />   
                     <div className="ml-4">
                       <h1> 
                        {experience.role} , {experience.company} 
                       </h1>
                       <span className="text-sm">{experience.period}</span>
                     </div>

                   </div>
                  <ul className="list-desc ml-16 mt-5">
                      {experience.description.map((desc, index) => (
                         <li key={index}>test</li>
                        ))}
                  </ul>


                  </div>

                )) 

                   
              }
                   
            </div>
         </div>
        </div>
     
   )
}

export default Experiences  











