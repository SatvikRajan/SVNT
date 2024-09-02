import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import company from '../images/logo1.png'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { registerRoute } from "../utils/ApiRoutes";

export default function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }
    useEffect(() => {
        if (localStorage.getItem('admin')) {
            navigate('/')
        }
    }, [navigate])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            const { password, username, email } = values;
            const { data } = await axios.post(registerRoute, {
                username, email, password
            })
            if (data.status === false) {
                toast.error(data.msg, toastOptions)
            }
            if (data.status === true) {
                localStorage.setItem('admin', JSON.stringify(data.user))
            }
            navigate("/admin-main");
        }
    }
    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            toast.error("password and confirm password should be same.", {
                toastOptions
            });
            return false;
        }
        else if (username.length < 3) {
            toast.error("Username should be greater than 3 charactors", toastOptions)
            return false;
        }
        else if (email === "") {
            toast.error("Email should not be empty", toastOptions)
            return false;
        }
        else if (password.length < 8) {
            toast.error("Password should be equal or greater than 8 characters", toastOptions)
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
                <div className="portal-register d-flex flex-column">
                    <p style={{ width: '100%', textAlign: "center", fontWeight: "500" }}>Admin Portal</p>
                    <form className="reg" onSubmit={(e) => handleSubmit(e)}>

                        <div className='login-input'>
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                style={{ border: "none" }}
                            />
                        </div>
                        <div className='login-input'>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                style={{ border: "none" }}
                            />
                        </div>
                        <div className='login-input'>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                style={{ border: "none" }}
                            />
                        </div>
                        <div className='login-input'>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                style={{ border: "none" }}
                            />
                        </div>
                        <span style={{ fontSize: "12px", width: "100%", fontWeight: "bold" }}>
                            Already have an account ?<Link to="/login"> Login</Link>
                        </span>
                        <button type="submit">Create User</button>
                    </form>
                </div>
                <ToastContainer />
            </div>

            <ToastContainer />
        </div>
    );
}