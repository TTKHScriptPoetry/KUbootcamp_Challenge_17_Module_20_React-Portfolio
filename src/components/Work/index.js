import React, { useState } from 'react'
// import PhotoList from '../PhotoList';
// import photo from "../../assets/images/small/0.png";
 
const Work  = () => {
  const [photos] = useState([
    {
      name: 'Challenge 1',
      category: 'individual',
      description: 'Individual Challenge : Weather Dashboard',
      whereto: "https://github.com/MercuryKTgithub/KUbootcamp_MilestoneAssignments/tree/main/Challenge_06_Weather_Dashboard"
    },
    {
      name: 'Challenge 2',
      category: 'portfolio',
      description: 'Individual Challenge : Note Taker',
      whereto: "https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_09_Note_Taker"
    },      
    {
      name: 'Challenge 3',
      category: 'portfolio',
      description: 'Individual Challenge : Budget Tracker',
      whereto: "https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_16_Module_19_Budget_Tracker"
    },
    {
      name: 'Challenge 4',
      category: 'portfolio',
      description: 'Individual Challenge : MVC Tech Blog',
      whereto: "https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_12_Module_14_MVC_Tech_Blog"
    },
    {
      name: 'Group Project 1',
      category: 'adventure',
      description: 'Group Project Challenge : Rolling Dice Game',
      whereto: "https://github.com/compuwill/gambling-game"
    },
    {
      name: 'Group Project 2',
      category: 'adventure',
      description: 'Group Project Challenge : Online Food Recipe Search & Unit Converter - Measure Me',
      whereto: "https://github.com/AlexUrielContreras/Measure-Me"
    },
    {
      name: 'Group Project 3',
      category: 'adventure',
      description: 'Group Project Challenge : Online  Designer Cake Order App - Florally Enchanging Cake (FEC) - Desinger App',
      whereto: "https://staging-designer-cake-app-fec.herokuapp.com/"
    }
  ]);

  // const currentPhotos = photos.filter((photo) => photo.category === 'portfolio');
  const currentPhotos = photos;


  return (
    <section id="my-work-1" className="steps">
      <div className="component">
        <h2> Portfolio </h2>
      </div>
      {/* <div className="step">
        <div className="step-info">
          <div className="gallery">
            <div className="step-img">
              <span>
                {currentPhotos.map((image, i) => ( 
                  <img
                    src={require(`../../assets/images/small/portfolio/${i}.png`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                  /> 
                ))}
              </span>
            </div>
          </div>
        </div>
      </div> */}
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
    </section>
    
//     <div>
//       <div className="flex-row">
//         {currentPhotos.map((image, i) => ( 
//                
//           <img
//             
//             src={require(`../../assets/images/small/portfolio/${i}.png`)}
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             key={image.name}
//           /> 
// 
// 
//         ))}
//       </div>
//     </div>
  )
};
 


export default Work;