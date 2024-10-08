import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form1Page from '../pages/forms/Form1Page';
import PrimaryApplicantPage from '../pages/forms/PrimaryApplicantPage';
import Form2Page from '../pages/forms/Form2Page';
import Form3Page from '../pages/forms/Form3Page';
import Form4Page from '../pages/forms/Form4Page';
import Form5Page from '../pages/forms/Form5Page';
import Form6Page from '../pages/forms/Form6Page';
import Form7Page from '../pages/forms/Form7Page';
import Form8Page from '../pages/forms/Form8Page';
import ArticleContent from '../pages/Article';
import LandingPage from '../pages/home/LandingPage';
import ContactUsPage from '../pages/home/ContactUsPage';
import Blog from '../pages/Blog';
import AgentsPage from '../pages/home/AgentsPage';
import AboutUs from '../pages/home/AboutUs';
import HowItWorks from '../pages/home/HowItWorks';
import UserSettingsPage from '../pages/UserSettingsPage';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import PropHome from '../components/proplist/PropHome';
import Property from '../components/proplist/Property';
import PropertyList from '../pages/PropertyList';
import Notification from '../components/notification/Notification'
import LoginTrue from '../components/signin/LoginTrue';
import ProtectedRoute from '../utils/ProtectedRoute';


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
        <Route path="/usersettings" element={< UserSettingsPage/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<LoginTrue />} />
        <Route path="/proplist" element={<PropertyList />} />
        <Route path="/properties/:id" element={<Property/>} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/form1" element={<ProtectedRoute><Form1Page /></ProtectedRoute>} />
        <Route path="/PrimaryApplicant" element={<ProtectedRoute><PrimaryApplicantPage /></ProtectedRoute>} />
        <Route path="/form2" element={<ProtectedRoute><Form2Page /></ProtectedRoute>} />
        <Route path="/form3" element={<ProtectedRoute><Form3Page /></ProtectedRoute>} />
        <Route path="/form4" element={<ProtectedRoute><Form4Page /></ProtectedRoute>} />
        <Route path="/form5" element={<ProtectedRoute><Form5Page /></ProtectedRoute>} />
        <Route path="/form6" element={<ProtectedRoute><Form6Page /></ProtectedRoute>} />
        <Route path="/form7" element={<ProtectedRoute><Form7Page /></ProtectedRoute>} />
        {/* <Route path="/form8" element={<ProtectedRoute><Form8Page /></ProtectedRoute>} />  */}
        <Route path="/form8" element={<Form8Page />} /> 
        
      </Routes>
    </Router>
  )
}
