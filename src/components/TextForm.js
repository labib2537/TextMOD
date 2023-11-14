import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');  // hooks
    const upperOnClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase", "success");

    }
    const lowerOnClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }
    const clearOnClick = ()=>{
        setText('');
        props.showAlert('Text cleared', 'success');
    }
    const copyOnClick = ()=>{
        var selectTextBox = document.getElementById("mytext");
        selectTextBox.select();
        navigator.clipboard.writeText(selectTextBox.value);
        props.showAlert('Copied to clipboard', 'success');
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");

    }
  return (
    <>
    <div className="container">

    
    <div class="my-3">
        <h4 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h4>
    <button className='btn btn-success my-2' onClick={copyOnClick}>Copy</button>
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="mytext" style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={upperOnClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={lowerOnClick}>Convert to Lowercase</button>
    <button className='btn btn-warning mx-2' onClick={handleExtraSpace}>Remove Extra Spaces</button>
    <button className='btn btn-danger' onClick={clearOnClick}>Clear Text</button>
    <div className="container my-2">
        <h5 style={{color: props.mode === 'dark'?'white':'black'}}>Text summary</h5>
        <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.split(" ").length} words, {text.length} characters</p>
    </div>
    </div>
    </>
  )
}
