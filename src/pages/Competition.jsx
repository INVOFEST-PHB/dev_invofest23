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
    
              <Cards
                cardTitle="UI/UX Desain"
                text1="Competition"
                text2="Register Now"
                link="/competition/ui-ux-desain"
                text3="Daftar"

                cardTitle2="Web Desain"
                text21="Competition"
                text22="Register Now"
                link2="/competition/web-desain"
                text23="Daftar"

                cardTitle3="Software Development"
                text31="Competition"
                text32="Register Now"
                link3="/competition/software-development"
                text33="Daftar"
              />
        <Footer />
      </div>
    );
  }
}

export default Competition;
