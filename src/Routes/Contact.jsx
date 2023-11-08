import {useRef, useState,useEffect} from 'react';
import emailjs from 'emailjs-com'
import * as yup from 'yup';

import { useFormik } from 'formik';



const Contact = () =>{

    const form = useRef(null);
    const [emailMessageSent,setEmailMessageSent] = useState("");    
    const [popup,setPopup] = useState("");    


    let schema = yup.object( {
        user_email:yup.string().email('please enter a valid email').required('email is required field *'),
        user_name:yup.string().required('name is required field *').min(3,'name must be at least 3 number').max(10,'name is too longer'),
       user_message:yup.string().required("The message filed is required *"),
      });

    
      const sendEmail = () => {
        emailjs.sendForm('service_4n10yr7', 'template_89p0tjf', form.current, 'LW3r27bFaCZINQrEn')
          .then(() => {
              setEmailMessageSent('The Message Sent Successfully..!');
            setPopup("popup-show");
          })
          .catch(() => {
              
              setEmailMessageSent('Something Went Wrong..!');
              setPopup("popup-show");
            

          });
      };
      

  let { values, handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_message:"",
    },
    validationSchema: schema,
    onSubmit: () => {
      
        sendEmail();
        
      },
      
  });
  useEffect(() =>{
      setTimeout(() =>{
            form.current.reset();
            setPopup("popup");

        },5000)
  },[popup])
  
        

    return(
        <>
            <div id="contact" className="row w-100" >
                <div className="col mt-4">
                <img src="/call me.png" className="col" width="380" />
                </div>
               <div className="col p-4">
                <form ref={form} onSubmit={handleSubmit}  >
                <div className='form-group'>
                    <label htmlFor="user_name" className='text-light'>Name*</label><br />
                    <input onChange={handleChange} value={values.user_name} type="text" id="user_name" name="user_name" className="contact-input" /><br />
                        
                        {errors.user_name && touched.user_name && <small style={{color:"rgb(110, 4, 4) "}}>{errors.user_name}</small>}
                    
                </div>
                <div className='form-group'>
                    <label htmlFor="user_email" className='text-light'>Email Adress*</label><br />
                    <input onChange={handleChange} value={values.user_email} type="email" id="user_email" name="user_email" className="contact-input" /><br />
                        {errors.user_email && touched.user_email && <small style={{color:"rgb(110, 4, 4) "}}>{errors.user_email}</small>}

                </div>
                <div className='form-group'>
                    <label htmlFor="message" className='text-light'>message*</label><br />
                        <textarea placeholder="we Love you" name="message" className="p-2" id="message"/><br />
                        {errors.user_message && touched.user_message && <small style={{color:"rgb(110, 4, 4) "}}>{errors.user_message}</small>}
                </div> 
                <button type="submit" className="btn btn-sm d-block btn-outline-light">Send Message</button>


                    <div className='icons d-flex flex-row '>
                        <a  target="_blank" rel="noreferrer" className="mt-4" href="https://wa.me/+93749102015" ><img className="mx-3" src="../whatsapp.png" /></a> 
                        <a  target="_blank" rel="noreferrer" className="mt-4" href="https://www.github.com/MasihMuhammadi" ><img className="mx-3" src="../github.png" /></a>  
                        <a  target="_blank" rel="noreferrer" className="mt-4" href="https://www.instagram.com/im.masih_muhammadi/"><img className="mx-3" src="../instagram.png" /></a>     
                        <a  target="_blank" rel="noreferrer" className="mt-4" href="https://www.linkedin.com/in/masihullah-muhammadi-794964257/"><img className="mx-3" src="../linkedin.png" /></a> 
                    </div>
                </form>
                </div>
            </div>
                <div className={`${popup} bg-dark ${emailMessageSent == 'The Message Sent Successfully..!' ? "text-success " : "text-danger"} `}>
                    <p>{emailMessageSent}</p>
                </div>
        </>
    )
}

export default Contact;