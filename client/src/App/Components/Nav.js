import "./Nav.css"
import {useNavigate} from "react-router-dom";

function Nav() {

    const isLoggedIn = JSON.parse(sessionStorage.getItem('token'));
    const history = useNavigate()
    const handleRedirect = (event) => 
    {
      history("/home")
    }
    const handleRedirect1 = (event) => 
    {
      history("/user")
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