import React, { Component } from "react";
import Navbars from "../component/Navbars";
import BannerAcara from "../component/banner/BannerAcara";
import "../assets/css/card/personal.css";
import img from "../assets/img/12345.jpg";
import Pemateri1 from "../assets/img/acara/seminar/mas_nofi.jpg";
import Pemateri2 from "../assets/img/acara/seminar/pak_david.jpeg";
import Pemateri3 from "../assets/img/acara/seminar/pak_romi.jpeg";
import DescPersonal from "../component/card/personal/DescPersonal";
import Footer from "../component/Footer";
import TabsAcara from "../component/acara/TabsAcara";
import Sponsor from "../component/LandingPage/Sponsor";
import { Auth } from "../config/firebase/firebase";


class Seminar extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          daftar_button="Daftar Seminar"
          user={Auth.currentUser}
          linkDaftar="/seminar/register-seminar"
          title="Seminar"
          description="Acara Seminar Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
        />
        {/* <SusunanAcara acara="Susunan Acara" />
      <div className="row">
        <div className="col-md-6 col-sm-12 ">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <SusunanAcara
                icons={faMagento}
                name="TALKSHOW"
                desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                button="read more"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <SusunanAcara
                icons={faMagento}
                name="TALKSHOW"
                desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                button="read more"
              />
            </div>
          </div>
        </div>
      </div> */}

        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1 mt-5">Pembicara</h5>
            <div className="row">
              {/* <!-- Team member --> */}
              <div className="col">
                <DescPersonal
                  image={Pemateri1}
                  name="Nofi Bayu Darmawan"
                  job="Founder & CEO Komerce Startup Teknologi Terkemuka di Jawa Tengah"
                  names="Nofi Bayu Darmawan"
                  jobs="Founder & CEO Komerce Startup Teknologi Terkemuka di Jawa Tengah"
                  fb="https://"
                  twiter="https://"
                  google="https://"
                />
              </div>
              <div className="col">
                <DescPersonal
                  image={Pemateri2}
                  name="David Wijaya"
                  job="Business Development Manager Training & Academy di Red Hat Indonesia"
                  names="David Wijaya"
                  jobs="Business Development Manager Training & Academy di Red Hat Indonesia"
                  fb="https://"
                  twiter="https://"
                  google="https://"
                />
              </div>
              <div className="col">
                <DescPersonal
                  image={Pemateri3}
                  name="Romi Satria Wahono"
                  job="Enterprise Architecture & Digital Transformation Guru
                  Founder & CEO BrainCorp"
                  names="Romi Satria Wahono"
                  jobs="Enterprise Architecture & Digital Transformation Guru
                  Founder & CEO BrainCorp"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <TabsAcara /> */}
        <div className="mt-4">
          <TabsAcara
            tabsDeskripsi1="Acara Seminar yang dikemas dengan suasana santai dengan tema “Unlocking the Future:
            Embracing the Digital Revolution for a Better Tomorrow”"
            tabsDeskripsi2="Tema ini bertujuan mengajak generasi muda untuk mengembangkan
            inovasi dan kreativitas diharapkan generasi ini akan berperan dalam
            menciptakan solusi-solusi baru untuk tantangan masa kini dan
            mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun
            tanggung jawab sosial. Kesadaran akan dampak jangka panjang serta
            kolaborasi lintas generasi dan sektor menjadi kunci dalam mewujudkan
            tujuan tersebut."
            
            judulDetail="Waktu & Lokasi"
            detail="Detail"
            Detail1="Senin, 23 Oktober 2023"
            Detail2="Pukul 08.00 WIB - 12.00 WIB"
            Detail3="Gedung C, Lantai 1 - Aula"


            contact="Contact"
            contact1="Aisyi Fatikha (0895-2734-4073)"
            contact2="Putri willa (0812-1556-2576)"
          />
        </div>
        <Sponsor />
        <Footer />
      </div>
    );
  }
}

export default Seminar;
