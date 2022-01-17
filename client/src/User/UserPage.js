import {useState } from "react"
import {useRef} from 'react'
import { sendLogin } from "../EventAPI";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import "./userPage.css"
import Nav from '.././App/Components/Nav';
function UserPage() {

return (      
    <div> 
    <Nav/>
    <div className='homeContainer'>
        <div>ola</div>
    </div>
   
</div>
    
    );
}


export default UserPage;