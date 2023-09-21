import React, { Component } from "react";
import Navbars from "../component/Navbars";
import BannerAcara from "../component/banner/BannerAcara";
import "../assets/css/card/personal.css";
import img from "../assets/img/12345.jpg";
import Pemateri1 from "../assets/img/acara/talkshow/kak_putri.jpeg";
import Pemateri2 from "../assets/img/acara/talkshow/kak_azka.jpeg";
import Pemateri3 from "../assets/img/acara/talkshow/kak_naufal.jpeg";
import DescPersonal from "../component/card/personal/DescPersonal";
import Footer from "../component/Footer";
import TabsAcara from "../component/acara/TabsAcara";
import Sponsor from "../component/LandingPage/Sponsor";
import { Auth } from "../config/firebase/firebase";

class Talkshow extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          daftar_button="Daftar Talkshow"
          user={Auth.currentUser}
          linkDaftar="/Talkshow/register-Talkshow"
          title="Talkshow"
          description="Acara Talkshow Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
        />

        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1 mt-5">Pembicara</h5>
            <div className="row">
              {/* <!-- Team member --> */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <DescPersonal
                  image={Pemateri1}
                  name="Putri Alvina Lutfiani"
                  job="Data Scientist
                  di PT. Astra International Tbk."
                  names="Putri Alvina Lutfiani"
                  jobs="Data Scientist
                  di PT. Astra International Tbk."
                  twiter="https://"
                  google="https://"
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <DescPersonal
                  image={Pemateri2}
                  name="Azka Wildan"
                  job="Unit Head of Software Development Engineer
                  di CT Corp"
                  names="Azka Wildan"
                  jobs="Unit Head of Software Development Engineer
                  di CT Corp"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <DescPersonal
                  image={Pemateri3}
                  name="M. Naufal"
                  job="Dosen Teknik Informatika
                  di Universitas Dian Nuswantoro"
                  names="M. Naufal"
                  jobs="Dosen Teknik Informatika
                  di Universitas Dian Nuswantoro"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <TabsAcara /> */}
        <div className="mt-4">
          <TabsAcara
            tabsDeskripsi1="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Navigasi Karir di Era
            Digital: Peluang dan Tantangan di Dunia IT”"
            tabsDeskripsi2="Tema ini bertujuan mengajak generasi muda untuk mengembangkan
            inovasi dan kreativitas diharapkan generasi ini akan berperan dalam
            menciptakan solusi-solusi baru untuk tantangan masa kini dan
            mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun
            tanggung jawab sosial. sehingga siap berkarir di era Digital seperti sekarang ini"
            contact="Contact"
            contact1="Abdul Muhith Nawawi (+62 899-6071-414)"
            contact2="Filamsi Mabda G (+62 858-5368-5622)"
          />
        </div>
        <Sponsor />
        <Footer />
      </div>
    );
  }
}

export default Talkshow;
