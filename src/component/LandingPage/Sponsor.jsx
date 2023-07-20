import React, { Component } from 'react';
import meter1 from "../../assets/img/sponsor.jpg";
import meter2 from "../../assets/img/sponsor2.png";
import meter3 from "../../assets/img/sponsor3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import colorSharp from "../../assets/img/color-sharp.png"
import "../../assets/css/card/sponsor.css"
import { Image } from 'react-bootstrap';


class Sponsor extends Component {
    
    render(){
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        
        return (
            <section className="skill mt-5" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>By Sponsor</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider mt-3">
                                <div className="item">
                                    <Image src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <Image src={meter2} alt="Image" />
                                    <h5>English</h5>
                                </div>
                                <div className="item">
                                    <Image src={meter3} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <Image src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
        );
    }
}

export default Sponsor;