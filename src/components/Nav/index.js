import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], 
    setCurrentCategory, currentCategory,
    setContactSelected, contactSelected,
   } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  // const handleClick = (item) => {    
  //   alert(item);
  //   return item;
  // };

  return (
    <header>
       <h1>
         Kimberly Tran
      </h1>
      <nav>
        <ul >
          <li>
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About Me
            </a>
          </li>
          <li>
            <a data-testid="resume" href="#resume"  onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
              <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                <span onClick={() => { setCurrentCategory(category);
                                      setContactSelected(false);
                    }}> 
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