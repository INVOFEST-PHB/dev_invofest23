import React, { Component } from "react";
import Navbars from "../component/Navbars";
import BannerAcara from "../component/banner/BannerAcara";
import CardDescription from "../component/card/about/CardDescription";
import Footer from "../component/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          title="About"
          description="Informasi terkait Event Invofest 2023"
        />
        <CardDescription /><br />
        {/* <ComponentFaq /> */}
        <Footer/>
      </div>
    );
  }
}

export default About;
