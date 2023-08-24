import React from "react";
import "../../assets/css/From.css";
import maskot from "../../assets/img/invofest.png";

export default function Form() {
  return (
    <div className="belakang">
      <div className="card-login">
        <div className="wrapper">
          <div className="logo">
            <img src={maskot} alt="" />
          </div>
          <div className="text-center mt-2 name">ISI BIODATA </div>
          <form className="p-3 mt-5">
            <div className="mt-5">
              <div className="form-field d-flex align-items-center mt-5">
                <input type="Username" placeholder="Username" />
              </div>
              <div className="form-field d-flex align-items-center">
                <input type="Alamat" placeholder="Alamat" />
              </div>
              <div className="form-field d-flex align-items-center">
                <input type="Tanggal Lahir" placeholder="Tanggal Lahir" />
              </div>
              <div className="form-field d-flex align-items-center">
                <input type="Nomer Handphone" placeholder="Nomer Handphone" />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="Jenjang Pendidikan/Status"
                  placeholder="Jenjang Pendidikan/Status"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input type="Nama Institusi" placeholder="Alamat" />
              </div>
              <button className="button btn mt-3" type="submit">
                SELESAI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
