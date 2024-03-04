import React from 'react';
import Navbar from "../Navbar";
import ContactCompOne from '../../components/contactuscomp/ContactCompOne/ContactCompOne';
import FAQ from "../../components/faq/FAQ";
function ContactUsPage() {
  return (
    <div>
      <Navbar/>
      <ContactCompOne/>
      <FAQ/>
    </div>
    
  );
}

export default ContactUsPage;
