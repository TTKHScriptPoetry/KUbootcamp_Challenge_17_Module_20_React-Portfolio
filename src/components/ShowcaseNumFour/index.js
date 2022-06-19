import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/dark_theme/github_48.png';
 
class ShowcaseNumFour extends Component{
  render() {
    const screenOrigin={
        backgroundImage: 
          "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/main/src/assets/images/small/portfolio/333.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',  
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
          <span className='flex-row justify-space-between justify-center mb-2 text-center'>
            <span id="hover-me" className='separator'>
                
              <div style={screenOrigin} id="be-gone">
                <div className='worksample-photo'>
                  <p>Progressive Web Applications (PWA)</p>
                </div>
              </div>
              
              <div id="hover-content" style={screenHovering}>
                <div className='worksample-detail'>
                  <a href="https://kubc-pwa-budget-tracker.herokuapp.com" target={'_blank'} 
                      rel="noreferrer" 
                      alt="Budget Tracker" 
                      title="Click for a Demo"> 
                      Budget Tracker
                  </a> 
                  <br></br>
                  <a href="https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_16_Module_19_Budget_Tracker" target={'_blank'} 
                      rel="noreferrer"  
                      alt="Github Repos" 
                      title="Go to Github Repository">
                        <img src={myGithub} alt="Github Repos URL" />
                  </a>
                </div>
              </div>

            </span>
          </span>

    );
  };

}
export default ShowcaseNumFour;


