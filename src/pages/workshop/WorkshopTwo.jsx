import React, { Component } from 'react';
import Navbars from '../../component/Navbars';
// import Banner from '../../component/banner/Banner';
import DescPersonal from '../../component/card/personal/DescPersonal';
import TabsAcara from '../../component/acara/TabsAcara';
import img from "../../assets/img/12345.jpg";
import BannerAcara from '../../component/banner/BannerAcara';
import Pemateri2 from "../../assets/img/acara/workshop/kak_agus.jpeg";
import Footer from '../../component/Footer';


class WorkshopTwo extends Component {
    render() {
        return (
          <div>
            <Navbars />
            <BannerAcara
              title="UI/UX Desain"
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
                      image={Pemateri2}
                      name="Mas Agus Setyo P."
                      job="UI/UX Engineer di PT Indodev Niaga Internet"
                      names="Mas Agus Setyo P."
                      // jobs="UI/UX Engineer di PT Indodev Niaga Internet"
                      jobs="UI/UX Engineer di PT Indodev Niaga Internet"
                    />
                  </div>
                  </center>
                </div>
              </div>
            </section>
            {/* <TabsAcara /> */}
            <div className="mt-4">
              <TabsAcara
                tabsDeskripsi1="Acara workshop UI/UX Desain yang akan di mentori langsung oleh Mas Agus Setyo P., Yang saat ini bekerja sebagai UI/UX Engineer di PT Indodev Niaga Internet, ayo saksikan keseruannya!!"
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

export default WorkshopTwo;