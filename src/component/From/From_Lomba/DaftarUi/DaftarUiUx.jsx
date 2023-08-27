import React, { Component } from "react";
import maskot from "../../../../assets/img/invofest.png";
import { getDatabase, push, ref, set } from "firebase/database";
import { Auth } from "../../../../config/firebase/firebase";

class DaftarUiUx extends Component {
  state = {
    jenisLomba: "UI/UX", // Nilai default "UI/UX"
    email: "",
    namaTeam: "",
    namaKetuaTeam: "",
    teamMember1: "",
    teamMember2: "",
    asalPerguruanTinggi: "",
    kartuTandaMahasiswa: "",
    noWhatsAppKetua: "",
    formErrors: {
      jenisLomba: "",
      email: "",
      namaTeam: "",
      namaKetuaTeam: "",
      teamMember1: "",
      teamMember2: "",
      asalPerguruanTinggi: "",
      kartuTandaMahasiswa: "",
      noWhatsAppKetua: "",
    },
    formValid: false,
  };

  handleSaveLomba = () => {
    const user = Auth.currentUser;
    const uid = user.uid;
    const {
      jenisLomba,
      email,
      namaTeam,
      namaKetuaTeam,
      teamMember1,
      teamMember2,
      asalPerguruanTinggi,
      kartuTandaMahasiswa,
      noWhatsAppKetua,
    } = this.state;

    // Validasi form sebelum mengirim data
    if (this.validateForm()) {
      const db = getDatabase();
      const lombaRef = ref(db, jenisLomba + "/" + uid);
      const newLombaRef = push(lombaRef);
      const newData = {
        jenisLomba,
        email,
        namaTeam,
        namaKetuaTeam,
        teamMember1,
        teamMember2,
        asalPerguruanTinggi,
        kartuTandaMahasiswa,
        noWhatsAppKetua,
      };

      set(newLombaRef, newData)
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
      jenisLomba,
      email,
      namaTeam,
      namaKetuaTeam,
      teamMember1,
      teamMember2,
      asalPerguruanTinggi,
      kartuTandaMahasiswa,
      noWhatsAppKetua,
    } = this.state;

    const formErrors = {
      jenisLomba: "",
      email: "",
      namaTeam: "",
      namaKetuaTeam: "",
      teamMember1: "",
      teamMember2: "",
      asalPerguruanTinggi: "",
      kartuTandaMahasiswa: "",
      noWhatsAppKetua: "",
    };

    // Contoh validasi sederhana: pastikan field yang diperlukan tidak kosong
    let formValid = true;
    if (!jenisLomba) {
      formErrors.jenisLomba = "Jenis Lomba wajib dipilih";
      formValid = false;
    }
    if (!email) {
      formErrors.email = "Email wajib diisi";
      formValid = false;
    }
    if (!namaTeam) {
      formErrors.namaTeam = "Nama Team wajib diisi";
      formValid = false;
    }
    if (!namaKetuaTeam) {
      formErrors.namaKetuaTeam = "Nama Ketua Team wajib diisi";
      formValid = false;
    }
    if (!teamMember1) {
      formErrors.teamMember1 = "Nama Anggota 1 wajib diisi";
      formValid = false;
    }
    if (!teamMember2) {
      formErrors.teamMember2 = "Nama Anggota 2 wajib diisi";
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
    if (!noWhatsAppKetua) {
      formErrors.noWhatsAppKetua = "No. WhatsApp Ketua wajib diisi";
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
      jenisLomba,
      email,
      namaTeam,
      namaKetuaTeam,
      teamMember1,
      teamMember2,
      asalPerguruanTinggi,
      kartuTandaMahasiswa,
      noWhatsAppKetua,
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

                  <select className="form-field form-select input p-xl-3"
                    name="jenisLomba"
                    value={jenisLomba}
                    onChange={this.handleChange}
                  >
                    <option value="Pilih Kategori">Pilih Kategori</option> 
                    <option value="UIUX">UI{"/"}UX </option>
                    <option value="video">Video</option>
                    <option value="Web Design">Web Desain</option>
                    <option value="Karya Tulis">Karya Tulis Ilmiah</option>
                    <option value="Software Dev">Software Development</option>
                  </select>
                  
                  <div className="error">{formErrors.jenisLomba}</div>
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
                    name="namaTeam"
                    value={namaTeam}
                    onChange={this.handleChange}
                    placeholder="Nama Team"
                  />
                  <div className="error">{formErrors.namaTeam}</div>
                </div>

                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="namaKetuaTeam"
                    value={namaKetuaTeam}
                    onChange={this.handleChange}
                    placeholder="Nama Ketua Team"
                  />
                  <div className="error">{formErrors.namaKetuaTeam}</div>
                </div>

                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="teamMember1"
                    value={teamMember1}
                    onChange={this.handleChange}
                    placeholder="Nama Anggota 1"
                  />
                  <div className="error">{formErrors.teamMember1}</div>
                </div>

                <div className="form-field d-flex align-items-center">
                  <input
                    type="text"
                    className="input"
                    name="teamMember2"
                    value={teamMember2}
                    onChange={this.handleChange}
                    placeholder="Nama Anggota 2"
                  />
                  <div className="error">{formErrors.teamMember2}</div>
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
                    value={noWhatsAppKetua}
                    onChange={this.handleChange}
                    placeholder="No. WhatsApp Ketua"
                  />
                  <div className="error">{formErrors.noWhatsAppKetua}</div>
                </div>
                
                <button
                  className="button btn mt-3"
                  type="button"
                  onClick={this.handleSaveLomba}
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

export default DaftarUiUx;
