import React from "react";
import '../App.css';


const Navbar = () => {
  return (
  <>
     <div className="container">
         <div className="hero">

           <div className="navbar">
             <p>ELITE EDGE FITNESS</p>
          </div>

           <div className="title">

                <div className="big-text">
                  <p className="one"> LET'S </p>
                  <p className="two"> GET </p>
                  <p className="three"> MOVING </p>
                </div>

                <div className="small-text">
                  <p>WE ARE HERE TO HELP YOU</p>
                  <p className="link-p">GET IN SHAPE</p>
                </div>

                <div className="buttons">
                  <button className="btn-one">JOIN US</button>
                  <button className="btn-two">LEARN MORE</button>
                </div>
                
           </div>

          </div>
     </div>
  </>
  );
};

export default Navbar;