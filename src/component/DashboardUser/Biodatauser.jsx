import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Auth, getDataAPI } from '../../config/firebase/firebase';
import { Fragment } from 'react';
import LogoSelamatDatang from "../../assets_dashboardUser/assets/images/dashboard/Group126@2x.png";


class Biodatauser extends Component {
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
        .BiodataApi(uid)
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
    const user = Auth.currentUser;
      const { informasi } = this.props;
    const { userData } = this.state;
    const displayName = user.displayName;

    console.log("Biodata :", informasi);

        return (
          <div>
          {informasi.length > 0 ? (
      <Fragment>
        {informasi.map((bio) => {
          return (
            <div className="content-wrapper" key={bio.id}>
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
    </div>
        );
    }
}
const reduxState = (state) => ({
    informasi: state.informasi,
  });
  
  const reduxDispatch = (dispatch) => ({
    BiodataApi: (data) => dispatch(getDataAPI(data)),
  });
export default connect(reduxState,reduxDispatch)(Biodatauser);