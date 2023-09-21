import React, { useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import { Auth } from "../../config/firebase/firebase";
import maskot from "../../assets/img/invofest.png";
import "../../assets/css/From.css";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

const DaftarSeminar = () => {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [asalPerguruanTinggi, setAsalPerguruanTinggi] = useState("");
  const [noWhatsApp, setNoWhatsApp] = useState("");
  const [buktiPembayaran, setBuktiPembayaran] = useState(null);

  const [formErrors, setFormErrors] = useState({
    email: "",
    nama: "",
    alamat: "",
    asalPerguruanTinggi: "",
    buktiPembayaran: "",
    noWhatsApp: "",
  });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "nama":
        setNama(value);
        break;
      case "alamat":
        setAlamat(value);
        break;
      case "asalPerguruanTinggi":
        setAsalPerguruanTinggi(value);
        break;
      case "noWhatsApp":
        setNoWhatsApp(value);
        break;
      case "buktiPembayaran":
        // Handle the file input change
        if (files.length > 0) {
          setBuktiPembayaran(files[0]);
        } else {
          setBuktiPembayaran(null);
        }
        break;
      default:
        break;
    }
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const errors = { ...formErrors };
    switch (fieldName) {
      case "email":
        errors.email = value.length === 0 ? "Email wajib diisi" : "";
        break;
      case "nama":
        errors.nama = value.length === 0 ? "Nama wajib diisi" : "";
        break;
      case "alamat":
        errors.alamat = value.length === 0 ? "Alamat wajib diisi" : "";
        break;
      case "asalPerguruanTinggi":
        errors.asalPerguruanTinggi =
          value.length === 0 ? "Asal Perguruan Tinggi wajib diisi" : "";
        break;
      case "buktiPembayaran":
        errors.buktiPembayaran =
          value.length === 0 ? "Bukti Pembayaran wajib diisi" : "";
        break;
      case "noWhatsApp":
        errors.noWhatsApp =
          value.length === 0 ? "No. WhatsApp wajib diisi" : "";
        break;
      default:
        break;
    }

    setFormErrors(errors);
    setFormValid(!Object.values(errors).some((error) => error.length > 0));
  };

  const handleSaveSeminar = async () => {
    try {
      const user = Auth.currentUser;
      const uid = user.uid;
      const db = getDatabase();
      const seminarRef = push(ref(db, "seminar/" + uid));

      if (formValid) {
        // Upload buktiPembayaran if it's not null
        let buktiPembayaranPath = null;
        if (buktiPembayaran) {
          const storage = getStorage();
          const buktiPembayaranRef = storageRef(
            storage,
            `bukti_pembayaran/seminar/${uid}_${buktiPembayaran.name}`
          );
          const buktiPembayaranSnapshot = await uploadBytes(
            buktiPembayaranRef,
            buktiPembayaran
          );
          buktiPembayaranPath = buktiPembayaranSnapshot.metadata.fullPath;
        }

        await set(seminarRef, {
          eventAcara: "Seminar",
          email: email,
          nama: nama,
          alamat: alamat,
          asalPerguruanTinggi: asalPerguruanTinggi,
          buktiPembayaran: buktiPembayaranPath,
          noWhatsApp: noWhatsApp,
          StatusPembayaran: "pending",
        });

        console.log("Data berhasil disimpan ke Firebase");
        window.location.href = "/success";
      } else {
        console.error("Form tidak valid. Mohon periksa kembali.");
      }
    } catch (error) {
      console.error("Gagal menyimpan data ke Firebase:", error);
    }
  };

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
          <h2 className="text-center font-bold mt-3">Daftar Seminar</h2>
          <form className="p-3">
            <div className="mt-5">
              <div className="form-field d-flex align-items-center mt-auto">
                <input
                  type="text"
                  className="input"
                  name="email"
                  value={email}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  placeholder="Asal Perguruan Tinggi"
                />
                <div className="error">{formErrors.asalPerguruanTinggi}</div>
              </div>
              <div className="form-field d-flex align-items-center">
              <span class="control-fileupload">
              <label for="file" >{buktiPembayaran ? `File : ${buktiPembayaran.name}` : ' file ktm'}</label>
          <input type="file" id="file" accept="image/*"
                  name="buktiPembayaran"
                  onChange={handleChange}/>
        </span>
        </div>

              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="noWhatsApp"
                  value={noWhatsApp}
                  onChange={handleChange}
                  placeholder="Nomer WhatsApp"
                />
                <div className="error">{formErrors.noWhatsApp}</div>
              </div>

              <button
                className="button btn mt-3"
                type="button"
                onClick={handleSaveSeminar}
                disabled={!formValid}
              >
                SELESAI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DaftarSeminar;
