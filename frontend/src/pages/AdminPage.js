import React from 'react'
import company from '../images/logo1.png'

export default function AdminPage() {
    return (
        <div>
            <div className="top">
                <img src={company} width='400rem' alt="" />
            </div>
            <div className="admin-left">
                <h1>Applications</h1>
                <a href=""></a><p>Add Vacancy</p>
                <p>Recieved</p>
                <p>Add Vacancy</p>
            </div>
        </div>
    )
}
