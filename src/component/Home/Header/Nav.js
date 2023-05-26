import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import Hidden from "@material-ui/core/Hidden";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home"
  },
  {
    id: 2,
    title: "About us",
    link: "/about",
  },
  {
    id: 4,
    title: "Servizi",
    link: "/services",
  },
  {
    id: 6,
    title: "Progetti",
    link: "/projects",
  },
  {
    id: 8,
    title: "Contattaci",
    link: "/contact",
  },
  {
    id: 9,
    title: 'Accedi',
    link: '/login'
  }
  
];

const Nav = () => {
  const [menuShow, setMenuShow] = useState(false);



  const mobileMenuHandler = () => {
    setMenuShow((prevState) => !prevState);
  };


  return (
    <div>
      <div className="mobile-menu-item" onClick={mobileMenuHandler}>
        {menuShow ? <CloseIcon className="cursor-pointer" /> : <MenuIcon className="cursor-pointer" />}
        <Hidden lgUp>
          <Collapse in={menuShow} timeout="auto" unmountOnExit>
            <nav>
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
          className=" menu-two menu-style-one"

        >
          <ul className="menu-items">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Progetti</Link>
            </li>
            <li>
              <Link to="/contact">Contattaci</Link>
            </li>
            <li>
              <Link to="/login">Accedi</Link>
            </li>
            
          </ul>
        </nav>
      </Hidden>
    </div>
  );
};

export default Nav;
