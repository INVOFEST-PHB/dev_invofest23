import React, { Component } from "react";
import Testing from "../../component/DashboardUser/Testing";
import Navbars from "../../component/Navbars";
import CompetitionApply from "../../component/DashboardUser/CompetitionApply";

class Test extends Component {
  render() {
    return (
      <div>
        <Navbars/>
        <CompetitionApply/>
      </div>
    );
  }
}

export default Test;
