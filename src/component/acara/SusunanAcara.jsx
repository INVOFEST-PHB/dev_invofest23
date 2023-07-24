import React, { useEffect, Component } from "react";
import "../../assets/css/susunanacara.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

class SusunanAcara extends Component {
  render() {

      //  useEffect(() => {
      //    AOS.init();
      //  }, []);

    return (
      <div className="">
        <h1
          data-aos="zoom-out"
          data-aos-duration="300"
          className="text-center mt-5 text-decoration-underline"
        >
          {this.props.acara}
        </h1>
        <div
          data-aos="zoom-out"
          data-aos-duration="300"
          className="section_our_solution mt-5"
        >
          <div
            data-aos="zoom-out"
            data-aos-duration="300"
            className="solution_card text-black"
          >
            <div className="hover_color_bubble"></div>
            <div className="so_top_icon" border="black">
              <FontAwesomeIcon icon={this.props.icons} />
            </div>
            <div className="solu_title">
              <h3 data-aos="zoom-out" data-aos-duration="300">
                {this.props.name}
              </h3>
            </div>
            <div
              data-aos="zoom-out"
              data-aos-duration="300"
              className="solu_description"
            >
              <p className="text-black">{this.props.desc}</p>
              <a href={this.props.link}>{this.props.button}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SusunanAcara;
