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
    <button disabled={text.length===0} className='btn btn-success my-2' onClick={copyOnClick}>Copy</button>
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="mytext" style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={upperOnClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={lowerOnClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className='btn btn-warning mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className='btn btn-danger mx-1 my-1' onClick={clearOnClick}>Clear Text</button>
   
    <h5 className='heading mt-4' style={{color: props.mode === 'dark'?'white':'black'}}>Text summary</h5>
    <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words, {text.length} characters</p>
    
    <h4 style={{color: props.mode === 'dark'?'white':'black'}}>Preview</h4>
    <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
}
