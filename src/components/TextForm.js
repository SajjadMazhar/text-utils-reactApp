import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLowCase = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handlePasCase = ()=>{
    let textList = text.toLowerCase().split(" ")
    for(let i = 0; i<textList.length; i++){
      textList[i] = textList[i].charAt(0).toUpperCase() + textList[i].substring(1)
    }
    let newText = textList.join("")
    setText(newText)
  }
  const handleSnakeCase = ()=>{
    let newText = text.toLowerCase().split(" ").join("_")
    setText(newText)
  }
  const clearText = ()=>{
    setText("")
  }


  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("")

  return (
    <>
      <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea placeholder='Enter your text here...' value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className='mx-2 btn btn-primary '>convert to uppercase</button>
        <button className='mx-2 btn btn-primary' onClick={handleLowCase}>convert to lowercase</button>
        <button className='mx-2 btn btn-primary' onClick={handlePasCase}>convert to PascalCase</button>
        <button className='mx-2 btn btn-primary' onClick={handleSnakeCase}>convert to snake_case</button>
        <button className='mx-2 btn btn-primary' onClick={clearText}>clear</button>

      </div>
      <div className='container my-2'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes reading</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
