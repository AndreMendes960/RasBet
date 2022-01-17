import { useEffect, useState, useRef } from "react"
import '../App.css';
import { addChange, fetchChanges, fetchCurrencies } from "../EventAPI";
import { useParams } from "react-router-dom";
function Currency(props) {

    const taxaInputRef = useRef();
    const nameInputRef = useRef();
    
    const { currencyId } = useParams();

    const [currencies, setCurrencies] = useState([]);
    const[changes, setChanges] = useState([])
    const [isLoading, setLoading] = useState(true)
  
    useEffect(()=>
    {
        fetchChanges(currencyId).then(response => {
      setChanges(response)
      setLoading(false);
    }).then(fetchCurrencies().then(response => { setCurrencies(response)} ));   
    }, [])


    const add = (event) =>{
        const taxa = taxaInputRef.current.value
        const name = nameInputRef.current.value
        addChange(currencyId, taxa, name).then(console.log("added"));
        event.preventDefault();
    }

  return (
      
    <div>
     {/* <CurrencyList items={currencies}></CurrencyList> */}

     <form>
         <input ref={taxaInputRef}/>
         <input ref={nameInputRef}/>
         <input  type="submit" value="Submit" onClick={add} />
     </form>
     </div>
    );
}

export default Currency;