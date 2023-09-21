import React, { useState } from "react";
import maskot from "../../assets/img/invofest.png";
import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";

function Register() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const auth = getAuth();
  const history = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };



  const handleChangeText = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setValidEmail(validateEmail(value));
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleRegisterSubmit = async () => {
    setLoading(true);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  if (!password.match(passwordRegex)) {
    setError(
      "Password harus terdiri dari huruf besar, huruf kecil, angka, dan minimal 8 karakter."
    );
    setLoading(false);
  }


    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok.");
      setLoading(false);
      return;
    }

    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);

      if (methods.length > 0) {
        setError("Email sudah terdaftar.");
        setLoading(false);
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);

      const userData = {
        email,
        password,
      };
      localStorage.setItem("userData", JSON.stringify(userData.email));
      history("/biodata");
    } catch (error) {
      setError("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="belakang">
      <div className="card-login">
        <div className="wrapper">
          <div className="maskot">
          <center>
          <div className="col-6">
              <img src={maskot} alt="" />
          </div>
            </center>
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
            {!validEmail && (
              <p className="error-message">
                Please enter a valid email address.
              </p>
            )}

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
            <button className="btn mt-3" onClick={handleRegisterSubmit}>
              {loading ? "Loading..." : "Register"}
            </button>
            {error && <p className="error-message mt-2">{error}</p>}
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
