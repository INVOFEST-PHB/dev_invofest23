import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { Auth } from '../../config/firebase/firebase';
import maskot from "../../assets/img/img_6.jpg";
import "../../assets/css/From.css"; 

const File = () => {
  const [jenisLomba, setJenisLomba] = useState("UI/UX");
  const [email, setEmail] = useState("");
  const [namaTeam, setNamaTeam] = useState("");
  const [namaKetuaTeam, setNamaKetuaTeam] = useState("");
  const [teamMember1, setTeamMember1] = useState("");
  const [teamMember2, setTeamMember2] = useState("");
  const [asalPerguruanTinggi, setAsalPerguruanTinggi] = useState("");
  const [noWhatsAppKetua, setNoWhatsAppKetua] = useState("");
  const [kartuTandaMahasiswa, setKartuTandaMahasiswa] = useState(null);
  const [buktiPembayaran, setBuktiPembayaran] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "jenisLomba":
        setJenisLomba(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "namaTeam":
        setNamaTeam(value);
        break;
      case "namaKetuaTeam":
        setNamaKetuaTeam(value);
        break;
      case "teamMember1":
        setTeamMember1(value);
        break;
      case "teamMember2":
        setTeamMember2(value);
        break;
      case "asalPerguruanTinggi":
        setAsalPerguruanTinggi(value);
        break;
      case "noWhatsAppKetua":
        setNoWhatsAppKetua(value);
        break;
      default:
        break;
    }
  };
  const handleKTMUpload = async (e) => {
    const file = e.target.files[0];
    setKartuTandaMahasiswa(file);
  };

  const handleBuktiPembayaranUpload = async (e) => {
    const file = e.target.files[0];
    setBuktiPembayaran(file);
  };

  const handleSaveLomba = async () => {
    try {
      console.log("Start handleSaveLomba")
      const user = Auth.currentUser;
      const uid = user.uid;

      const storage = getStorage();

      // Upload kartuTandaMahasiswa
      const kartuTandaMahasiswaRef = storageRef(storage, `ktm/${uid}`);
      const kartuTandaMahasiswaSnapshot = await uploadBytes(kartuTandaMahasiswaRef, kartuTandaMahasiswa);

      // Upload buktiPembayaran
      const buktiPembayaranRef = storageRef(storage, `pembayaran/${uid}`);
      const buktiPembayaranSnapshot = await uploadBytes(buktiPembayaranRef, buktiPembayaran);

      // Simpan data ke Realtime Database
      const db = getDatabase();
      const lombaRef = ref(db, jenisLomba + '/' + uid);
      await set(lombaRef, {
        jenisLomba,
        email,
        namaTeam,
        namaKetuaTeam,
        teamMember1,
        teamMember2,
        asalPerguruanTinggi,
        noWhatsAppKetua,
        kartuTandaMahasiswa: kartuTandaMahasiswaSnapshot.metadata.fullPath,
        buktiPembayaran: buktiPembayaranSnapshot.metadata.fullPath,
        statusLomba: "pending",
      });

      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <div className="belakang_biodata">
      <div className="card-biodata">
        <div className="wrapper">
          <div className="maskot">
            <img src={maskot} alt="" />
          </div>
          <h2 className="text-center font-bold mt-3 "> Daftar Competition</h2>
          <form className="p-3">
            <div className="mt-2">
              <select
                className="form-field form-select input p-xl-3"
                name="jenisLomba"
                value={jenisLomba}
                onChange={handleChange}
              >
                <option value="UI/UX">UI/UX</option>
                <option value="Web Design">Web Design</option>
                <option value="Software Dev">Software Development</option>
              </select>
              <div className="form-field d-flex align-items-center mt-auto">
                <input
                  type="text"
                  className="input"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="namaTeam"
                  value={namaTeam}
                  onChange={handleChange}
                  placeholder="Nama Team"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="namaKetuaTeam"
                  value={namaKetuaTeam}
                  onChange={handleChange}
                  placeholder="Nama Ketua Team"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="teamMember1"
                  value={teamMember1}
                  onChange={handleChange}
                  placeholder="Nama Anggota 1"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="teamMember2"
                  value={teamMember2}
                  onChange={handleChange}
                  placeholder="Nama Anggota 2"
                />
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
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="file"
                  className="input"
                  accept="image/*"
                  onChange={handleKTMUpload}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="file"
                  className="input"
                  accept="image/*"
                  onChange={handleBuktiPembayaranUpload}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <input
                  type="text"
                  className="input"
                  name="noWhatsAppKetua"
                  value={noWhatsAppKetua}
                  onChange={handleChange}
                  placeholder="No. WhatsApp Ketua"
                />
              </div>
              <button
                className="button btn mt-3"
                type="button"
                onClick={handleSaveLomba}
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

export default File;
