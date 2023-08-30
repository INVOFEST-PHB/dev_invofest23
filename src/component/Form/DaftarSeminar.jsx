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
    asalPerguruanTinggi: "",
    kartuTandaMahasiswa: "",
    noWhatsApp: "",
    formErrors: {
      email: "",
      nama: "",
      asalPerguruanTinggi: "",
      kartuTandaMahasiswa: "",
      noWhatsApp: "",
    },
    formValid: false,
  };

  handleSaveSeminar = () => {
    const user = Auth.currentUser;
    const uid = user.uid;
    const {
      jenisSeminar,
      email,
      nama,
      asalPerguruanTinggi,
      kartuTandaMahasiswa,
      noWhatsApp,
    } = this.state;

    // Validasi form sebelum mengirim data
    if (this.validateForm()) {
      const db = getDatabase();
      const seminarRef = ref(db, Seminar + "/" + uid);
      const newSeminarRef = push(seminarRef);
      const newData = {
        jenisSeminar,
        email,
        nama,
        asalPerguruanTinggi,
        kartuTandaMahasiswa,
        noWhatsApp,
      };

      set(newSeminarRef, newData)
        .then(() => {
          console.log("Data berhasil disimpan ke Firebase");
          // Tambahkan logika lain yang Anda butuhkan setelah sukses menyimpan data.
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
      jenisSeminar,
      email,
      nama,
      asalPerguruanTinggi,
      kartuTandaMahasiswa,
      noWhatsApp,
    } = this.state;

    const formErrors = {
      jenisSeminar,
      email: "",
      nama: "",
      asalPerguruanTinggi: "",
      kartuTandaMahasiswa: "",
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
    if (!kartuTandaMahasiswa) {
      formErrors.kartuTandaMahasiswa = "KTM wajib diisi";
      formValid = false;
    }
    if (!noWhatsApp) {
      formErrors.noWhatsApp = "No. WhatsApp Ketua wajib diisi";
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
      jenisSeminar,
      email,
      nama,
      asalPerguruanTinggi,
      kartuTandaMahasiswa,
      noWhatsApp,
      formErrors,
    } = this.state;

    return (
      <div className="belakang_biodata">
        <div className="card-biodata">
          <div className="wrapper">
            <div className="logo">
              <img src={maskot} alt="" />
            </div>
            <div className="text-center font-bold">ISI BIODATA</div>
            <form className="p-3">
              <div className="mt-5">
                <select
                  className="form-field form-select input p-xl-3"
                  name="jenisSeminar"
                  value={jenisSeminar}
                  onChange={this.handleChange}
                >
                  <option value="Pilih Seminar">Pilih Seminar</option>
                  <option value="UIUX">Seminar Nasional</option>
                </select>

                <div className="error">{formErrors.jenisSeminar}</div>
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
                    name="kartuTandaMahasiswa"
                    value={kartuTandaMahasiswa}
                    onChange={this.handleChange}
                    placeholder="Kartu Tanda Mahasiswa (KTM)"
                  />
                  <div className="error">{formErrors.kartuTandaMahasiswa}</div>
                </div>

                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="noWhatsAppKetua"
                    value={noWhatsApp}
                    onChange={this.handleChange}
                    placeholder="No. WhatsApp Ketua"
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
