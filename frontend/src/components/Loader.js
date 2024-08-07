import React from 'react'
import '../css/loader.css'
import logo from '../images/logobig.webp'

function Loader() {
    return (
        <>
            <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
            <img className='newtons-logo' src={logo} alt="" />
        </>
    )
}

export default Loader