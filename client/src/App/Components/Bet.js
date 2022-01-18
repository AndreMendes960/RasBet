import "./Bet.css"
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState, useRef } from "react"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Select from 'react-select';
import { addBet } from "../../EventAPI";
function Bet( props) {
    
    console.log(props)
    const amountInputRef = useRef();
    const [currentAlignment, setCurrentAlignment] = useState(props.bet.id);
    //console.log(currentAlignment);

    const handleSubmit = (event) => 
    {
        const enteredAmount = amountInputRef.current.value

        addBet( enteredAmount, currentAlignment, JSON.parse(sessionStorage.getItem('token')), props.bet.id).then()

        // console.log(currentAlignment)

        event.preventDefault()
    }


    return (
      <div className="betBox">
           
        <div className="betWrapper">
            { (props.bet.sport==='soccer') ? ( <div className="betLeft"><SportsSoccerIcon color='warning'/> </div>) : <div className="betLeft">{props.bet.sport}</div> }
           

            <div className="betMiddle">
                <ToggleButtonGroup className="betWrapper2" fullWidth value={currentAlignment} onChange={(event, newAlignment) => {setCurrentAlignment(newAlignment);}} exclusive>
                    <ToggleButton className="betButton"  size="small" value={"team1"} aria-label="HOME">{props.bet.team1} - {props.bet.odd1}</ToggleButton>
                    <ToggleButton className="betButton"  size="small" value={"draw"} aria-label="DRAW">DRAW - {props.bet.odd2}</ToggleButton>
                    <ToggleButton className="betButton"  size="small" value={"team2"} aria-label="AWAY">{props.bet.team2} - {props.bet.odd3}</ToggleButton>
                </ToggleButtonGroup>
            </div>
               
               {/* OMITIR CASO SEJA ADMIN */}
            {!props.isAdmin &&<div className="betRight">
                <div className="betWrapper3">
                   
                    <input className="betInput" type="number" placeholer="Amount" ref={amountInputRef}></input>
                    <button className="betButton" onClick={handleSubmit}>BET</button>
                </div>
              
            </div>}
             
            {/* CASO SEJA ADMIN PODE SIMPLESMENTE EDITAR - INSERIR BOTÃO PARA EDITAR OU EDITAR "INLINE" - CAIXA DE TEXTO PARA CADA ODD E BOTÃO PARA TERMINAR EVENTO*/}

            {props.isAdmin && <p>IS ADMIN</p>}
        </div> 
    </div>  
        
    );

}

export default Bet;