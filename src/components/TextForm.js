import React, { useState } from 'react';


function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleClearClick = (event) => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copyed to Clipboard!", "success");
    }
    const handleExtraSpaces = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Space removed!',"success")
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white', color: props.mode==='dark'?'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}> Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1 ' onClick={handleLoClick}> Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}> Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1 ' onClick={handleCopy}> Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>


            </div>

            <div className="container my-3"  style={{color: props.mode==='dark'?'white' : '#042743'}}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split("\s+/").filter((element)=>{return element.length!==0}).length}</b> word and <b>{text.length}</b> Characters</p>
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minits read</p>
                <h2>preview</h2>
                <p><i>{text.length>0?text:"Nothing to preview!"}</i></p>
            </div>
        </>
    )
}

export default TextForm
