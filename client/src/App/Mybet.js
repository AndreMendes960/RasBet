import "./mybet.css"
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState, useRef } from "react"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Select from 'react-select';
import Nav from './Components/Nav';
import BetHistory from "./Components/BetHistory";

function Mybet( ) {
    
    
    return (
    
    <div >   
       <Nav></Nav>

       <div className='homeContainer'>
            
           <ul><BetHistory></BetHistory></ul>
        </div>
    </div>  
        
    );

}

export default Mybet;