import React, { Component } from "react";
import Navbars from "../../../component/Navbars";
import Footer from "../../../component/Footer";
import PilihEventSeminar from "../../../component/DashboardUser/PilihEventSeminar";

class ChooseEventSeminar extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <PilihEventSeminar />
        <Footer />
      </div>
    );
  }
}

export default ChooseEventSeminar;
