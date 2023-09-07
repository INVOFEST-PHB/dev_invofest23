import React, { Component } from "react";
import Navbars from "../component/Navbars";
import Banner from "../component/banner/Banner";
import About from "../component/About";
import Timeline from "../component/card/timeline/Timeline";
import SusunanAcara from "../component/acara/SusunanAcara";
import ComponentFaq from "../component/ComponentFaq";
import Maps from "../component/Maps";
import Sponsor from "../component/LandingPage/Sponsor";
import { faMagento } from "@fortawesome/free-brands-svg-icons";
// import { faMagento } from "../assets/img/logo_invofest.png";
import Footer from "../component/Footer";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/img/logo_invofest.png"



export default class PageHome extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Banner />
        <About />
        {/* <SusunanAcara acara="Susunan Acara" icons={HiddenIcon} /> */}
        <h1
          data-aos="zoom-out"
          data-aos-duration="300"
          className="text-center mt-5 text-decoration-underline"
        >
          SUSUNAN ACARA
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  icons={Logo}
                  name="TALKSHOW"
                  desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Navigasi Karir di Era Digital: Peluang dan Tantangan di Dunia IT”."
                  button="read more"
                  link="/talkshow"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  // style={styleIcon}
                  icons={Logo}
                  name="WORKSHOP"
                  desc="Acara Workshop yang meliputi Workshop Mobile Development, UI/UX Desain dan Artificial Intelegence"
                  button="read more"
                  link="/workshop"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  // icons={faMagento}
                  icons={Logo}
                  name="SEMINAR"
                  desc="Acara Seminar yang dikemas dengan suasana santai dengan tema “Unlocking the Future:
                  Embracing the Digital Revolution for a Better Tomorrow”"
                  button="read more"
                  link="/seminar"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  // icons={faMagento}
                  icons={Logo}
                  name="COMPETITION"
                  desc="IT Competition 2023 memiliki tema “Innovation and creation of the golden
                  generation to realize a sustainable future” yang terbagi menjadi 3 kategori yaitu : UI/UX Desain, Web Desain, Software Development"
                  button="read more"
                  link="/competition"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1
            data-aos="flip-up"
            data-aos-duration="300"
            className="text-center mt-5 text-decoration-underline"
          >
            JADWAL ACARA
          </h1>
          <div
            data-aos="flip-up"
            data-aos-duration="300"
            className="container mt-5"
          >
            <div
              data-aos="fade-left"
              data-aos-duration="300"
              className="container mt-5"
            >
              <div className="col-md-12">
                <div className="main-timeline mt-5">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="300"
                    className="timeline "
                  >
                    <Timeline
                      tanggal="23 Oktober 2023"
                      acara="Talkshow"
                      deskripsi="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Navigasi Karir di Era
                      Digital: Peluang dan Tantangan di Dunia IT”."
                    />
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="300"
                    className="timeline"
                  >
                    <Timeline
                      tanggal="24 Oktober 2023"
                      acara="Workshop & Competition"
                      deskripsi="Terdapat Workshop Mobile Development, UI/UX Desain, Artificial Intelegence dan Competition UI/UX Desain, Web Desain, dan  Software Development"
                    />
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="300"
                    className="timeline"
                  >
                    <Timeline
                      tanggal="25 Oktober 2023"
                      acara="Seminar"
                      deskripsi="Acara Seminar yang dikemas dengan suasana santai dengan tema “Unlocking the Future:
                      Embracing the Digital Revolution for a Better Tomorrow”"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Sponsor /> */}
        {/* <ComponentFaq /> */}
        <Maps />
        <Footer />
      </div>
    );
  }
}
