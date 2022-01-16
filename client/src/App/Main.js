import {useRef} from 'react'
import { sendLogin } from "../EventAPI";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import Nav from './Components/Nav';
import Left from './Components/Left';
import Middle from './Components/Middle';
import "./Main.css"



function Main() {

    return (
       
        <div> 
            <Nav/>
            <div className='homeContainer'>
                <Left/>
                <Middle/>
            </div>
           
        </div>
        
    );

}

export default Main;