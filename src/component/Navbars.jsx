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
import { Justify } from "react-bootstrap-icons";

// import './app.css';

const Navbars = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLink, setActiveLink] = useState(
    "dashboard_user",
    "home",
    "talkshow",
    "workshop",
    "seminar",
    "competititon"
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

  const fontSize = {
    fontSize: "17px",
    justifyContent: "center"
  }

  const borderDropdown = {
    border: "none",
    backgroundColor: "none",
    background: "none",
  }

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

          <Navbar.Collapse id="basic-navbar-nav text-white">
            <Nav
              // style={{ paddingLeft: "230px" }}
              className="align-items-center justify-content-center"
            >
              {isLoggedIn && (
                <Nav.Link
                  style={fontSize}
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
                style={fontSize}
                href="/"
                className="active navbar-link navbar-text text-white"
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              {/* <NavDropdown
                style={{
                  borderDropdown,
                }}
                className="active navbar-link navbar-text text-white"
                title={
                  <span className="text-white justify-content-center">
                    Event
                  </span>
                }
                id="basic-dropdown bg-red"
              >
                <div style={borderDropdown}>
                  <NavDropdown.Item className="text-white" href="/talkshow">
                    Talkshow
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="/Workshop">
                    Workshop
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-white" href="/Seminar">
                    Seminar
                  </NavDropdown.Item>
                </div>
              </NavDropdown> */}

              <Nav.Link
                style={fontSize}
                href="/talkshow"
                className={
                  activeLink === "talkshow"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                // className="active navbar-link navbar-text text-white"
                onClick={() => onUpdateActiveLink("talkshow")}
              >
                Talkshow
              </Nav.Link>

              <Nav.Link
                style={fontSize}
                href="/workshop"
                className={
                  activeLink === "workshop"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                // className="active navbar-link navbar-text text-white"
                onClick={() => onUpdateActiveLink("workshop")}
              >
                Workshop
              </Nav.Link>

              <Nav.Link
                style={fontSize}
                href="/seminar"
                className={
                  activeLink === "seminar"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                // className="active navbar-link navbar-text text-white"
                onClick={() => onUpdateActiveLink("seminar")}
              >
                Seminar
              </Nav.Link>

              <Nav.Link
                style={fontSize}
                href="/competition"
                className={
                  activeLink === "competition"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                // className="active navbar-link navbar-text text-white"
                onClick={() => onUpdateActiveLink("competition")}
              >
                Competition
              </Nav.Link>

              {/* <NavDropdown
                style={{
                  fontSize: "17px",
                  justifyContent: "center",
                  color: "white",
                }}
                className="active navbar-link navbar-text text-white"
                title={
                  <span className="text-white justify-content center">
                    Competition
                  </span>
                }
                id="basic-dropdown"
              >
                <NavDropdown.Item className="text-white" href="/Workshop">
                  UI/UX Desain
                </NavDropdown.Item>
                <NavDropdown.Item className="text-white" href="/Seminar">
                  Web Desain
                </NavDropdown.Item>
                <NavDropdown.Item className="text-white" href="/Competition">
                  Software Development
                </NavDropdown.Item>
              </NavDropdown> */}

              <Nav.Link
                style={fontSize}
                href="/about"
                // className={
                // activeLink === "about"
                //     ? "active navbar-link text-white"
                //     : "navbar-link text-white"
                // }
                className="active navbar-link navbar-text"
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              {/* <Nav.Link href="faq" className={activeLink === 'faq' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faq')}>FAQ</Nav.Link> */}
            </Nav>

            <div>
              <span className="navbar-text">
                {isLoggedIn ? (
                  <button className="vvd p-2 m-3" onClick={handleLogout}>
                    <span>Logout</span>
                  </button>
                ) : (
                  <HashLink to="/login">
                    <button className="vvd p-2 m-3">
                      <span>Sign In</span>
                    </button>
                  </HashLink>
                )}
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbars;
