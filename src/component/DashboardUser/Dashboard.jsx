import React from 'react'
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


const Dashboard = () => {
  const tag_A = {
    textDecoration: "none"
  };
  return (
    <>
      <br />
      <br />
      <br />
      <div
        class="containerDashboard-fluid page-body-wrapper"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {/* <!-- partial --> */}
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row" data-aos="zoom-in" data-aos-delay="300">
              <div
                class="col-12 grid-margin stretch-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div class="card corona-gradient-card">
                  <div class="card-body py-0 px-0 px-sm-3">
                    <div class="row align-items-center">
                      <div class="col-4 col-sm-3 col-xl-2">
                        <img
                          src={LogoSelamatDatang}
                          class="gradient-corona-img img-fluid"
                          alt=""
                        />
                      </div>
                      <div
                        class="col-5 col-sm-7 col-xl-8 p-0"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <h4
                          class="mb-1 mb-sm-0"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Selamat Datang Kembali👋
                        </h4>
                        <p
                          class="mb-0 font-weight-normal d-none d-sm-block"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Avriansyah Bahtiar
                        </p>
                      </div>
                      <div
                        class="col-3 col-sm-2 col-xl-2 ps-0 text-center"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <span>
                          <a
                            href="https://www.bootstrapdash.com/product/corona-admin-template/"
                            target="_blank"
                            class="btn btn-outline-light btn-rounded get-started-btn"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            Upgrade to PRO
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" data-aos="zoom-in" data-aos-delay="300">
              <div
                class="col-md-8 grid-margin stretch-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6"></div>
                      <div
                        class="col-md-6 d-flex justify-content-end"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <button
                          type="button"
                          class="btn btn-primary btn-rounded btn-fw"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    {/* <!-- content --> */}
                    <div class="text-center">
                      <h2
                        class="card-title p-4 mx-auto"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Avriansyah Bahtiar <br />{" "}
                        <p
                          class="text-muted"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Avriansyah.stdy@gmail.com
                        </p>
                      </h2>
                    </div>

                    <div
                      class="mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div class="text-sm-left">
                        <p
                          class="card-title p-4 mx-auto"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Tanggal Lahir <br />{" "}
                          <span
                            class="fw-bold"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            2000-04-10
                          </span>
                        </p>
                      </div>

                      <div
                        class="text-sm-left"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <p
                          class="card-title p-4 mx-auto"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Alamat <br />{" "}
                          <span
                            class="fw-bold"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            JL, Terpadu No 26
                          </span>
                        </p>
                      </div>

                      <div
                        class="text-sm-left"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <p
                          class="card-title p-4 mx-auto"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Nomor HP <br />{" "}
                          <span
                            class="fw-bold"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            081290250561
                          </span>
                        </p>
                      </div>

                      <div
                        class="text-sm-left"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <p
                          class="card-title p-4 mx-auto"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Status <br />{" "}
                          <span
                            class="fw-bold"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            Mahasiswa
                          </span>
                        </p>
                      </div>

                      <div
                        class="text-sm-left"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <p
                          class="card-title p-4 mx-auto"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Instansi <br />{" "}
                          <span
                            class="fw-bold"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            Politeknik Harapan Bersama
                          </span>
                        </p>
                      </div>

                      <div
                        class="text-sm-left"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <p
                          class="card-title p-4 mx-auto"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Kartu KTM <br />{" "}
                          <span
                            class="fw-bold"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            <a href="" style={tag_A}>
                              Lihat
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="col-sm-4 grid-margin stretch-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div class="card">
                  <div class="card-body">
                    {/* <!-- content --> */}
                    <h5
                      class="card-title p-4 mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      TIMELINE
                    </h5>
                    <h5
                      class="card-title p-4 mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      PENGUMUMAN
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-md-12 grid-margin stretch-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-center">
                    <h4
                      class="card-title mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      BELUM MENDAFTAR ? SILAHKAN DAFTAR
                    </h4>
                    {/* <p class="text-muted mb-1">Your data status</p> */}
                  </div>
                  {/* <!-- content --> */}
                  <div class="row mt-5" data-aos="zoom-in" data-aos-delay="300">
                    <div class="col-md-6 d-flex justify-content-center mt-4">
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-fw btn-lg"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Daftar Competition
                      </button>
                    </div>
                    <div
                      class="col-md-6 d-flex justify-content-center mt-4"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-fw btn-lg"
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
              class="col-md-12 grid-margin stretch-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="card">
                <div class="card-body">
                  <div
                    class="d-flex flex-row justify-content-between"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <h4
                      class="card-title mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      KOMPETISI YANG DIIKUTI
                    </h4>
                    <p
                      class="text-muted mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      Your data status
                    </p>
                  </div>
                  {/* <!-- content --> */}
                  <div class="row">
                    <div class="col-12">
                      <div class="preview-list">
                        <div class="preview-item border-bottom">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-primary">
                              <i class="mdi mdi-file-document"></i>
                            </div>
                          </div>
                          <div
                            class="preview-item-content d-sm-flex flex-grow"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            <div class="flex-grow">
                              <h6
                                class="preview-subject"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Web Desain
                              </h6>
                              <a
                                href="#"
                                style={tag_A}
                                class="mb-0"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Lihat Timeline
                              </a>
                            </div>
                            <div
                              class="me-auto text-sm-right pt-2 pt-sm-0"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              <button
                                type="button"
                                class="btn btn-primary btn-rounded btn-fw"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Belum Verifikasi
                              </button>
                            </div>
                          </div>
                        </div>

                        <div class="preview-item border-bottom">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-primary">
                              <i class="mdi mdi-file-document"></i>
                            </div>
                          </div>
                          <div
                            class="preview-item-content d-sm-flex flex-grow"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            <div class="flex-grow">
                              <h6
                                class="preview-subject"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Web Desain
                              </h6>
                              <a
                                href="#"
                                style={tag_A}
                                class="mb-0"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Lihat Timeline
                              </a>
                            </div>
                            <div
                              class="me-auto text-sm-right pt-2 pt-sm-0"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              <button
                                type="button"
                                class="btn btn-primary btn-rounded btn-fw"
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
              class="col-md-12 grid-margin stretch-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="card">
                <div class="card-body">
                  <div
                    class="d-flex flex-row justify-content-between"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <h4
                      class="card-title mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      EVENTS
                    </h4>
                    <p
                      class="text-muted mb-1"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      Your data status
                    </p>
                  </div>
                  {/* <!-- content --> */}
                  <div class="row">
                    <div class="col-12">
                      <div class="preview-list">
                        <div class="preview-item border-bottom">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-primary">
                              <i class="mdi mdi-file-document"></i>
                            </div>
                          </div>
                          <div
                            class="preview-item-content d-sm-flex flex-grow"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            <div class="flex-grow">
                              <h6
                                class="preview-subject"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Workshop Artificial Intelegents
                              </h6>
                              <a
                                href="#"
                                style={tag_A}
                                class="mb-0"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Lihat Timeline
                              </a>
                            </div>
                            <div
                              class="me-auto text-sm-right pt-2 pt-sm-0"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              <button
                                type="button"
                                class="btn btn-primary btn-rounded btn-fw"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Belum Verifikasi
                              </button>
                            </div>
                          </div>
                        </div>

                        <div class="preview-item border-bottom">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-primary">
                              <i class="mdi mdi-file-document"></i>
                            </div>
                          </div>
                          <div
                            class="preview-item-content d-sm-flex flex-grow"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            <div class="flex-grow">
                              <h6
                                class="preview-subject"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Seminar Cyber Security
                              </h6>
                              <a
                                href="#"
                                style={tag_A}
                                class="mb-0"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Lihat Timeline
                              </a>
                            </div>
                            <div
                              class="me-auto text-sm-right pt-2 pt-sm-0"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              {/* <!-- <p class="text-muted">15 minutes ago</p>
                                <p class="text-muted mb-0">30 tasks, 5 issues </p> --> */}
                              <button
                                type="button"
                                class="btn btn-primary btn-rounded btn-fw"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                              >
                                Belum Verifikasi
                              </button>
                              {/* <!-- <button type="button" class="btn btn-primary btn-rounded btn-fw">Belum Verifikasi</button> --> */}
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
      </div>
    </>
  );
}

export default Dashboard;