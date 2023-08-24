import React, { Component, Fragment } from "react";
import "../../assets_dashboardUser/assets/vendors/mdi/css/materialdesignicons.min.css";
import "../../assets_dashboardUser/assets/vendors/css/vendor.bundle.base.css";
import "../../assets_dashboardUser/assets/vendors/jvectormap/jquery-jvectormap.css";
import "../../assets_dashboardUser/assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "../../assets_dashboardUser/assets/vendors/owl-carousel-2/owl.carousel.min.css";
import "../../assets_dashboardUser/assets/vendors/owl-carousel-2/owl.theme.default.min.css";
import "../../assets_dashboardUser/assets/css/style.css";
import LogoSelamatDatang from "../../assets_dashboardUser/assets/images/dashboard/Group126@2x.png";
import { Auth, getDataAPI, logout } from "../../config/firebase/firebase";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    const user = Auth.currentUser;

    if (user) {
      const uid = user.uid;

      this.props
        .GetAPI(uid)
        .then((userData) => {
          // Update the component state with the fetched user data
          this.setState({ userData });
          console.log(userData);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
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
    const user = Auth.currentUser;
    const displayName = user.displayName;
    const { userData } = this.state;
    const { informasi } = this.props;
    console.log("Biodata :", this.props.informasi);

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
            {informasi.length > 0 ? (
              <Fragment>
                {informasi.map((bio) => {
                  return (
                    <div className="content-wrapper">
                      <div
                        className="row"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <div
                          className="col-12 grid-margin stretch-card"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          <div className="card corona-gradient-card">
                            <div className="card-body py-0 px-0 px-sm-3">
                              <div className="row align-items-center">
                                <div className="col-4 col-sm-3 col-xl-2">
                                  <img
                                    src={LogoSelamatDatang}
                                    className="gradient-corona-img img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="col-5 col-sm-7 col-xl-8 p-0"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                  <h4
                                    className="mb-1 mb-sm-0"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    Selamat Datang Kembali👋
                                  </h4>
                                  <p
                                    className="mb-0 font-weight-normal d-none d-sm-block"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    {displayName}
                                  </p>
                                </div>
                                <div
                                  className="col-3 col-sm-2 col-xl-2 ps-0 text-center"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                  <span>
                                    <a
                                      href="https://www.bootstrapdash.com/product/corona-admin-template/"
                                      target="_blank"
                                      className="btn btn-outline-light btn-rounded get-started-btn"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      Lets Go
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="row"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        key={bio.id}
                      >
                        <div
                          className="col-md-8 grid-margin stretch-card"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          <div className="card">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-6"></div>
                                <div
                                  className="col-md-6 d-flex justify-content-end"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-rounded btn-fw"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    Edit
                                  </button>
                                </div>
                              </div>
                              {/* <!-- content --> */}
                              <div className="text-center">
                                <h2
                                  className="card-title p-4 mx-auto"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                 {bio.dataObject.username} <br />{" "}
                                  <p
                                    className="text-muted"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    {user.email}
                                  </p>
                                </h2>
                              </div>

                              <div
                                className="mx-auto"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                <div className="text-sm-left">
                                  <p
                                    className="card-title p-4 mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    Tanggal Lahir <br />{" "}
                                    <span
                                      className="fw-bold"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      {bio.dataObject.ttl}
                                    </span>
                                  </p>
                                </div>

                                <div
                                  className="text-sm-left"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                  <p
                                    className="card-title p-4 mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    Alamat <br />{" "}
                                    <span
                                      className="fw-bold"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      {bio.dataObject.alamat}
                                    </span>
                                  </p>
                                </div>

                                <div
                                  className="text-sm-left"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                  <p
                                    className="card-title p-4 mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    Nomor HP <br />{" "}
                                    <span
                                      className="fw-bold"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      {bio.dataObject.noHp}
                                    </span>
                                  </p>
                                </div>

                                <div
                                  className="text-sm-left"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                  <p
                                    className="card-title p-4 mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    Status <br />{" "}
                                    <span
                                      className="fw-bold"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      {bio.dataObject.status}
                                    </span>
                                  </p>
                                </div>

                                <div
                                  className="text-sm-left"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                  <p
                                    className="card-title p-4 mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    Instansi <br />{" "}
                                    <span
                                      className="fw-bold"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      {bio.dataObject.pendidikan}
                                    </span>
                                  </p>
                                </div>

                                <div
                                  className="text-sm-left"
                                  data-aos="zoom-in"
                                  data-aos-delay="300"
                                >
                                  <p
                                    className="card-title p-4 mx-auto"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                  >
                                    Jurusan <br />{" "}
                                    <span
                                      className="fw-bold"
                                      data-aos="zoom-in"
                                      data-aos-delay="300"
                                    >
                                      <p>{bio.dataObject.jurusan}</p>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="col-sm-4 grid-margin stretch-card"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          <div className="card">
                            <div className="card-body">
                              {/* <!-- content --> */}
                              <h5
                                className="card-title p-4 mx-auto"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                TIMELINE
                              </h5>
                              <h5
                                className="card-title p-4 mx-auto"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                PENGUMUMAN
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            ) : null}

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
                                Web Desain
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
                                Web Desain
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
  informasi: state.informasi,
});

const reduxDispatch = (dispatch) => ({
  GetAPI: (data) => dispatch(getDataAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
