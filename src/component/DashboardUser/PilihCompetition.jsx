import React from "react";
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
import imgCards from "../../assets/img/maskot.png";

const PilihCompetition = () => {

   const backgroundImageUrl = "url(../../assets/img/img_6.jpg)";

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
     //  width: "170px",
     //  height: "200px",
     width: "200px",
     height: "300px",
     margin: "15px"
   };

   const styleImgCards = {
     width: "150px",
     height: "150px",
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
            <center>
              <h1>Daftar Competition</h1>
              <div
                class="row justify-content-center center px-3 mt-5"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div class="col-md-3" data-aos="zoom-in" data-aos-delay="300">
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
                      <h5
                        class="card-title"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Karya Tulis Ilmiah
                      </h5>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-fw btn-lg"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Daftar
                      </button>
                    </div>
                    <div
                      class="card-body"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    ></div>
                  </div>
                </div>

                <div class="col-md-3" data-aos="zoom-in" data-aos-delay="300">
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
                      <h5
                        class="card-title"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        UI/UX
                      </h5>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-fw btn-lg"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Daftar
                      </button>
                    </div>
                    <div
                      class="card-body"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    ></div>
                  </div>
                </div>

                <div class="col-md-3" data-aos="zoom-in" data-aos-delay="300">
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
                      <h5
                        class="card-title"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Desain Poster
                      </h5>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-fw btn-lg"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Daftar
                      </button>
                    </div>
                    <div
                      class="card-body"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    ></div>
                  </div>
                </div>

                <div class="col-md-3" data-aos="zoom-in" data-aos-delay="300">
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
                      <h5
                        class="card-title"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Software Development
                      </h5>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-fw btn-lg"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                      >
                        Daftar
                      </button>
                    </div>
                    <div
                      class="card-body"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    ></div>
                  </div>
                </div>
              </div>
            </center>
          </div>
          {/* <!-- partial --> */}
        </div>
        {/* <!-- main-panel ends --> */}
      </div>
    </>
  );
};

export default PilihCompetition;
