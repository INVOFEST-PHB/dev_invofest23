import React, { Component } from "react";

import Navbars from "../component/Navbars";
import BannerAcara from "../component/banner/BannerAcara";
import Cards from "../component/card/competition/Cards";
import Footer from "../component/Footer";

class Competition extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          title="Competition"
          description="Kompetisi invofest 2023"
        />
        <br />
        {/* <Cards title="Competition Invofest 2023 !!" /> */}
        <h5
          data-aos="flip-up"
          data-aos-duration="300"
          className="text-center display-4 font-weight-bold"
        >
          Competition Invofest 2023 !!
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Cards
                cardTitle="UI/UX Desain"
                text1="Competition"
                text2="Register Now"
                link="/competition/ui-ux-desain"
                text3="Daftar"
              />
            </div>
            <div className="col-4">
              <Cards
                cardTitle="Web Desain"
                text1="Competition"
                text2="Register Now"
                link="/competition/web-desain"
                text3="Daftar"
              />
            </div>
            <div className="col-4">
              <Cards
                cardTitle="Software Development"
                text1="Competition"
                text2="Register Now"
                link="/competition/software-development"
                text3="Daftar"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Competition;
