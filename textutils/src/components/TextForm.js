import React, {useState} from 'react'



export default function TextForm(props) {
    const handelUpperCase = () =>{
        //console.log("Please change me " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelLowerCase = () =>{
        //console.log("Please change me " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // text="New Text" This is wrong way to change a state value
    // setText("new Text"); Correct way to change a state value
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handelUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handelLowerCase}>Convert to LowerCase</button>

            </div>
            <div className="container my-2">
                <h2>Your text Summary</h2>
                <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
                <p><b>{0.008 * text.split(" ").length} minutes to read</b></p>

            </div>
        </>
        
  )
}
