import React from "react";
import maskot from "../../assets/img/invofest.png";
import "../../assets/css/login.css";

export const Login = () => {
  return (
    
   <div className="belakang">
    <div className="card-login">
      <div className="wrapper">
        <div className="logo">
          <img src={maskot} alt="" />
        </div>
        <div className="text-center mt-2 name">LOGIN</div>
        <form className="p-3 mt-5">
          <div className="form-field d-flex align-items-center">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div>
          <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
          <a href="/">Forget password?</a> or <a href="/">Sign up</a>
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
