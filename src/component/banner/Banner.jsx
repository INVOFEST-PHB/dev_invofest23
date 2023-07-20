import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/img/maskot.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import '../../assets/css/banner.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
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
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={6} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate_animated animate__fadeIn" : ""}>
                                    <span className="tagline">INVOFEST</span>
                                    <h1> <span className="txt-rotate" data-rotate='[ "Informatics Vocational Festival" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit saepe rem maxime corrupti? 
                                        Distinctio, doloribus minima esse facilis est quis, praesentium, quisquam quidem alias quo tenetur! Vero, quasi 
                                        inventore?
                                    </p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="mt-3">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={Logo} alt="Logo" className="w-75 justify-content-center"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;