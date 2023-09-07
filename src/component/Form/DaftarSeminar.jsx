import React, { Component } from "react";
import maskot from "../../assets/img/invofest.png";
import { getDatabase, push, ref, set } from "firebase/database";
import { Auth } from "../../config/firebase/firebase";
import Seminar from "../../pages/Seminar";

class DaftarSeminar extends Component {
  state = {
    jenisSeminar: "Seminar Nasional", // Nilai default "UI/UX"
    email: "",
    nama: "",
    alamat:"",
    asalPerguruanTinggi: "",
    buktiPembayaran: "",
    noWhatsApp: "",
    formErrors: {
      email: "",
      nama: "",
      alamat:"" ,
      asalPerguruanTinggi: "",
      buktiPembayaran: "",
      noWhatsApp: "",
    },
    formValid: false,
  };

  handleSaveSeminar = () => {
    const user = Auth.currentUser;
    const uid = user.uid;
    const {
      email,
      nama,
      alamat,
      asalPerguruanTinggi,
      buktiPembayaran,
      noWhatsApp,
    } = this.state;

    // Validasi form sebelum mengirim data
    if (this.validateForm()) {
      const db = getDatabase();
      const seminarRef = ref(db,  "seminar/" + uid);
      const newSeminarRef = push(seminarRef);
      const newData = {
        eventAcara:"Seminar",
        email,
        nama,
        asalPerguruanTinggi,
        buktiPembayaran,
        noWhatsApp,
        StatusPembayaranSeminar: "Pending"
      };

      set(newSeminarRef, newData)
        .then(() => {
          console.log("Data berhasil disimpan ke Firebase");
          // Tambahkan logika lain yang Anda butuhkan setelah sukses menyimpan data.
          window.location.href = "/success";
        })
        .catch((error) => {
          console.error("Gagal menyimpan data ke Firebase:", error);
        });
    } else {
      console.error("Form tidak valid. Mohon periksa kembali.");
    }
  };

  // Fungsi untuk validasi form
  validateForm() {
    const {
      email,
      nama,
      alamat,
      asalPerguruanTinggi,
      buktiPembayaran,
      noWhatsApp,
    } = this.state;

    const formErrors = {
      email: "",
      nama: "",
      alamat:"",
      asalPerguruanTinggi: "",
      buktiPembayaran: "",
      noWhatsApp: "",
    };

    // Contoh validasi sederhana: pastikan field yang diperlukan tidak kosong
    let formValid = true;
    if (!email) {
      formErrors.email = "Email wajib diisi";
      formValid = false;
    }
    if (!nama) {
      formErrors.nama = "Nama wajib diisi";
      formValid = false;
    }
    if (!asalPerguruanTinggi) {
      formErrors.asalPerguruanTinggi = "Asal Perguruan Tinggi wajib diisi";
      formValid = false;
    }
    if (!buktiPembayaran) {
      formErrors.buktiPembayaran = "Bukti Pembayaran wajib diisi";
      formValid = false;
    }
    if (!noWhatsApp) {
      formErrors.noWhatsApp = "No. WhatsApp Ketua wajib diisi";
      formValid = false;
    }
    if (!alamat) {
      formErrors.alamat = "No. WhatsApp Ketua wajib diisi";
      formValid = false;
    }

    this.setState({ formErrors });
    return formValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
    
      email,
      nama,
      alamat,
      asalPerguruanTinggi,
      buktiPembayaran,
      noWhatsApp,
      formErrors,
    } = this.state;

    return (
      <div className="belakang_biodata">
        <div className="card-biodata">
          <div className="wrapper">
          <div className="maskot">
              <img src={maskot} alt="" />
            </div>
            <h2 className="text-center font-bold mt-3 "> Daftar Seminar</h2>
            <form className="p-3">
              <div className="mt-5">
                <div className="form-field d-flex align-items-center mt-auto">
                  <input
                    type="text"
                    className="input"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                  <div className="error">{formErrors.email}</div>
                </div>

                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="nama"
                    value={nama}
                    onChange={this.handleChange}
                    placeholder="Nama"
                  />
                  <div className="error">{formErrors.nama}</div>
                </div>

                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="alamat"
                    value={alamat}
                    onChange={this.handleChange}
                    placeholder="Alamat"
                  />
                  <div className="error">{formErrors.alamat}</div>
                </div>
                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="asalPerguruanTinggi"
                    value={asalPerguruanTinggi}
                    onChange={this.handleChange}
                    placeholder="Asal Perguruan Tinggi"
                  />
                  <div className="error">{formErrors.asalPerguruanTinggi}</div>
                </div>
                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="buktiPembayaran"
                    value={buktiPembayaran}
                    onChange={this.handleChange}
                    placeholder="Link Drive Bukti Pembayaran"
                  />
                  <div className="error">{formErrors.buktiPembayaran}</div>
                </div>
                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="noWhatsApp"
                    value={noWhatsApp}
                    onChange={this.handleChange}
                    placeholder="Nomer WhatsApp"
                  />
                  <div className="error">{formErrors.noWhatsApp}</div>
                </div>

               

                <button
                  className="button btn mt-3"
                  type="button"
                  onClick={this.handleSaveSeminar}
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

export default DaftarSeminar;
