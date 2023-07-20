import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class ComponenAcara extends Component {
    render() {
        return (
            <div>
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
                    <button type="button" className="read_more_btn">
                      <a href={this.props.href}>
                      read more
                      </a>
                    </button>
                  </div>
                </div>
            </div>
        );
    }
}

export default ComponenAcara;