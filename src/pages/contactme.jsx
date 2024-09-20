import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import '../style/contact.css';
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";


function Contact() {
  const form = useRef();
  const [formdata,setFormdata]=useState({
    user_name:'',
    user_email:'',
    subject:'',
    phone_number:'',
    message:''
  });  

  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    });
    console.log(formdata);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    
    if(formdata.user_name === '' || formdata.user_email === '' || formdata.subject === '' || formdata.phone_number === '' || formdata.message === ''){
      toast.error('Please fill all the fields');
      return;
    }

    emailjs
      .sendForm('service_dbgi3xa', 'template_rowivfq', form.current, {
        publicKey: 'WKPKSy43zkRoGBuKU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully');
          setFormdata({
            user_name:'',
            user_email:'',
            subject:'',
            phone_number:'',
            message:''
          });
          form.current.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message');
        },
      );
  };

  useEffect(() => {
    console.log('Contact Page',formdata);
  },[formdata]);



  return (
    <div className="contact-container ">
      <div className="contact-form  rounded-lg">
        <h2 className='contactTitle' >Let's work together</h2>
        <p className='contactme'>
          Whether you need a website, mobile app, or a striking design, I'm
          ready to turn your ideas into reality. Let's collaborate and create
          something exceptional together. I look forward to connecting with
          you!"
        </p>
       <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <input className='username rounded-lg' type="text" name="user_name" placeholder="Your Name" onChange={handleChange} />
            <input className='useremail rounded-lg' type="email" name="user_email" placeholder="Your Email" onChange={handleChange} />
          </div>
          <div className="form-row">
            <input className='subject rounded-lg' type="text" name="subject" placeholder="Subject" onChange={handleChange} />
            <input className='phonenumber rounded-lg' type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
          </div>
          <textarea
            name="message"
            placeholder="Type your message here."
            onChange={handleChange}
            className='message rounded-lg'
          ></textarea>
          <button name="submit" class="pageclip-form__submit" className='send rounded-lg ' type="submit">
            Send message
          </button>
        </form>
      </div>
      <div className="contact-info">
        <div>
          <div className='bg-[#00ff00] p-[10px] rounded-[100%]'>
          <FaPhone className='w-5 h-5'  />
          </div>
          <span>(+94) 75 672 20966</span>
        </div>
        <div>
        <div className='bg-[#00ff00] p-[10px] rounded-[100%]'>
          <IoIosMail className='w-5 h-5'  />
          </div>
          <span>kavindrikapiyushan@gmail.com</span>
        </div>
        <div>
        <div className='bg-[#00ff00] p-[10px] rounded-[100%]'>
          <IoLocation className='w-5 h-5'  />
          </div>
          <span>
            No 82/32, Kheels Housing Scheme, Udugampola, Gampaha, Sri Lanka
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
