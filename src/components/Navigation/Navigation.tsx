import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setAnimating] = useState(false); // For smooth closing animation
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();
  const navigate = useNavigate();

  const menus: { name: string; route: string }[] = [
    { name: "About Us", route: "/about-us" },
    { name: "Division", route: "/division" },
    { name: "Events", route: "/events" },
    { name: "Life at Corpus", route: "/life-at-corpus" },
    { name: "Contact", route: "/contact" },
  ];

  const toggleMenu = () => {
    if (isMenuOpen) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setMenuOpen(false);
      }, 300); // Match this duration to your CSS animation
    } else {
      setMenuOpen(true);
    }
  };

  const handleMenuClick = (menuItem: { name: string; route: string }) => {
    setSelectedMenuItem(menuItem.name);
    toggleMenu(); // Close the menu after selection
    navigate(menuItem.route); // Navigate to the route 
  };

  return (
    <nav className="navigation">
      <div className="desktop-navbar">
        <div className="logo">Company Logo</div>
        <ul className="nav-links">
          {menus.map((item) => (
            <li
              key={item.name}
              onClick={() => handleMenuClick(item)}
              className={selectedMenuItem === item.name ? "selected" : ""}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mobile-navbar">
        <div className="logo">Company Logo</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        {isMenuOpen && (
          <div className={`mobile-menu ${isAnimating ? "hide" : ""}`}>
            <ul>
              {menus.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleMenuClick(item)}
                  className={selectedMenuItem === item.name ? "selected" : ""}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="contact-info">
              <p>info@corpuslifescience.com</p>
              <p>
                +91 8420112846 | +91 8902036365 <br />{" "}
                <span style={{ marginTop: "0.5rem" }}>
                  +91 33 2694 4604 / 4605
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
