import React, { Component } from 'react'
import DashboardUser from '../../component/DashboardUser/Dashboard'
import Navbars from '../../component/Navbars';
import Footer from '../../component/Footer';

class IndexUser extends Component {
  render() {
    return (
      <div>
        <Navbars/>
        <DashboardUser/>
        <Footer/>
      </div>
    )
  }
}

export default IndexUser;
