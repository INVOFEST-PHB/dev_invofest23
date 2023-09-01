import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/invofest.png";
import "../assets/css/navbar.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavDropdown from "react-bootstrap/NavDropdown";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Auth, logout } from "../config/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

// import './app.css';

const Navbars = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLink, setActiveLink] = useState(
    "dashboard_user",
    "home",
    "workshop",
    "seminar"
  );
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    // Get the authentication instance
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleLogout = async () => {
    // Perform logout actions
    await logout();
    localStorage.removeItem("loggedIn");
    navigate("/");
    setIsLoggedIn(false);
    // ... Any additional logout actions ...
  };

  return (
    <div>
      <Navbar expand="md" className={scrolled ? "scrolled " : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto flex align-items-center">
              {isLoggedIn && (
                <Nav.Link
                  href="/profile"
                  className={
                    activeLink === "profile"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("profile")}
                >
                  Profile
                </Nav.Link>
              )}
              <Nav.Link 
                href="/home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link >
              <NavDropdown className="ms-auto "
                  title={ <span className="text-white ">Event</span>} 
                  id="basic-dropdown"
                  >
                <NavDropdown.Item href="/Workshop">Workshop</NavDropdown.Item>
                <NavDropdown.Item href="/Seminar">
                  Seminar
                </NavDropdown.Item>
                <NavDropdown.Item href="/Competition">
                  Competition
                </NavDropdown.Item>
              </NavDropdown>
              </Nav.Link>

              <Nav.Link
                href="/about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              {/* <Nav.Link href="faq" className={activeLink === 'faq' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faq')}>FAQ</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              {isLoggedIn ? (
                <button className="vvd" onClick={handleLogout}>
                  <span>Logout</span>
                </button>
              ) : (
                <HashLink to="/login">
                  <button className="vvd">
                    <span>Sign In</span>
                  </button>
                </HashLink>
              )}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbars;
