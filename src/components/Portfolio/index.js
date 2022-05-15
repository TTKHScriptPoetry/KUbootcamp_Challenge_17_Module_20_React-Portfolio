import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';
// import photo from "../../assets/images/small/0.png";

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}


// // Non-hardcode version
// function Portfolio(props) {
//   const currentCategory = {
//     name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects",
//   };
//   return (
//     <section>
//        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
//        <p>{currentCategory.name}</p>
//       <div>
//           <img src={photo} className="step-img-major"  alt="Weather Dashboard" title="Weather Dashboard" />
//       </div>
//     </section>
//   );
// }


export default Portfolio;