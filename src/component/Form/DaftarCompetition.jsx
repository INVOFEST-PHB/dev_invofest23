import React, { useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { Auth } from "../../config/firebase/firebase";
import maskot from "../../assets/img/invofest.png";
import "../../assets/css/From.css";


const DaftarCompetition = () => {
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
  const [selectedFile, setSelectedFile] = useState(null);
  const [kartuTandaMahasiswaTeamMember1, setKartuTandaMahasiswaTeamMember1] =
    useState(null);
  const [kartuTandaMahasiswaTeamMember2, setKartuTandaMahasiswaTeamMember2] =
    useState(null);

  const [kartuTandaMahasiswaKetua, setKartuTandaMahasiswaKetua] =
    useState(null);

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
  const handleKTMUpload = async (e, member) => {
    const file = e.target.files[0];
    switch (member) {
      case "teamMember1":
        setKartuTandaMahasiswaTeamMember1(file);
        break;
      case "teamMember2":
        setKartuTandaMahasiswaTeamMember2(file);
        break;
      case "ketua":
        setKartuTandaMahasiswaKetua(file);
        break;
      default:
        break;
    }
  };

  const handleBuktiPembayaranUpload = async (e) => {
    const file = e.target.files[0];
    setBuktiPembayaran(file);
  };

  const handleSaveLomba = async () => {
    try {
      console.log("Start handleSaveLomba");
      const user = Auth.currentUser;
      const uid = user.uid;

      const storage = getStorage();

      // Upload kartuTandaMahasiswa
      const kartuTandaMahasiswaTeamMember1Ref = storageRef(
        storage,
        `ktm/${jenisLomba}/${namaTeam}/${uid}_team_member_1`
      );
      const kartuTandaMahasiswaTeamMember2Ref = storageRef(
        storage,
        `ktm/${jenisLomba}/${namaTeam}/${uid}_team_member_2`
      );
      const kartuTandaMahasiswaKetuaRef = storageRef(
        storage,
        `ktm/ketua/${uid}_ketua`
      );

      const kartuTandaMahasiswaTeamMember1Snapshot = await uploadBytes(
        kartuTandaMahasiswaTeamMember1Ref,
        kartuTandaMahasiswaTeamMember1
      );
      const kartuTandaMahasiswaTeamMember2Snapshot = await uploadBytes(
        kartuTandaMahasiswaTeamMember2Ref,
        kartuTandaMahasiswaTeamMember2
      );
      const kartuTandaMahasiswaKetuaSnapshot = await uploadBytes(
        kartuTandaMahasiswaKetuaRef,
        kartuTandaMahasiswaKetua
      );
      const buktiPembayaranRef = storageRef(storage, `pembayaran/competition/${jenisLomba}/${namaTeam}${uid}`);
      const buktiPembayaranSnapshot = await uploadBytes(
        buktiPembayaranRef,
        buktiPembayaran
      );

      // Simpan data ke Realtime Database
      const db = getDatabase();
      const lombaRef = push(ref(db, jenisLomba + "/" + uid));
      await set(lombaRef, {
        jenisLomba,
        email,
        namaTeam,
        namaKetuaTeam,
        teamMember1,
        teamMember2,
        asalPerguruanTinggi,
        noWhatsAppKetua,
        kartuTandaMahasiswaTeamMember1:kartuTandaMahasiswaTeamMember1Snapshot.metadata.fullPath,
        kartuTandaMahasiswaTeamMember2:kartuTandaMahasiswaTeamMember2Snapshot.metadata.fullPath,
        kartuTandaMahasiswaKetua:kartuTandaMahasiswaKetuaSnapshot.metadata.fullPath,
        buktiPembayaran: buktiPembayaranSnapshot.metadata.fullPath,
        statusLomba: "pending",
      });

      console.log("Data saved successfully.");
      window.location.href = "/success";
    } catch (error) {
      console.error("Error uploading data:", error);
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
              <span class="control-fileupload">
              <label for="file" >{kartuTandaMahasiswaKetua ? `File : ${kartuTandaMahasiswaKetua.name}` : 'Choose a file ktm ketua'}</label>
          <input type="file" id="file" onChange={(e) => handleKTMUpload(e, 'ketua')}/>
        </span>
        </div>
              <div className="form-field d-flex align-items-center">
              <span class="control-fileupload">
              <label for="file" >{kartuTandaMahasiswaTeamMember1 ? `File : ${kartuTandaMahasiswaTeamMember1.name}` : 'Choose a file ktm anggota 1'}</label>
          <input type="file" id="file" onChange={(e) => handleKTMUpload(e, 'teamMember1')}/>
        </span>
        </div>
              <div className="form-field d-flex align-items-center">
              <span class="control-fileupload">
              <label for="file" >{kartuTandaMahasiswaTeamMember2 ? `File : ${kartuTandaMahasiswaTeamMember2.name}` : 'Choose a file ktm anggota 2'}</label>
          <input type="file" id="file" onChange={(e) => handleKTMUpload(e, 'teamMember2')}/>
        </span>
        </div>
              <div className="form-field d-flex align-items-center">
              <span class="control-fileupload">
              <label for="file" >{buktiPembayaran ? `File : ${buktiPembayaran.name}` : 'Choose a file bukti pembayaran'}</label>
          <input type="file" id="file" onChange={handleBuktiPembayaranUpload}/>
        </span>
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

export default DaftarCompetition;
