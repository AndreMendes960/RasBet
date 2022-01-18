import "./Nav.css"
import {useNavigate} from "react-router-dom";
import {fetchEvents, checkAdmin} from '../.././EventAPI';
import { useEffect, useState } from "react"
function Nav(props) {

    const isLoggedIn = JSON.parse(sessionStorage.getItem('token'));
    const history = useNavigate()

    const [resources, setResources] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const[isAdmin, setAdmin] = useState(false)

    useEffect(()=>
    {
    fetchEvents().then(response => {
        setResources(response)
        checkAdmin(JSON.parse(sessionStorage.getItem('token'))).then(response=>{
            if(response == "false")
            {
                setAdmin(false)
            }
            else
            {
                setAdmin(true)
            }

            setLoading(false);
        })
        
    });   
    }, [])

    const handleRedirect = (event) => 
    {
      history("/home")
    }
    const handleRedirect1 = (event) => 
    {
      history("/user")
    }
    const handleRedirect2 = (event) => 
    {
      history("/managecurrencies")
    }

    if (isLoading) {
      return <div className="homeContainer">Loading...</div>;
    }
    return (
      <div>
        <nav className="navbar">
      
        <div className="logo" onClick={handleRedirect}>RasBet</div>
        
        <ul className="nav-links">
        {isLoggedIn ? (
        
        <div className="menu">
            <li><a >Competitions</a></li>
            <li><a >Sports</a></li>
            <li><a >My Bets</a></li>
            {isAdmin && <li>
              
                <a onClick={handleRedirect2}>Currencies</a>
             
            </li>}
            <li><a >Amount</a></li>
            <li><a onClick={handleRedirect1}>{isLoggedIn}</a></li>
    
            </div>) :  
        <div className="menu">
            <li><a href="/">Competitions</a></li>
            <li><a href="/">Sports</a></li>
            <li><a href="/">My Bets</a></li>
           
            <li><a href="/login">Login</a></li>
            <li><a href="/registar">Registar</a></li>
           
           
            </div>
        }
        </ul>
        </nav>
    </div>  
        
    );

}

export default Nav;