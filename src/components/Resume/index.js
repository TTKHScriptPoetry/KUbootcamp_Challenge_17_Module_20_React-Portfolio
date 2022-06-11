import React from 'react'

function Resume() {
  return (
    <div className='flex-row justify-space-between'> 
    
      {/* <div className={`col-12 col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}> */}
      <div className={`col-12 col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
        <h2>Resume</h2>
        <span className="pill mb-2"><a title='Click to Download' href={require(`../../assets/docs/SoftwareDeveloper_KimberlyTran_Resume.pdf`)} >My Resume</a></span>
      </div>

      {/* <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-1 mt-4`}> */}
      <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-1 mt-4`}>
        <h4> Front-end Proficiencies</h4>
        <p className="pill mb-1" > HTML </p>
        <p className="pill mb-1" > CSS | Bootstrap  </p>
        <p className="pill mb-1" > Javascript </p>
        <p className="pill mb-1" > jQuery  </p>
        <p className="pill mb-1" > React  </p>

      </div>
      {/* <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-3`}> */}
      <div className={`col-lg-6 col-md-6 col-sm-3 mb-3`}>
        &nbsp;
      </div>

      {/* <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-4 mt-2`}> */}
      <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-4 mt-2`}>
        <h4> Back-end Proficiencies</h4>
        <p className="pill mb-1" > Node.js | Express </p>
        <p className="pill mb-1" > APIs Consumed | Create | Test  </p>
        <p className="pill mb-1" > MySQL | Sequelize </p>
        <p className="pill mb-1" > NoSQL | MongoDB | Mongoose</p>
        <p className="pill mb-1" > MongoDB |  ORM Apollo GraphQL  </p>
        <p className="pill mb-1" > MSSQL | Transact-SQL | Store-procedure  </p>
        <p className="pill mb-1" > VB | C#, ADO.NET | ORM Entity Framework  </p>
      </div>
      {/* <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-3`}> */}
      <div className={`col-lg-6 col-md-6 col-sm-3 mb-3`}>
        &nbsp;
      </div>

      {/* <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-4 mt-2`}>
        <h4> Back-end Proficiencies</h4>
        <p className="pill mb-1" > Node | Express </p>
        <p className="pill mb-1" > APIs Consumed | Create | Test  </p>
        <p className="pill mb-1" > MySQL, Sequelize </p>
        <p className="pill mb-1" > NoSQL| MongoDB | Mongoose</p>
        <p className="pill mb-1" > MongoDB, ORM Apollo GraphQL  </p>
        <p className="pill mb-1" > VB | C#, ADO.NET | ORM Entity Framework  </p>
      </div> */}
      <div className={`col-6 col-lg-6 col-md-6 col-sm-3 mb-3`}>
        &nbsp;
      </div>
      
        {/* ------------- Other Possibilities -------------------------- */}
        {/* <div className={`col-12 col-lg-8 col-md-9 col-sm-8 mb-3`}>
        </div>
        <div className="col-12 col-lg-4 col-md-3 col-sm-4 mb-3">Please register to place orders</div>   */}

        {/* <div className={`col-12 col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
          <h4> Heading</h4>
        </div> */}

         {/* -------------- End of small module tests ----------------------------------------- */}
    </div>     

  ) 
}

export default Resume
