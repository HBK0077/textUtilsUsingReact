import React, {useState} from 'react'



export default function TextForm(props) {
    const handelUpperCase = () =>{
        //console.log("Please change me " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text Here");
    // text="New Text" This is wrong way to change a state value
    // setText("new Text"); Correct way to change a state value
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handelUpperCase}>Convert to UpperCase</button>
    </div>
  )
}
