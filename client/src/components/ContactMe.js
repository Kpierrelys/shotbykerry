import React from 'react';
import { useState } from 'react';

const ContactMe = ({ focusContact }) => {

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
      });

    const handleStateChange = (e) => {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }

      const submitEmail = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            if (resData.status === "success") {
              alert("Message Sent");
            } else if (resData.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
          });
      };
     

    return (
        <div ref={focusContact} className="container">
            <div className="sub-container">
                <h3>Contact Me</h3>
                <p>Fill out the form and fill me in with the details of your vision!</p>
                <form autoComplete="off" onSubmit={submitEmail} action="/action_page.php">
                    <label>Full Name</label>
                    <input onChange={handleStateChange} name="name" type="text" id="fname" autoComplete="off" value={mailerState.name} placeholder="Your name.." />

                    <label>Email</label>
                    <input onChange={handleStateChange} name="email" type="text" id="lname" autoComplete="off" value={mailerState.email} placeholder="Your email.." required/>

                    <label>Message</label>
                    <textarea onChange={handleStateChange} name="message" type="text" autoComplete="off" value={mailerState.message} placeholder="Write something.." required></textarea>

                    <button type="submit" className="send-button">Send Message</button>
                </form>
            </div>
        </div>

    )
};

export default ContactMe;
