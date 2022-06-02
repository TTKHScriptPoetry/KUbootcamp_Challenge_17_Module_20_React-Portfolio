import React from 'react'

function Resume() {

 
 

  return (

    <section className="steps" id="about-me-1">
      <div className="component">
        <h2> Resume </h2>
        <h4><a href={require(`../../assets/docs/SoftwareDeveloper_KimberlyTran_Resume.pdf`)} >My Resume</a></h4>
      </div>
      <div className="step">
        <div className="step-info">
        <div className="gallery">
          <div className="step-img">
              {/* <a href={require(`../../assets/docs/SoftwareDeveloper_KimberlyTran_Resume.pdf`)} >My Resume</a> */}
              <h4> Front-end Proficiencies </h4>
              <ul>
                <li> HTML
                </li> 
                <li> CSS
                </li>
                <li> Javascript
                </li>
                <li> Resonsive design
                </li> 
                <li> React
                </li> 
              </ul>

              <h4> Back-end Proficiencies </h4>
              <ul>
                <li> APIs
                </li> 
                <li> Node
                </li>
                <li> Express
                </li>
                <li> MySQL, Sequelize
                </li> 
                <li> MongoDB, Mongoose
                </li> 
              </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
    
  ) // end of return
}

export default Resume