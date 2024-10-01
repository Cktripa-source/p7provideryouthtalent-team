import React from 'react';
import { Link } from 'react-router-dom';
import '../footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 P7YT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
