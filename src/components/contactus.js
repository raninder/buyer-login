import React, {useState} from 'react';
import { Container } from '@mui/material';
import '../css/contactus.css';


function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null); // State to track which question is open

  const faqData = [
    {
      question: "How do I earn money using BuyerFolio?",
      answer: "You can earn money using Landa by..."
    },
    {
      question: "How do dividends work?",
      answer: "Dividends work by..."
    },
    {
      question: "Can I sell my shares of properties?",
      answer: "Yes, you can sell your shares..."
    },
    {
      question: "What is Landa's Lending product?",
      answer: "Landa's Lending product is..."
    },
    {
      question: "Is Landa secure?",
      answer: "Landa takes security seriously..."
    },
  ];

  const handleQuestionClick = (index) => {
    if (index === openIndex) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => handleQuestionClick(index)}
          >
            
            {item.question}
            <span className={`down-arrow ${openIndex === index ? "down" : ""}`}>
              
            </span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
function DisplayComponent() {
  return (
    <div className='displayItem'>
      <div className='jobImage'>
        <img
          src="images/getintouch.jpg"
          alt="Image to be displayed as a background"
        />
      </div>
    </div>
  );
}
function HeaderText() {
  return (
    <div>
      <div className="header-text">
        <p>Let’s get in touch!</p>
      </div>
      <div className='text-normal'>
        <p>Thinking about buying a new home, selling, or both?</p>
        <p>
           We’re available<b> seven days a week, 8am-8pm PST </b>to help get you started.
        </p>
      </div>
      <div>
      <a href="https://contacts.google.com/person/c7419797101982860630">
        <img class="button1"
            src="images/Phone Button.jpg"
            alt="contact us button"/>
            <p class="button-text">1(800)BUYFOLIO</p>
      </a>
      <a href="https://contacts.google.com/person/c7419797101982860630">
        <img class="button2"
            src="images/Email Icon.jpg"
            alt="email button"/>
            <p class="button-mail">help@buyerfolio.ai</p>
      </a>
      <a href="https://contacts.google.com/person/c7419797101982860630">
        <img class="button3"
            src="images/Chat Icon.jpg"
            alt="contact us button"/>
            <p class="button-chat">Chat with Us</p>
      </a>
      </div>
      <div className='button-call'>
        <a href="https://contacts.google.com/person/c7419797101982860630">Book a call today</a>
        
      </div>
      <div className='button-linkedin'>
        <a href="https://contacts.google.com/person/c7419797101982860630">Connect on LinkedIn</a>
        
      </div>
    </div>
  );
}
function Footer({ currentPage, setCurrentPage, nextPage }) {
  return (
    <Container>
      <DisplayComponent/>
      <HeaderText/>
      <FAQComponent/>
      
        <div className="faq-text">
          Frequently Asked Questions
        </div>
        <div className="faq-text-01">
          Get Connected
        </div>
        <div className='button'>
            <p>Connect on Social</p>
        </div>
        <div className='button-download'>
            <p>Download the app</p>
        </div>
        {/* {
        <div className='downloadbutton'>
          <img src="images/Download Button.jpg"
              alt="Social media button"/>
              <a href="https://contacts.google.com/person/c7419797101982860630"></a>

        </div> */} 
        <div>
          <div>
            <a href="https://www.facebook.com/Meta">
              <img class="button-fb"
                  src="images/facebook.jpg"
                  alt="facebook button"/>
            </a>
            <a href="https://www.instagram.com/">
              <img class="button-int"
                  src="images/instagram.jpg"
                  alt="instagram button"/>
            </a>
            <a href="https://twitter.com/">
              <img class="button-tweet"
                  src="images/twitter.jpg"
                  alt="twitter button"/>
            </a>
        </div>
        <div>
            <a href="https://play.google.com/store/games?hl=en&gl=US">
              <img class="button-playstore"
                  src="images/playstore.jpg"
                  alt="facebook button"/>
            </a>
            <a href="https://www.apple.com/ca/store">
              <img class="button-applestore"
                  src="images/apple.jpg"
                  alt="instagram button"/>
            </a>
      </div>
    </div>
     
      
    </Container>
  );
}

export default Footer;
