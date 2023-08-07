import React from 'react';
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

const CompetitionApply = () => {

    const backgroundImageUrl = 'url(../../assets/img/img_6.jpg)';

    const Cards = {
      backgroundImage: backgroundImageUrl,
      border: "2px solid #fdf2f2",
      //   border: 1px,
      //   backgroundColor: #dfdf61,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   height: "400px", // Atur tinggi sesuai kebutuhan
    };
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
              <div class="grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h2 class="card-title p-4 mx-auto">
                      Astron Dev <br />{" "}
                      <p class="text-muted">Karya Tulis Ilmiah</p>
                    </h2>

                    <div class="row mx-auto">
                      <div class="col-4 bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-md-3 px-xl-4 rounded">
                        <h6 class="font-weight-bold mb-1">Ketua</h6>
                      </div>
                      <div class="col-4 flex-grow text-md text-xl-left px-5 text-xl-right">
                        <h6 class="font-weight-bold mb-1">
                          Avriansyah Bahtiar
                        </h6>
                      </div>
                    </div>

                    <div class="row mx-auto">
                      <div class="col-4 bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-md-3 px-xl-4 rounded">
                        <h6 class="font-weight-bold mb-1">Pembayaran</h6>
                      </div>
                      <div class="col-4 flex-grow text-md text-xl-left px-5 text-xl-right">
                        <h6 class="font-weight-bold mb-1">Testing</h6>
                      </div>
                    </div>

                    <div class="row mx-auto">
                      <div class="col-4 bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-md-3 px-xl-4 rounded">
                        <h6 class="font-weight-bold mb-1">
                          Tanggal Pembayaran
                        </h6>
                      </div>
                      <div class="col-4 flex-grow text-md text-xl-left px-5 text-xl-right">
                        <h6 class="font-weight-bold mb-1">16 / 4 / 2023</h6>
                      </div>
                    </div>

                    <div class="row mx-auto">
                      <div class="col-4 bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-md-3 px-xl-4 rounded">
                        <h6 class="font-weight-bold mb-1">Bukti Pembayaran</h6>
                      </div>
                      <div class="col-4 flex-grow text-md text-xl-left px-5 text-xl-right">
                        <a href class="font-weight-bold mb-1">
                          Lihat
                        </a>
                      </div>
                    </div>
                    <br />
                    <br />

                    <div class="mx-auto px-4">
                      {/* <!-- <button type="button" class="btn btn-success">Tambah Anggota</button> --> */}
                      <button
                        type="button"
                        class="btn btn-success btn-rounded btn-fw"
                      >
                        Tambah Anggota
                      </button>
                    </div>
                    {/* <!-- Card --> */}
                    <div class="row justify-content-center center p-4 m-4">
                      <div class="col-3 center">
                        <div class="custom-card card-image" style={Cards}>
                          {/* <!-- Content --> */}
                          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>
                              <h5 class="pink-text">
                                <i class="fas fa-chart-pie"></i> Ketua
                              </h5>
                              <h3 class="card-title pt-2">
                                <strong>This is the card title</strong>
                              </h3>
                              <p>email</p>
                              <p>no hp</p>
                              <p>test</p>
                              {/* <a class="btn btn-pink">
                                <i class="fas fa-clone left"></i> View project
                              </a> */}
                            </div>
                          </div>
                        </div>
                        {/* <!-- Card --> */}
                      </div>

                      <div class="col-3 center">
                        <div class="custom-card card-image" style={Cards}>
                          {/* <!-- Content --> */}
                          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>
                              <h5 class="pink-text">
                                <i class="fas fa-chart-pie"></i> Anggota
                              </h5>
                              <h3 class="card-title pt-2">
                                <strong>This is the card title</strong>
                              </h3>
                              <p>email</p>
                              <p>no hp</p>
                              <p>test</p>
                              {/* <a class="btn btn-pink">
                                <i class="fas fa-clone left"></i> View project
                              </a> */}
                            </div>
                          </div>
                        </div>
                        {/* <!-- Card --> */}
                      </div>

                      <div class="col-3 center">
                        <div class="custom-card card-image sm-4" style={Cards}>
                          {/* <!-- Content --> */}
                          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>
                              <h5 class="pink-text">
                                <i class="fas fa-chart-pie"></i> Anggota
                              </h5>
                              <h3 class="card-title pt-2">
                                <strong>This is the card title</strong>
                              </h3>
                              <p>email</p>
                              <p>no hp</p>
                              <p>test</p>
                              {/* <a class="btn btn-pink">
                                <i class="fas fa-clone left"></i> View project
                              </a> */}
                            </div>
                          </div>
                        </div>
                        {/* <!-- Card --> */}
                      </div>
                    </div>
                  </div>

                  <div class="d-grid gap-2 col-6 mx-auto p-4 m-4">
                    {/* <!-- <button class="btn btn-primary center rounded-" type="button">Button</button> --> */}
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
          {/* <!-- partial --> */}
        </div>
        {/* <!-- main-panel ends --> */}
      </div>
    </>
  );
}

export default CompetitionApply;