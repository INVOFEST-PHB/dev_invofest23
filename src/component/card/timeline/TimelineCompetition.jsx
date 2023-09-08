import React, { useEffect, Component } from "react";
import "../../../assets/css/timelineCompetition.css";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

class TimelineCompetition extends Component {
  render() {
    //   useEffect(() => {
    //     AOS.init();
    //   }, []);

    return (
      <div className="container">
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date bg-soft-primary text-dark">
              {this.props.tanggal1}
            </div>
            <p className="font-size-12">{this.props.nameTime1}</p>
          </div>
        </li>
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date bg-soft-success text-dark">
              {this.props.tanggal2}
            </div>
            <p className="font-size-12">{this.props.nameTime2}</p>
          </div>
        </li>
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date bg-soft-danger text-dark">
              {this.props.tanggal3}
            </div>
            <p className="font-size-12">{this.props.nameTime3}</p>
          </div>
        </li>
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date bg-soft-warning text-dark">
              {this.props.tanggal4}
            </div>
            <p className="font-size-12">{this.props.nameTime4}</p>
          </div>
        </li>
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date bg-soft-warning text-dark">
              {this.props.tanggal5}
            </div>
            <p className="font-size-12">{this.props.nameTime5}</p>
          </div>
        </li>
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date bg-soft-warning text-dark">
              {this.props.tanggal6}
            </div>
            <p className="font-size-12">{this.props.nameTime6}</p>
          </div>
        </li>

      {/* <div className="kekanan">
        <li className=" list-inline-item event-list mt-4 me-5">
          <div className="px-4">
            <div className="event-date bg-soft-success text-success">
              {this.props.tanggal5}
            </div>
            <p className="font-size-16">{this.props.nameTime5}</p>
          </div>
        </li>
        <li className="list-inline-item event-list mt-4 ms-4">
          <div className="px-4">
            <div className="event-date bg-soft-danger text-danger">
              {this.props.tanggal6}
            </div>
            <p className="font-size-16">{this.props.nameTime6}</p>
          </div>
        </li>
        </div> */}
       
      </div>
    );
  }
}

export default TimelineCompetition;
