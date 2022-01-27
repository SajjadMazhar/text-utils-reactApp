import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#1b1b31"
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"

    }
  }
  return (
    <>  
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggle = {toggleMode}/>
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
