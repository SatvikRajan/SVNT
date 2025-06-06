import React, { useState, useEffect } from 'react'
import company from '../images/logo1.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { loginRoute } from '../utils/ApiRoutes';
import '../css/admin.css'
import person from "../images/admin-main/person.svg";
import eye_close from "../images/admin-main/eye-closed.svg";
import eye_open from "../images/admin-main/eye-open.svg";

function AdminLogin() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  const [passwordClose, setPassword] = useState(true)
  const togglePasswordVisibility = () => {
    setPassword(!passwordClose);
  };
  useEffect(() => {
    if (localStorage.getItem('app-user')) {
      navigate('/admin-main')
    }
  }, [navigate])

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (handleValidation()) {
    const { email, password } = values;
    try {
      const { data } = await axios.post(loginRoute, { email, password });
      if (!data.status) {
        toast.error(data.msg);
      } else {
        localStorage.setItem('app-user', JSON.stringify(data.user));
        navigate("/admin-main");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  }
};
  const handleValidation = () => {
    const { password, email } = values;
    if (password === "") {
      toast.error("Email and Password is required")
      return false;
    }
    else if (email.length === 0) {
      toast.error("Email and Password is required")
      return false;
    }
    return true;
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="top">
        <img src={company} width='400rem' alt="" />
      </div>
      <div class="parent-container">
        <div class="portal-login d-flex flex-column">
          <form onSubmit={(e) => handleSubmit(e)}>
            <p style={{ width: '100%', textAlign: "center", fontWeight: "500" }}>Admin Portal</p>
            <div className='login-input'>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                style={{ border: "none" }}
                min="3"
              />
              <img src={person} alt='person'></img>
            </div>
            <div className='login-input'>
              <input
                type={passwordClose ? "password" : "text"}
                placeholder="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                style={{ border: "none" }}
              />
              <img
                src={passwordClose ? eye_close : eye_open}
                alt="eye"
                onClick={togglePasswordVisibility}
              />
            </div>
            <p style={{ fontSize: "12px", width: "100%", fontWeight: "bold" }}>
              Don't have an account ?<Link to="/register">  Register</Link>
            </p>
            <button type="submit">Submit</button>

          </form>
          {/* <div className='login-footer'>
              <p>Forgot Password?</p>
              <p>Forgot Admin ID?</p>
            </div> */}
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default AdminLogin;
