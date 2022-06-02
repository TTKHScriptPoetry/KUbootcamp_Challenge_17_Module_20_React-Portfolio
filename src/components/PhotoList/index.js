// import React from 'react'
// import photo from "../../assets/images/small/0.png";

import React, { useState } from 'react'

const PhotoList = (props) => {
  const { category } = props;
  
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
    },
    {
      name: 'Group Project 3',
      category: 'adventure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => ( 
               
          <img
            title={require(`../../assets/images/small/${category}/${i}.png`)}
            src={require(`../../assets/images/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          /> 


        ))}
      </div>
    </div>
  )
};

// function PhotoList() {
//   return (
//     <div>
//         <img
//           src={photo}
//           alt="Weather Dashboard PTL"
//         />
//     </div>
//   )
// }

export default PhotoList;