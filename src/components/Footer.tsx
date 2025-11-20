import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Nike Air Zoom Maxfly</h2>
          <p>Performance footwear for 100–400m events.</p>
        </div>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
          <a href="#">Returns</a>
        </div>

        <div className="footer-newsletter">
          <label htmlFor="email">Subscribe for updates</label>
          <div className="newsletter-box">
            <input 
              type="email" 
              id="email"
              placeholder="Your email" 
            />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Nike Air Zoom Maxfly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
