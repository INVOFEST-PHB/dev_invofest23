import React, { useState } from "react";
import "../../../assets/css/dashboard_user/dashboard.css";
import HeaderDash from "../../../component/DashboardAdmin/Header";
import NavbarDash from "../../../component/DashboardAdmin/Navbar";
import IndexDashAdmin from "../../../component/DashboardAdmin/IndexDashAdmin";

const WorskspKti = () => {
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  function hidden() {
    setSidebarHidden(!isSidebarHidden);
  }

  const imgIcon = {
    marginRight: "15px",
    justifyContent: "flex-end",
  };

  return (
    <>
      <>
        {!isSidebarHidden ? (
          <div className="container1">
            {/* Sidebar */}
            <div className="sidebarDash">
              <HeaderDash />

              {/* content */}
              <div className="mainDash">
                <NavbarDash />
              </div>
            </div>

            <div className="mainDash-content">
              <div id="menu-button">
                <input
                  type="checkbox"
                  id="menu-checkbox"
                  checked={!isSidebarHidden}
                  onChange={hidden}
                />
                <label htmlFor="menu-checkbox" id="menu-label">
                  <div id="hamburger"></div>
                </label>
              </div>
              <div className={`sidebarDash ${isSidebarHidden ? "hide" : ""}`}>
                {/* Konten Sidebar */}
              </div>
              <div className="box">
                {/* Content main */}
                <IndexDashAdmin />
              </div>
            </div>
          </div>
        ) : (
          <div className="container1">
            {/* Sidebar */}
            <div className="sidebarDash hide">
              <HeaderDash />

              {/* content */}
              <div className="mainDash">
                <NavbarDash />
              </div>
            </div>

            <div className="mainDash-content">
              <div id="menu-button">
                <input
                  type="checkbox"
                  id="menu-checkbox"
                  checked={!isSidebarHidden}
                  onChange={hidden}
                />
                <label htmlFor="menu-checkbox" id="menu-label">
                  <div id="hamburger"></div>
                </label>
              </div>
              <div className={`sidebarDash ${isSidebarHidden ? "hide" : ""}`}>
                {/* Konten Sidebar */}
              </div>
              <div className="box">
                {/* Content main */}
                <IndexDashAdmin />
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default WorskspKti;
