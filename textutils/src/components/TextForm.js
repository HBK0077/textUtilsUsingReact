import React, {useState} from 'react'

export default function TextForm(props) {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    const [buttonText, setButtonText] = useState("Enable Dark Mode");
    const toggleStyle = ()=>{
        if(myStyle.color === "black"){
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            });
            setButtonText("Enable Light Mode");
        }else{
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setButtonText("Enable Dark Mode");
        }
    }
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
    const handelEmail = ()=>{
        let name = text.split("@")
        setText(name[0]);
    }
    const clearText = ()=>{
        let newText = "";
        setText(newText);
    }
    const handelTitleCase = ()=>{
        let newText = text.toLowerCase().split(" ").map((word)=>{
            return (word.charAt(0).toUpperCase()+ word.slice(1));
        }).join(" ");
        setText(newText);
    }
   
    const handelCopyText = ()=>{
        let copyText = document.getElementById("myBox")
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    const handelExtraSpaces = ()=>{
        let spacedText = text.replace(/\s+/g," ");
        setText(spacedText);
    }
    const [text, setText] = useState("");
    // text="New Text" This is wrong way to change a state value
    // setText("new Text"); Correct way to change a state value
    return (
        <>
            <div style={myStyle}>
                <div className='container my-2'>
                    <h1>{props.heading}</h1>
                    <div className="mb-3" >
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>

                    <button className="btn btn-primary mx-1" onClick={toggleStyle}>{buttonText}</button>
                    <button className="btn btn-primary mx-1" onClick={handelUpperCase}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-1" onClick={handelLowerCase}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-1" onClick={handelEmail}>Extract name from Email</button>
                    <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                    <button className="btn btn-primary mx-1" onClick={handelTitleCase}>Convert to TitleCase</button>
                    <button className="btn btn-primary my-2" onClick={handelCopyText}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handelExtraSpaces}>Remove Extra Spaces</button>

                                        
                </div>
                <div className="container my-2">
                    <h2>Your text Summary</h2>
                    <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
                    <p><b>{0.008 * text.split(" ").length} minutes to read</b></p>
                </div>
            </div>
            
        </>
        
  )
}
