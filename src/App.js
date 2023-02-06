import logo from './logo.svg';
import './App.css';
import First from './First';
import Second from './Second';
import Third from './Third';
import Tab1 from './Tab1';
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import Ternary from './Ternary';
import Tab2 from './Tab2';
import Array2 from './Array2';
import Map from './Map';
import { createContext, useState } from 'react';
import Hll from './Hll';
import Context from './Context';
import Tab3 from './Tab3';

const samplecontext=createContext()




function App() {
  // const [name, setname] = useState("leo")
  // const [number, setnumber] = useState(19)
  // const [sample,setsample]=useState("")

  return (
    <div>
      <samplecontext.Provider value={{name,number,setname,setnumber,sample,setsample}}>
        <Context/>
        <Hll />
      </samplecontext.Provider> 
      <Tab3/>
    </div>
  );
}

export default App;
export {samplecontext}
