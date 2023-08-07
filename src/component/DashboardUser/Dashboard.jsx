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
  return (
    <>
      <br />
      <br />
      <br />
      <div class="containerDashboard-fluid page-body-wrapper">
        {/* <!-- partial --> */}
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-12 grid-margin stretch-card">
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
                      <div class="col-5 col-sm-7 col-xl-8 p-0">
                        <h4 class="mb-1 mb-sm-0">Selamat Datang Kembali👋</h4>
                        <p class="mb-0 font-weight-normal d-none d-sm-block">
                          Avriansyah Bahtiar
                        </p>
                      </div>
                      <div class="col-3 col-sm-2 col-xl-2 ps-0 text-center">
                        <span>
                          <a
                            href="https://www.bootstrapdash.com/product/corona-admin-template/"
                            target="_blank"
                            class="btn btn-outline-light btn-rounded get-started-btn"
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

            <div class="row">
              <div class="col-md-8 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6"></div>
                      <div class="col-md-6 d-flex justify-content-end">
                        <button
                          type="button"
                          class="btn btn-primary btn-rounded btn-fw"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    {/* <!-- content --> */}
                    <div class="text-center">
                      <h2 class="card-title p-4 mx-auto">
                        Avriansyah Bahtiar <br />{" "}
                        <p class="text-muted">Avriansyah.stdy@gmail.com</p>
                      </h2>
                    </div>

                    <div class="mx-auto">
                      <div class="text-sm-left">
                        <p class="card-title p-4 mx-auto">
                          Tanggal Lahir <br />{" "}
                          <span class="fw-bold">2000-04-10</span>
                        </p>
                      </div>

                      <div class="text-sm-left">
                        <p class="card-title p-4 mx-auto">
                          Alamat <br />{" "}
                          <span class="fw-bold">JL, Terpadu No 26</span>
                        </p>
                      </div>

                      <div class="text-sm-left">
                        <p class="card-title p-4 mx-auto">
                          Nomor HP <br />{" "}
                          <span class="fw-bold">081290250561</span>
                        </p>
                      </div>

                      <div class="text-sm-left">
                        <p class="card-title p-4 mx-auto">
                          Status <br /> <span class="fw-bold">Mahasiswa</span>
                        </p>
                      </div>

                      <div class="text-sm-left">
                        <p class="card-title p-4 mx-auto">
                          Instansi <br />{" "}
                          <span class="fw-bold">
                            Politeknik Harapan Bersama
                          </span>
                        </p>
                      </div>

                      <div class="text-sm-left">
                        <p class="card-title p-4 mx-auto">
                          Kartu KTM <br />{" "}
                          <span class="fw-bold">
                            <a href="">Lihat</a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 grid-margin stretch-card ">
                <div class="card">
                  <div class="card-body">
                    {/* <!-- content --> */}
                    <h5 class="card-title p-4 mx-auto">TIMELINE</h5>
                    <h5 class="card-title p-4 mx-auto">PENGUMUMAN</h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <h4 class="card-title mb-1">KOMPETISI YANG DIIKUTI</h4>
                    <p class="text-muted mb-1">Your data status</p>
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
                          <div class="preview-item-content d-sm-flex flex-grow">
                            <div class="flex-grow">
                              <h6 class="preview-subject">Web Desain</h6>
                              <a href="#" class="mb-0">
                                Lihat Timeline
                              </a>
                            </div>
                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                              <button
                                type="button"
                                class="btn btn-primary btn-rounded btn-fw"
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
                          <div class="preview-item-content d-sm-flex flex-grow">
                            <div class="flex-grow">
                              <h6 class="preview-subject">Web Desain</h6>
                              <a href="#" class="mb-0">
                                Lihat Timeline
                              </a>
                            </div>
                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                              <button
                                type="button"
                                class="btn btn-primary btn-rounded btn-fw"
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

            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <h4 class="card-title mb-1">EVENTS</h4>
                    <p class="text-muted mb-1">Your data status</p>
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
                          <div class="preview-item-content d-sm-flex flex-grow">
                            <div class="flex-grow">
                              <h6 class="preview-subject">
                                Workshop Artificial Intelegents
                              </h6>
                              <a href="#" class="mb-0">
                                Lihat Timeline
                              </a>
                            </div>
                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                              <button
                                type="button"
                                class="btn btn-primary btn-rounded btn-fw"
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
                          <div class="preview-item-content d-sm-flex flex-grow">
                            <div class="flex-grow">
                              <h6 class="preview-subject">
                                Seminar Cyber Security
                              </h6>
                              <a href="#" class="mb-0">
                                Lihat Timeline
                              </a>
                            </div>
                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                              {/* <!-- <p class="text-muted">15 minutes ago</p>
                                <p class="text-muted mb-0">30 tasks, 5 issues </p> --> */}
                              <button
                                type="button"
                                class="btn btn-primary btn-rounded btn-fw"
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