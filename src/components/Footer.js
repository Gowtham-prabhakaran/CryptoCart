import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaPhone /> +91 123-456-7890 
            </li>
            <li>
              <FaEnvelope /> support@example.com
            </li>
            <li>
              <FaMapMarkerAlt /> Chennai,India
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Links</h3>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
