import React from "react";
import "../../assets/css/index.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      <a className=""
        href="https://invofest2022@gmail.com"
      >
        <FontAwesomeIcon className="google" icon={faGoogle} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCdaOcNM5ndtr2NLtmB5XuTg"
      >
        <FontAwesomeIcon className="yt" icon={faYoutube} />
      </a>
      <a
        data-toggle="tooltip-bottom"
        title="instagram"
        href="https://instagram.com/invofest_2022?igshid=YmMyMTA2M2Y="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="ig" icon={faInstagram} />
      </a>
    </Col>
  );
}