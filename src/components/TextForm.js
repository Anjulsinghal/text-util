import React, {useState}  from 'react'

export default function TextForm(props) {
    const handelUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase","success");
    }
    const handelLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success");
    }
    const handelCopy = ()=> {
        let newText = document.getElementById("exampleFormControlTextarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Has been Coped","success");
    }
    const handelSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed form text","success");
    }
    const handelOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text,setText] = useState("");
  return (
    <>
        <div className="container" style={{color: props.mode=== "dark"?"white":"black"}} >
        <div className="mb-3 container">

            <h1 className='my-3'>Enter the Text below to analize</h1>
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode=== "light"?"white":"#371f60", color: props.mode=== "dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary m-3" onClick={handelUpClick}>click to uppercase</button>
            <button className="btn btn-primary m-3" onClick={handelLowClick}>click to uppercase</button>
            <button className="btn btn-primary m-3" onClick={handelCopy}>Copy text</button>
            <button className="btn btn-primary m-3" onClick={handelSpaces}>Remover Extra Spaces</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <h4>Words: {text.split(" ").length-1} Charcter:{text.length}</h4>
            <h4>{0.008*60 * text.split(" ").length} sec take to read that you write</h4>
            <h2>Priview</h2>
            <p>{text.length>0?text:"Enter text in the above textarea to see the preview of Your text"}</p>
        </div>
        </div>
    </>
  )
}
