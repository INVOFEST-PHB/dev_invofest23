import React, { useState, useEffect } from "react";
import "../../assets/css/From.css";
import maskot from "../../assets/img/invofest.png";
import { getDatabase, push, ref, set } from "firebase/database";
import { Auth, getDataAPI } from "../../config/firebase/firebase";
import { useNavigate } from "react-router-dom";

function FormBiodata() {
  const [state, setState] = useState({
    username: "",
    ttl: "",
    alamat: "",
    noHp: "",
    status: "",
    pendidikan: "",
    jurusan: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    const user = Auth.currentUser;
    const uid = user.uid;
    getDataAPI(uid);
  }, []);

  const handleSaveBiodata = () => {
    const user = Auth.currentUser;
    const uid = user.uid;
    const { username, ttl, alamat, noHp, status, pendidikan, jurusan } = state;

    const db = getDatabase();
    const biodataRef = ref(db, 'biodata/' + uid);
    const userdata = localStorage.getItem('userdata');
    const newBiodataRef = push(biodataRef); // Buat referensi baru dengan push()
    const newData = {
      username: username,
      ttl: ttl,
      alamat: alamat,
      noHp: noHp,
      status: status,
      pendidikan: pendidikan,
      jurusan: jurusan,
    };

    set(newBiodataRef, newData)
      .then(() => {
        console.log('Data berhasil disimpan ke Firebase');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Gagal menyimpan data ke Firebase:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { username, ttl, alamat, noHp, status, pendidikan, jurusan } = state;

  return (
    <div className="belakang_biodata">
      <div className="card-biodata">
        <div className="wrapper">
          <div className="maskot">
          <center>
          <div className="col-6">
              <img src={maskot} alt="" />
          </div>
            </center>
          </div>
          <h2 className="text-center font-bold mt-3 ">Isi Biodata</h2>
          <form className="p-3 " onSubmit={handleSaveBiodata}>
            <div className="mt-5">
              <div className="form-field d-flex align-items-center mt-5">
                <input
                  type="text"
                  className="input"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="date"
                  className="input"
                  id="tanggalLahir"
                  name="ttl"
                  value={ttl}
                  onChange={handleChange}
                  placeholder="Tempat Tanggal Lahir"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="alamat"
                  value={alamat}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="noHp"
                  value={noHp}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="status"
                  value={status}
                  onChange={handleChange}
                  placeholder="Enter your education status"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="pendidikan"
                  value={pendidikan}
                  onChange={handleChange}
                  placeholder="Enter your institution"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="jurusan"
                  value={jurusan}
                  onChange={handleChange}
                  placeholder="jurusan"
                />
              </div>
              <button
                className="button btn mt-3"
                type="button"
                onClick={handleSaveBiodata}
              >
                SELESAI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormBiodata;
