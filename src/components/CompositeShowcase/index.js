import React from 'react'
// import myGithub from '../../assets/images/small/whereto/light_theme/github_alt_48.png';
 
import ShowcaseNumOne from '../ShowcaseNumOne';
import ShowcaseNumTwo from '../ShowcaseNumTwo';

const CompositeShowcase  = () => {
  return (
    <div className='flex-row justify-space-around pb-3 justify-center ' > 
      <div className={`col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
        <h2>Portfolio</h2>
        <div className="mb-1 flex-row justify-space-between">
          <ShowcaseNumOne></ShowcaseNumOne>
          <ShowcaseNumOne></ShowcaseNumOne>
        </div>
        
        {/* <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-1 mt-4`}>
          <ShowcaseNumOne></ShowcaseNumOne>
        </div>

        <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-3`}>
         <SingleShowcase></SingleShowcase>
        </div> */}

      </div>
      
    </div>     

  ) 
};
export default CompositeShowcase;


