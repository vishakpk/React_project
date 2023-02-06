import React, { useContext, useEffect } from 'react'
import { samplecontext } from './App'

function Context() {
    const {sample, setsample} =useContext(samplecontext)
    console.log(sample)
    useEffect(() => {
        setsample("this is sample")
     
    }, [])
    
  return (
    <div>
        <h1>hi {sample}</h1>
    </div>
  )
}

export default Context