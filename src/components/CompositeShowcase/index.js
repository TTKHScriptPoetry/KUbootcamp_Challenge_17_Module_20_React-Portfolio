import React from 'react'
 
import ShowcaseNumOne from '../ShowcaseNumOne';
import ShowcaseNumTwo from '../ShowcaseNumTwo';
import ShowcaseNumThree from '../ShowcaseNumThree';
import ShowcaseNumFour from '../ShowcaseNumFour';
import ShowcaseNumFive from '../ShowcaseNumFive';
import ShowcaseNumSix from '../ShowcaseNumSix';
import ShowcaseNumSeven from '../ShowcaseNumSeven';
import ShowcaseNumEight from '../ShowcaseNumEight';

const CompositeShowcase  = () => {
  return (
    <div className='flex-row justify-space-around pb-3 justify-center ' > 
      <div className={`col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
        <h2>Portfolio</h2>
        <div className="mb-1 flex-row justify-space-between">
          <ShowcaseNumOne></ShowcaseNumOne>
          <ShowcaseNumThree></ShowcaseNumThree>
          <ShowcaseNumTwo></ShowcaseNumTwo>
          <ShowcaseNumFour></ShowcaseNumFour>
          <ShowcaseNumFive></ShowcaseNumFive>
          <ShowcaseNumSix></ShowcaseNumSix>
          <ShowcaseNumEight></ShowcaseNumEight>
          <ShowcaseNumSeven></ShowcaseNumSeven>
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


