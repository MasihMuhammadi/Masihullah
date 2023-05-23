import React,{useState,useEffect,useRef} from 'react';
import emailjs from 'emailjs-com'
import * as yup from 'yup';
import { Form } from 'formik';
import { useFormik } from 'formik';



const Contact = () =>{

    const form = useRef();
    
    let schema = yup.object( {
        user_email:yup.string().email('please enter a valid email').required('email is required field *'),
        user_name:yup.string().required('name is required field *').min(3,'name must be at least 3 number').max(10,'name is too longer'),
      });

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_26umlrt', 'template_89p0tjf', form.current, 'LW3r27bFaCZINQrEn')
          .then((result) => {
              console.log(result.text);
              console.log('message sent')
          }, (error) => {
              console.log(error);
          });
      };

      let {values,handleChange,errors,handleSubmit,touched} = useFormik({
        initialValues:{
          user_name:"",
          user_email:"",
          },
          validationSchema:schema,
          sendEmail,
        })
        

    return(
        <>
            <div className="row w-100" >
                <div className="col mt-4">
                <img src="../public/talk.png" className="col" width="500" />
                </div>
               <div className="col p-4">
                <form ref={form} onSubmit={handleSubmit} >
                <div className='form-group'>
                    <label htmlFor="user_name" className='text-light'>Name*</label><br />
                    <input onChange={handleChange} value={values.user_name} type="text" id="user_name" name="user_name" className="contact-input" />
                        
                        {errors.user_name && touched.user_name && <small className="text-danger">{errors.user_name}</small>}
                    
                </div>
                <div className='form-group'>
                    <label htmlFor="user_email" className='text-light'>Email Adress*</label><br />
                    <input onChange={handleChange} value={values.user_email} type="email" id="user_email" name="user_email" className="contact-input" />
                        {errors.user_email && touched.user_email && <small className="text-danger">{errors.user_email}</small>}

                </div>
                <div className='form-group'>
                    <label htmlFor="message" className='text-light'>message*</label><br />
                        <textarea placeholder="we Love you" name="message" className="p-2" id="message"/>
                </div> 
                <input type="submit" className="btn btn-sm d-block btn-outline-light" value="Send Message"/>

                    <div className='icons d-flex flex-row '>
                        <a  target="_blank" className="mt-4" href="https://wa.me/+93749102015" ><img className="mx-3" src="../whatsapp.png" /></a> 
                        <a  target="_blank" className="mt-4" href="https://www.github.com/MasihMuhammadi" ><img className="mx-3" src="../github.png" /></a>  
                        <a  target="_blank" className="mt-4" href="https://www.instagram.com/im.masih_muhammadi/"><img className="mx-3" src="../instagram.png" /></a>     
                        <a  target="_blank" className="mt-4" href="https://www.linkedin.com/in/masihullah-muhammadi-794964257/"><img className="mx-3" src="../linkedin.png" /></a> 
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contact;