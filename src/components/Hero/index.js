import React, {Component} from 'react'
import coverImage from "../../assets/images/cover-image.jpg";

class Hero extends Component {
    render() {
      const myStyle={
          backgroundImage: 
            "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/main/src/assets/images/hero-bg-tulips.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'cover', /* affect the bg image position*/    
          backgroundAttachment: 'fixed', /* places the image relative to the viewport instead of the element. */
      };
      return (
        
        <div style={myStyle} className="hero">
            <div className="hero-greeting"  >
             <h3>From this to that</h3>
           </div>
        </div>
           
      );
    }
  }
  
  
// function Hero() {
// 
//   return (
// 
//       <section className="hero" style={{ 'backgroundImage' :  'url(\'../../assets/images/hero-bg-tulips.jpg\')'  , 
//            'backgroundSize' : 'cover',
//            'backgroundPosition': 'center',
//            'backgroundAttachment': 'fixed',
//            'backgroundRepeat': 'repeat' }}>
//           <div className="hero-greeting"  >
//               {/* <img src={coverImage} alt="Floral Theme" /> */}
//           </div>
// 
//           <div style={{ 'backgroundImage' : {coverImage}}}>
//                
//           </div>
//           {/* <div style={{ 'backgroundImage' : {coverImage}}}>
//                <img src={coverImage} alt="Floral Theme" />
//           </div> */}
//       </section>
//   )
// }

export default Hero