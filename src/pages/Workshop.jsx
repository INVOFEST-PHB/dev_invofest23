import React, { Component } from 'react';
import Navbars from "../component/Navbars";
import BannerAcara from "../component/banner/BannerAcara";
// import Personal from '../component/card/personal/Personal';
import "../assets/css/card/personal.css";
import Pemateri1 from "../assets/img/acara/workshop/kak_musnadil.jpeg";
import Pemateri2 from "../assets/img/acara/workshop/kak_agus.jpeg";
import Pemateri3 from "../assets/img/acara/workshop/kak_dewi.jpeg";
import DescPersonal from "../component/card/personal/DescPersonal";
import SusunanAcara from "../component/acara/SusunanAcara";
import { faMagento } from "@fortawesome/free-brands-svg-icons";
// import TabsAcara from "../component/acara/TabsAcara";
import Sponsor from "../component/LandingPage/Sponsor";
import img from "../assets/img/12345.jpg";
import Footer from "../component/Footer";
import { Auth } from '../config/firebase/firebase';


class Workshop extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          daftar_button="Daftar Workshop"
          user={Auth.currentUser}
          linkDaftar="/workshop/register-workshop"
          title="Workshop"
          description="Acara Workshop Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
        />
        <SusunanAcara acara="Susunan Acara" />
        {/* <div className="container"> */}
        <div className="row">
          <div className="col">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  // icons={faMagento}
                  name="Workshop Mobile Development"
                  desc="Daftar Sekarang Workshop Mobile Development di acara Invofest 2023"
                  button="read more"
                  link="/workshop/mobile-development"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  // icons={faMagento}
                  name="Workshop UI/UX Design"
                  desc="Daftar Sekarang Workshop UI/UX Design di acara Invofest 2023"
                  button="read more"
                  link="/workshop/ui-ux-desain"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <SusunanAcara
                  // icons={faMagento}
                  name="Workshop Artificial Intelligence"
                  desc="Daftar Sekarang Workshop Artificial Intelligence di acara Invofest 2023"
                  button="read more"
                  link="/workshop/artificial-intelegence"
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1 mt-5">Pembicara</h5>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <DescPersonal
                  image={Pemateri1}
                  name="Musnadil Firdaus"
                  job="ex Mobile Developer di PT. Bhumi Varta Technology"
                  names="Musnadil Firdaus"
                  jobs="ex Mobile Developer di PT. Bhumi Varta Technology"
                  twiter="https://"
                  google="https://"
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <DescPersonal
                  image={Pemateri2}
                  name="Mas Agus Setyo P."
                  job="UI/UX Engineer di PT Indodev Niaga Internet"
                  names="Mas Agus Setyo P."
                  jobs="UI/UX Engineer di PT Indodev Niaga Internet"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <DescPersonal
                  image={Pemateri3}
                  name="Dewi Idda Rohmana"
                  job="Artificial Intelligence Coach di Orbit Future Academy"
                  names="Dewi Idda Rohmana"
                  jobs="Artificial Intelligence Coach di Orbit Future Academy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <Sponsor /> */}
        <Footer />
      </div>
    );
  }
}

export default Workshop;
