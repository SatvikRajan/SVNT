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
    email: "",
    password: ""
  })
  useEffect(() => {
    if (localStorage.getItem('app-user')) {
      navigate('/admin-main')
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { password, email } = values;
      const { data } = await axios.post(loginRoute, {
        email, password
      })
      if (data.status === false) {
        toast.error(data.msg)
      }
      if (data.status === true) {
        localStorage.setItem('app-user', JSON.stringify(data.user))
        navigate("/admin-main");
      }
    }
  }
  const handleValidation = () => {
    const { password, email } = values;
    if (password === "") {
      toast.error("email and Password is required")
      return false;
    }
    else if (email.length === 0) {
      toast.error("email and Password is required")
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
      <div className="parent-container">
        <div className="portal d-flex flex-column">
          <p>Admin Portal</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Email"
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
            <button type="submit">Login</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Admin