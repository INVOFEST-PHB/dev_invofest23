import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import img from "../assets/img/logo_invofest.png"
import SocialIcons from "./LandingPage/SosialIcons";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="footer bg-dark text-center"
    >
      <Col xl={12}>
        <img className="img-footer mt-2" src={img} alt="" />
        <br />
        <small className="txt-footer text-white ml-3">INVOFEST 2023</small>
        <SocialIcons />
      </Col>
    </div>
  );
}