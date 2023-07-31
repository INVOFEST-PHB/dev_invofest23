import React, { useEffect, useState } from "react";
import maskot from "../../assets/img/invofest.png";
import "../../assets/css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Login = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const Login = async(e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/login',{
            email:email,
            password: password
        });
        history("/")
        ;
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }
  

  return (
   <div className="belakang">
    <div className="card-login">
      <div className="wrapper">
        <div className="logo">
          <img src={maskot} alt="" />
        </div>
        <div className="text-center mt-2 name">LOGIN</div>
        <form onSubmit={Login} className="p-3 mt-5">
        <p>{msg}</p>
          <div className="form-field d-flex align-items-center">
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="button btn mt-3" type="submit">
            LOGIN
          </button>
        </form>
        <div className="text-center fs-6">
          <a href="/register">Forget password?</a> or <a href="/">Sign up</a>
        </div>
      </div>
      </div>
      </div>
      // <div className="background position-relative">
    //   <img className="background position-absolute" src={background} alt="" />
    //   <div className="Login position-absolute start-0 template d-flex justify-content-center align-item-center w-100 vh-100 ">
    //     <form className="p-5 w-50 rounded bg-black d-md-inline-grid h-75 my-auto place-items-center p-2">
    //       <img
    //         className="mx-auto bg-danger"
    //         src={maskot}
    //         alt=""
    //         srcset=""
    //         style={{width:'200px'}}
    //       />
    //       <h3>Sign In</h3>
    //       <div className="mb-2">
    //         <label htmlFor="ID">Masukkan ID</label>
    //         <input
    //           type="ID"
    //           placeholder="Masukan ID"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-2">
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           placeholder="Masukan Password"
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="mb-2">
    //         <input
    //           type="checkbox"
    //           className="custom-control custom-checkbox"
    //           id="check"
    //         />
    //         <label htmlFor="check" className="custom-input-label">
    //           Remember Me
    //         </label>
    //       </div>
    //       <div className="d-grid">
    //         <button className="btn btn-primary">Register</button>
    //       </div>
    //       <p className="text-right p-lg-1">
    //         Forgot <a href=""> Password? </a> <a href="">Sign Up</a>
    //       </p>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Login;
