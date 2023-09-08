import React, { useEffect, useState } from "react";
import "../../assets/css/dashboard_user/dashboard.css";
import illustration from "../../assets/img/assets/maskot-small.png";
import logoDashboard from "../../assets/img/assets/dashboard.svg";
import logoTeam from "../../assets/img/assets/team.svg";
import Logo from "../../assets/img/logo_invofest.png"
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


import "../../assets_dashboardUser/assets/vendors/mdi/css/materialdesignicons.min.css";
import "../../assets_dashboardUser/assets/vendors/css/vendor.bundle.base.css";
// endinject
// Plugin css for this page
import "../../assets_dashboardUser/assets/vendors/jvectormap/jquery-jvectormap.css";
import "../../assets_dashboardUser/assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "../../assets_dashboardUser/assets/vendors/owl-carousel-2/owl.carousel.min.css";
import "../../assets_dashboardUser/assets/vendors/owl-carousel-2/owl.theme.default.min.css";
// End plugin css for this page
// inject:css
// endinject
// Layout styles
import "../../assets_dashboardUser/assets/css/style.css";
// End layout styles
// import Icon from "assets/images/favicon.png";
import LogoSelamatDatang from "../../assets_dashboardUser/assets/images/dashboard/Group126@2x.png";


const DashboardLama = () => {

    const tag_A = {
      textDecoration: "none",
    };

    const width20 = {
      width: "20%"
    }
    const width35 = {
      width: "35%"
    }
    const width25 = {
      width: "25%"
    }
    const width50 = {
      width: "50%",
    };
    const width65 = {
      width: "65%",
    };
    const width75 = {
      width: "75%",
    };
    const width90 = {
      width: "90%",
    };
    const width100 = {
      width: "1000px",
    };
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  function hidden() {
    setSidebarHidden(!isSidebarHidden);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const imgIcon = {
    marginRight: "15px",
    justifyContent: 'flex-end',
  }


  const [selectedCategory, setSelectedCategory] =
    useState("Karya Tulis Ilmiah"); // Default value

  function toggleSidebar() {
    setSidebarHidden(!isSidebarHidden);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <>
      {!isSidebarHidden ? (
        <div class="container1">
          <div className="sidebarDash">
            <div class="headerDash">
              <div class="listDash-itemDash">
                <a href="#">
                  <img src={Logo} alt="" class="iconDash" />
                  <span class="descriptionDash-headerDash">
                    INFOVEST 2023!!
                  </span>
                </a>
              </div>

              <div class="illustration">
                <img src={illustration} alt="" />
              </div>
            </div>

          <div class="mainDash">
              <div class="listDash-itemDash">
                <a href="index.html">
                  <img src={logoDashboard} alt="" class="iconDash" />
                  <span style={imgIcon} class="descriptionDash">
                    Dashboard
                  </span>
                </a>
              </div>

              <div class="listDash-itemDash">
                <a href="team.html">
                  <p className="titleDash">Data Competition</p>
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta KTI</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Software Dev</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta UI/UX</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Desain Poster</span>
                </a>
              </div>

              <div class="listDash-itemDash">
                <a href="team.html">
                  <p className="titleDash">Data Event Workshop</p>
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Workshop UI/UX</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Workshop AI</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Workshop KTI</span>
                </a>
              </div>

              <div class="listDash-itemDash">
                <a href="team.html">
                  <p className="titleDash">Data Event Seminar</p>
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Cyber Security</span>
                </a>
              </div>
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
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card" style={width100}>
                  <div class="card-body">
                    <h4 class="card-title">Striped Table</h4>
                    <p class="card-description">
                      {" "}
                      Add class <code>.table-striped</code>
                    </p>
                    <div class="table-responsive">
                      <table class="table table-hover" style={width90}>
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Product</th>
                            <th>Sale</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jacob</td>
                            <td>Photoshop</td>
                            <td class="text-danger">
                              {" "}
                              28.76% <i class="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label class="badge badge-danger">Pending</label>
                            </td>
                          </tr>
                          <tr>
                            <td>Messsy</td>
                            <td>Flash</td>
                            <td class="text-danger">
                              {" "}
                              21.06% <i class="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label class="badge badge-warning">
                                In progress
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>Premier</td>
                            <td class="text-danger">
                              {" "}
                              35.00% <i class="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label class="badge badge-info">Fixed</label>
                            </td>
                          </tr>
                          <tr>
                            <td>Peter</td>
                            <td>After effects</td>
                            <td class="text-success">
                              {" "}
                              82.00% <i class="mdi mdi-arrow-up"></i>
                            </td>
                            <td>
                              <label class="badge badge-success">
                                Completed
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Dave</td>
                            <td>53275535</td>
                            <td class="text-success">
                              {" "}
                              98.05% <i class="mdi mdi-arrow-up"></i>
                            </td>
                            <td>
                              <label class="badge badge-warning">
                                In progress
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="container1">
          <div className="sidebarDash hide">
            <div class="headerDash">
              <div class="listDash-itemDash">
                <a href="#">
                  <img src={Logo} alt="" class="iconDash" />
                  <span class="descriptionDash-headerDash">
                    INFOVEST 2023!!
                  </span>
                </a>
              </div>

              <div class="illustration">
                <img src={illustration} alt="" />
              </div>
            </div>

            <div class="mainDash">
              <div class="listDash-itemDash">
                <a href="index.html">
                  <img src={logoDashboard} alt="" class="iconDash" />
                  <span style={imgIcon} class="descriptionDash">
                    Dashboard
                  </span>
                </a>
              </div>

              <div class="listDash-itemDash">
                <a href="team.html">
                  <p className="titleDash hide">Data Competition</p>
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta KTI</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Software Dev</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta UI/UX</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Desain Poster</span>
                </a>
              </div>

              <div class="listDash-itemDash">
                <a href="team.html">
                  <p className="titleDash hide">Data Event Workshop</p>
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Workshop UI/UX</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Workshop AI</span>
                </a>
              </div>
              <div class="listDash-itemDash">
                <a href="team.html">
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Peserta Workshop KTI</span>
                </a>
              </div>

              <div class="listDash-itemDash">
                <a href="team.html">
                  <p className="titleDash hide">Data Event Seminar</p>
                  <img src={logoTeam} alt="" class="iconDash" />
                  <span class="descriptionDash">Cyber Security</span>
                </a>
              </div>
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
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="card" style={width100}>
                  <div class="card-body">
                    <h4 class="card-title">Striped Table</h4>
                    <p class="card-description">
                      {" "}
                      Add class <code>.table-striped</code>
                    </p>
                    <div class="table-responsive">
                      <table class="table table-hover" style={width90}>
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Product</th>
                            <th>Sale</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jacob</td>
                            <td>Photoshop</td>
                            <td class="text-danger">
                              {" "}
                              28.76% <i class="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label class="badge badge-danger">Pending</label>
                            </td>
                          </tr>
                          <tr>
                            <td>Messsy</td>
                            <td>Flash</td>
                            <td class="text-danger">
                              {" "}
                              21.06% <i class="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label class="badge badge-warning">
                                In progress
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>Premier</td>
                            <td class="text-danger">
                              {" "}
                              35.00% <i class="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label class="badge badge-info">Fixed</label>
                            </td>
                          </tr>
                          <tr>
                            <td>Peter</td>
                            <td>After effects</td>
                            <td class="text-success">
                              {" "}
                              82.00% <i class="mdi mdi-arrow-up"></i>
                            </td>
                            <td>
                              <label class="badge badge-success">
                                Completed
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td>Dave</td>
                            <td>53275535</td>
                            <td class="text-success">
                              {" "}
                              98.05% <i class="mdi mdi-arrow-up"></i>
                            </td>
                            <td>
                              <label class="badge badge-warning">
                                In progress
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLama;
