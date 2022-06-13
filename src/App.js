import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Portfolio from './components/Portfolio';
// import ContactFrom from './components/Contact'; 
import Resume from './components/Resume';
// import Work from './components/Work';
import Hero from './components/Hero';

// import Header from './components/Header';
import Footer from './components/Footer';
import CompositeShowcase from './components/CompositeShowcase';
import ContactMe from './components/ContactMe';

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
      <div className="flex-column justify-flex-start min-100-vh">
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}

          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}

          aboutMeSelected={aboutMeSelected}
          setAboutMeSelected={setAboutMeSelected}

          workSelected={workSelected}
          setWorkSelected={setWorkSelected}
        ></Nav>
     
        <Hero></Hero>
        <main className="container">        
          <ContactMe></ContactMe>
        </main>
        <Footer></Footer>  
      </div>
    );
  } 
  else if (workSelected){
    return( 
      <div className="flex-column justify-flex-start min-100-vh" >    
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
        <Hero></Hero>
        <main className="container" >
          <CompositeShowcase></CompositeShowcase>
        </main>
        <Footer></Footer>
      </div>
    );
  } 
  else if (resumeSelected){
    return( 
      <div className="flex-column justify-flex-start min-100-vh" > 
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
          <Hero></Hero>
        <main className="container" >         
          <Resume></Resume>
        </main>
        <Footer></Footer>
      </div>
    );
  } 
  else if (aboutMeSelected){
    return( 
      <div className="flex-column justify-flex-start min-100-vh">        
          <Nav
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
    
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}

            workSelected={workSelected}
            setWorkSelected={setWorkSelected}
    
            aboutMeSelected={aboutMeSelected}
            setAboutMeSelected={setAboutMeSelected}>
          </Nav>     
          <Hero></Hero>          
        <main className="container">
          <About></About>
        </main>
        <Footer></Footer>       
      </div>
    );
  }
  else{
      return( 
        <div className="flex-column justify-flex-start min-100-vh">
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
          <Hero></Hero>
          <main className='container' >
            <About></About>            
          </main>
          <Footer></Footer>
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
// //         <ContactFrom></ContactFrom>
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
 
   

 