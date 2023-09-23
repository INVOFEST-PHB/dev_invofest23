import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Container } from "react-bootstrap";
import "../../../assets/css/competitions.css";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function Cards(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">{props.cardTitle}</div>

              <div className="ag-courses-item_date-box">
                {props.text1}
                <span className="ag-courses-item_date p-3">{props.text2}</span>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
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

          <div
            data-aos="fade-up"
            data-aos-duration="400"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">{props.cardTitle2}</div>

              <div className="ag-courses-item_date-box">
                {props.text21}
                <span className="ag-courses-item_date p-3">{props.text22}</span>
                <a href={props.link2}>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg mt-2"
                  >
                    {props.text23}
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="400"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">{props.cardTitle3}</div>

              <div className="ag-courses-item_date-box">
                {props.text31}
                <span className="ag-courses-item_date p-3">{props.text22}</span>
                <a href={props.link3}>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg mt-2"
                  >
                    {props.text33}
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Web Desain</div>

              <div className="ag-courses-item_date-box">
              {props.text31}
                <span className="ag-courses-item_date p-3">{props.text32}</span>
                <a href={props.link2}>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-lg mt-2"
                  >
                    {props.text33}
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          {/* <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="ag-courses_item"
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Software Develompment</div>

              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date p-3">04.11.2022</span>
                <a href="/competition/software-developer">
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

              <div className="ag-courses-item_title">Video Kreatif</div>

              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date p-3">04.11.2022</span>
                <a href="/competition/video-kreatif">
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
export default Cards;
