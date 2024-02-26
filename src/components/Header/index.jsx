import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header;