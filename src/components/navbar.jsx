


import React, { Component } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "home",
      menuOpen: false,
    };
  }

  setActiveLink = (link) => {
    this.setState({ activeLink: link });
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  render() {
    const { activeLink, menuOpen } = this.state;

    return (
      <nav className="navbar items-center justify-center">
        <div className="brand">
          <h1 className="menu-icon z-50 absolute top-0 left-0" onClick={this.toggleMenu}>
            ...
          </h1>
        </div>
        <div className="">
        <ul className={`nav-links ${menuOpen ? "open" : ""} items-center justify-center`}>
          <li >
            <Link
              to="home"
              smooth={true}
              duration={300}
              className={activeLink === "home" ? "active" : ""}
              onClick={() => this.setActiveLink("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={300}
              className={activeLink === "services" ? "active" : ""}
              onClick={() => this.setActiveLink("services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={300}
              className={activeLink === "resume" ? "active" : ""}
              onClick={() => this.setActiveLink("resume")}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={300}
              className={activeLink === "work" ? "active" : ""}
              onClick={() => this.setActiveLink("work")}
            >
              Work
            </Link>
          </li>
          <li >
            <Link
              to="contactme"
              smooth={false}
              duration={300}
              className={`contact-button   ${
                activeLink === "contactme" ? "active" : ""
              }`}
              onClick={() => this.setActiveLink("contactme")}
            >
              <span>Contact Me</span>
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
