import React, { Component } from 'react';
import Navbars from '../../component/Navbars';
// import Banner from '../../component/banner/Banner';
import DescPersonal from '../../component/card/personal/DescPersonal';
import Pemateri1 from "../../assets/img/acara/workshop/kak_musnadil.jpeg";
import Pemateri2 from "../../assets/img/acara/workshop/kak_agus.jpeg";
import Pemateri3 from "../../assets/img/acara/workshop/kak_dewi.jpeg";
import TabsAcara from '../../component/acara/TabsAcara';
import img from "../../assets/img/12345.jpg";
import BannerAcara from '../../component/banner/BannerAcara';
import Footer from '../../component/Footer';


class WorkshopOne extends Component {
    render() {
        return (
          <div>
            <Navbars />
            <BannerAcara
              title="Mobile Development"
              description="Acara Workshop Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
            />
            <section id="team" className="pb-5">
              <div className="container">
                <h5 className="section-title h1 mt-5">Pembicara</h5>
                <div className="row">
                  {/* <!-- Team member --> */}
                  <center>
                  <div className="col-md-4 col-sm-4 col-xs-4">
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
                  </center>
                </div>
              </div>
            </section>
            {/* <TabsAcara /> */}
            <div className="mt-4">
              <TabsAcara
                tabsDeskripsi1="Acara workshop Mobile Development yang akan di mentori langsung oleh Kak musnadil Firdaus, Yang saat ini bekerja sebagai Mobile Developer dari PT. Bhumi Varta Technology, ayo saksikan keseruannya!!"
                contact="Contact"
                contact1="Kartika (0813-2918-5235)"
                contact2="Riky (0858-7802-2969)"
                judulDetail="Waktu & Lokasi"
                detail="Detail"
                Detail1="Senin, 24 Oktober 2023"
                Detail2="Pukul 08.00 WIB - 16.00 WIB"
                Detail3="Lab Komputer"
    
              />
              <br />
            </div>
            <Footer />
          </div>
        );
    }
}

export default WorkshopOne;