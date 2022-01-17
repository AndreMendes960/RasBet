import "./Bet.css"
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState, useRef } from "react"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Select from 'react-select';
function Bet( item ) {
    
    const amountInputRef = useRef();
    const [currentAlignment, setCurrentAlignment] = useState(item.bet.id);
    console.log(currentAlignment);
    const handleSubmit = (event) => 
    {
        const enteredAmount = amountInputRef.current.value

        //sendBet( enteredAmount, currentAlignment, idDoMan, id do Evento).then(response => setToken(response.id))

        event.preventDefault()
    }
    return (
      <div className="betBox">
           
        <div className="betWrapper">
            { (item.bet.sport==='soccer') ? ( <div className="betLeft"><SportsSoccerIcon color='warning'/> </div>) : <div className="betLeft">{item.bet.sport}</div> }
           

            <div className="betMiddle">
                <ToggleButtonGroup className="betWrapper2" fullWidth value={currentAlignment} onChange={(event, newAlignment) => {setCurrentAlignment(newAlignment);}} exclusive>
                    <ToggleButton className="betButton"  size="small" value={"team1"} aria-label="HOME">{item.bet.team1} - {item.bet.odd1}</ToggleButton>
                    <ToggleButton className="betButton"  size="small" value={"draw"} aria-label="DRAW">DRAW - {item.bet.odd2}</ToggleButton>
                    <ToggleButton className="betButton"  size="small" value={"team2"} aria-label="AWAY">{item.bet.team2} - {item.bet.odd3}</ToggleButton>
                </ToggleButtonGroup>
            </div>
               
            <div className="betRight">
                <div className="betWrapper3">
                   
                    <input className="betInput" type="number" placeholer="Amount" ref={amountInputRef}></input>
                    <button className="betButton">BET</button>
                </div>
              
            </div>
        </div> 
    </div>  
        
    );

}

export default Bet;