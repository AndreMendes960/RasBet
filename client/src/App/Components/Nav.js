import "./Nav.css"

function Nav() {

    return (
      <div>
        <nav className="navbar">
      
        <div className="logo">RasBet</div>
        
        <ul className="nav-links">
        
        <div className="menu">
            <li><a href="/">Competitions</a></li>
            <li><a href="/">Sports</a></li>
            <li><a href="/">My Bets</a></li>

            <li><a href="/login">Login</a></li>
            <li><a href="/registar">Registar</a></li>
            </div>
        </ul>
        </nav>
    </div>  
        
    );

}

export default Nav;