import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Container } from "react-bootstrap";
import "../../../assets/css/competitions.css";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards(props) {

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div>
      {/* <h5
        data-aos="flip-up"
        data-aos-duration="300"
        className="text-center display-4 font-weight-bold"
      >
        {props.title}
      </h5> */}
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div
            data-aos="fade-up"
            data-aos-duration="400"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">{props.cardTitle}</div>

              <div className="ag-courses-item_date-box">
                {props.text1}
                <span className="ag-courses-item_date p-3">{props.text2}</span>
                <a href={props.link}>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg mt-2"
                  >
                    {props.text3}
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <div
            data-aos="fade-up"
            data-aos-duration="400"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">UX/UI Desain</div>

              <div className="ag-courses-item_date-box">
                Competition
                <span className="ag-courses-item_date p-3">Register Now</span>
                <a href="/competition/ui-ux-desain">
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg mt-2"
                  >
                    Daftar
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Web Desain</div>

              <div className="ag-courses-item_date-box">
                Competition:
                <span className="ag-courses-item_date p-3">Register Now</span>
                <a href="/competition/web-desain">
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg mt-2"
                  >
                    Daftar
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Software Develompment</div>

              <div className="ag-courses-item_date-box">
                Competition
                <span className="ag-courses-item_date p-3">Register Now</span>
                <a href="/competition/software-development">
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg mt-2"
                  >
                    Daftar
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

// Cards.propTypes = {};

export default Cards;