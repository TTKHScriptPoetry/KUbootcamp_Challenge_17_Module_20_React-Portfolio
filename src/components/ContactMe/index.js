import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';
// import { capitalizeFirstLetter } from "../../utils/helpers";
import emailjs from "emailjs-com";

function ContactMe() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState; //the property names of formState -- destructure the formState object into its named properties
  const [errorMessage, setErrorMessage] = useState(''); // initial state of the errorMessage is an empty string

  const INVALID_EMAIL_MSG = "Your email is invalid!";
  const NAME_REQUIRED_MSG = "Your name is required!";
  const MSG_CONTENT_REQUIRED = "Your message is required!";
  const SPACE = " ";
  const STRING_EMPTY = "";

   // -- Add validation in the handleChange function, allowing validation of the form data before syncing the form data with the state, formState
  function handleChange(e) {   
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);      
      if (!isValid) {
        if(errorMessage.includes(INVALID_EMAIL_MSG)){
          console.log("repeated err email msg");
          let currentMsg = errorMessage.replaceAll(INVALID_EMAIL_MSG, STRING_EMPTY);
          // console.log(currentMsg.trim());
          setErrorMessage(currentMsg.trim() + SPACE + INVALID_EMAIL_MSG + SPACE);
        }
        else{
          setErrorMessage( errorMessage + SPACE + INVALID_EMAIL_MSG + SPACE);
        }
        
      } else {
        // setErrorMessage(errorMessage);
        let currentMsg = errorMessage.replaceAll(INVALID_EMAIL_MSG, STRING_EMPTY);
        console.log(currentMsg.trim());
        setErrorMessage(currentMsg.trim());
        console.log("eeeeeeeeeeeeeeeeeeee");
      }
    } 
    else if (e.target.name === 'name') {
      const isValid = (e.target.value === STRING_EMPTY) ? false : true;
      console.log(isValid);   
      console.log("nnnnnnnnnnnnnnnnn");      
      if (!isValid) {
        if(errorMessage.includes(NAME_REQUIRED_MSG)){
          console.log("repeated name err msg");
          let currentMsg = errorMessage.replaceAll(NAME_REQUIRED_MSG, STRING_EMPTY);
          // console.log(currentMsg.trim());
          setErrorMessage(currentMsg.trim() + SPACE + NAME_REQUIRED_MSG + SPACE);
        }
        else{
          setErrorMessage( errorMessage + SPACE + NAME_REQUIRED_MSG + SPACE);
        }
       
      } else {
        let currentMsg = errorMessage.replaceAll(NAME_REQUIRED_MSG, STRING_EMPTY);
        console.log(currentMsg.trim());
        setErrorMessage(currentMsg.trim());
        console.log("mmmmmmmmmmmmmmmmmmmm");
      }
         
    }
    else {
      const isValid = (e.target.value === STRING_EMPTY) ? false : true;
      console.log(isValid);   
      console.log("cccccccccccccccccccccc");      
      if (!isValid) {
        if(errorMessage.includes(MSG_CONTENT_REQUIRED)){
          console.log("repeated content err mgs");
          let currentMsg = errorMessage.replaceAll(MSG_CONTENT_REQUIRED, STRING_EMPTY);
          // console.log(currentMsg.trim());
          setErrorMessage(currentMsg.trim() + SPACE + MSG_CONTENT_REQUIRED + SPACE);
        }
        else{
          setErrorMessage( errorMessage + SPACE + MSG_CONTENT_REQUIRED + SPACE);
        }
        
      } else {
        let currentMsg = errorMessage.replaceAll(MSG_CONTENT_REQUIRED, STRING_EMPTY);
        console.log(currentMsg.trim());
        setErrorMessage(currentMsg.trim());
        console.log("ttttttttttttttttttttt");
      }
      
    }
    // console.log('errorMessage', errorMessage);
    // -- The name property of target e = name attribute of the form's input element
    // Only allows the state to update with the user input if there is no error message

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  } // end of handleChange 
  
  // // -- Print test - not to be removed
  // console.log(formState); // awesome

  function sendEmail(e){
    e.preventDefault();

    if (!errorMessage) {
      emailjs.sendForm('service_k7pqbuq', 'template_dovyd3m', e.target, 'Y24TbjWB9BcHeTlMP')
      .then((result) => {
          setErrorMessage("Message sent!");
          // console.log(result.text);
          // console.log("mmmmmmmmmmmmmmmmmmm");
      }, (error) => {          
          setErrorMessage("An error occurred. Your message was not successfully sent."); 
          // console.log(error.text);  
          // console.log("eeeeeeeeeeeeeeeeeee");
      });
      e.target.reset();
    }
     
  }

  return (
    <div className='flex-row justify-space-between'> 

        <div className={`col-lg-6 col-md-6 col-sm-3 mb-1 mt-4`}>
          <h2>Contact</h2>
          <form id="contact-form" className='form-label' onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="form-label">Name:</label>
                
                <input type="text" name="name"  onBlur={handleChange}  defaultValue={name} autoComplete="off" className="form-input" />
              </div>

              <div>
                <label htmlFor="email" className="form-label">Email address:</label>
                <input type="email" name="email" onBlur={handleChange} defaultValue={email} autoComplete="off" className="form-input"/>
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
               
                <button type="submit" className="btn">Send Message</button>
               
              
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
        {/* <div className={`col-lg-12 col-md-9 col-sm-6  mb-1 mt-4`}>
        </div> */}

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