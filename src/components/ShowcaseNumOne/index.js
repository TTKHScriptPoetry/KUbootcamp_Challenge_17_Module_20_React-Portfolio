import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/dark_theme/github_48.png';
 
class ShowcaseNumOne extends Component{
  
  render() {
    
    const screenOrigin={
        backgroundImage: 
          "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/develop/src/assets/images/small/portfolio/000.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',  
        // backgroundAttachment: 'fixed', 
        opacity: '0.80',
    };
    const screenHovering={
      backgroundImage: 
        "url('https://raw.githubusercontent.com/TTKHScriptPoetry/KUBC_Q2_Inception/main/gray_template_hovering_560_310.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'cover',  
      // backgroundAttachment: 'fixed', 
      opacity: '0.90', //shows no rectangular boundary
    };
    return (
      // <div className="bg-secondary p-3 mb-0 flex-row  align-center border-top-thin ">
     
          <div className='flex-row justify-space-between justify-center mb-2 text-center'>
            <div id="hover-me">
                {/* <span > Hover Me </span> */}
                <div style={screenOrigin} id="be-gone">
                  <div  style={{ 'width' : 560, 'height' : 310, 'paddingTop': 5, 'textShadow': '1px 1px 1px var(--tertiary)'}} >                     
                    <p>Consuming Server-Side APIs </p>
                  </div>
                </div>
                <div id="hover-content" style={screenHovering}>
                  <div style={{ 'width' : 560, 'height' : 310}}>
                    <br></br><br></br><br></br><br></br> 
                    <a href="https://mercuryktgithub.github.io/KUbootcamp_MilestoneAssignments/Challenge_06_Weather_Dashboard" target={'_blank'} 
                        rel="noreferrer" 
                        alt="Weather Dashboard" 
                        title="Go to Weather Dashboard Website"> 
                        Weather Dashboard
                    </a> 
                    <br></br> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/MercuryKTgithub/KUbootcamp_MilestoneAssignments/tree/main/Challenge_06_Weather_Dashboard" target={'_blank'} 
                        rel="noreferrer"  
                        alt="Github Repos" 
                        title="Go to Github Repository">
                          <img src={myGithub} alt="Github Repos URL" style={{ 'transition': 'all 0.3s'}} />
                    </a>
                  </div>
                </div>
            </div>
          </div>


      // </div>

    );
  };

}
export default ShowcaseNumOne;


