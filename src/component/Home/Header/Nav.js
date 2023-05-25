import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import Hidden from "@material-ui/core/Hidden";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
  {
    id: 6,
    title: "All Project",
    link: "/portfolio",
  },
  {
    id: 8,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 9,
    title: "Pages",
    link: "/#",
    submenu: [
      {
        id: 92,
        title: "Single Blog",
        link: "/singlepost",
      },
      {
        id: 932,
        title: "Services Details",
        link: "/servicesdetails",
      },
      {
        id: 95,
        title: "Single Portfolio",
        link: "/singleportfolio",
      },
    ],
  },
];

const Nav = () => {
  const [menuShow, setMenuShow] = useState(false);

  

  const mobileMenuHandler = () => {
    setMenuShow((prevState) => !prevState);
  };

  const NavURL = window.location.pathname;

  return (
    <div>
      <div className="mobile-menu-item">
        <i
          id="mobile_menu_icon"
          className="fas fa-align-justify"
          onClick={mobileMenuHandler}
        ></i>
        <Hidden lgUp>
          <Collapse in={menuShow} timeout="auto" unmountOnExit>
            <nav className={NavURL ? "" : ""}>
              <ul className="menu-items">
                {menus.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Collapse>
        </Hidden>
      </div>
      <Hidden mdDown>
        <nav
          id="responsive-menu"
          className={NavURL ? "menu-style-one menu-two" : "menu-style-one"}
        >
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">All Project</Link>
            </li>
            <li>
              <Link to="/blog">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="javascript:">Pages</a>
              <ul className="submenu">
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/singlepost">Single Blog</Link>
                </li>
                <li>
                  <Link to="/servicesdetails">Services Details</Link>
                </li>
                <li>
                  <Link to="/singleproduct">Single Product</Link>
                </li>
                <li>
                  <Link to="/singleportfolio">Single Portfolio</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Hidden>
    </div>
  );
};

export default Nav;
