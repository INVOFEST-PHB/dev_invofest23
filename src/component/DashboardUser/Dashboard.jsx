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
import {
  getLombaAPI,
  getSeminarAPI,
  getWorkshopAPI,
} from "../../config/firebase/GetData";
import { getDatabase, ref } from "firebase/database";
import BiodataUser from "./component/BiodataUser";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lombaUIUX: [], // Array to hold UIUX data
      workshopUIUX: [], // Array to hold UIUX data
      lombaVideo: [],
      lombaDev: [], // Array to hold UIUX data
      lombaWeb: [],
      workshopDev: [], // Array to hold UIUX data
      workshopAI: [],
    };
  }

  componentDidMount() {
    const user = Auth.currentUser;
    if (user) {
      const uid = user.uid;
      this.props
        .SeminarApi(uid)
        .then((userData) => {
          // Update the component state with the fetched user data
          this.setState({ userData });
          console.log(userData);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });

      // Fetch Lomba data for each type
      const jenisLombaTypes = ["UI/UX", "Video", "Web Design", "Software Dev"]; // Replace with your actual Lomba types
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
              } else if (jenisLomba === "Software Dev") {
                this.setState({ lombaDev: lombaData });
              } else {
                console.log("Nodata");
              }
            } else {
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

      const jenisWorkshopTypes = [
        "UI/UX Design",
        "Artificial Intelligence",
        "Mobile Development",
      ];
      jenisWorkshopTypes.forEach((jenisworkshop) => {
        const db = getDatabase();
        const workshopRefPath = jenisworkshop + "/" + uid; // Construct the path
        const workshopRef = ref(db, workshopRefPath);
        this.props
          .WorkshopApi(uid, jenisworkshop)
          .then((workshopData) => {
            if (workshopData && workshopData.length > 0) {
              // Update the respective state array based on jenisworkshop
              if (jenisworkshop === "UI/UX Design") {
                this.setState({ workshopUIUX: workshopData });
              } else if (jenisworkshop === "Artificial Intelligence") {
                this.setState({ workshopAI: workshopData });
              } else if (jenisworkshop === "Mobile Development") {
                this.setState({ workshopDev: workshopData });
              } else {
                console.log("Nodata");
              }
            } else {
              console.error(`No workshop data found for ${jenisworkshop}`);
              console.log(`Path used for fetching: ${workshopRefPath}`);
            }
          })
          .catch((error) => {
            console.error(
              `Error fetching workshop data for ${jenisworkshop}:`,
              error
            );
            console.log(`Path used for fetching: ${workshopRefPath}`);
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
    const { seminar } = this.props;
    console.log("data seminar :", seminar);

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
                        {this.state.lombaDev.length > 0 ? (
                          <Fragment>
                            {this.state.lombaDev.map((bio) => {
                              return (
                                <div className="preview-item border-bottom">
                                  {/* LOMBA VIDEO */}
                                  <div className="preview-thumbnail">
                                    <div className="preview-icon bg-primary">
                                      <i className="mdi mdi-file-document"></i>
                                    </div>
                                  </div>
                                  {/* lomba */}
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
                                        <p>{bio.dataObject.statusLomba}</p>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </Fragment>
                        ) : null}

                        {this.state.lombaWeb.length > 0 ? (
                          <Fragment>
                            {this.state.lombaWeb.map((bio) => {
                              return (
                                <div className="preview-item border-bottom">
                                  {/* LOMBA UI/UX */}
                                  <div className="preview-thumbnail">
                                    <div className="preview-icon bg-primary">
                                      <i className="mdi mdi-file-document"></i>
                                    </div>
                                  </div>
                                  {/* lomba */}
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
                                        <p>{bio.dataObject.statusLomba}</p>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </Fragment>
                        ) : null}

                        {this.state.lombaUIUX.length > 0 ? (
                          <Fragment>
                            {this.state.lombaUIUX.map((bio) => {
                              return (
                                <div className="preview-item border-bottom">
                                  {/* LOMBA UI/UX */}
                                  <div className="preview-thumbnail">
                                    <div className="preview-icon bg-primary">
                                      <i className="mdi mdi-file-document"></i>
                                    </div>
                                  </div>
                                  {/* lomba */}
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
                                        <p>{bio.dataObject.statusLomba}</p>
                                      </button>
                                    </div>
                                  </div>
                                  {/* lomba ui/ux */}
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
                        {seminar.length > 0 ? (
                          <Fragment>
                            {seminar.map((bio) => {
                              return (
                                <div className="preview-item border-bottom">
                                  <div className="preview-thumbnail">
                                    <div className="preview-icon bg-primary">
                                      <i className="mdi mdi-file-document"></i>
                                    </div>
                                  </div>

                                  {/* EVent */}
                                  <div
                                    className="preview-item-content d-sm-flex flex-grow"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                    key={bio.id}
                                  >
                                    <div className="flex-grow">
                                      <h6
                                        className="preview-subject"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                      >
                                        {bio.dataObject.nama}
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
                              );
                            })}
                          </Fragment>
                        ) : null}

                        {this.state.workshopUIUX.length > 0 ? (
                          <Fragment>
                            {this.state.workshopUIUX.map((bio) => {
                              return (
                        <div className="preview-item border-bottom" key={bio.id}>
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
                                {bio.dataObject.jenisWorkshop}
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
                          );
                        })}
                      </Fragment>
                    ) : null}
                        {this.state.workshopAI.length > 0 ? (
                          <Fragment>
                            {this.state.workshopAI.map((bio) => {
                              return (
                        <div className="preview-item border-bottom" key={bio.id}>
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
                                {bio.dataObject.jenisWorkshop}
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
                          );
                        })}
                      </Fragment>
                    ) : null}
                        {this.state.workshopDev.length > 0 ? (
                          <Fragment>
                            {this.state.workshopDev.map((bio) => {
                              return (
                        <div className="preview-item border-bottom" key={bio.id}>
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
                                {bio.dataObject.jenisWorkshop}
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
  seminar: state.seminar,
});

const reduxDispatch = (dispatch) => ({
  LombaApi: (userId, jenisLomba) => dispatch(getLombaAPI(userId, jenisLomba)),
  WorkshopApi: (userId, jenisWorkshop) =>
    dispatch(getWorkshopAPI(userId, jenisWorkshop)),
  SeminarApi: (uid) => dispatch(getSeminarAPI(uid)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
