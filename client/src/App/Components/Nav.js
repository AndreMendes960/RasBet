import "./Nav.css"

function Nav() {

    const isLoggedIn = JSON.parse(sessionStorage.getItem('token'));

    return (
      <div>
        <nav className="navbar">
      
        <div className="logo">RasBet</div>
        
        <ul className="nav-links">
        {isLoggedIn ? (
        
        <div className="menu">
            <li><a href="/">Competitions</a></li>
            <li><a href="/">Sports</a></li>
            <li><a href="/">My Bets</a></li>
           
            <li><a href={isLoggedIn}>{isLoggedIn}</a></li>
    
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