import React, { useEffect, Component } from "react";
import meter1 from "../../assets/img/sponsor/bento_kopi_logo-transformed-removebg-preview.png";
import meter2 from "../../assets/img/sponsor/bni.png";
import meter3 from "../../assets/img/sponsor/coklat.png";
import meter4 from "../../assets/img/sponsor/Dicoding Logo - Default Color.png";
import meter5 from "../../assets/img/sponsor/logo_komerce.png";
import meter6 from "../../assets/img/sponsor/plaza-tegal.png";
import Carousel from "react-multi-carousel";
// import Carousel from "react-owl-carousel";
import "react-multi-carousel/lib/styles.css";
// import colorSharp from "../../assets/img/color-sharp.png"
import "../../assets/css/card/sponsor.css";
import { Image } from "react-bootstrap";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

class Sponsor extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

//     const LogoSlider = () => {
//   const [settings] = useState({
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: 'linear',
//   });

    // useEffect(() => {
    // AOS.init();
    // }, []);

    const sizeIcons = {
      width: "100px",
      height: "100px"
    }

    const sizeIcons2 = {
      width: "140px",
      height: "140px"
    }

    const sizeIconslong = {
      width: "160px",
      height: "90px",
    };
    return (
    //  <section data-aos="zoom-in" className="skill mt-5" id="skills">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-12">
    //           <div className="skill-bx wow zoomIn">
    //             <h2>By Sponsor</h2>
    //             <Carousel
    //               responsive={responsive}
    //               infinite={true}
    //               className="owl-carousel owl-theme skill-slider mt-3"
    //             >
    //               <div className="item">
    //                 <Image src={meter1} alt="Image" />
    //                 <h5>Web Development</h5>
    //               </div>
    //               <div className="item">
    //                 <Image src={meter2} alt="Image" />
    //                 <h5>English</h5>
    //               </div>
    //               <div className="item">
    //                 <Image src={meter3} alt="Image" />
    //                 <h5>Logo Design</h5>
    //               </div>
    //               <div className="item">
    //                 <Image src={meter1} alt="Image" />
    //                 <h5>Web Development</h5>
    //               </div>
    //             </Carousel>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    //   </section>

    <>
    <section data-aos="zoom-in" className="skill mt-5" id="skills">
         <div className="container">
          <center><h2 style={{justifyContent: 'center', marginBottom: "50px"}}>By Sponsor</h2></center>
           <center>
            <div className="row">
             <div className="col">
                <div className="mb-5"><img style={sizeIcons} src={meter1} alt="" /></div>
                {/* <div className="mb-5"><img style={sizeIcons} src={meter2} alt="" /></div> */}
            </div>
            <div className="col">
                <div className="mb-5"><img style={sizeIconslong} src={meter2} alt="" /></div>
                {/* <div className="mb-5"><img style={sizeIcons} src={meter1} alt="" /></div> */}
            </div>
            <div className="col">
                <div className="mb-5"><img style={sizeIcons} src={meter3} alt="" /></div>
                {/* <div className="mb-5"><img style={sizeIcons} src={meter1} alt="" /></div> */}
            </div>
            <div className="col">
                <div className="mb-5"><img style={sizeIconslong} src={meter4} alt="" /></div>
                {/* <div className="mb-5"><img style={sizeIcons} src={meter1} alt="" /></div> */}
            </div>
            <div className="col">
                <div className="mb-5"><img style={sizeIcons2} src={meter5} alt="" /></div>
                {/* <div className="mb-5"><img style={sizeIcons} src={meter1} alt="" /></div> */}
            </div>
            <div className="col">
                <div className="mb-5"><img style={sizeIcons2} src={meter6} alt="" /></div>
                {/* <div className="mb-5"><img style={sizeIcons} src={meter1} alt="" /></div> */}
            </div>
          </div>
           </center>
        </div>
    </section>

    </>
    );
  }
}

export default Sponsor;
