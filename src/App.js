import React, { useState } from 'react';
import Nav from './components/Nav/';
import About from './components/About';
// import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact'; 
import Resume from './components/Resume';
import Work from './components/Work';
import Hero from './components/Hero';

function App() {
  // const [categories] = useState([
  //   { name: 'portfolio', description: 'KU Bootcamp challenges and group projects' },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutMeSelected, setAboutMeSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);

  
  if(contactSelected) {
    return(
      <div>
      <Nav
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}

        contactSelected={contactSelected}
        setContactSelected={setContactSelected}

        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}

        aboutMeSelected={aboutMeSelected}
        setAboutMeSelected={setAboutMeSelected}

        workSelected={workSelected}
        setWorkSelected={setWorkSelected}
      ></Nav>
      <main>        
        <Hero></Hero>
        <ContactForm></ContactForm>
      </main>
    </div>
    );
  } 
  else if (workSelected){
    return( 
      <div>
        <Nav
          // categories={categories}
          // setCurrentCategory={setCurrentCategory}
          // currentCategory={currentCategory}

          contactSelected={contactSelected}
          setContactSelected={setContactSelected}

          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}

          aboutMeSelected={aboutMeSelected}
          setAboutMeSelected={setAboutMeSelected}

          workSelected={workSelected}
          setWorkSelected={setWorkSelected}>  
        </Nav>
        <main>
          <Hero></Hero>
          <Work></Work>
        </main>
      </div>
    );
  } 
  else if (resumeSelected){
    return( 
      <div>
        <Nav
          // categories={categories}
          // setCurrentCategory={setCurrentCategory}
          // currentCategory={currentCategory}

          contactSelected={contactSelected}
          setContactSelected={setContactSelected}

          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}

          aboutMeSelected={aboutMeSelected}
          setAboutMeSelected={setAboutMeSelected}

          workSelected={workSelected}
          setWorkSelected={setWorkSelected}>  
        </Nav>
        <main>
          <Hero></Hero>
          <Resume></Resume>
        </main>
      </div>
    );
  } 
  else if (aboutMeSelected){
    return( 
      <div>
        <Nav
          // categories={categories}
          // setCurrentCategory={setCurrentCategory}
          // currentCategory={currentCategory}
  
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
  
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}

          workSelected={workSelected}
          setWorkSelected={setWorkSelected}
  
          aboutMeSelected={aboutMeSelected}
          setAboutMeSelected={setAboutMeSelected}>
        </Nav>
        <main>
          <Hero></Hero>
          <About></About>
        </main>
      </div>
    );
  }
  else{
      return( 
        <div>
          <Nav
            // categories={categories}
            // setCurrentCategory={setCurrentCategory}
            // currentCategory={currentCategory}
    
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
    
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}

            workSelected={workSelected}
            setWorkSelected={setWorkSelected}
    
            aboutMeSelected={"true"}
            setAboutMeSelected={setAboutMeSelected}>
          </Nav>
          <main>
            <Hero></Hero>
            <About></About>
          </main>
        </div>
      );
    }
  }

export default App;
  

//   return( 
//   <div>
//     <Nav
//       // categories={categories}
//       // setCurrentCategory={setCurrentCategory}
//       // currentCategory={currentCategory}
// 
//       contactSelected={contactSelected}
//       setContactSelected={setContactSelected}
// 
//       resumeSelected={resumeSelected}
//       setResumeSelected={setResumeSelected}
// 
//       aboutMeSelected={aboutMeSelected}
//       setAboutMeSelected={setAboutMeSelected}
// 
//       workSelected={workSelected}
//       setWorkSelected={setWorkSelected}>  
//     </Nav>
//     <main>
//       <About></About>
//     </main>
//   </div>)

// //   if(contactSelected) {
// //     return(
// //       <div>
// //       <Nav
// //         categories={categories}
// //         setCurrentCategory={setCurrentCategory}
// //         currentCategory={currentCategory}
// // 
// //         contactSelected={contactSelected}
// //         setContactSelected={setContactSelected}
// // 
// //         resumeSelected={resumeSelected}
// //         setResumeSelected={setResumeSelected}
// // 
// //         aboutMeSelected={aboutMeSelected}
// //         setAboutMeSelected={setAboutMeSelected}
// // 
// //         workSelected={workSelected}
// //         setWorkSelected={setWorkSelected}
// //       ></Nav>
// //       <main>
// //         <ContactForm></ContactForm>
// //       </main>
// //     </div>
// //     );
// //   } 
// //   else if (resumeSelected){
// //     return( 
// //       <div>
// //         <Nav
// //           categories={categories}
// //           setCurrentCategory={setCurrentCategory}
// //           currentCategory={currentCategory}
// // 
// //           contactSelected={contactSelected}
// //           setContactSelected={setContactSelected}
// // 
// //           resumeSelected={resumeSelected}
// //           setResumeSelected={setResumeSelected}
// // 
// //           aboutMeSelected={aboutMeSelected}
// //           setAboutMeSelected={setAboutMeSelected}
// // 
// //           workSelected={workSelected}
// //           setWorkSelected={setWorkSelected}>  
// //         </Nav>
// //         <main>
// //           <Resume></Resume>
// //         </main>
// //       </div>
// //     );
// //   } 
// //   else{
// //     return( 
// //       <div>
// //         <Nav
// //           categories={categories}
// //           setCurrentCategory={setCurrentCategory}
// //           currentCategory={currentCategory}
// //   
// //           contactSelected={contactSelected}
// //           setContactSelected={setContactSelected}
// //   
// //           resumeSelected={resumeSelected}
// //           setResumeSelected={setResumeSelected}
// //   
// //           aboutMeSelected={aboutMeSelected}
// //           setAboutMeSelected={setAboutMeSelected}>
// //         </Nav>
// //         <main>
// //           <About></About>
// //         </main>
// //       </div>
// //     );
// //   }
 
   

 