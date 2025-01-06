import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { MenuItem } from "./types/navigation";
import { menuItems } from "./data/menuItems";

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setAnimating] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (isMenuOpen) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setMenuOpen(false);
        setExpandedMobileMenus([]); // Reset expanded menus when closing
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const handleMenuClick = (menuItem: MenuItem) => {
    if (menuItem.submenu) {
      setActiveDropdown(activeDropdown === menuItem.name ? null : menuItem.name);
      // Toggle the expanded state for mobile
      setExpandedMobileMenus(prev => 
        prev.includes(menuItem.name) 
          ? prev.filter(name => name !== menuItem.name)
          : [...prev, menuItem.name]
      );
    } else {
      setSelectedMenuItem(menuItem.name);
      setActiveDropdown(null);
      navigate(menuItem.route);
      if (isMenuOpen) toggleMenu();
    }
  };

  const handleSubmenuClick = (menuItem: MenuItem, submenuItem: MenuItem) => {
    if (submenuItem.submenu) {
      // Toggle nested submenu
      setExpandedMobileMenus(prev => 
        prev.includes(submenuItem.name) 
          ? prev.filter(name => name !== submenuItem.name)
          : [...prev, submenuItem.name]
      );
    } else {
      setSelectedMenuItem(submenuItem.name);
      navigate(submenuItem.route);
      if (isMenuOpen) toggleMenu();
    }
    setActiveDropdown(null);
  };

  return (
    <nav className="navigation">
      <div className="desktop-navbar">
        <div className="logo" onClick={() =>{navigate("/");setActiveDropdown(null)}}>Company Logo</div>
        <ul className="nav-links">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`nav-item ${selectedMenuItem === item.name ? "selected" : ""} ${
                item.submenu ? "has-dropdown" : ""
              } ${activeDropdown === item.name ? "active" : ""}`}
              onClick={() => handleMenuClick(item)}
            >
              {item.name}
              {item.submenu && (
                <div className={`dropdown-menu ${activeDropdown === item.name ? "show" : ""}`}>
                  {item.submenu.map((subItem) => (
                    <div
                      key={subItem.name}
                      className={`dropdown-item ${selectedMenuItem === subItem.name ? "selected" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubmenuClick(item, subItem);
                      }}
                    >
                      {subItem.name}
                      {subItem.submenu && (
                        <div className="nested-dropdown-menu">
                          {subItem.submenu.map((nestedItem) => (
                            <div
                              key={nestedItem.name}
                              className={`dropdown-item nested-item ${
                                selectedMenuItem === nestedItem.name ? "selected" : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubmenuClick(subItem, nestedItem);
                              }}
                            >
                              {nestedItem.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
              {menuItems.map((item : any) => (
                <li
                  key={item.name}
                  className={`${selectedMenuItem === item.name ? "selected" : ""}`}
                  onClick={() => handleMenuClick(item)}
                >
                  <div className="mobile-menu-item">
                    <span>{item.name}</span>
                    {item.submenu && (
                      <span className="mobile-expand-icon">
                        {expandedMobileMenus.includes(item.name) ? "−" : "+"}
                      </span>
                    )}
                  </div>
                  {item.submenu && expandedMobileMenus.includes(item.name) && (
                    <div className="mobile-submenu">
                      {item.submenu.map((subItem : any) => (
                        <div
                          key={subItem.name}
                          className={`submenu-item ${
                            selectedMenuItem === subItem.name ? "selected" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubmenuClick(item, subItem);
                          }}
                        >
                          <div className="mobile-menu-item">
                            <span>{subItem.name}</span>
                            {subItem.submenu && (
                              <span className="mobile-expand-icon">
                                {expandedMobileMenus.includes(subItem.name) ? "−" : "+"}
                              </span>
                            )}
                          </div>
                          {subItem.submenu && expandedMobileMenus.includes(subItem.name) && (
                            <div className="mobile-nested-submenu">
                              {subItem.submenu.map((nestedItem : any) => (
                                <div
                                  key={nestedItem.name}
                                  className={`submenu-item ${
                                    selectedMenuItem === nestedItem.name ? "selected" : ""
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubmenuClick(subItem, nestedItem);
                                  }}
                                >
                                  {nestedItem.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="contact-info">
              <p>info@corpuslifescience.com</p>
              <p>
                +91 8420112846 | +91 8902036365 <br />
                <span style={{ marginTop: "0.5rem" }}>+91 33 2694 4604 / 4605</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;