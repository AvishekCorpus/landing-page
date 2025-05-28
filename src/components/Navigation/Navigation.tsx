import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "./data/menuItems";
import "./Navigation.css";
import type { MenuItem } from "./types/navigation";

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setAnimating] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([]);
  const [menuData, setMenuData] = useState<MenuItem[]>(menuItems);

  const navigate = useNavigate();

  useEffect(() => {
    if (menuData.length > 0) {
      const fetchMenuData = async () => {
        try {
          const query = encodeURIComponent(`*[_type == "division"]{
            name,
              "route": "/division/" + name
          } | order (name asc)`);
          const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
          const res = await fetch(url);

          if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
          }

          const data = await res.json();

          if (!data?.result) {
            throw new Error("No data found for the specified division.");
          }

          setMenuData([
            {
              name: "Brand Portfolio",
              route: "/division",
              submenu: [...data.result],
            },
            ...menuData,
          ]);
        } catch (err) {
          console.log("An unexpected error occurred.", err);
        }
      };

      fetchMenuData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleMenuClick = (menuData: MenuItem) => {
    if (menuData.submenu) {
      setActiveDropdown(
        activeDropdown === menuData.name ? null : menuData.name
      );
      // Toggle the expanded state for mobile
      setExpandedMobileMenus((prev) =>
        prev.includes(menuData.name)
          ? prev.filter((name) => name !== menuData.name)
          : [...prev, menuData.name]
      );
    } else {
      setSelectedMenuItem(menuData.name);
      setActiveDropdown(null);
      navigate(menuData.route);
      if (isMenuOpen) toggleMenu();
    }
  };

  const handleSubmenuClick = (submenuItem: MenuItem) => {
    if (submenuItem.submenu) {
      // Toggle nested submenu
      setExpandedMobileMenus((prev) =>
        prev.includes(submenuItem.name)
          ? prev.filter((name) => name !== submenuItem.name)
          : [...prev, submenuItem.name]
      );
    } else {
      setSelectedMenuItem(submenuItem.name);
      navigate(submenuItem.route);
      if (isMenuOpen) toggleMenu();
    }
    setActiveDropdown(null);
  };
  // onClick={() => handleMenuClick(item)}
  return (
    <nav className="navigation">
      <div className="desktop-navbar">
        <img
          className="logo"
          onClick={() => {
            navigate("/");
            setActiveDropdown(null);
          }}
          src="/logo-wide.png"
          alt="Corpus Life Science"
        />

        <ul className="nav-links">
          {menuData.map((item) => (
            <li
              key={item.name}
              className={`nav-item ${
                selectedMenuItem === item.name ? "selected" : ""
              } ${item.submenu ? "has-dropdown" : ""} ${
                activeDropdown === item.name ? "active" : ""
              }`}
              onClick={() => {
                setSelectedMenuItem(item.name);
                setActiveDropdown(null);
                navigate(item.route);
                if (isMenuOpen) toggleMenu();
              }}
              onMouseEnter={() => {
                if (item.submenu) setActiveDropdown(item.name);
              }}
              onMouseLeave={() => {
                if (item.submenu) setActiveDropdown(null);
              }}
            >
              {item.name}
              {item.submenu && (
                <div
                  className={`dropdown-menu ${
                    activeDropdown === item.name ? "show" : ""
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <div
                      key={subItem.name}
                      className={`dropdown-item ${
                        selectedMenuItem === subItem.name
                          ? "selected subItem"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubmenuClick(subItem);
                      }}
                    >
                      {subItem.name}
                      {subItem.submenu && (
                        <div className="nested-dropdown-menu">
                          {subItem.submenu.map((nestedItem) => (
                            <div
                              key={nestedItem.name}
                              className={`dropdown-item nested-item ${
                                selectedMenuItem === nestedItem.name
                                  ? "selected sub-sub-item"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubmenuClick(nestedItem);
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
        {/* <div className="logo">Company Logo</div> */}
        <img
          className="logo"
          onClick={() => {
            navigate("/");
            setActiveDropdown(null);
          }}
          src="/logo-wide.png"
          alt="Corpus Life Science"
        />
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        {isMenuOpen && (
          <div className={`mobile-menu ${isAnimating ? "hide" : ""}`}>
            <ul>
              {menuData.map((item: MenuItem) => (
                <li
                  key={item.name}
                  className={`${
                    selectedMenuItem === item.name ? "selected" : ""
                  }`}
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
                      {item.submenu.map((subItem: MenuItem) => (
                        <div
                          key={subItem.name}
                          className={`submenu-item ${
                            selectedMenuItem === subItem.name ? "selected" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubmenuClick(subItem);
                          }}
                        >
                          <div className="mobile-menu-item">
                            <span>{subItem.name}</span>
                            {subItem.submenu && (
                              <span className="mobile-expand-icon">
                                {expandedMobileMenus.includes(subItem.name)
                                  ? "−"
                                  : "+"}
                              </span>
                            )}
                          </div>
                          {subItem.submenu &&
                            expandedMobileMenus.includes(subItem.name) && (
                              <div className="mobile-nested-submenu">
                                {subItem.submenu.map((nestedItem: MenuItem) => (
                                  <div
                                    key={nestedItem.name}
                                    className={`submenu-item ${
                                      selectedMenuItem === nestedItem.name
                                        ? "selected"
                                        : ""
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSubmenuClick(nestedItem);
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
