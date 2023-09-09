import React, { useState } from "react";
import maskot from "../../assets/img/invofest.png";
import "../../assets/css/login.css";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fire, SignUpUser } from '../../config/firebase/firebase'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);  
  const history = useNavigate();

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleRegisterSubmit = async () => {
    setLoading(true);
  
    if (password === confirmPassword) {
      await SignUpUser(email, password);
  
      // Simpan informasi pengguna di localStorage
      const userData = {
        email,
        password // Perlu dicatat bahwa menyimpan password di localStorage tidak dianjurkan dari segi keamanan.
      };
      localStorage.setItem('userData', JSON.stringify(userData));
  
      history("/biodata");
    } else {
      // Passwords do not match, show an error or take appropriate action
    }
  
    setLoading(false);
  };
  

  return (
    <div className="belakang">
      <div className="card-login">
        <div className="wrapper">
          <div className="maskot">
            <img src={maskot} alt="" />
          </div>
          <h2 className="text-center font-bold mt-3 ">Registrasi</h2>
          <div className="p-3 mt-5">
            <div className="form-field d-flex align-items-center">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChangeText}
                placeholder="Email"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChangeText}
                placeholder="Password"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChangeText}
                placeholder="Confirm Password"
              />
            </div>
            <button
              className="btn mt-3"
              onClick={handleRegisterSubmit}
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
          <div className="text-center fs-6">
            <a href="/login">Already have an account? Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
