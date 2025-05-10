import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import company from '../images/logo1.png';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";

import { registerRoute, sendOtpRoute, verifyOtpRoute } from "../utils/ApiRoutes";

export default function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        otp: "",
        password: "",
        confirmPassword: ""
    });
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    };

    useEffect(() => {
        if (localStorage.getItem('admin')) {
            navigate('/');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const sendOtp = async () => {
        if (!values.email.endsWith("@svntech.com")) {
            toast.error("Email must be from 'svntech.com' domain", toastOptions);
            return;
        }
        try {
            const { data } = await axios.post(sendOtpRoute, { email: values.email });
            if (data.status) {
                toast.success("OTP sent to your email", toastOptions);
                setOtpSent(true);
            } else {
                toast.error(data.msg, toastOptions);
            }
        } catch (error) {
            toast.error("Error sending OTP", toastOptions);
        }
    };

    const verifyOtp = async () => {
        try {
            const { data } = await axios.post(verifyOtpRoute, { email: values.email, otp: values.otp });
            if (data.status) {
                toast.success("OTP verified!", toastOptions);
                setOtpVerified(true);
            } else {
                toast.error("Invalid OTP", toastOptions);
            }
        } catch (error) {
            toast.error("Error verifying OTP", toastOptions);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!otpVerified) {
            toast.error("Please verify OTP first", toastOptions);
            return;
        }

        if (handleValidation()) {
            try {
                const { email, password } = values;
                const { data } = await axios.post(registerRoute, { email, password });

                if (data.status === false) {
                    toast.error(data.msg || "Registration failed", toastOptions);
                } else {
                    localStorage.setItem('admin', JSON.stringify(data.user));
                    navigate("/admin-main");
                }
            } catch (err) {
                toast.error("Registration failed", toastOptions);
            }
        }

    };

    const handleValidation = () => {
        const { password, confirmPassword } = values;
        if (password !== confirmPassword) {
            toast.error("Passwords do not match", toastOptions);
            return false;
        }
        if (password.length < 8) {
            toast.error("Password should be at least 8 characters", toastOptions);
            return false;
        }
        return true;
    };

    return (
        <div>
            <div className="top">
                <img src={company} width='400rem' alt="logo" />
            </div>
            <div className="parent-container">
                <div className="portal-register d-flex flex-column">
                    <p style={{ width: '100%', textAlign: "center", fontWeight: "500" }}>Admin Portal</p>
                    <form className="reg" onSubmit={handleSubmit}>
                        <div className="d-flex gap-3">
                            <div className='login-input'>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                    style={{ border: "none"}}
                                />
                            </div>
                            <button style={{ width: '60%'}} type="button" onClick={sendOtp} disabled={otpSent}>
                                {otpSent ? "OTP Sent" : "Send OTP"}
                            </button>
                        </div>
                        {otpSent && !otpVerified && (
                            <div className='login-input d-flex'>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    name="otp"
                                    onChange={handleChange}
                                    style={{ border: "none" }}
                                />
                                <button type="button" onClick={verifyOtp}>Verify OTP</button>
                            </div>
                        )}

                        {otpVerified && (
                            <>
                                <div className='login-input'>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        style={{ border: "none" }}
                                    />
                                </div>
                                <div className='login-input'>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        style={{ border: "none" }}
                                    />
                                </div>
                                <button type="submit">Create User</button>
                            </>
                        )}
                        <span style={{ fontSize: "12px", width: "100%", fontWeight: "bold" }}>
                            Already have an account? <Link to="/login">Login</Link>
                        </span>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
