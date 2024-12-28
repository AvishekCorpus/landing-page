import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-intro">
          <h2>Connect with us for<br /> everything business</h2>
          <p>
          Stay up-to-date with the latest news, products, and also promotions<br /> by following us on social media or subscribing to our newsletter.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              Fb
            </a>
            <a href="#" aria-label="LinkedIn">
              In
            </a>
            <a href="#" aria-label="Twitter">
              Tw
            </a>
            <a href="#" aria-label="LinkedIn">
              Ln
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#">Item One</a></li>
              <li><a href="#">Item Two</a></li>
              <li><a href="#">Item Three</a></li>
              <li><a href="#">Item Four</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Item One</a></li>
              <li><a href="#">Item Two</a></li>
              <li><a href="#">Item Three</a></li>
              <li><a href="#">Item Four</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li><a href="#">Item One</a></li>
              <li><a href="#">Item Two</a></li>
              <li><a href="#">Item Three</a></li>
              <li><a href="#">Item Four</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
