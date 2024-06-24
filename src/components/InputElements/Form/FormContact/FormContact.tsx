import { useState,useEffect } from 'react';
import './FormContact.scss'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function FormContact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() =>{
        const checkData = name.length>0 && email.length>0 && subject.length>0
        if(checkData){
            setFormValid(true)
        }
    },[name,email,subject])

    const handleSubmit = (e:any) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_zbvi2o7';
        const templateId = 'template_dmodu0k';
        const publicKey = '2ONWFIiG3A2T186Ya';

        // Create a new object that contains dynamic template params
        const templateParams = {
        user_name: name,
        user_email: email,
        subject: subject,
        message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!', response);
            setName('');
            setEmail('');
            setMessage('');
            setSubject('');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
  }

  return (

    <div className='formContact-container'>
        
        <form onSubmit={handleSubmit}>

                <input type="text" name="user_name" placeholder="Name" className="formContact-input"
                value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="name" className="formContact-label">Name</label>

                <input type="email" name="user_email" placeholder="Email" className="formContact-input"
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="email" className="formContact-label">Email</label>

                <input type="text" name="subject" placeholder="Subject" className="formContact-input"
                value={subject} onChange={(e) => setSubject(e.target.value)}/>
                <label htmlFor="subject" className="formContact-label">Subject</label>

                <textarea name="message" className='formContact-textarea'
                value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <label htmlFor="subMessage" className="formContact-label textarea">Message</label>
       
                <div className="btn-form">
                    <button type='submit' className='btn-submit-form'
                     onClick={() => Swal.fire({
                        title: 'success',
                        text: 'This message has been sent to my email.',
                        confirmButtonText: 'Okay',
                      })}
                      disabled={!formValid}>
                    Send
                    </button>
                </div>
        </form>


    </div>
  )
}

export default FormContact