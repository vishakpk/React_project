import React, { useState } from 'react'
import Second from './Second';

function Ternary() {
  const[Hide,setHide]=useState(false)
  console.log(false);
  const fun =() => {
    setHide((vishak)=>!vishak)
  }
  return (
    <div>
        {Hide ? <Second />:""}
        <button className={Hide ? "Hidebutton" : "showbotton"} onClick={fun}>{Hide === true ? "Hide":"Show"}</button>
    </div>
  )
}

export default Ternary