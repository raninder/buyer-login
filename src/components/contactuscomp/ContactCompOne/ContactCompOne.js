import React from 'react'
import './ContactCompOne.css'
import ContactImage from "../../../assets/images/contact.jpg";
export default function ContactCompOne() {
  return (
    <div className='contact-first-main'>
      <img src={ContactImage} className='contact-first-image'/>
       <div className='contact-first-head'>
          <span className='contact-first-header'>Let's get in touch!</span>
          <span className='contact-first-subheader'>Thinking about buying a new home, selling, or both?<br/>We're available seven days a week, 8am-8pm EST to help get you started.</span>
       </div>
    </div>
  )
}
