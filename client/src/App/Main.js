import {useRef} from 'react'
import { sendLogin } from "../EventAPI";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import "./Main.css"

function Main() {

    return (
        
        <nav class="navbar">
      
        <div class="logo">RasBet</div>
       
        <ul class="nav-links">
         
          <div class="menu">
            <li><a href="/">Competitions</a></li>
            <li><a href="/">Sports</a></li>
            <li><a href="/">My Bets</a></li>
            <li class="services">
              <a href="/">Services</a>
              <ul class="dropdown">
                <li><a href="/">Exemplo se quisermos usar </a></li>     
              </ul>
            </li>
            <li><a href="/login">Login</a></li>
            <li><a href="/registar">Registar</a></li>
          </div>
        </ul>
      </nav>
    );

}

export default Main;