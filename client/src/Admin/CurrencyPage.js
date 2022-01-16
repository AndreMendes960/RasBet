import { useEffect, useState } from "react"
import '../App.css';
import {fetchCurrencies} from '../EventAPI'
import CurrencyList from "./CurrencyList";
function CurrencyPage() {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setLoading] = useState(true)

useEffect(()=>
{
  fetchCurrencies().then(response => {
    setCurrencies(response)
    setLoading(false);
  });   
}, [])


if (isLoading) {
    return <div className="App">Loading...</div>;
}
  
  
return (
     <CurrencyList items={currencies}></CurrencyList>
    );
}
  
export default CurrencyPage;
  