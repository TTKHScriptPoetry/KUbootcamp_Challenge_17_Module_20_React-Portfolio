import React from 'react'
import formalPhoto from "../../assets/images/KimHuongFormal.jpg";
 
function About() {

  return (
    <div className='flex-row justify-space-between'> 
    
      <div className={`col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
     
        <h2>About Me</h2>
        <img src={formalPhoto} alt="Kim Huong" className='profile-photo border-photo-thin' title="Hi! My name is Kim Huong" />
        <p>&nbsp;</p>
        <p className="about-me mb-1" > The last thing I want to do is to create this About Me section of myself and hope to gain people's attention and understanding about who I am. People couldn't care less, neither could I because I don't like to visit About Me section of someone else's website either as most likely that someone would just be bragging on himself/herself. 
        But if people like a certain type of person and a certain type of look, they believe whatever that person says no matter what. Look and voice can be very deceiving.
        </p>
        <p>&nbsp;</p>
        <p className="about-me mb-1" >
        This About Me section is just simply informative: like many others who took online school during the pandemics, I went for a Fullstack Coding Bootcamp program with KU (the Univerity of Kansas) and just happen to have finished it recently. 
        </p>
        <p>&nbsp;</p>
        <p className="about-me mb-1">  
        As someone who had web programming background in Microsoft .Net environment, taking the bootcamp training was not much of a challenge; it's like re-encoutering an old book, but full of tricks and insights this time around in its newest edition, as far as the front-end programming in HTML, CSS, Javascript, and JQuery is concerned. 
        <br></br><br></br>I'm here to re-iterating the remaining skillset that the Bootcamps has offered me through the online exhibition of my work during its training as a self-reflection. The focus of my portfolio is on MERN stack, at the minimum relevance, all projects were based off of Node.js/Express.js Visual Code IDE environment.
        </p>
      
      <p>&nbsp;</p>
      </div>

     
      
        {/* ------------- Other Possibilities -------------------------- */}
        {/* <div className={`col-12 col-lg-8 col-md-9 col-sm-8 mb-3`}>
        </div>
        <div className="col-12 col-lg-4 col-md-3 col-sm-4 mb-3">Please register to place orders</div>  */}

        {/* <div className={`col-12 col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
          <h4> Heading</h4>
        </div> */}
        {/* -------------- End of Other Possibilities  ----------------------------------------- */}

    </div>     

  ) 
    
}

export default About