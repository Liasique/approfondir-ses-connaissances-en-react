import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
    return (
        <nav>
            <Link to="/">
           <p>Accueil</p> 
            </Link>
            <Link to="/about">
                <p> À propos</p>   
            </Link>
        </nav>
    )
} 

export default MainNav;

