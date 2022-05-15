import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory, } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  const handleClick = (item) => {    
    alert(item);
    return item;
  };

  return (
    <header>
       <h1>
         Kimberly Tran
      </h1>
      <nav>
        <ul >
          <li>
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
              About Me
            </a>
          </li>
           
          <li>
            <a data-testid="contact" href="#contact" onClick={() => handleClick('Contact')}>
              Contact
            </a>
          </li>
          <li>
            <a data-testid="resume" href="#resume" onClick={() => handleClick('Resume')}>
              Resume
            </a>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
              <span onClick={() => { setCurrentCategory(category)}}> 
                {capitalizeFirstLetter(category.name)} 
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


// function Nav() {
// 
//   const  categories = [
//     { name: 'porfolio', description: 'KU Bootcamp challenges and group projects' },
//     { name: 'adventure', description: 'Photos taken while traveling' },
//   ];
// 
//   const handleClick = (item) => {    
//     alert(item);
//     return item;
//   };
// 
//   return (
//     <header>
//        <h1>
//          Kimberly Tran
//       </h1>
//       <nav>
//         <ul >
//           <li>
//             <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
//               About Me
//             </a>
//           </li>
//            
//           <li className="navActive">
//             <a data-testid="contact" href="#contact" onClick={() => handleClick('Contact')}>
//               Contact
//             </a>
//           </li>
//           <li>
//             <a data-testid="resume" href="#resume" onClick={() => handleClick('Resume')}>
//               Resume
//             </a>
//           </li>
//           {
//             categories.map((category) => (
//               <li className="mx-1" key={category.name} >
//                 <span onClick={() => { handleClick(category.name); }}>
//                  {capitalizeFirstLetter(category.name)}
//                 </span>
//               </li>
//             ))
//           }
//         </ul>
//       </nav>
//     </header>
//   );
// }

export default Nav;