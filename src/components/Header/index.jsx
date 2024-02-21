import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';


function Header() {
    const location = useLocation();
    return (
        <div className="header">
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <Link to="/" className={`${location.pathname === '/' ? 'underline' : ''}`}>Accueil</Link>
                <Link to="/a-propos" className={`${location.pathname === '/a-propos' ? 'underline' : ''}`}>A Propos</Link>
            </nav>
        </div>
    )
}

export default Header;