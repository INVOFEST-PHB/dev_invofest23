import React, { useEffect, useState } from "react";
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
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [loading, setLoading] = useState(false);  
  const [strongPassword, setStrongPassword] = useState(false);
  const history = useNavigate();
  const [showEmailExistsPopup, setShowEmailExistsPopup] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const isEmailValid = (email) => {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkIfEmailExists = async (email) => {
    try {
      const snapshot = await Fire.firestore().collection("users").where("email", "==", email).get();
      return !snapshot.empty;
    } catch (error) {
      console.error("Error checking email existence:", error);
      return false;
    }
  };

  const isStrongPassword = (password) => {
    // Regular expressions for password strength
    const lengthRegex = /^.{8,}$/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;

    return (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      numberRegex.test(password) &&
      specialCharacterRegex.test(password)
    );
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setValidEmail(isEmailValid(value));
    } else if (name === "password") {
      setPassword(value);
      setStrongPassword(isStrongPassword(value));
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  
 // ...

const handleRegisterSubmit = async () => {
  setLoading(true); // Start loading state
  const emailExists = await checkIfEmailExists(email);

  if (emailExists) {
    // Email sudah ada, tampilkan pesan kesalahan
    setLoading(false); // Stop loading state
    setShowEmailExistsPopup(true); // Menampilkan popup atau pesan kesalahan
    return;
  }

  if (!validEmail) {
    // Invalid email, show an error or take appropriate action
    setLoading(false); // Stop loading state
    return;
  }

  if (!strongPassword) {
    // Weak password, show an error or take appropriate action
    setLoading(false); // Stop loading state
    return;
  }

  if (password === confirmPassword) {
    // Passwords match, proceed with registration logic
    await SignUpUser(email, password);
    history('/login');
  } else {
    // Passwords do not match, show an error or take appropriate action
    setPasswordMatch(false);
  }

  setLoading(false); // Stop loading state
};

// ...


  return (
    <div className="belakang">
      <div className="card-login">
        <div className="wrapper">
          <div className="logo">
            <img src={maskot} alt="" />
          </div>
          <div className="text-center mt-2 name">REGISTER</div>
          <div className="p-3 mt-5">
            {!passwordMatch && <p>Confirm Passwords do not match!</p>}
            {!validEmail && <p>Please enter a valid email address!</p>}
            {password && !strongPassword && (
              <p>Password must be at least 8 characters long and contain an uppercase letter, a number, and a special character.</p>
            )}
            {showEmailExistsPopup && (
              <p>Email already registered. Please use a different email or log in.</p>
            )}
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
              disabled={!validEmail || !strongPassword || loading}
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
