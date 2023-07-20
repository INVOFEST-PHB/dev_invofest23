import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Container } from "react-bootstrap";
import "../../../assets/css/competitions.css";

function Cards() {
  return (
    <div>
      <h5 className="text-center display-4 font-weight-bold">
        Competition Invofest 2023 !!
      </h5>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <div  className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Karya Tulis Ilmiah</div>

              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date p-3">04.11.2022</span>
                <a href="/competition/karya-tulis-ilmiyah" 
                target="_blank"
                rel="noopener noreferrer">
                <button type="button" className="btn btn-outline-warning btn-lg mt-2">
                  Daftar
                </button>
                
                </a>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">UX/UI Application Desain</div>

              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date p-3">04.11.2022</span>
                <a href="/competition/ui-ux">
                <button type="button" className="btn btn-outline-warning btn-lg mt-2">
                  Daftar
                </button>
              </a>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Video Kreatif</div>

              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date p-3">04.11.2022</span>
                <a href="/competition/video-kreatif">
                <button type="button" className="btn btn-outline-warning btn-lg mt-2">
                  Daftar
                </button>
              </a>
              </div>
            </div>
          </div>

          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Software Develompment</div>

              <div className="ag-courses-item_date-box">
                Start:
                <span className="ag-courses-item_date p-3">04.11.2022</span>
                <a href="/competition/software-developer">
                <button type="button" className="btn btn-outline-warning btn-lg mt-2">
                  Daftar
                </button>
              </a>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
}
export default Cards;