import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/img/maskot.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';   
import '../../assets/css/banner.css';
import TrackVisibility from 'react-on-screen';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "../About";
import { Navigate } from "react-router-dom";
import PageHome from "../../pages/PageHome";


const Banner = () => {
    useEffect(() => {
    AOS.init();
    }, []);

    const [loopNum] = useState(0);
    const [isDeleting] = useState(false);
    const [text, setText] = useState('');
    // const [delta] = useState(300 - Math.random() * 100);
    // const [index, setIndex] = useState(1);
    const toRotate = ["Informatics Vocational Festival"];
    // const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }
        // , 
        // delta
        );

        return () => { clearInterval(ticker) };
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
    }

    const handleRedirect = () => {
      // Lakukan redirect ke halaman yang diinginkan
      window.location.href = "/";

      // Lakukan refresh halaman setelah redirect
      window.location.reload();
    };


    return (
      <section className="banner" id="home">
        <Container>
          <Row
            data-aos="zoom-in"
            data-aos-delay="300"
            className="aligh-items-center"
          >
            <Col xs={6} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate_animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">INVOFEST</span>
                    <h1>
                      {" "}
                      <span
                        className="txt-rotate"
                        data-rotate='[ "Informatics Vocational Festival" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    {/* <p>
                      Menyambut Inovasi, Merayakan Teknologi: Invofest Kembali
                      Hadir untuk Menciptakan Masa Depan Lebih Terang!
                    </p>
                    <p>
                      Invofest, festival teknologi tahunan yang diselenggarakan
                      oleh Politeknik Harapan Bersama, kini hadir dengan
                      semangat yang lebih membara untuk menghadirkan inovasi
                      terkini dalam dunia teknologi. Sebagai Event yang cukup
                      bergengsi di bidang teknologi, Invofest telah menjadi
                      ajang yang ditunggu-tunggu oleh para pencinta teknologi,
                      mahasiswa, akademisi, dan praktisi industri.
                    </p> */}
                  
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5} className="mt-3">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      src={Logo}
                      alt="Logo"
                      className="w-75 justify-content-center"
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default Banner;