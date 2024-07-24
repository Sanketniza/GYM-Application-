import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";
import '../App.css';

function Contact() {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [loader , setLoader ] = useState(false);

  const handleSubmit = async (e) => {

     e.preventDefault();
     setLoader(true);

     try{
        
      const { data } = await axios.post(
        "http://localhost:4000/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(data);

      setName('');
      setEmail('');
      setMessage('');
      toast.success(data.Contact);
      setLoader(false);
     }
     catch(err){
       console.log(err);
     }
  }

  return (
    
    <>
        
        <div className="contact-from">
          <form action="">
            <h1>Contact us</h1>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder='Enter your name'
              value={name} 
              onChange={(e) => setName(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Enter your email'
              value={email} 
              onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <input type="text" placeholder="Enter your message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}/>
            </div>

            <div>
             <button
               type="submit"
               disabled={loader}>
               {loader && <ClipLoader size={20} color="white" />}
               Send Message
             </button>
            </div>

          </form>
        </div>

    </>
  )
}

export default Contact