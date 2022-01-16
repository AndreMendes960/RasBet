import "./Bet.css"
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react"


function Bet() {

    const [currentAlignment, setCurrentAlignment] = useState('center');

    return (
      <div className="betBox">
        <div className="betWrapper">
            <div className="betLeft">1</div>
                <ToggleButtonGroup className="betMiddle" fullWidth value={currentAlignment} onChange={(event, newAlignment) => {setCurrentAlignment(newAlignment);}} exclusive>
                    <ToggleButton  className="betButton" size="small" value="HOME" aria-label="HOME">1</ToggleButton>
                    <ToggleButton className="betButton" size="small" value="DRAW" aria-label="DRAW">2</ToggleButton>
                    <ToggleButton className="betButton" size="small" value="AWAY" aria-label="AWAY">3</ToggleButton>
                </ToggleButtonGroup>
            <div className="betRight">
               3
            </div>
        </div> 
    </div>  
        
    );

}

export default Bet;