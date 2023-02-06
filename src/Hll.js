import React, { useContext } from 'react'
import { samplecontext } from './App';

const Hll = () => {
const {name,number,setname,setnumber,sample,setsample} = useContext(samplecontext)
console.log(name,number,setname,setnumber);
  return (
    <div>
        <h1>Name {name}</h1>
        <button onClick={()=>setname("rono")}>change player</button>
        <h1>Age {number}</h1>
        <button onClick={()=>setnumber("30")}>change age</button>
        <h1>{sample}</h1>
        </div>
        
        
  )
}
export default Hll