import React, { useState } from "react";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setAnimating] = useState(false); // For smooth closing animation
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();

  const menus: string[] = [
    "About Us",
    "Division",
    "Events",
    "Life at Corpus",
    "Contact",
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

  const handleMenuClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
    toggleMenu(); // Close the menu after selection
  };

  return (
    <nav className="navigation">
      <div className="desktop-navbar">
        <div className="logo">Company Logo</div>
        <ul className="nav-links">
          {menus.map((item) => (
            <li
              key={item}
              onClick={() => handleMenuClick(item)}
              className={selectedMenuItem === item ? "selected" : ""}
            >
              {item}
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
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={selectedMenuItem === item ? "selected" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="contact-info">
              <p>info@alniche.com</p>
              <p>1800-572-2011</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
