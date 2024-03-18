import React, { useEffect } from 'react'
import Card from './Card'
import '../css/card.css'

const cards = [
    1,2,3,4,5,6
]


function Carosuel1() {

    const [selected, setSelected]  = React.useState(0)

    useEffect(()=>{
        console.log(selected)
    },[selected])


  return (
    <div className='outer'>
    <div className='container10'>
    <div className='carousellll' style={{
        transform: `translate(${selected*(-79/cards.length)}%)`
    }}>
        {cards.map((_, i)=><Card current={i==selected}/>)}
        
    </div>
    <button className='left-button' onClick={()=>{
        setSelected(s=>{
            if(s===0)
                return cards.length - 1;
            return s-1
        })
    }}>&lt;</button>
    <button className='right-button' onClick={()=>{
        setSelected(s=>((s+1)%cards.length))
    }}>&gt;</button>
    </div>
    </div>
  )
}

export default Carosuel1