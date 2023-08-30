import React from 'react'

const BlankPage = () => {
  return (
    <div>
      <div style={{marginBottom: "400px" }} class="container">
        <div class="row align-items-center row-login justify-content-center">
          <div style={{marginTop: "200px"}} class="col-lg-6 text-center">
            {/* <img
              style={}
              src={successImg}
              alt=""
              class="mb-4"
            /> */}
            <h1>404</h1>
            <h2>Halaman tidak ditemukan!</h2>
            <p>
              Silahkan cek alamat URL yang benar!
            </p>
            <div>
              <a class="btn btn-success w-50 mt-4" href="#">
                Kembali
              </a>
              {/* <a class="btn btn-signup w-50 mt-4" href="#">
                Go Landing Pages
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlankPage