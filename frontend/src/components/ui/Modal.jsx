import React, {useState } from "react";
import "./Modal.css"
import code from "../../../../exampleData/2FA.json"
import wykrzyknikImage from "../../assets/erroricon.png"

const Modal= ({closeModal}) => {
  const secret_code=code.code

  const [showText,setShowText]=useState(false);
  const [attempt,setAttempt]=useState(false)


  let one = React.createRef();
  let two = React.createRef();
  let three = React.createRef();
  let four = React.createRef();
  let five = React.createRef();
  let six = React.createRef();

  
  function handleKeyUp(e) {
    

    e.which = e.which || e.keyCode;
    if ((e.which>=48 && e.which<= 57) || (e.which>=96 && e.which<=105)) {
      switch (e.target.id) {
        case "input-one":
          if(attempt){
            setShowText(!showText);
          }
          if(isNaN(+one.current.value)){
            one.current.value='';
          }
          two.current.focus();
          break;
        case "input-two":
          three.current.focus();
          break;
        case "input-three":
          four.current.focus();
          break;
        case "input-four":
            five.current.focus();
            break;
        case "input-five":
            six.current.focus();
            break;
        case "input-six":
            six.current.blur();
            const x=one.current.value+two.current.value+three.current.value+four.current.value+five.current.value+six.current.value;
            if(x!=secret_code){
              console.log("Zły kod");
              if(!attempt){
                setAttempt(!attempt)
              }
              setShowText(!showText);
              one.current.value='';
              two.current.value='';
              three.current.value='';
              four.current.value='';
              five.current.value='';
              six.current.value='';
              one.current.focus();
            }
            else{
              console.log("Dobry kod");
            }
            break;

        default:
          break;
      }
    }
    else{
      switch (e.target.id){
        case "input-one":
          one.current.value='';
          break;
        case "input-two":
          two.current.value='';
          break;
        case "input-three":
          three.current.value='';
          break;
        case "input-four":
          four.current.value='';
            break;
        case "input-five":
          five.current.value='';
        case "input-six":
          six.current.value='';
      }
    }
  }


  function TextFail(){
    return <div>
              <strong>Nieprawidłowy kod</strong>
              <img className="wykrzyknik" src={wykrzyknikImage} alt="wykrzyknik"></img>
            </div>
  }


  return (
    <div className="modal-container">
      <div className="text1">
          <p><strong>Już prawie!</strong></p>
        </div>
        <div className="text2">
          <p>Potwierdź swoją tożsamość, przepisując kod AlabShield</p>
        </div>
        <div className="text-fail">
            {showText&&<TextFail />}
        </div>
      <div className="form-items" style={{ display: "flex" }}>
        <div className="input-group">
          <br />
          <input
            style={{borderStyle:"solid",
                    borderWidth:"2px",
                    borderRadius:"10px",
                    borderColor: showText ? "#C85B5B" : "#8B5BC8"}}
            className="input-group"
            type={"text"}
            id={"input-one"}
            onKeyUp={handleKeyUp}
            ref={one}
            maxLength={1}
          />
        </div>

        <div className="input-group">
          <br />
          <input
          style={{borderStyle:"solid",
          borderWidth:"2px",
          borderRadius:"10px",
          borderColor: showText ? "#C85B5B" : "#8B5BC8"}}
            type={"text"}
            id={"input-two"}
            onKeyUp={handleKeyUp}
            ref={two}
            maxLength={1}
          />
        </div>

        <div className="input-group">
          <br />
          <input
          style={{borderStyle:"solid",
          borderWidth:"2px",
          borderRadius:"10px",
          borderColor: showText ? "#C85B5B" : "#8B5BC8"}}
            type={"text"}
            id={"input-three"}
            onKeyUp={handleKeyUp}
            ref={three}
            maxLength={1}
          />
        </div>

        <div className="input-group">
          <br />
          <input
          style={{borderStyle:"solid",
          borderWidth:"2px",
          borderRadius:"10px",
          borderColor: showText ? "#C85B5B" : "#8B5BC8"}}
            type={"text"}
            id={"input-four"}
            onKeyUp={handleKeyUp}
            ref={four}
            maxLength={1}
          />
        </div>

        <div className="input-group">
          <br />
          <input
          style={{borderStyle:"solid",
          borderWidth:"2px",
          borderRadius:"10px",
          borderColor: showText ? "#C85B5B" : "#8B5BC8"}}
            type={"text"}
            id={"input-five"}
            onKeyUp={handleKeyUp}
            ref={five}
            maxLength={1}
          />
        </div>

        <div className="input-group">
          <br />
          <input
          style={{borderStyle:"solid",
                    borderWidth:"2px",
                    borderRadius:"10px",
                    borderColor: showText ? "#C85B5B" : "#8B5BC8"}}
            type={"text"}
            id={"input-six"}
            onKeyUp={handleKeyUp}
            ref={six}
            maxLength={1}
          />
        </div>
      </div>
    </div>
  );
}


export default Modal