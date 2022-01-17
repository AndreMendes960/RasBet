import {useState } from "react"
import {useRef} from 'react'
import { sendLogin } from "../EventAPI";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import "./userPage.css"
import Nav from '.././App/Components/Nav';
function UserPage() {

return (      
    <div  > 
        <Nav/>
        
        <div className='userContainer'> 
            <div className="userWrapper">
                <div className="userTop">
                    <a className="userName">Manel</a>
                    <div className="userTopWrapper">
                        <button className="userButton">Depositar</button>
                        <a className="userBalance">Balance</a>
                        <button className="userButton">Withdraw</button>
                    </div>
                </div>
                <div className="userBot">
                    <button className="userButton">Betting History</button>
                    <button className="userButton">Definitions</button>
                    <button className="userButton">Logout</button>
                </div>
            </div>                
    </div>
    </div>
   

    );
}


export default UserPage;