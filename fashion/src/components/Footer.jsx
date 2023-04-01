import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__links-section">
          <h3 className="footer__links-heading">Quick Links</h3>
          <ul className="footer__links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer__links-section">
          <h3 className="footer__links-heading">Categories</h3>
          <ul className="footer__links-list">
            <li><Link to="/">Men</Link></li>
            <li><Link to="/">Women</Link></li>
            <li><Link to="/">Kids</Link></li>
            <li><Link to="/">Accessories</Link></li>
          </ul>
        </div>
        <div className="footer__links-section">
          <h3 className="footer__links-heading">Support</h3>
          <ul className="footer__links-list">
            <li><Link to="/">FAQs</Link></li>
            <li><Link to="/">Shipping Information</Link></li>
            <li><Link to="/">Returns & Exchanges</Link></li>
            <li><Link to="/">Terms & Conditions</Link></li>
          </ul>
        </div>
        {/* <div className="footer__links-section">
          <h3 className="footer__links-heading">Connect With Us</h3>
          <ul className="footer__social-list">
            <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
          </ul>
        </div> */}
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Fashion Frenzy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
