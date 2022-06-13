import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';
import { capitalizeFirstLetter } from "../../utils/helpers";

function ContactMe() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState; //the property names of formState -- destructure the formState object into its named properties
  const [errorMessage, setErrorMessage] = useState(''); // initial state of the errorMessage is an empty string

  function handleChange(e) {
    // -- Add validation in the handleChange function, allowing 
    // validation of the form data before syncing the form data with the state, formState

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);      
      if (!isValid) {
        setErrorMessage('Your email is invalid!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        // setErrorMessage(`${e.target.name} is required.`);
        setErrorMessage(capitalizeFirstLetter(e.target.name) + ' is required!');
      } else {
        setErrorMessage('');
      }
    }
    console.log('errorMessage', errorMessage);

    // -- We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. 
    // without the spread operator, the formState object would be overwritten to only contain the name: value key pair.   
    // setFormState({...formState, name: e.target.value }) // for name only

    // -- The name property of target e = name attribute of the form's input element
    // Only allows the state to update with the user input if there is no error message
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  } // end of handleChange 
  
  // // -- Print test - not to be removed
  // console.log(formState); // awesome
  return (
    <div className='flex-row justify-space-between'> 
    
      {/* <div className={`col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
       
        
      </div> */}

        <div className={`col-lg-6 col-md-6 col-sm-3 mb-1 mt-4`}>
          <h2>Contact</h2>
          <form id="contact-form" className='form-label'>
              <div>
                <label htmlFor="name" className="form-label">Name:</label>
                
                <input type="text" name="name"  onBlur={handleChange}  defaultValue={name}   className="form-input" />
              </div>

              <div>
                <label htmlFor="email" className="form-label">Email address:</label>
                <input type="email" name="email" onBlur={handleChange} defaultValue={email} className="form-input"/>
              </div>

              <div>
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea name="message" rows="6" onBlur={handleChange} defaultValue={message} className="form-textarea"/>
              
              </div>
              
              {/* {errorMessage && (
                <div className='form-error'>
                  <p>{errorMessage} &nbsp;</p>
                </div>
              )} */}
               
                <button type="submit" className="btn">Submit</button>
               
              
                {errorMessage && (
                  <div className='form-error'>
                    <p>{errorMessage} </p>
                  </div>
                )}
              
              
          </form>
            &nbsp;
        </div>

        <div className={`col-lg-6 col-md-6 col-sm-3 mb-3`}>
        
        </div>

     
      
        {/* ------------- Other Possibilities -------------------------- */}
        {/* <div className={`col-12 col-lg-8 col-md-9 col-sm-8 mb-3`}>
        </div>
        <div className="col-12 col-lg-4 col-md-3 col-sm-4 mb-3">Please register to place orders</div>  */}

        {/* <div className={`col-12 col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
          <h4> Heading</h4>
        </div> */}
        {/* -------------- End of Other Possibilities  ----------------------------------------- */}

    </div>     

  ) 
    
}

export default ContactMe