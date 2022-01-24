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
