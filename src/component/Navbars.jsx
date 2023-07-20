import React, {  useState,useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/invofest.png';
import '../assets/css/navbar.css';
import { HashLink } from 'react-router-hash-link';

// import './app.css';

const Navbars = () =>  {
  
      const [activeLink, setActiveLink] = useState('home','workshop','seminar');
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 40) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    
      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
   
        return (
            <div>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/workshop" className={activeLink === 'workshop' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('workshop')}>Workshop</Nav.Link>
              <Nav.Link href="/seminar" className={activeLink === 'seminar' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('seminar')}>Seminar</Nav.Link>
              <Nav.Link href="/competition" className={activeLink === 'competition' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('competition')}>Competition</Nav.Link>
              <Nav.Link href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              {/* <Nav.Link href="faq" className={activeLink === 'faq' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faq')}>FAQ</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div> */}
              <HashLink to='/login'>
                <button className="vvd"><span>Sign In</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

            </div>
        );
    }
export default Navbars;