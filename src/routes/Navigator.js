import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form1Page from '../pages/forms/Form1Page';
import Form2Page from '../pages/forms/Form2Page';
import Form3Page from '../pages/forms/Form3Page';
import Form4Page from '../pages/forms/Form4Page';
import Form5Page from '../pages/forms/Form5Page';
import Form6Page from '../pages/forms/Form6Page';
import Form7Page from '../pages/forms/Form7Page';
import Form8Page from '../pages/forms/Form8Page';
import ArticleContent from '../pages/Article';
import LandingPage from '../pages/LandingPage';
import ContactUsPage from '../pages/ContactUsPage';
import Blog from '../pages/Blog';
import AgentsPage from '../pages/AgentsPage';
import AboutUs from '../pages/AboutUs';
import HowItWorks from '../pages/HowItWorks';
import Signin from '../pages/Signin';
import PropHome from '../components/proplist/PropHome';
import Property from '../components/proplist/Property';
import PropertyList from '../pages/PropertyList';


export default function Navigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/Article" element={<ArticleContent />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/proplist" element={<PropertyList />} />
        <Route path="/properties/:id" element={<Property/>} />
        <Route path="/form1" element={<Form1Page />} />
        <Route path="/form2" element={<Form2Page />} />
        <Route path="/form3" element={<Form3Page />} />
        <Route path="/form4" element={<Form4Page />} />
        <Route path="/form5" element={<Form5Page />} />
        <Route path="/form6" element={<Form6Page />} />
        <Route path="/form7" element={<Form7Page />} />
        <Route path="/form8" element={<Form8Page />} />
      </Routes>
    </Router>
  )
}
