import React, { Component } from "react";
import DashboardUser from "../../component/DashboardUser/Dashboard";
import Navbars from "../../component/Navbars";
import CompetitionApply from "../../component/DashboardUser/CompetitionApply";
import Footer from "../../component/Footer";

class CompetitionUser extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <CompetitionApply />
        <Footer />
      </div>
    );
  }
}

export default CompetitionUser;
