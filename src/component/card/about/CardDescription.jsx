import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../../assets/css/card/cardDescriptions.css";
// import logo from "../../../assets/img/logo_invofest.png";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CardDescription() {
  //   constructor(props) {
  //     super();
  //   }
//   render() {

  useEffect(() => {
    AOS.init();
  }, []);
    return (
      <Container>
        <center>
          <div data-aos="fade-up" data-aos-duration="500" className="box_about">
            <h3 className="display-4 font-weight-bold">
              About Invofest 2023!!
            </h3>
            <p>
              {/* <img src={logo} alt="logo" className="w-25 img-logo" /> */}
              Selamat datang di website Invofest 2023 Politeknik Harapan Bersama
              Tegal! Kami dengan bangga mempersembahkan festival teknologi
              kampus kami yang penuh semangat dan inovatif. Kami adalah tuan
              rumah bagi acara yang mendebarkan yang menggabungkan teknologi
              terkini, kreativitas, dan minat yang berkembang di kalangan
              mahasiswa.
            </p>
            <p>
              Visi kami adalah menciptakan sebuah platform yang menghubungkan
              para mahasiswa dengan dunia teknologi yang berkembang pesat. Kami
              berkomitmen untuk memberikan pengalaman belajar yang menyenangkan,
              membangun jaringan yang kuat, dan menginspirasi generasi muda
              untuk menjelajahi dan memajukan bidang teknologi.
            </p>
            <p>
              Di festival teknologi kampus kami, kami menawarkan beragam acara
              dan kegiatan yang mencakup seminar, workshop, kompetisi, serta talkshow dengan para
              praktisi bidang IT, kami memastikan ada sesuatu untuk semua orang.
            </p>
            <p>
              Kami percaya bahwa kolaborasi dan pertukaran ide adalah kunci
              untuk inovasi yang luar biasa. Oleh karena itu, festival teknologi
              kampus kami juga memberikan kesempatan bagi para peserta untuk
              terlibat dalam tim proyek, mengembangkan keterampilan praktis, dan
              memecahkan tantangan teknologi yang menarik.
            </p>
            <p>
              Jadi, tunggu apa lagi? Bergabunglah dengan kami dalam festival
              teknologi kampus ini, temukan inspirasi baru, dan ikuti jejak para
              pemimpin industri dalam merancang masa depan teknologi.
              Bersama-sama, mari kita ciptakan suatu perubahan yang nyata dan
              menginspirasi dunia dengan inovasi kita!
            </p>
            <p>
              Jangan ragu untuk menjelajahi halaman kami dan mengetahui lebih
              lanjut tentang festival teknologi kampus kami. Terima kasih telah
              bergabung dan kami berharap dapat menyambut Anda di acara kami
              yang mendebarkan ini!
            </p>
          </div>
        </center>
      </Container>
    );
//   }
}

