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
import Footer from "../component/Footer";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default class PageHome extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Banner />
        <About />
        <SusunanAcara acara="Susunan Acara" />
        <div className="row">
          <div className="col-md-4 col-sm-12 ">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  icons={faMagento}
                  name="TALKSHOW"
                  desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                  button="read more"
                  link="/workshop"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  icons={faMagento}
                  name="TALKSHOW"
                  desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                  button="read more"
                  link="/seminar"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 ">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  icons={faMagento}
                  name="TALKSHOW"
                  desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
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
                      tanggal="19 Oktober 2023"
                      acara="Webinar"
                      deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet obcaecati eaque beatae sed officiis earum ab, ex cum odio consectetur illum saepe maiores tempore. Quisquam suscipit possimus similique veritatis quia."
                    />
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="300"
                    className="timeline"
                  >
                    <Timeline
                      tanggal="20 Oktober 2023"
                      acara="Webinar"
                      deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet obcaecati eaque beatae sed officiis earum ab, ex cum odio consectetur illum saepe maiores tempore. Quisquam suscipit possimus similique veritatis quia."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sponsor />
        <ComponentFaq />
        <Maps />
        <Footer />
      </div>
    );
  }
}
