import { useState, useEffect } from "react";
import { useRef } from "react";
import { fetchUser, sendLogin } from "../EventAPI";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./deposit.css";
import Nav from ".././App/Components/Nav";

function Convert() {
  
    const handleSubmit = (event) => 
    {
       

        event.preventDefault()
    }

      return (
          <div>
            <Nav />
      
            <div className="depositContainer">
                <div className="depositWrapper">
                    <p className="depositLogo">CONVERT</p>
                    <div className="depositTop">
                        <input className="depositInput" type="text" placeholder="Moeda"></input>
                    </div>
                    <div className="depositBot">
                        <button className="depositButton" onClick={handleSubmit}>Convert</button>
                    </div>
                    
                </div>
            </div>
          </div>  
        );
   
}

export default Convert;
  