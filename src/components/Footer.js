import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../images/logo-white.png" alt="Logo" />
        </div>
        <div className="footer-divisions">
          <div className="division">
            <h4>Our Markets</h4>
            <ul>
              <span>Toronto</span>
              <span>Ottawa</span>
              <span>Vancouver</span>
              <span>Victoria</span>
              <span>Kelowna</span>
              <span>Peterborough</span>
              <span>Etobicoke</span>
              <span>Winnipeg</span>
            </ul>
          </div>
          <div className="division">
            <h4>Resources</h4>
            <ul>
              <span>Media inquiries</span>
              <span>Search homes</span>
              <span>Blog</span>
              <span>Careers</span>
              <span>About us</span>
              <span>FAQ</span>
              <span>Agents</span>
            </ul>
          </div>
          <div className="division">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="facebook.com">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
              <a href="instagram.com">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
              <a href="tiktok.com">
                <FontAwesomeIcon icon={faTiktok} /> Tiktok
              </a>
              <a href="twitter.com">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-images">
        <img src="../images/city711.png" alt="Image 1" />
        <img src="../images/city712.png" alt="Image 2" />
      </div>
    </footer>
  );
};

export default Footer;
