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
              title="Mobile App"
              description="Acara Workshop Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
            />
            <section id="team" className="pb-5">
              <div className="container">
                <h5 className="section-title h1 mt-5">Pembicara</h5>
                <div className="row">
                  {/* <!-- Team member --> */}
                  <div className="col">
                    <DescPersonal
                      image={Pemateri2}
                      name="Mas Agus Setyo P."
                      job="UI/UX Engineer di PT Indodev Niaga Internet"
                      names="Mas Agus Setyo P."
                      // jobs="UI/UX Engineer di PT Indodev Niaga Internet"
                      jobs="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
                    />
                  </div>
                </div>
              </div>
            </section>
            <TabsAcara />

            <Footer />
          </div>
        );
    }
}

export default WorkshopTwo;