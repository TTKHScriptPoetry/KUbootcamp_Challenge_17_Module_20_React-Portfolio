import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/dark_theme/github_48.png';
 
class ShowcaseNumTwo extends Component{
  
  render() {
    
    const screenOrigin={
        backgroundImage: 
          "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/main/src/assets/images/small/portfolio/111.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',  
        // backgroundAttachment: 'fixed', 
        opacity: '0.90',
    };
    const screenHovering={
      backgroundImage: 
        "url('https://raw.githubusercontent.com/TTKHScriptPoetry/KUBC_Q2_Inception/main/gray_template_hovering_560_310.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'cover',  
      opacity: '0.78', //shows no rectangular boundary
    };
    return (
      // <div className="bg-secondary p-3 mb-0 flex-row  align-center border-top-thin ">
     
          <span className='flex-row justify-space-between justify-center mb-2 text-center'>
            <span id="hover-me" className='separator'>
                
              <div style={screenOrigin} id="be-gone">
                <div className='worksample-photo'>
                  <p>Model-View-Controller (MVC)</p>
                </div>
              </div>
              
              <div id="hover-content" style={screenHovering}>
                <div className='worksample-detail'>
                  <a href="https://kubc-mvc-tech-blog-portal.herokuapp.com" target={'_blank'} 
                      rel="noreferrer" 
                      alt="Tech Blog" 
                      title="Click for a Demo"> 
                      Tech Blog
                  </a> 
                  <br></br> 
                  <a href="https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_12_Module_14_MVC_Tech_Blog" target={'_blank'} 
                      rel="noreferrer"  
                      alt="Github Repos" 
                      title="Go to Github Repository">
                        <img src={myGithub} alt="Github Repos URL" />
                  </a>
                </div>
              </div>

            </span>
          </span>


      // </div>

    );
  };

}
export default ShowcaseNumTwo;


