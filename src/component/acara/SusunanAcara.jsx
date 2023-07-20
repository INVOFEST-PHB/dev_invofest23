import React, { Component } from "react";
import "../../assets/css/susunanacara.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SusunanAcara extends Component {
  render() {
    return (
      <div className="">
      <h1 className="text-center mt-5 text-decoration-underline">{this.props.acara}</h1>
      <div className="section_our_solution mt-5">
      <div className="solution_card text-black">
                <div className="hover_color_bubble"></div>
                <div className="so_top_icon" border="black">
                <FontAwesomeIcon icon={this.props.icons} />
                </div>
                <div className="solu_title">
                  <h3>{this.props.name}</h3>
                </div>
                <div className="solu_description">
                  <p className="text-black">
                   {this.props.desc}
                  </p>
                  <a href={this.props.link}>
                    {this.props.button}
                    </a>
                </div>
              </div>
      </div>
    </div>
    );
  }
}

export default SusunanAcara;
