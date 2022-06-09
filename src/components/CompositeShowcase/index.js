import React from 'react'
import myGithub from '../../assets/images/small/whereto/light_theme/github_alt_48.png';
import SingleShowcase from '../SingleShowcase';
import SingularShow from '../SingularShow';
 
const CompositeShowcase  = () => {
  return (
    <div className='flex-row justify-space-between pb-3' > 
      <div className={`col-12 col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
        <h2>Portfolio</h2>
        <div className=" p-3 mb-1 flex-row justify-space-between">
          <SingleShowcase></SingleShowcase>
         
        </div>
        {/* <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-1 mt-4`}>
           
        </div>

        <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-3`}>
          &nbsp;
        </div> */}

      </div>
      
    </div>     

  ) 
};
export default CompositeShowcase;


