import React, { Component } from "react";
import "../../assets/css/From.css";
import maskot from "../../assets/img/invofest.png";
import { getDatabase, push, ref, set } from "firebase/database";
import { Auth, getDataAPI } from "../../config/firebase/firebase";
 
class FormBiodata extends Component {
  state = {
    username: "",
    ttl: "",
    alamat: "",
    noHp: "",
    status: "",
    pendidikan: "",
    jurusan: "",
  };
 componentDidMount(){
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    const user = Auth.currentUser;
    const uid = user.uid;
    getDataAPI(uid); 

 }

  handleSaveBiodata = () => {
    const user = Auth.currentUser;
    const uid = user.uid;
    const { username, ttl, alamat, noHp, status, pendidikan, jurusan } = this.state;
    
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
    console.log(newData);
    set(newBiodataRef, newData)
      .then((newData) => {
        console.log('Data berhasil disimpan ke Firebase : ',newData);
      })
      .catch((error) => {
        console.error('Gagal menyimpan data ke Firebase:', error);
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { username, ttl, alamat, noHp, status, pendidikan, jurusan } = this.state;
    return (
      <div className="belakang_biodata">
        <div className="card-biodata">
          <div className="wrapper">
            <div className="logo">
              <img src={maskot} alt="" />
            </div>
            <div className="text-center mt-2 name">ISI BIODATA</div>
            <form className="p-3 "onSubmit={this.handleSaveBiodata}>
              <div className="mt-5">
                <div className="form-field d-flex align-items-center mt-5">
                  {/* <label htmlFor="username">Username</label> */}
                  <input
                    type="text"
                    className="input"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                  {/* <label htmlFor="alamat">Alamat</label> */}
                  <input
                    type="date"
                    className="input"
                    id="tanggalLahir"
                    name="ttl"
                    value={ttl}
                    onChange={this.handleChange}
                    placeholder="Tempat Tanggal Lahir"
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                  {/* <label htmlFor="tanggalLahir">Tanggal Lahir</label> */}
                  <input
                    type="text"
                    className="input"
                    name="alamat"
                    value={alamat}
                    onChange={this.handleChange}
                    placeholder="Enter your address"
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                  {/* <label htmlFor="nomerHandphone">Nomer Handphone</label> */}
                  <input
                    type="text"
                    className="input"
                    name="noHp"
                    value={noHp}
                    onChange={this.handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                <input
                    type="text"
                    className="input"
                    name="status"
                    value={status}
                    onChange={this.handleChange}
                    placeholder="Enter your education status"
                  />
                  {/* {/* <label htmlFor="jenjangPendidikan">Jenjang Pendidikan/Status</label> */}
                </div>
                <div className="form-field d-flex align-items-center">
                  {/* {/* <label htmlFor="namaInstitusi">Nama Institusi</label> */} 
                  <input
                    type="text"
                    className="input"
                    name="pendidikan"
                    value={pendidikan}
                    onChange={this.handleChange}
                    placeholder="Enter your institution"
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                  {/* {/* <label htmlFor="namaInstitusi">Nama Institusi</label> */} 
                  <input
                    type="text"
                    className="input"
                    name="jurusan"
                    value={jurusan}
                    onChange={this.handleChange}
                    placeholder="jurusan"
                  />
                </div>
                <button
                  className="button btn mt-3"
                  type="button"
                  onClick={this.handleSaveBiodata}
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
}

export default FormBiodata;
