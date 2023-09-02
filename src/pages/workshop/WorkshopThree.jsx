import React, { Component } from "react";
import Navbars from "../../component/Navbars";
// import Banner from '../../component/banner/Banner';
import DescPersonal from "../../component/card/personal/DescPersonal";
import TabsAcara from "../../component/acara/TabsAcara";
import Pemateri3 from "../../assets/img/acara/workshop/kak_dewi.jpeg";
import img from "../../assets/img/12345.jpg";
import BannerAcara from "../../component/banner/BannerAcara";
import Footer from "../../component/Footer";

class WorkshopThree extends Component {
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
        <TabsAcara />

        <Footer />
      </div>
    );
  }
}

export default WorkshopThree;