import React from 'react'

function Card({current}) {
  return (
    <div className={`card ${current?"current":""}`}>
        {current && <p>Text</p>}
    </div>
  )
}

export default Card