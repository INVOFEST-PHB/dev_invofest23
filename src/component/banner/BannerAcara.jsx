import React, { useEffect, Component } from "react";
import "../../assets/css/banner/bannerWorkshop.css";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

class BannerAcara extends Component {
  render() {
    //  useEffect(() => {
    //    AOS.init();
    //  }, []);

    return (
      <div data-aos="zoom-out-down" data-aos-duration="300" className="">
        <div className="jumbotron bg-cover text-white image">
          <div className="container py-5 text-center">
            <h1 className="display-4 font-weight-bold">{this.props.title}</h1>
            <h5 className="font-italic mb-0 opacity-100">
              {this.props.description}
            </h5>
            <p className="font-italic">
              <a href="https://bootstrapious.com" className="text-white"></a>
            </p>
            {this.props.buttonbanner}
          </div>
        </div>
      </div>
    );
  }
}

export default BannerAcara;
