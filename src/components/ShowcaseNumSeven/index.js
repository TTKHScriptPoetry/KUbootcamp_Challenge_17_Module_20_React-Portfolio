import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/dark_theme/github_48.png';
 
class ShowcaseNumSeven extends Component{
  render() {
    const screenOrigin={
        backgroundImage: 
          "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/main/src/assets/images/small/portfolio/666.png')",
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
                  <p>Interactive MERN SPA Project</p>
                </div>
              </div>
              
              <div id="hover-content" style={screenHovering}>
                <div className='worksample-detail'>
                  <a href="https://staging-designer-cake-app-fec.herokuapp.com" target={'_blank'} 
                      rel="noreferrer" 
                      alt="Forally Enchanting Cakes - Cake Designer App" 
                      title="Click for a Demo"> 
                      Florally Enchanting Cakes <br></br>(Group Project)
                  </a> 
                  <br></br> 
                  <a href="https://github.com/MercuryKTgithub/KU_BC_Group_Project_FEC_Designer_Cake_App" target={'_blank'} 
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
export default ShowcaseNumSeven;


