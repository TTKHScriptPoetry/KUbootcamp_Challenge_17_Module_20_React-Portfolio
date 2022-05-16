import React from 'react'
import coverImage from "../../assets/images/HKTranProfilePhotoSmallOpacity.jpg";

function About() {

  return (
    // <section className="my-5" >
    //   <h1 id="about">Who am I?</h1>
    //   <img src={coverImage} className="my-2" style={{ width: "90%" }} alt="cover" />
    //   <div className="my-2">
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
    //   </p>
    //   </div>
    //   </section>

    <section className="steps" id="about-me-1">
      <div className="component">
        <h2> About me </h2>
      </div>
      <div className="step">
        <img src={coverImage} alt="Kimberly Tran" />
        <div className="step-info">
            <div className="step-text">
              <p> 
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

    // <section id="about-me-1" class="steps"> 
    //   <div class="component">
    //     <h2> About Me </h2>
    //   </div>
    //   <div class="step">
    //     <img src={coverImage} alt="Kimberly's Profile Picture" />
    //   
        // <div class="step-info">
        //     <div class="step-text">
        //       <p> 
        //       Self-taught and .net trained software developer with accumulated 6-7 years of hand-on experiences that cover at least 4 areas 
        //       of Microsoft training objectives: Creating User Services, Consuming & Manipulating Data, Testing & Debugging, Configuring & Securing 
        //       Window plus Web based applications. <br/><br/>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
        //       itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
        //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed
        //       itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!
        //     </p>           
        //     </div>
        // </div>
    //   </div>
    // </section>
    // 
  )
}

export default About