import React, { useEffect, Component } from "react";
import "../../../assets/css/timelineCompetition.css"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

class TimelineCompetition extends Component {
    render() {
        
        //   useEffect(() => {
        //     AOS.init();
        //   }, []);

        return (
                <div className="container">
                    <li className="list-inline-item event-list">
                        <div className="px-4">
                            <div className="event-date bg-soft-primary text-primary">
                                {this.props.tanggal1}
                            </div>
                            <h5 className="font-size-16">{this.props.nameTime1}</h5>
                            <p className="text-muted">
                                {this.props.descTime1}
                            </p>
                        </div>
                    </li>
                    <li className="list-inline-item event-list">
                            <div className="px-4">
                                <div className="event-date bg-soft-success text-success">{this.props.tanggal2}</div>
                                <h5 className="font-size-16">{this.props.nameTime2}</h5>
                                <p className="text-muted">{this.props.descTime2}</p>
                            </div>
                        </li>
                        <li className="list-inline-item event-list">
                            <div className="px-4">
                                <div className="event-date bg-soft-danger text-danger">{this.props.tanggal3}</div>
                                <h5 className="font-size-16">{this.props.nameTime3}</h5>
                                <p className="text-muted">{this.props.descTime3}</p>
                                
                            </div>
                        </li>
                        <li className="list-inline-item event-list">
                            <div className="px-4">
                                <div className="event-date bg-soft-warning text-warning">{this.props.tanggal4}</div>
                                <h5 className="font-size-16">{this.props.nameTime4}</h5>
                                <p className="text-muted">{this.props.descTime4}</p>
                                
                            </div>
                        </li>
                </div>
                );
  }
}

                export default TimelineCompetition;
