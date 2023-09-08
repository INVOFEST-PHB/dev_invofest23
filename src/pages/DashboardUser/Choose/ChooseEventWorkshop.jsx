import React, { Component } from "react";
import Navbars from "../../../component/Navbars";
import Footer from "../../../component/Footer";
import PilihEventWorskshop from "../../../component/DashboardUser/PilihEventWorkshop";

class ChooseEventWorkshop extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <PilihEventWorskshop />
        <Footer />
      </div>
    );
  }
}

export default ChooseEventWorkshop;
