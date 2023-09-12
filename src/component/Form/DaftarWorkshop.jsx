import React, { Component } from "react";
import maskot from "../../assets/img/invofest.png";
import { getDatabase, push, ref, set } from "firebase/database";
import { Auth } from "../../config/firebase/firebase";
import { getStorage, uploadBytes, ref as storageRef, getDownloadURL } from "firebase/storage";

class DaftarWorkshop extends Component {
  state = {
    email: "",
    nama: "",
    alamat: "",
    asalPerguruanTinggi: "",
    buktiPembayaran: null, // Ubah menjadi null
    noWhatsApp: "",
    formErrors: {
      email: "",
      nama: "",
      alamat: "",
      asalPerguruanTinggi: "",
      buktiPembayaran: "",
      noWhatsApp: "",
    },
    formValid: false,
  };

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
    const { name, value, type } = e.target;

    if (type === "file") {
      // Jika input adalah file, simpan file
      this.setState({ [name]: e.target.files[0] });
    } else {
      // Jika bukan file, simpan nilai biasa
      this.setState({ [name]: value });
    }
  };

  handleSaveWorkshop = async () => {
    const user = Auth.currentUser;
    const uid = user.uid;
    const {
      email,
      jenisWorkshop,
      nama,
      alamat,
      asalPerguruanTinggi,
      buktiPembayaran,
      noWhatsApp,
    } = this.state;

    if (this.validateForm()) {
      const db = getDatabase();
      const workshopRef = ref(db, jenisWorkshop+"/"+ uid);
      const newWorkshopRef = push(workshopRef);

      const storage = getStorage();
      const storageReference = storageRef(storage, `bukti_pembayaran/${this.jenisWorkshop}/${nama}`);
      await uploadBytes(storageReference, buktiPembayaran);

      const downloadURL = await getDownloadURL(storageReference);

      const newData = {
        eventAcara: "Workshop",
        jenisWorkshop,
        email,
        nama,
        alamat,
        asalPerguruanTinggi,
        buktiPembayaran: downloadURL, // Save the image URL
        noWhatsApp,
        StatusPembayaran: "pending",
      };

      set(newWorkshopRef, newData)
        .then(() => {
          console.log("Data berhasil disimpan ke Firebase");
          window.location.href = "/success";
        })
        .catch((error) => {
          console.error("Gagal menyimpan data ke Firebase:", error);
        });
    } else {
      console.error("Form tidak valid. Mohon periksa kembali.");
    }
  };


  handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };



  render() {
    const {
      email,
      nama,
      alamat,
      asalPerguruanTinggi,
      noWhatsApp,
      formErrors,
      buktiPembayaran,
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
                  value={this.state.jenisWorkshop}
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
              <span class="control-fileupload">
              <label for="file" >{buktiPembayaran ? `File : ${buktiPembayaran.name}` : 'Choose a file ktm ketua'}</label>
          <input type="file" id="file" accept="image/*"
                  name="buktiPembayaran"
                  onChange={this.handleChange}/>
        </span>
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
