import React from 'react'
import successImg from "../../assets/img/maskot.png"
import Footer from '../Footer';

const RegisterSucces = () => {
  const styleFullScreen = {
    height: '100vh', // 100% tinggi viewport
    width: '100%',   // 100% lebar viewport
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const styleFooter = {
    paddingTop: "80px",
    marginTop: "80px"
  }
  return (
    <>
      <div class="container" style={styleFullScreen}>
        <div class="row align-items-center row-login justify-content-center">
          <div class="col-lg-6 text-center">
            <img
              style={{ width: "200px", height: "200px" }}
              src={successImg}
              alt=""
              class="mb-4"
            />
            <h2>Registrasi Berhasil!</h2>
            <p>
              Silahkan cek dashboard anda! <br/> untuk informasi lebih lanjut
            </p>  
            <div>
              <a class="btn btn-success w-50 mt-4" href="/profile">
                My Dashboard
              </a>
              <a class="btn btn-signup w-50 mt-4" href="/">
                Go Landing Pages
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterSucces;