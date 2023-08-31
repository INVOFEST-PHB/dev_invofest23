import React, { Component, Fragment } from "react";
import "../../assets_dashboardUser/assets/vendors/mdi/css/materialdesignicons.min.css";
import "../../assets_dashboardUser/assets/vendors/css/vendor.bundle.base.css";
import "../../assets_dashboardUser/assets/vendors/jvectormap/jquery-jvectormap.css";
import "../../assets_dashboardUser/assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "../../assets_dashboardUser/assets/vendors/owl-carousel-2/owl.carousel.min.css";
import "../../assets_dashboardUser/assets/vendors/owl-carousel-2/owl.theme.default.min.css";
import "../../assets_dashboardUser/assets/css/style.css";
import { Auth, getDataAPI, logout } from "../../config/firebase/firebase";
import { connect } from "react-redux";
import { getLombaAPI } from "../../config/firebase/competition";
import { getDatabase, ref } from "firebase/database";
import BiodataUser from "./component/BiodataUser";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userVido: null,
      lombaUIUX: [], // Array to hold UIUX data
      lombaVideo: [],
      lombaDev: [], // Array to hold UIUX data
      lombaWeb: [],
    };
  }

  componentDidMount() {
    const user = Auth.currentUser;
    if (user) {
      const uid = user.uid;
      const jenisLombaTypes = ["UI/UX", "Video", "Web Design","Software Dev"]; // Replace with your actual Lomba types

      // Fetch Lomba data for each type
      jenisLombaTypes.forEach((jenisLomba) => {
        const db = getDatabase();
        const lombaRefPath = jenisLomba + "/" + uid; // Construct the path
        const lombaRef = ref(db, lombaRefPath);

        this.props
          .LombaApi(uid, jenisLomba)
          .then((lombaData) => {
            if (lombaData && lombaData.length > 0) {
              // Update the respective state array based on jenisLomba
              if (jenisLomba === "UI/UX") {
                this.setState({ lombaUIUX: lombaData });
              } else if (jenisLomba === "Web Design") {
                this.setState({ lombaWeb: lombaData });
              }else if (jenisLomba === "Software Dev") {
                this.setState({ lombaDev: lombaData });
              }else{
                console.log("Nodata");
              }
            }else {
              console.error(`No Lomba data found for ${jenisLomba}`);
              console.log(`Path used for fetching: ${lombaRefPath}`);
            }
          })
          .catch((error) => {
            console.error(
              `Error fetching Lomba data for ${jenisLomba}:`,
              error
            );
            console.log(`Path used for fetching: ${lombaRefPath}`);
          });
      });
    } else {
      // Handle the case when there is no authenticated user
      console.error("No authenticated user found.");
    }
  }

  render() {
    const tag_A = {
      textDecoration: "none",
    };
    const video = Auth.currentUser;
    const { userVideo } = this.state;

    const { lomba } = this.props;
    // console.log("Lomba :", this.props.lomba);

    return (
      <>
        <br />
        <br />
        <br />
        <div
          className="containerDashboard-fluid page-body-wrapper"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {/* <!-- partial --> */}
          <div className="main-panel">
            <BiodataUser />

            <div
              className="col-md-12 grid-margin stretch-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-center">
                    <h4
                      className="card-title mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      BELUM MENDAFTAR ? SILAHKAN DAFTAR
                    </h4>
                    {/* <p className="text-muted mb-1">Your data status</p> */}
                  </div>
                  {/* <!-- content --> */}
                  <div
                    className="row mt-5"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="col-md-6 d-flex justify-content-center mt-4">
                      <a href="/competition">
                        <button
                          type="button"
                          className="btn btn-primary btn-rounded btn-fw btn-lg"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Daftar Competition
                        </button>
                      </a>
                    </div>
                    <div
                      className="col-md-6 d-flex justify-content-center mt-4"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <button
                        type="button"
                        className="btn btn-primary btn-rounded btn-fw btn-lg"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Daftar Events
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-12 grid-margin stretch-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-body">
                  <div
                    className="d-flex flex-row justify-content-between"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <h4
                      className="card-title mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      KOMPETISI YANG DIIKUTI
                    </h4>
                    <p
                      className="text-muted mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      Your data status
                    </p>
                  </div>
                  {/* <!-- content --> */}
                  <div className="row">
                    <div className="col-12">
                      <div className="preview-list">
                        <div className="preview-item border-bottom">
                          {/* LOMBA VIDEO */}
                          <div className="preview-thumbnail">
                            <div className="preview-icon bg-primary">
                              <i className="mdi mdi-file-document"></i>
                            </div>
                          </div>
                          {/* lomba */}
                          {this.state.lombaWeb.length > 0 ? (
                            <Fragment>
                              {this.state.lombaWeb.map((bio) => {
                                return (
                                  <div
                                    className="preview-item-content d-sm-flex flex-grow"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                    key={bio.id}
                                  >
                                    <div className="flex-grow">
                                      <h5
                                        className="preview-subject"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                      >
                                        {bio.dataObject.jenisLomba}
                                      </h5>
                                      
                                      <a
                                        href="#"
                                        style={tag_A}
                                        className="mb-0"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                      >
                                        Lihat Timeline
                                      </a>
                                    </div>
                                    <div
                                      className="me-auto text-sm-right pt-2 pt-sm-0"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-rounded btn-fw"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                      >
                                      {bio.dataObject.statusLomba}
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </Fragment>
                          ) : null}
                        </div>
                        {/* lomba ui/ux */}
                        <div className="preview-thumbnail">
                          <div className="preview-icon bg-primary">
                            <i className="mdi mdi-file-document"></i>
                          </div>
                        </div>
                        {/* lomba */}
                        {this.state.lombaUIUX.length > 0 ? (
                          <Fragment>
                            {this.state.lombaUIUX.map((bio) => {
                              return (
                                <div
                                  className="preview-item-content d-sm-flex flex-grow"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                  key={bio.id}
                                >
                                  <div className="flex-grow">
                                    <h5
                                      className="preview-subject"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      {bio.dataObject.jenisLomba}
                                    </h5>
                                    <a
                                      href="#"
                                      style={tag_A}
                                      className="mb-0"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      Lihat Timeline
                                    </a>
                                  </div>
                                  <div
                                    className="me-auto text-sm-right pt-2 pt-sm-0"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-rounded btn-fw"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      Belum Verifikasi
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </Fragment>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-12 grid-margin stretch-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-body">
                  <div
                    className="d-flex flex-row justify-content-between"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <h4
                      className="card-title mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      EVENTS
                    </h4>
                    <p
                      className="text-muted mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      Your data status
                    </p>
                  </div>
                  {/* <!-- content --> */}
                  <div className="row">
                    <div className="col-12">
                      <div className="preview-list">
                        <div className="preview-item border-bottom">
                          <div className="preview-thumbnail">
                            <div className="preview-icon bg-primary">
                              <i className="mdi mdi-file-document"></i>
                            </div>
                          </div>
                          <div
                            className="preview-item-content d-sm-flex flex-grow"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            <div className="flex-grow">
                              <h6
                                className="preview-subject"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Workshop Artificial Intelegents
                              </h6>
                              <a
                                href="#"
                                style={tag_A}
                                className="mb-0"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Lihat Timeline
                              </a>
                            </div>
                            <div
                              className="me-auto text-sm-right pt-2 pt-sm-0"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              <button
                                type="button"
                                className="btn btn-primary btn-rounded btn-fw"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Belum Verifikasi
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="preview-item border-bottom">
                          <div className="preview-thumbnail">
                            <div className="preview-icon bg-primary">
                              <i className="mdi mdi-file-document"></i>
                            </div>
                          </div>
                          <div
                            className="preview-item-content d-sm-flex flex-grow"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            <div className="flex-grow">
                              <h6
                                className="preview-subject"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Seminar Cyber Security
                              </h6>
                              <a
                                href="#"
                                style={tag_A}
                                className="mb-0"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Lihat Timeline
                              </a>
                            </div>
                            <div
                              className="me-auto text-sm-right pt-2 pt-sm-0"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              {/* <!-- <p className="text-muted">15 minutes ago</p>
                                <p className="text-muted mb-0">30 tasks, 5 issues </p> --> */}
                              <button
                                type="button"
                                className="btn btn-primary btn-rounded btn-fw"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Belum Verifikasi
                              </button>
                              {/* <!-- <button type="button" className="btn btn-primary btn-rounded btn-fw">Belum Verifikasi</button> --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- partial --> */}
        </div>
        {/* <!-- main-panel ends --> */}
      </>
    );
  }
}

const reduxState = (state) => ({
  lomba: state.lomba,
});

const reduxDispatch = (dispatch) => ({
  LombaApi: (userId, jenisLomba) => dispatch(getLombaAPI(userId, jenisLomba)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
