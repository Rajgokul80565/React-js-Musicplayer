import React from 'react';
import background from '../images/background1.jpg';
import '../css/contact.css';
import { BiMailSend} from 'react-icons/bi';
import { GoHome} from 'react-icons/go';
import { GiTimeBomb} from 'react-icons/gi';
function Contact() {
    return (
        <div id='contact'>
        <div className='contact-input box1'>
        <h1>Contact</h1>
        <p>Feel free to contact me any time. I will get <br/> back to you as soon as I can!</p>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Message"/>
        <button>SEND</button>
        </div>
        <div className="contact-info box2">
           

           
            <h2>Info</h2>
            <p> <BiMailSend className="icons" /> rajgokul80565@gmail.com</p>
            
            <p> <GoHome className="icons" /> Amarjothi nagar, Sulur, Coimbatore - 641407</p>
            <p> <GiTimeBomb className="icons" />09.00 am - 08.30 pm</p>

            
        </div>
           
        </div>
    )
}

export default Contact