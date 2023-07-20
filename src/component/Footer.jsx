import React from "react";
import { Col } from "react-bootstrap";
import img from "../assets/img/logo_invofest.png"
import SocialIcons from "./LandingPage/SosialIcons";


export default function Footer() {
  return (
    <div className="footer bg-dark text-center">
      <Col xl={12}>
        <img className="img-footer mt-2" src={img} alt="" />
        <br />
        <small className="txt-footer text-white ml-3">INVOFEST 2023</small>
        <SocialIcons />
      </Col>
    </div>
  );
}