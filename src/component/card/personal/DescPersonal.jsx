import React, { useEffect, Component } from "react";
// import PropTypes from 'prop-types';
import "../../../assets/css/card/personal.css";
import { Image } from "react-bootstrap";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

class DescPersonal extends Component {
  render() {
    // useEffect(() => {
    // AOS.init();
    // }, []);

    return (
      <div data-aos="zoom-out-up" data-aos-duration="300" className="pembicara">
        <div className="image-flip">
          <div className="mainflip flip-0">
            <div className="frontside">
              <div className="card">
                <div className="card-body align-self-center text-center">
                  <Image
                    data-aos="fade-up"
                    data-aos-duration="300"
                    className=" img-fluid"
                    src={this.props.image}
                    alt="card image"
                  />

                  <h4
                    data-aos="fade-up"
                    data-aos-duration="300"
                    className="card-title"
                  >
                    {this.props.name}
                  </h4>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="300"
                    className="card-text"
                  >
                    {this.props.job}
                  </p>
                  <a href={this.props.link} className="btn btn-primary btn-sm">
                    <i className="fa fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    className="card-title"
                  >
                    {this.props.names}
                  </h4>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="300"
                    className="card-text"
                  >
                    {this.props.jobs}
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="300"
                        className="social-icon text-xs-center"
                        href={this.props.fb}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="300"
                        className="social-icon text-xs-center"
                        href={this.props.twiter}
                      >
                        <i
                          data-aos="fade-up"
                          data-aos-duration="300"
                          className="fa fa-twitter"
                        ></i>
                      </a>
                    </li>
                    {/* <li className="list-inline-item">
                                            <a className="social-icon text-xs-center"  href="https://www.fiverr.com/share/qb8D02">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li> */}
                    <li className="list-inline-item">
                      <a
                        className="social-icon text-xs-center"
                        href={this.props.google}
                      >
                        <i className="fa fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DescPersonal.propTypes = {};

export default DescPersonal;
