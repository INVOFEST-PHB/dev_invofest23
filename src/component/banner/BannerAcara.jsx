import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/banner/bannerWorkshop.css";
import { Auth } from "../../config/firebase/firebase"; // Sesuaikan dengan cara Anda mengimpor Firebase

function BannerAcara(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Pengguna sudah login
        setUser(authUser);
      } else {
        // Pengguna belum login
        setUser(null);
      }
    });

    return () => {
      // Hapus pendengar saat komponen tidak lagi digunakan
      unsubscribe();
    };
  }, []);

  const redirectToPage = () => {
    // Periksa apakah pengguna sudah login
    if (user) {
      navigate(props.linkDaftar); // Arahkan ke halaman pendaftaran jika sudah login
    } else {
      navigate("/login"); // Arahkan ke halaman login jika belum login
    }
  };

  return (
    <div data-aos="zoom-out-down" data-aos-duration="300" className="">
      <div className="jumbotron bg-cover text-white image">
        <div className="container py-5 text-center">
          <h1 className="display-4 font-weight-bold">{props.title}</h1>
          <h5 className="font-italic mb-0 opacity-100">{props.description}</h5>
          {props.linkDaftar && ( // Tampilkan tombol "Daftar" jika linkDaftar disediakan
            <button
              className="button btn-daftar mt-3"
              type="button"
              onClick={redirectToPage}
            >
              {props.daftar_button || "Daftar"} {/* Gunakan "Daftar" sebagai default jika tidak ada props.daftar_button */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BannerAcara;
