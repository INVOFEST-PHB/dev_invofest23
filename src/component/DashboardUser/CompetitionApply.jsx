import React, { useEffect } from 'react';
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
import imgCards from "../../assets/img/maskot.png"
import "animate.css";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import TrackVisibility from "react-on-screen";

const CompetitionApply = () => {

    useEffect(() => {
      AOS.init();
    }, []);

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

    const tag_A = {
      textDecoration: "none",
    };

    const customCard = {
      border: "2px solid",
      borderImage: "linear-gradient(to right, pink, #ff1493",
      borderImageSlice: "1",
      width: "290px",
      height: "350px",

    }

    const styleImgCards = {
      width: "150px",
      height: "150px"
    }

    // useEffect(() => {
    //   let ticker = setInterval(
    //     () => {
    //       tick();
    //     }
    //     // ,
    //     // delta
    //   );

    //   return () => {
    //     clearInterval(ticker);
    //   };
    // });

    // const tick = () => {
    //   let i = loopNum % toRotate.length;
    //   let fullText = toRotate[i];
    //   let updatedText = isDeleting
    //     ? fullText.substring(0, text.length - 1)
    //     : fullText.substring(0, text.length + 1);

    //   setText(updatedText);
    // };
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
              <div
                class="col-12 grid-margin stretch-card"
                data-aos="fade-in"
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
                      <div class="col-3 col-sm-2 col-xl-2 ps-0 text-center">
                        <span>
                          <a
                            href="https://www.bootstrapdash.com/product/corona-admin-template/"
                            target="_blank"
                            class="btn btn-outline-light btn-rounded get-started-btn"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                          >
                            Start
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" data-aos="zoom-in" data-aos-delay="300">
              <div class="grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h2
                      class="card-title p-4 mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      Astron Dev <br />{" "}
                      <p
                        class="text-muted"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Karya Tulis Ilmiah
                      </p>
                    </h2>

                    <div
                      class="row mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div class="col-4 bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-md-3 px-xl-4 rounded">
                        <h6
                          class="font-weight-bold mb-1"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Ketua
                        </h6>
                      </div>
                      <div
                        class="col-4 flex-grow text-md text-xl-left px-5 text-xl-right"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <h6
                          class="font-weight-bold mb-1"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Avriansyah Bahtiar
                        </h6>
                      </div>
                    </div>

                    <div
                      class="row mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div class="col-4 bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-md-3 px-xl-4 rounded">
                        <h6
                          class="font-weight-bold mb-1"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Pembayaran
                        </h6>
                      </div>
                      <div class="col-4 flex-grow text-md text-xl-left px-5 text-xl-right">
                        <h6
                          class="font-weight-bold mb-1"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Testing
                        </h6>
                      </div>
                    </div>

                    <div
                      class="row mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div class="col-4 bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-md-3 px-xl-4 rounded">
                        <h6
                          class="font-weight-bold mb-1"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Tanggal Pembayaran
                        </h6>
                      </div>
                      <div class="col-4 flex-grow text-md text-xl-left px-5 text-xl-right">
                        <h6
                          class="font-weight-bold mb-1"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          16 / 4 / 2023
                        </h6>
                      </div>
                    </div>

                    <div
                      class="row mx-auto"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div class="col-4 bg-gray-dark d-flex d-md-block d-xl-flex flex-row px-md-3 px-xl-4 rounded">
                        <h6
                          class="font-weight-bold mb-1"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          Bukti Pembayaran
                        </h6>
                      </div>
                      <div class="col-4 flex-grow text-md text-xl-left px-5 text-xl-right">
                        <a href="#" style={tag_A} class="font-weight-bold mb-1">
                          Lihat
                        </a>
                      </div>
                    </div>
                    <br />
                    <br />

                    <div
                      class="mx-auto px-4"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      {/* <!-- <button type="button" class="btn btn-success">Tambah Anggota</button> --> */}
                      <button
                        type="button"
                        class="btn btn-success btn-rounded btn-fw"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Tambah Anggota
                      </button>
                    </div>
                    {/* <!-- Card --> */}
                    <center>
                      <div
                        class="row justify-content-center center px-3 mt-5"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        <div
                          class="col-md-4 grid-margin"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          <div
                            class="card text-center p-3 mt-4 align-items-center d-flex"
                            style={customCard}
                          >
                            {/* <img
                              style={styleImgCards}
                              src={imgCards}
                              class="card-img-top"
                              alt="..."
                            ></img> */}

                            <div className="animate__animated animate__zoomIn">
                              <img
                                style={styleImgCards}
                                src={imgCards}
                                alt="imgCards"
                                className="justify-content-center"
                              />
                            </div>

                            <div
                              class="card-body"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              <h5 class="card-title">Ketua</h5>
                              <p class="card-text">Isi card ini...</p>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-md-4"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          <div
                            class="card text-center p-3 mt-4 align-items-center"
                            style={customCard}
                          >
                            <div className="animate__animated animate__zoomIn">
                              <img
                                style={styleImgCards}
                                src={imgCards}
                                alt="imgCards"
                                className="justify-content-center"
                              />
                            </div>
                            <div
                              class="card-body"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              <h5 class="card-title">Anggota</h5>
                              <p class="card-text">Isi card ini...</p>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-md-4"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          <div
                            class="card text-center p-3 mt-4 align-items-center"
                            style={customCard}
                          >
                            <div className="animate__animated animate__zoomIn">
                              <img
                                style={styleImgCards}
                                src={imgCards}
                                alt="imgCards"
                                className="justify-content-center"
                              />
                            </div>
                            <div
                              class="card-body"
                              data-aos="zoom-in"
                              data-aos-delay="300"
                            >
                              <h5 class="card-title">Anggota</h5>
                              <p class="card-text">Isi card ini...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </center>
                  </div>

                  <div
                    class="d-grid gap-2 col-6 mx-auto p-4 m-4"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
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