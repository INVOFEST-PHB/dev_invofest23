import React, { useEffect, Component } from "react";
import Faq from "react-faq-component";
import "../assets/css/faq.css"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = {
  title: "FAQ Invofest 2023",
  rows: [
    {
      title: "Apa itu Invofest 2023 ?",
      content:
        "Invofest merupakan acara festival inovasi teknologi tahunan kampus Politeknik Harapan Bersam Tegal <br/> yang mengadakan kegiatan dan serangkaian acara seperti Workshop, seminar dan kompetisi di bidang tekhnologi.",
    },
    {
      title: "Ada kegiatan dan acara apa saja pada Event Invofest tahun ini ?",
      content:
        "Di acara invofest tahun ini ada beberapa acara seperti pameran karya teknologi mahasiswa poltek harber <br/> Worksho, Seminar, kompetisi dan masih banyak lagi.",
    },
    {
      title: "Kapan Event Invofest akan berlangsung ? ",
      content:
        "Acara Invofest akan di adakan pada tanggal ___ sampai tanggal ___ 2023",
    },
    {
      title: "Bagaimana cara daftar Kompetisi di Event Invofest 2023 ?",
      content:
        "Teman-teman bisa pergi ke halaman Competition, gulir kebawah, kemudian pilih kompetisi yang akan di ikuti <br/> klik daftar, lalu isi formulir yang sudah di sediakan kemudian submit",
    },
    {
      title: "Bagaimana cara daftar Workshop di Event Invofest 2023 ?",
      content:
        "Teman-teman bisa pergi ke halaman Workshop, gulir kebawah, kemudian pilih workshop yang akan di ikuti <br/> klik daftar, lalu isi formulir yang sudah di sediakan kemudian submit",
    },
    {
      title: "Bagaimana cara daftar Seminar Umum di Event Invofest 2023 ?",
      content:
        "Teman-teman bisa pergi ke halaman Seminar, gulir kebawah, kemudian pilih seminar yang akan di ikuti <br/> klik daftar, lalu isi formulir yang sudah di sediakan kemudian submit",
    },
    {
      title: "Kapan Pendaftaran Kompetisi, Workshop, Seminar umum di buka  ?",
      content: "pendaftarab kompetisi, workshop dan seminar umum akan mulai dibuka pada tanggal __ ___ 2023",
    },
  ],
};

  // useEffect(() => {
  //   AOS.init();
  // }, []);


export default class ComponentFaq extends Component {

  render() {



    return (
      <div data-aos="fade-up" data-aos-duration="300" className="test">
        <Faq
          data={data}
          styles={{
            bgColor: "transparent",
            titleTextColor: "#fff",
            rowTitleColor: "#fff",
            rowTitleTextSize: "large",
            rowContentColor: "#fff",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "150px",
            colContentTextSize: "12px",
            arrowColor: "black",
          }}
        />
      </div>
    );
  }
}
