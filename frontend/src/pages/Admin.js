import React, { useState, useEffect } from 'react'
import company from '../images/logo1.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { loginRoute } from '../utils/ApiRoutes';
import '../css/admin.css'
function Admin() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: ""
  })
  useEffect(() => {
    if (localStorage.getItem('app-user')) {
      navigate('/')
    }
  }, [navigate])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username, password
      })
      if (data.status === false) {
        toast.error(data.msg)
      }
      if (data.status === true) {
        localStorage.setItem('app-user', JSON.stringify(data.user))
        navigate("/");
      }
    }
  }
  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Username and Password is required")
      return false;
    }
    else if (username.length === 0) {
      toast.error("Username and Password is required")
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
        <div class="portal d-flex flex-column">
          <p>Admin Portal</p>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button type="submit" onChange={handleSubmit}>Login</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Admin