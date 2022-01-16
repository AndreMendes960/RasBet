import "./Nav.css"

function Nav() {

    return (
      <div>
        <nav class="navbar">
      
        <div class="logo">RasBet</div>
        
        <ul class="nav-links">
        
            <div class="menu">
            <li><a href="/">Competitions</a></li>
            <li><a href="/">Sports</a></li>
            <li><a href="/">My Bets</a></li>
            <li class="services">
                <a href="/">Services</a>
                <ul class="dropdown">
                <li><a href="/">Exemplo se quisermos usar </a></li>     
                </ul>
            </li>
            <li><a href="/login">Login</a></li>
            <li><a href="/registar">Registar</a></li>
            </div>
        </ul>
        </nav>
    </div>  
        
    );

}

export default Nav;