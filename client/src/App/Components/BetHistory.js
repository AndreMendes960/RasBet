import "./BetHistory.css"
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState, useRef } from "react"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Select from 'react-select';


function BetHistory( ) {
    
    
    return (
    
 
       <div className='betHistoryBox'>
       <div className='betHistoryWrapper'>
           <div className='betHistoryLeft'>
               <a className="betHistoryLogo">Equipa1 vs team2</a> 
            </div>
           <div className="betHistoryMiddle">
               <a className="betHistoryRed">Equipa1</a>
               <a className="betHistoryGreen">Equipa1</a>
               </div>    
           <div className="betHistoryRight">
               <div className='betHistoryOdd'>
                   <a className="betHistoryLogo">odd: odd</a>
               </div>
               <div className='betHistoryAmount'>
                   <a className="betHistoryLogo">aposta - ganhos</a>
               </div>
            </div>   
        </div>
        </div>
 
        
    );

}

export default BetHistory;