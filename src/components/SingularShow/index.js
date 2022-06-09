import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/github_48.png';
// import projectTwo from '../../assets/images/small/portfolio/6.png';
// import myFacebook from '../../assets/images/small/whereto/facebook_alt_48_origin.png';


class SingularShow extends Component {
    render() {
      const screenOrigin={
          backgroundImage: 
            "url('https://raw.githubusercontent.com/TTKHScriptPoetry/KUBC_Q2_Inception/main/666.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'cover',  
          // backgroundAttachment: 'fixed', 
          opacity: '0.8',
      };
      const screenHovering={
        backgroundImage: 
          "url('https://raw.githubusercontent.com/TTKHScriptPoetry/KUBC_Q2_Inception/main/gray_template_hovering_560_310.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',  
        // backgroundAttachment: 'fixed', 
        opacity: '1.0',
    };
      return (
        
        // <div style={screenOrigin} className="hero">
        //     <div className="hero-greeting"  >
        //      <h3>From this to that</h3>
        //    </div>
        // </div>

        <div className="w-100 mt-auto bg-secondary p-3 mb-0 flex-row  align-center border-top-thin ">
          {/* <div class="container">
            <div id="hover-me">
                <span>Hover Me</span>
                <div id="hover-content">
                    This content is visible only when you mouse hover the parent div and it has no transition.
                </div>
            </div>
          </div> */}
          <div className="container justify-center text-center"> 
            
            <div className="flex-row justify-space-between justify-center ">

            <div>
              <div id="hover-me">
                  {/* <span > Hover Me </span> */}
                  <div style={screenOrigin} id="be-gone">
                    <div style={{ 'width' : 560, 'height' : 310}}>                     
                      Fullstack MERN
                    </div>
                  </div>
                  <div id="hover-content" style={screenHovering}>
                    <div style={{ 'width' : 560, 'height' : 310}}>
                      <br></br><br></br><br></br><br></br> 
                      <a href="https://staging-designer-cake-app-fec.herokuapp.com" target={'_blank'} 
                          rel="noreferrer" 
                          alt="Forally Enchanting Cakes" 
                          title="Go to Forally Enchanting Cakes Website"> 
                          Florally Enchanting Cakes
                      </a> 
                      <br></br> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="https://github.com/MercuryKTgithub/KU_BC_Group_Project_FEC_Designer_Cake_App" target={'_blank'} 
                          rel="noreferrer"  
                          alt="Github Repos" 
                          title="Go to Github Repository">
                            <img src={myGithub} alt="Github Repos URL"/>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
              
            </div>
          </div>
        </div>


           
      );
    }
  }

  export default SingularShow
  