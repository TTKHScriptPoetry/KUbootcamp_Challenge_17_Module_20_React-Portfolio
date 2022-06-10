import React, { useState } from 'react'
// import PhotoList from '../PhotoList';
// import photo from "../../assets/images/small/0.png";
 
const Work  = () => {
  const [photos] = useState([
    {
      name: 'Challenge 1',
      category: 'individual',
      description: 'Server-Side APIs Challenge: Weather Dashboard',
      whereto: "https://github.com/MercuryKTgithub/KUbootcamp_MilestoneAssignments/tree/main/Challenge_06_Weather_Dashboard",
      liveurl: "https://mercuryktgithub.github.io/KUbootcamp_MilestoneAssignments/Challenge_06_Weather_Dashboard/",
    },
    {
      name: 'Challenge 2',
      category: 'portfolio',
      description: 'Express.js Challenge : Note Taker',
      whereto: "https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_09_Note_Taker",
      liveurl: "https://mercuryktnotetaker-disposable.herokuapp.com/",
    },      
    {
      name: 'Challenge 3',
      category: 'portfolio',
      description: 'Progressive Web Applications (PWA) Challenge: Budget Tracker',
      whereto: "https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_16_Module_19_Budget_Tracker",
      liveurl: "https://kubc-pwa-budget-tracker.herokuapp.com/",
    },
    {
      name: 'Challenge 4',
      category: 'portfolio',
      description: 'Model-View-Controller (MVC) Challenge : MVC Tech Blog',
      whereto: "https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_12_Module_14_MVC_Tech_Blog",
      liveurl: "https://kubc-mvc-tech-blog-portal.herokuapp.com/",
    },
    {
      name: 'Group Project 1',
      category: 'portfolio',
      description: 'Interactive Full-Stack Project: Rolling Dice Game',
      whereto: "https://github.com/compuwill/gambling-game",
      liveurl: "https://its-gambling-time.herokuapp.com/",
    },
    {
      name: 'Group Project 2',
      category: 'portfolio',
      description: 'Interactive Front-End Project: Measure Me',
      whereto: "https://github.com/AlexUrielContreras/Measure-Me",
      liveurl: "https://alexurielcontreras.github.io/Measure-Me/",
    },
    {
      name: 'Group Project 3',
      category: 'portfolio',
      description: 'Interactive MERN SPA Project: Forally Enchanting Cakes',
      whereto: "https://github.com/MercuryKTgithub/KU_BC_Group_Project_FEC_Designer_Cake_App", 
      liveurl: "https://staging-designer-cake-app-fec.herokuapp.com",
    },
    {
      name: 'Individual Project 3',
      category: 'portfolio',
      description: 'Master of Science Graduation Project : MVC - C#.NET Based Community Toolkit',
      whereto: "https://staging-designer-cake-app-fec.herokuapp.com/",
      liveurl: "https://staging-designer-cake-app-fec.herokuapp.com/",
    }
  ]);

  // const currentPhotos = photos.filter((photo) => photo.category === 'portfolio');
  const currentPhotos = photos;

  return (
    <div className='flex-row justify-space-between pb-3'>
      <div className={`col-12 col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
        <h2>Portfolio</h2>
        {currentPhotos.map((image, i) => (    
          <a href={image.whereto} target='blank' key={image.name} >
            <img  
              src={require(`../../assets/images/small/portfolio/${i}.png`)}
              alt={image.gowhere}
              className="img-thumbnail mx-1 mb-4 border-photo-small worksample-photo"
              key={image.name}
              title={image.description}
            /> 
          </a>    
        ))}
        
    </div>
   
    {/* <section id="my-work-1" className="steps">
      <div className="component">
        <h2> Portfolio </h2>
      </div>      
      <div className="step">
        <div className="step-info">
          <div className="gallery">
            <div className="step-img">
              <span>
                {currentPhotos.map((image, i) => ( 
                  <div key={image.name}>
                   <a href={image.whereto} target='blank'>
                      <img
                        src={require(`../../assets/images/small/portfolio/${i}.png`)}
                        alt={image.gowhere}
                        className="img-thumbnail mx-1"
                        key={image.name}
                        title={image.description}
                      /> 
                    </a>
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </div>
  )
};
 


export default Work;