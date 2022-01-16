import { useEffect, useState, useRef } from "react"
import '../App.css';
import { addCurrency } from "../EventAPI";
function CurrencyList(props) {

    const nameInputRef = useRef();

    const handleSubmit = (event) => 
    {
        const enteredName = nameInputRef.current.value
        console.log(enteredName)
        addCurrency(enteredName)
        event.preventDefault()
    }

  return (
      
    <div>
        {props.items.map((item, index) => (
            <p>{item.name}</p>
        ))}
            <form>
              <input placeholder="Email" type="text" id="Email" ref={nameInputRef}/>
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
    </div>
  );
}

export default CurrencyList;
