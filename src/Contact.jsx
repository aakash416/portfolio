import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <>
            <h1 className='contact_me'>Contact Me</h1>
            <div className='contact'>
                <div className="left">
                    <div className="leftdata">
                        <p>Let's Work Together</p>
                        <div className="contact_data">
                            <i class="fa-regular fa-paper-plane"></i>
                            <p>aakashraj416@gmail.com</p>
                        </div>
                        <div className="contact_data">
                            <i class="fa-solid fa-phone-flip"></i>
                            <p>+91 XXXXXXXX96</p></div>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/aakashraj416/"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://twitter.com/aakashraj416"> <i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/aakash_raj_virus/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/Aakashraj415/"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form action="">
                        <input type="text" name="name" id="name" placeholder='Your Name' required />
                        <input type="email" name="email" id="email" placeholder='Enter Your Email' required />
                        <input type="text" name="subject" id="subject" placeholder='Enter Your Subject' required />
                        <textarea name='message' id='message' placeholder='Enter Your Message' rows="4" cols="50" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact