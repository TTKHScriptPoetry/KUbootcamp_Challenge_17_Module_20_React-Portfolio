import React, { useState } from 'react'
// import PhotoList from '../PhotoList';
// import photo from "../../assets/images/small/0.png";
 
const Work = () => {
  const [photos] = useState([
    {
      name: 'Challenge 1',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Challenge 2',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Challenge 3',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Challenge 4',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Group Project 1',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Group Project 2',
      category: 'adventure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);

  // const currentPhotos = photos.filter((photo) => photo.category === 'portfolio');
  const currentPhotos = photos;

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => ( 
               
          <img
            
            src={require(`../../assets/images/small/portfolio/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          /> 


        ))}
      </div>
    </div>
  )
};
 


export default Work;