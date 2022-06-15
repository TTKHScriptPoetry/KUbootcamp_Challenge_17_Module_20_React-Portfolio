import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';
// import { capitalizeFirstLetter } from "../../utils/helpers";
import emailjs from "emailjs-com";

function ContactMe() {
  const INVALID_EMAIL_MSG = "Your email is either blank or invalid!";
  const NAME_REQUIRED_MSG = "Your name is required!";
  const MSG_CONTENT_REQUIRED = "Your message is required!";
  const MSG_SENT = "Message sent!";
  const SPACE = " ";
  const STRING_EMPTY = '';

  const [formState, setFormState] = useState({ name: STRING_EMPTY, email: STRING_EMPTY, message: STRING_EMPTY });
  // const { name, email, message } = formState; //the property names of formState -- destructure the formState object into its named properties
  const [errorMessage, setErrorMessage] = useState(STRING_EMPTY); // initial state of the errorMessage is an empty string
  const [sentEmailMessage, setSentEmailMessage] = useState(STRING_EMPTY);

  const [nameUntouched, setNameUntouched] = useState(0);
  const [emailUntouched, setEmailUntouched] = useState(0);
  const [contentMsgUntouched, setContentMsgUntouched] = useState(0);
   // -- Add validation in the handleChange function, allowing validation of the form data before syncing the form data with the state, formState
  function handleChange(e) {   
    console.log(sentEmailMessage);
    console.log("ssssssssssssssssssssssss");
    setSentEmailMessage(STRING_EMPTY);
    if (e.target.name === 'email') {
      setEmailUntouched(emailUntouched + 1);
      const isValid = validateEmail(e.target.value);
      console.log(isValid);      
      if (!isValid) {
       
        if(errorMessage.includes(INVALID_EMAIL_MSG)){
          console.log("repeated err email msg");
          let currentMsg = errorMessage.replaceAll(INVALID_EMAIL_MSG, STRING_EMPTY);
          // console.log(currentMsg.trim());
          setErrorMessage(currentMsg.trim() +  SPACE + INVALID_EMAIL_MSG + SPACE );
          console.log(errorMessage);
        }
        else{
          setErrorMessage( errorMessage +  SPACE + INVALID_EMAIL_MSG + SPACE  );
          console.log(errorMessage);
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
      setNameUntouched(nameUntouched + 1);
      const isValid = (e.target.value === STRING_EMPTY) ? false : true;
      console.log(isValid);   
      console.log("nnnnnnnnnnnnnnnnn");      
      if (!isValid) {
       
        if(errorMessage.includes(NAME_REQUIRED_MSG)){
          console.log("repeated name err msg");
          let currentMsg = errorMessage.replaceAll(NAME_REQUIRED_MSG, STRING_EMPTY);
          // console.log(currentMsg.trim());
          setErrorMessage(currentMsg.trim() +  SPACE + NAME_REQUIRED_MSG + SPACE );
          console.log(errorMessage);
        }
        else{
          setErrorMessage( errorMessage +  SPACE + NAME_REQUIRED_MSG + SPACE  );
          console.log(errorMessage);
        }
       
      } else {
        let currentMsg = errorMessage.replaceAll(NAME_REQUIRED_MSG, STRING_EMPTY);
        console.log(currentMsg.trim());
        setErrorMessage(currentMsg.trim());
        console.log("mmmmmmmmmmmmmmmmmmmm");
      }
         
    }
    else {
      setContentMsgUntouched(contentMsgUntouched + 1);
      const isValid = (e.target.value === STRING_EMPTY) ? false : true;
      console.log(isValid);   
      console.log("cccccccccccccccccccccc");      
      if (!isValid) {
         
        if(errorMessage.includes(MSG_CONTENT_REQUIRED)){
          console.log("repeated content err mgs");
          let currentMsg = errorMessage.replaceAll(MSG_CONTENT_REQUIRED, STRING_EMPTY);
          // console.log(currentMsg.trim());
          setErrorMessage(currentMsg.trim() +  SPACE + MSG_CONTENT_REQUIRED + SPACE  );
          console.log(errorMessage);
        }
        else{
          setErrorMessage( errorMessage +  SPACE + MSG_CONTENT_REQUIRED + SPACE  );
          console.log(errorMessage);
        }
        
      } else {
        let currentMsg = errorMessage.replaceAll(MSG_CONTENT_REQUIRED, STRING_EMPTY);
        console.log(currentMsg.trim());
        setErrorMessage(currentMsg.trim());
        console.log("ttttttttttttttttttttt");
      }
      
    }
     
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  } // end of handleChange 
  
  // // -- Print test - not to be removed
  // console.log(formState); // awesome

  function sendEmail(e){
    e.preventDefault();
    console.log(nameUntouched, emailUntouched, contentMsgUntouched);
    if (sentEmailMessage.includes(MSG_SENT)){
      console.log("OK, it's inside");
      setSentEmailMessage(STRING_EMPTY);
      console.log("Clear. No msg sent");
      return;
    }
    console.log(errorMessage);
    if ((!errorMessage) && (nameUntouched >= 1) && (emailUntouched >= 1) && (contentMsgUntouched >= 1)) {
      emailjs.sendForm('service_k7pqbuq', 'template_dovyd3m', e.target, 'Y24TbjWB9BcHeTlMP')
      .then((result) => {
          setNameUntouched(0);
          setSentEmailMessage(MSG_SENT);
          
          console.log(result.text);
          // setErrorMessage(STRING_EMPTY);
          // console.log("mmmmmmmmmmmmmmmmmmm");
      }, (error) => {         
          // setNameUntouched(0); 
          setErrorMessage("An error occurred. Your message was not successfully sent."); 
          
          console.log(error.text);  
          // console.log("eeeeeeeeeeeeeeeeeee");
      });
      e.target.reset();
      setNameUntouched(0);
      setEmailUntouched(0);
      setContentMsgUntouched(0);
      setErrorMessage(STRING_EMPTY);
      // setSentEmailMessage(STRING_EMPTY);
    }
     
  }

  return (
    <div className='flex-row justify-space-between'> 

        <div className={`col-lg-6 col-md-6 col-sm-3 mb-1 mt-4`}>
          <h2>Contact</h2>
          <form id="contact-form" className='form-label' onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="form-label">Name:</label>
                
                {/* <input type="text" name="name"  onBlur={handleChange}  defaultValue={name} autoComplete="off" className="form-input" /> */}
                <input type="text" name="name"  onBlur={handleChange}   autoComplete="off" className="form-input" />
              </div>

              <div>
                <label htmlFor="email" className="form-label">Email address:</label>
                {/* <input type="email" name="email" onBlur={handleChange} defaultValue={email} autoComplete="off" className="form-input"/> */}
                <input type="email" name="email" onBlur={handleChange} autoComplete="off" className="form-input"/>
              </div>

              <div>
                <label htmlFor="message" className="form-label">Message:</label>
                {/* <textarea name="message" rows="6" onBlur={handleChange} defaultValue={message} className="form-textarea"/> */}
                <textarea name="message" rows="6" onBlur={handleChange} className="form-textarea"/>
              </div>
               
                <button type="submit" className="btn">Send Message</button>
               
              
                {errorMessage && (
                  <p className='form-error'>
                   {errorMessage} 
                  </p>
                )}

                {sentEmailMessage && (
                  <div className='form-error'>
                    <p>{sentEmailMessage} </p>
                  
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