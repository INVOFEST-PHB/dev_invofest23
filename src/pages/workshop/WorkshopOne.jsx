import React, { Component } from 'react';
import Navbars from '../../component/Navbars';
// import Banner from '../../component/banner/Banner';
import DescPersonal from '../../component/card/personal/DescPersonal';
import TabsAcara from '../../component/acara/TabsAcara';
import img from "../../assets/img/12345.jpg";
import BannerAcara from '../../component/banner/BannerAcara';
import Footer from '../../component/Footer';


class WorkshopOne extends Component {
    render() {
        return (
            <div>
                  <Navbars/>
                <BannerAcara
                title="Mobile App"
                description="Acara Workshop Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
                />
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
                <Footer/>
            </div>
        );
    }
}

export default WorkshopOne;