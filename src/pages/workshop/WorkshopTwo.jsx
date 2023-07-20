import React, { Component } from 'react';
import Navbars from '../../component/Navbars';
// import Banner from '../../component/banner/Banner';
import DescPersonal from '../../component/card/personal/DescPersonal';
import TabsAcara from '../../component/acara/TabsAcara';
import img from "../../assets/img/12345.jpg";
import BannerAcara from '../../component/banner/BannerAcara';
import Footer from '../../component/Footer';


class WorkshopTwo extends Component {
    render() {
        return (
            <div>
                <Navbars/>
                <BannerAcara
                title="Mobile App"
                description="Acara Workshop Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
                />
                <DescPersonal/>
                <TabsAcara/>
                
                <Footer/>
            </div>
        );
    }
}

export default WorkshopTwo;