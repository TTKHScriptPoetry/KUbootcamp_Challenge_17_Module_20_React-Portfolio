import React, {Component} from 'react'

class Hero extends Component {
    render() {
      const myStyle={
          // backgroundImage: 
          //   "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/main/src/assets/images/hero-bg-tulips.jpg')",
          backgroundImage: 
            "url('https://raw.githubusercontent.com/TTKHScriptPoetry/KUBC_Q2_Inception/main/personal_flower_theme_top.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'cover', /* affect the bg image position*/    
          backgroundAttachment: 'fixed', /* places the image relative to the viewport instead of the element. */
          paddingTop: 10, 
          opacity: '90%',
        
      };
      return (
        
        <div style={myStyle} className="hero" >
            <div className="hero-greeting"  >
             <h4>&nbsp;</h4>
           </div>
        </div>
           
      );
    }
  }

export default Hero