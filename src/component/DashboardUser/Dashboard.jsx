import React, { useEffect, useState } from "react";
import "../../assets/css/dashboard_user/dashboard.css";
import illustration from "../../assets/img/assets/illustration.png";
import logoDashboard from "../../assets/img/assets/dashboard.svg";
import logoTeam from "../../assets/img/assets/team.svg";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  function hidden() {
    setSidebarHidden(!isSidebarHidden);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {!isSidebarHidden ? (
        <div class="container1">
          <div className="sidebar">
            <div class="header">
              <div class="list-item">
                <a href="#">
                  {/* <!-- <img src="assets/youtube.svg" alt="" class="icon"> --> */}
                  <span class="description-header">INFOVEST 2023!!</span>
                </a>
              </div>

              <div class="illustration">
                <img src={illustration} alt="" />
              </div>
            </div>

            <div class="main">
              <div class="list-item">
                <a href="index.html">
                  <img src={logoDashboard} alt="" class="icon" />
                  <span class="description">Dashboard</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">Karya Tulis Ilmiah</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">UI/UX</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">Web Desain</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">Software Dev</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">Video Kreatif</span>
                </a>
              </div>
            </div>
          </div>

          <div className="main-content">
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
            <div className={`sidebar ${isSidebarHidden ? "hide" : ""}`}>
              {/* Konten Sidebar */}
            </div>
          </div>
        </div>
      ) : (
        <div class="container1">
          <div className="sidebar hide">
            <div class="header">
              <div class="list-item">
                <a href="#">
                  {/* <!-- <img src="assets/youtube.svg" alt="" class="icon"> --> */}
                  <span class="description-header">INFOVEST 2023!!</span>
                </a>
              </div>

              <div class="illustration">
                <img src={illustration} alt="" />
              </div>
            </div>

            <div class="main">
              <div class="list-item">
                <a href="index.html">
                  <img src={logoDashboard} alt="" class="icon" />
                  <span class="description">Dashboard</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">Karya Tulis Ilmiah</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">UI/UX</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">Web Desain</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">Software Dev</span>
                </a>
              </div>

              <div class="list-item">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="icon" />
                  <span class="description">Video Kreatif</span>
                </a>
              </div>
            </div>
          </div>

          <div className="main-content">
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
            <div className={`sidebar ${isSidebarHidden ? "hide" : ""}`}>
              {/* Konten Sidebar */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
