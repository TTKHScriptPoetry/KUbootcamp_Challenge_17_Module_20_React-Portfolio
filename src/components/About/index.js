import React from 'react'
import formalPhoto from "../../assets/images/KimHuongFormal.jpg";

function About() {

  return (
    <div className='flex-row justify-space-between'> 
    
      <div className={`col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
        <h2>About Me</h2>
        {/* <span className="pill mb-2"><a title='Click to Download' href={require(`../../assets/docs/SoftwareDeveloper_KimberlyTran_Resume.pdf`)} >My Resume</a></span> */}
        <img src={formalPhoto} alt="Kim Huong Tran" className='profile-photo border-photo-small' />
      </div>

      <p className="about-me mb-1" >  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
              itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
              
              Self-taught and .net trained software developer with accumulated 6-7 years of hand-on experiences that cover at least 4 areas 
              of Microsoft training objectives: Creating User Services, Consuming & Manipulating Data, Testing & Debugging, Configuring & Securing 
              Window plus Web based applications. <br/><br/>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
              itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
              itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat! </p>
      
      <p>&nbsp;</p>
      
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