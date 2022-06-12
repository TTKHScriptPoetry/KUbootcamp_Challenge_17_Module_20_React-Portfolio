import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { 
    setContactSelected, contactSelected,
    resumeSelected, setResumeSelected,
    aboutMeSelected, setAboutMeSelected,
    workSelected, setWorkSelected
   } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    // <header className="mb-2">
    <header className="mb-1 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center ">
        <h1 > 
         Kim Huong
        </h1>
        <nav className="text-right exclusive">
            <span className={`${aboutMeSelected && 'navActive'}`} onClick={() => { setContactSelected(false); 
                                                setResumeSelected(false);
                                                setAboutMeSelected(true);
                                                setWorkSelected(false)
              }}>
              About Me</span>
            <span className={`${workSelected && 'navActive'}`} onClick={ () => { 
              setWorkSelected(true); 
              setContactSelected(false);  
              setAboutMeSelected(false); 
              setResumeSelected(false)}}>
              Portfolio</span>
            <span className={`${contactSelected && 'navActive'}`} onClick={() => {setContactSelected(true);  
              setAboutMeSelected(false);   
              setWorkSelected(false); 
              setResumeSelected(false)}}>
              Contact</span>
            <span className={`${resumeSelected && 'navActive'}`} onClick={() => {  setResumeSelected(true);
                                    setContactSelected(false); 
                                    setAboutMeSelected(false)
                                    setWorkSelected(false)
                                  
              }}>
              Resume</span>
            
        </nav>
      </div>
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