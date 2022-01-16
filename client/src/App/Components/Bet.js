import "./Bet.css"
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react"


function Bet( item ) {
    
    const [currentAlignment, setCurrentAlignment] = useState('center');

    return (
      <div className="betBox">
           
        <div className="betWrapper">
            <div className="betLeft">1</div>
            <div className="betMiddle">
                <ToggleButtonGroup className="betWrapper2" fullWidth value={currentAlignment} onChange={(event, newAlignment) => {setCurrentAlignment(newAlignment);}} exclusive>
                    <ToggleButton  className="betButton" size="small" value="HOME" aria-label="HOME">{item.bet.team1} - {item.bet.result_odd.home}</ToggleButton>
                    <ToggleButton className="betButton" size="small" value="DRAW" aria-label="DRAW">DRAW</ToggleButton>
                    <ToggleButton className="betButton" size="small" value="AWAY" aria-label="AWAY">{item.bet.team2}</ToggleButton>
                </ToggleButtonGroup>
            </div>
               
            <div className="betRight">
               3
            </div>
        </div> 
    </div>  
        
    );

}

export default Bet;