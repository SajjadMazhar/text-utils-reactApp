import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLowCase = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handlePasCase = () => {
    let textList = text.toLowerCase().split(" ")
    for (let i = 0; i < textList.length; i++) {
      textList[i] = textList[i].charAt(0).toUpperCase() + textList[i].substring(1)
    }
    let newText = textList.join("")
    setText(newText)
  }
  const handleSnakeCase = () => {
    let newText = text.toLowerCase().split(" ").join("_")
    setText(newText)
  }
  const clearText = () => {
    setText("")
  }

  const handleCopy = ()=>{
    console.log("copied")
    let textContent = document.getElementById("exampleFormControlTextarea1")
    textContent.select()
    navigator.clipboard.writeText(textContent.value)
  }
  const handleRemove = ()=>{
    const exSpace = /[ ]+/;
    let newText = text.split(exSpace)
    setText(newText.join(" "))
  }


  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("")

  return (
    <>
      <div className='container'>
        <h2 style={{color:props.mode==="dark" ? "white" : "black"}}>{props.heading}</h2>
        <div className="mb-3">
          <textarea placeholder='Enter your text here...' value={text} style={{backgroundColor:props.mode === "dark" ? "#1b1b31" : "white", color:props.mode==="dark" ? "white" : "black"}} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className='m-2 btn btn-primary '>convert to upperAboutcase</button>
        <button className='m-2 btn btn-primary' onClick={handleLowCase}>convert to lowercase</button>
        <button className='m-2 btn btn-primary' onClick={handlePasCase}>convert to PascalCase</button>
        <button className='m-2 btn btn-primary' onClick={handleSnakeCase}>convert to snake_case</button>
        <button className='m-2 btn btn-primary' onClick={clearText}>clear</button>
        <button className='m-2 btn btn-primary' onClick={handleCopy}>Copy Text</button>
        <button className='m-2 btn btn-primary' onClick={handleRemove}>Remove Extra Spaces</button>

      </div>
      <div className='container my-2' style={{color:props.mode==="dark" ? "white" : "black"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes reading</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
