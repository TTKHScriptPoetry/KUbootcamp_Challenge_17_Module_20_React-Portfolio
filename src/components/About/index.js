import React from 'react'
import coverImage from "../../assets/images/HKTranProfilePhotoSmallOpacity.jpg";

function About() {

  return (
    <section className="steps" id="about-me-1">
      <div className="component">
        <h2> About me </h2>
        
      </div>
      <div className="step">
       
        <img src={coverImage} alt="Kimberly Tran" />
        <div className="step-info">
            <div className="step-text">
              <p> 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
              itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
              
              Self-taught and .net trained software developer with accumulated 6-7 years of hand-on experiences that cover at least 4 areas 
              of Microsoft training objectives: Creating User Services, Consuming & Manipulating Data, Testing & Debugging, Configuring & Securing 
              Window plus Web based applications. <br/><br/>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
              itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
              itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
            </p>           
            </div>
        </div>
      </div>
      <div className="step">
         
        <div className="step-info">
            <div className="step-text">
              <p> 
                 &nbsp;
                 &nbsp;
            </p>           
            </div>
        </div>
      </div>
   
    </section>

    
  )
}

export default About