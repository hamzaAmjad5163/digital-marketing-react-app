import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/contact.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sma9wn1', 'template_ylgow9b', form.current, 'QPL0kfXanZPdWUP9u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h1 className='contact__h1'>Request a Consultation</h1>
      <div className='container contact__container'>
        <div className='contact__options'>
          
          <article className='contact__option'>
          <i class="ri-mail-line"></i>
            <h4 className='contact__h4'>Email</h4>
            <h5 className='contact__h5'>hamzakhan5163@gmail.com</h5>
            <a href='mailto:hamzakhan5163@gmail.com' target='_blank' className='contact__anchor'>Send a message</a>
          </article>

          <article className='contact__option'>
          <i class="ri-whatsapp-line"></i>
            <h4 className='contact__h4'>Whatsapp</h4>
            <h5 className='contact__h5'>+92 3187533356</h5>
            <a href='https://api.whatsapp.com/send?phone=+923187533356' target='_blank' className='contact__anchor'>Send a message</a>
          </article>


        </div>
        <form ref={form} onSubmit={sendEmail} className='contact__us'>
        
       
        
        <input className='contact__input-box' type="text" name="username" placeholder='Enter your name' required/>
        
        <input className='contact__input-box' type="email" name="email" placeholder='Enter your email' required/>
        
        <textarea className='message__box' rows='7' type='text' placeholder='Your Message Here..' name="message" required/>
        
        <button type="submit" value="Send" className='send__btn'>Send</button>
        
    </form>
      </div>
    </section>
      
  );
};
export default Contact;