import logo from '../../assets/logo.png';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo Kasa"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header;