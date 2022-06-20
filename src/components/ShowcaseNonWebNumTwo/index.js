import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/dark_theme/github_48.png';
 
class ShowcaseNonWebNumTwo extends Component{
  render() {
    const screenOrigin={
        backgroundImage: 
          "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/main/src/assets/images/small/portfolio/999.png')",
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
                  <p>ORM-Based E-commerce Back End - Part I</p>
                </div>
              </div>
              
              <div id="hover-content" style={screenHovering}>
                <div className='worksample-detail'>
                  <a href="https://drive.google.com/file/d/1cFbCTfwOPsQSRREuIF54YgO2J3NQllTO/view" target={'_blank'} 
                      rel="noreferrer" 
                      alt="Sequelize Multi Model Creations with Test-Data Seeding" 
                      title="Click for a Demo"> 
                      Part I:  Sequelize Multi <br></br>Model Creations 
                  </a> 
                  {/* <br></br>
                  <a href="https://drive.google.com/file/d/1mZ27HMqE21EHbhRmyurjBlZpUvpUZFHn/view" target={'_blank'} 
                      rel="noreferrer" 
                      alt="Perform API GET - POST - PUT - DELETE Requests  in Insomnia" 
                      title="Click for a Demo"> 
                      Part 2: Perform API GET - POST -<br></br>PUT - DELETE Requests in Insomnia
                  </a>  */}
                  <br></br>
                  <a href="https://github.com/TTKHScriptPoetry/KUbootcamp_Challenge_11_ORM-Based_E-commerce_Back_End" target={'_blank'} 
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
export default ShowcaseNonWebNumTwo;
