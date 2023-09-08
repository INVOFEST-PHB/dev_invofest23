import React, { Component } from "react";
import Testing from "../../component/DashboardUser/Testing";
import Navbars from "../../component/Navbars";
import CompetitionApply from "../../component/DashboardUser/CompetitionApply";
import PilihCompetition from "../../component/DashboardUser/PilihCompetition";
import PilihEventWorskshop from "../../component/DashboardUser/PilihEventWorkshop";
import PilihEventSeminar from "../../component/DashboardUser/PilihEventSeminar";

class Test extends Component {
  render() {
    return (
      <div>
        <Navbars/>
        <PilihEventSeminar/>
      </div>
    );
  }
}

export default Test;
