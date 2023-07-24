import React, { useEffect, Component } from "react";
import "../../../assets/css/cardtiem.css";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

class Timeline extends Component {

  render() {

      // useEffect(() => {
      //   AOS.init();
      // }, []);

    return (
      <div>
        {/* <img className="background-image-kanan" src={colorSharp} alt="Image" /> */}
        <div className="timeline-content">
          <div className="timeline-icon">
            <i className="fa fa-globe"></i>
          </div>
          <h3 className="title">{this.props.acara}</h3>
          <p className="description">{this.props.deskripsi}</p>
          <div className="timeline-year">{this.props.tanggal}</div>
        </div>
</div>
    );
  }
}

export default Timeline;
