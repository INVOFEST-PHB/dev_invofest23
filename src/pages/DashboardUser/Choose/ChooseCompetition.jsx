import React, { Component } from "react";
import Navbars from "../../../component/Navbars";
import Footer from "../../../component/Footer";
import PilihCompetition from "../../../component/DashboardUser/PilihCompetition";

class ChooseCompetition extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <PilihCompetition/>
        <Footer />
      </div>
    );
  }
}

export default ChooseCompetition;
