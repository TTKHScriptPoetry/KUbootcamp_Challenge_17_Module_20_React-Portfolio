import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { 
    // categories = [], 
    // setCurrentCategory, currentCategory,
    setContactSelected, contactSelected,
    resumeSelected, setResumeSelected,
    aboutMeSelected, setAboutMeSelected,
    workSelected, setWorkSelected
   } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header>
       <h1 > 
         Kimberly Tran 
      </h1>
      <nav>
        <ul >
          
          <li className={`${aboutMeSelected && 'navActive'}`}>
            <span onClick={() => { setContactSelected(false); 
                                                setResumeSelected(false);
                                                setAboutMeSelected(true);
                                                setWorkSelected(false)
              }}>
              About Me
            </span>
          </li>
        
          <li className={`${workSelected && 'navActive'}`}>
            <span onClick={ () => { 
              setWorkSelected(true); 
              setContactSelected(false);  
              setAboutMeSelected(false); 
              setResumeSelected(false)}}>
              Portfolio</span>
          </li>

          <li className={`${contactSelected && 'navActive'}`}>
            {/* <span onClick={() => setContactSelected(true)}>Contact</span> */}
            <span onClick={() => {setContactSelected(true);  
              setAboutMeSelected(false);   
              setWorkSelected(false); 
              setResumeSelected(false)}}>
              Contact</span>
          </li>
          <li className={`${resumeSelected && 'navActive'}`}>
            <span onClick={() => {  setResumeSelected(true);
                                    setContactSelected(false); 
                                    setAboutMeSelected(false)
                                    setWorkSelected(false)
                                  
              }}>
              Resume
            </span>
          </li>
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