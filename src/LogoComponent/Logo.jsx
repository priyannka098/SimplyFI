import React from 'react'
import rectangle2 from "../assets/rectangle2.svg";
import rectangle3 from "../assets/rectangle3.svg";
import rectangle4 from "../assets/rectangle4.svg";
import rectangle1 from "../assets/rectangle1.svg";
import "./Logo.css";

function Logo() {
    return (
          <div className="box">
          <div style={{display:"flex", flexDirection:"row"}}>
            <img className="rect-h" src={rectangle1} />
            <img style={{ position:"absolute",left:"230px" }} className="rect-h" src={rectangle4} />
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",  position:"absolute",left:"160px",top:"230px"}}>
            <div style={{display:"flex", flexDirection:"row"}}>
            <span className="htmlcss">HTML</span>
            <span className="htmlcss and">&amp;</span>
            <span className="htmlcss">CSS</span>
            </div>
            <span className="design-and-build-web">design and build websites</span>
            
            </div>
           <div style={{display:"flex", flexDirection:"row", position:"absolute",top:"230px"}}>
           <img className="rect-h" src={rectangle2} />
            <img style={{ position:"absolute",left:"230px" }} className="rect-h" src={rectangle3} />
           </div>
           
        </div>
      );
}
export default Logo
