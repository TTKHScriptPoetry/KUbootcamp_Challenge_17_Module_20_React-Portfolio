import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/light_theme/github_alt_48.png';
import myLinkedin from '../../assets/images/small/whereto/linkedin_alt_48.png';
import myFacebook from '../../assets/images/small/whereto/light_theme/facebook_alt_48.png';


class Footer extends Component {
    render() {
      // const myStyle={
      //     // backgroundImage: 
      //     //   "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/main/src/assets/images/hero-bg-tulips.jpg')",
      //     // backgroundSize: 'cover',
      //     // backgroundRepeat: 'no-repeat',
      //     // backgroundPosition: 'cover', /* affect the bg image position*/    
      //     // backgroundAttachment: 'fixed', /* places the image relative to the viewport instead of the element. */
      // };
      return (
        
        // <div style={myStyle} className="hero">
        //     <div className="hero-greeting"  >
        //      <h3>From this to that</h3>
        //    </div>
        // </div>

        <footer className="w-100 mt-auto bg-secondary p-3 mb-0 flex-row  align-center border-top-thin ">
          {/* <div class="container">
            <div id="hover-me">
                <span>Hover Me</span>
                <div id="hover-content">
                    This content is visible only when you mouse hover the parent div and it has no transition.
                </div>
            </div>
          </div> */}
          <div className="container justify-center text-center "> 
            
            <div className="flex-row justify-space-between justify-center ">
              <a href="https://github.com/TTKHScriptPoetry" target='blank'>
                <img 
                  title={"Click to see my Github repositories"}
                  src={myGithub}
                  alt={"Github repositories"}
                />
              </a> 
              <a href="https://github.com/TTKHScriptPoetry" target='blank'>
                <img 
                  title={"Click for my LinkedIn"}
                  src={myLinkedin}
                  alt={"Click for my LinkedIn"}
                  width={48}
                  height={48}
                />
              </a> 
              <a href="https://github.com/TTKHScriptPoetry" target='blank'>
                {/* <img style={{ 'marginTop' : '14px', 'marginLeft' : '-4px'}} */}
                <img  
                  title={"Connect with me on Facebook"}
                  src={myFacebook}
                  alt={"Connect with me on Facebook"}
                  width={48}
                  height={48}
                />
              </a> 
              
            </div>
          </div>
        </footer>


           
      );
    }
  }

  export default Footer
  