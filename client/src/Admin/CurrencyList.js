import { useEffect, useState, useRef } from "react"
import '../App.css';
import { addCurrency } from "../EventAPI";
import {useNavigate} from "react-router-dom";
function CurrencyList(props) {

    const nameInputRef = useRef();
    const history = useNavigate();

    const handleSubmit = (event) => 
    {
        const enteredName = nameInputRef.current.value
        console.log(enteredName)
        addCurrency(enteredName)
        event.preventDefault()
    }

    const Edit = (id) =>{
      history(`/managecurrencies/${id}`)
    }

  return (
      
    <div>
        {props.items.map((item, index) => (
            <div>
            <p>{item.name}</p>
            <button onClick={() => Edit(item.id)}> Editar Taxas</button>
            </div>
        ))}
            <form>
              <input placeholder="Currency" type="text" id="Email" ref={nameInputRef}/>
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
    </div>
  );
}

export default CurrencyList;
