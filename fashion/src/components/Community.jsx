import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Community.css';

const CommunitySection = () => {
  return (
    <section className="community">
      <div className="container">
        <h2>Join Our Community</h2>
        <p>Stay up-to-date on the latest fashion trends and news by following us on social media:</p>
        <ul className="community__social-media">
          <li>
            <Link to='/'>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaPinterest />
            </Link>
          </li>
        </ul>
        <div className="community__cta">
          <p>Join our newsletter:</p>
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
