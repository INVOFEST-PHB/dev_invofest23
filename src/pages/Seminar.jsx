import React, { Component } from "react";
import Navbars from "../component/Navbars";
import BannerAcara from "../component/banner/BannerAcara";
import "../assets/css/card/personal.css";
import img from "../assets/img/12345.jpg";
import DescPersonal from "../component/card/personal/DescPersonal";
import Footer from "../component/Footer";
import TabsAcara from "../component/acara/TabsAcara";
import Sponsor from "../component/LandingPage/Sponsor";


class Seminar extends Component {
  render() {
    return (
      <div>
      <Navbars />
      <BannerAcara
        title="Seminar"
        description="Acara Seminar Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
      />
      {/* <SusunanAcara acara="Susunan Acara" />
      <div className="row">
        <div className="col-md-6 col-sm-12 ">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <SusunanAcara
                icons={faMagento}
                name="TALKSHOW"
                desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                button="read more"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <SusunanAcara
                icons={faMagento}
                name="TALKSHOW"
                desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                button="read more"
              />
            </div>
          </div>
        </div>
      </div> */}

      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1 mt-5">Pembicara</h5>
          <div className="row">
            {/* <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <DescPersonal
                image={img}
                name="Mohamad Khadik"
                job="Web Developer"
                names="Mohamad Khadik"
                jobs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit veritatis cupiditate repellendus inventore. "
                fb="https://"
                twiter="https://"
                google="https://"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <DescPersonal
                image={img}
                name="Mohamad Idham Bakhri"
                job="Web Developer"
                names="Mohamad Idham Bakhri"
                jobs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit veritatis cupiditate repellendus inventore. "
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <DescPersonal
                image={img}
                name="iqbal maulana"
                job="Web Developer"
                names="iqbal maulana"
                jobs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit veritatis cupiditate repellendus inventore. "
              />
            </div>
          </div>
        </div>
      </section>
      <TabsAcara/>
      <Sponsor/>
      <Footer/>
    </div>
    );
  }
}

export default Seminar;
