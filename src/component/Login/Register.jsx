import React, {useEffect, useState} from "react";
import maskot from "../../assets/img/invofest.png";
import "../../assets/css/login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Register = () => {

    useEffect(() => {
      AOS.init();
    }, []);

  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const [ confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const Register= async(e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users',{
            name: name,
            email:email,
            password: password,
            confPassword:confPassword
        });
        history("/login")
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
        <p className="text-center mt-2 name">{msg}</p>
        <form className="p-3 mt-5" onSubmit={Register}>
          <div className="form-field d-flex align-items-center">
          <input
              type="text"
              className="input"
              value={name} onChange={(e)=>setName(e.target.value)}
              placeholder="Username"
            />
            </div>
            <div className="form-field d-flex align-items-center">
            <input
            type="text"
            className="input"
            value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
          />
          </div>
          <div className="form-field d-flex align-items-center">
          <input
          type="password"
          className="password"
          value={password} onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />
        </div>
          <div className="form-field d-flex align-items-center">
            <input
              type="password"
              value={confPassword} onChange={(e)=>setConfPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="btn mt-3" type="submit">Login</button>
        </form>
        <div className="text-center fs-6">
          <a href="/">Forget password?</a> or <a href="/">Sign up</a>
        </div>
      </div>
      </div>
      </div>

  );
};

export default Register;