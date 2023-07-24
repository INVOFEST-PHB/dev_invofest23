
import "react-multi-carousel/lib/styles.css";
import React, { useEffect } from "react";

import colorSharp from "../assets/img/color-sharp.png";
import "../assets/css/about.css";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="300"
      className="about"
      id="abouts"
    >
      <img className="background-image-left" src={colorSharp} alt="" />
      <div className="container">
        <div className="about-bx wow zoomIn">
          <h2>INVOFEST</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-sm-12 col-xs-12">
              <div className="video-container">
                <iframe
                  width="500"
                  height="300"
                  src="https://www.youtube.com/embed/LFsskcpoAPo"
                  title="YouTube video player"
                ></iframe>
              </div>
              <p>
                event spektakuler tahunan yang bernama Invofest (Informatics
                Vocational Festival), di mana kegiatan ini dapat memfasilitasi
                potensi yang dimiliki mahasiswa dalam mengembangkan dan
                menyalurkan kemampuan di bidang IT. Invofest (Informatics
                Vocational Festival) adalah suatu wadah pengembangan kreativitas
                dan inovasi, serta peningkatan ilmu pengetahuan dan teknologi
                dalam sebuah pembelajaran guna mengarahkan mahasiswa mencapai
                taraf kreativitas dan inovasi. Dengan adanya Invofest ini,
                diharapkan mahasiswa mampu menguasai teknologi, mengasah
                kemampuan di bidang IT dan meningkatkan daya kompetisi di dunia
                IT.<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
