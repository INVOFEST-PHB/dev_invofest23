import React, { Component } from "react";
import maskot from "../../assets/img/invofest.png";
import { getDatabase, push, ref, set } from "firebase/database";
import { Auth } from "../../config/firebase/firebase";

class DaftarWorkshop extends Component {
  state = {
    jenisWorkshop: "Workshop", // Nilai default "UI/UX"
    email: "",
    nama: "",
    alamat:"",
    asalPerguruanTinggi: "",
    buktiPembayaran: "",
    noWhatsApp: "",
    statusPembayaran:"pending",
    formErrors: {
      email: "",
      nama: "",
      alamat:"",      
      asalPerguruanTinggi: "",
      buktiPembayaran: "",
      noWhatsApp: "",
    },
    formValid: false,
  };

  handleSaveWorkshop = () => {
    const user = Auth.currentUser;
    const uid = user.uid;
    const {
      jenisWorkshop,
      email,
      nama,
      alamat,
      asalPerguruanTinggi,
      buktiPembayaran,
      noWhatsApp,
      statusPembayaran
    } = this.state;

    // Validasi form sebelum mengirim data
    if (this.validateForm()) {
      const db = getDatabase();
      const workshopRef = ref(db, jenisWorkshop + "/" + uid);
      const newWorkshopRef = push(workshopRef);
      const newData = {
        jenisWorkshop,
        email,
        nama,
        alamat,
        asalPerguruanTinggi,
        buktiPembayaran,
        noWhatsApp,
        statusPembayaranWorkshop: "Pending" 
      };

      set(newWorkshopRef, newData)
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
      jenisWorkshop,
      email,
      nama,
      alamat,
      asalPerguruanTinggi,
      buktiPembayaran,
      noWhatsApp,
    } = this.state;

    const formErrors = {
      jenisWorkshop,
      email: "",
      nama: "",
      alamat: "",
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
      formErrors.buktiPembayaran = "Link Drive Bukti Pembayaran";
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
      jenisWorkshop,
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
            <h2 className="text-center font-bold mt-3 "> Daftar Workshop</h2>
            <form className="p-3">
              <div className="mt-5">
                <select
                  className="form-field form-select input p-xl-3"
                  name="jenisWorkshop"
                  value={jenisWorkshop}
                  onChange={this.handleChange}
                >
                  <option value="Pilih Workshop">Pilih Workshop</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Artificial Intelegent">Artificial Intelegent</option>
                  <option value="Mobile Development">Mobile Development</option>
                </select>

                {/* <div className="error">{formErrors.jenisWorkshop}</div> */}
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
                    placeholder="Kartu Tanda Mahasiswa (KTM)"
                  />
                  <div className="error">{formErrors.buktiPembayaran}</div>
                </div>

                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="noWhatsApp"
                    value={ noWhatsApp}
                    onChange={this.handleChange}
                    placeholder="No. WhatsApp"
                  />
                  <div className="error">{formErrors. noWhatsApp}</div>
                </div>

                <button
                  className="button btn mt-3"
                  type="button"
                  onClick={this.handleSaveWorkshop}
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

export default DaftarWorkshop;
