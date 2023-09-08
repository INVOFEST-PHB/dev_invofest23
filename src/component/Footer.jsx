import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import img from "../assets/img/logo_invofest.png";
import SocialIcons from "./LandingPage/SosialIcons";
import img2 from "../assets/img/logo_poltek.png";
import img3 from "../assets/img/LOGO HMPTI-1.png";

export default function Footer() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

    const sizeSponsor = {
      width: "70px", // Atur lebar sesuai kebutuhan, contoh: 300px
      height: "70px", // Atur tinggi sesuai kebutuhan, contoh: 200px
    };

    const tag_A = {
      textDecoration: "none",
    };
  return (
    <div className="footer bg-dark text-white text-center">
      <Col xl={12}>
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4 ">
            <div className="row gy-4 gx-5">
              <div className="col-lg-3 col-md-6">
                <img className="img-footer mt-2 w-25" src={img} alt="" />
                <h5 className="h1 text-white"></h5>
                <h4 className=" mb-0"> INVOFEST 2023</h4>
                <SocialIcons />
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-3 ">QUICK LINKS</h5>
                <ul className="list-unstyled text-muted ">
                  <li className="mb-2 fw-bold">
                    <a href="/talkshow" style={tag_A}>
                      Talkshow
                    </a>
                  </li>
                  <li className="mb-2 fw-bold">
                    <a href="/workshop" style={tag_A}>
                      Workshop
                    </a>
                  </li>
                  <li className="mb-2 fw-bold">
                    <a href="/seminar" style={tag_A}>
                      Seminar
                    </a>
                  </li>
                  <li className="fw-bold">
                    <a href="/competition" style={tag_A}>
                      Competition
                    </a>
                  </li>
                  <li className="fw-bold">
                    <a href="/about" style={tag_A}>
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <h5 className="text-white mb-3">GET IN TOUCH</h5>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2 fw-bold">
                    <a href="#" style={tag_A}>
                      invofest@gmail.com
                    </a>
                  </li>
                  {/* <li className="fw-bold">
                    <a href="#" style={tag_A}>
                      012345678910
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <h5 className="text-white mb-3 text-center">PRESENTED BY</h5>
                <div className="">
                  {/* <div className="border border-danger" style={{width:'100%',height:'100%' , backgroundImage: `url(${img2})`}} /> */}
                  <img
                    className="mx-auto "
                    style={sizeSponsor}
                    src={img2}
                    alt=""
                    width="85"
                    height="70"
                  />
                  <img
                    className=" mx-auto"
                    style={sizeSponsor}
                    src={img3}
                    alt=""
                    width="85"
                    height="70"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Col>
    </div>
  );
}
