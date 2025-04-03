import './Header.css';
import logoImage from '../assets/logo.png';

function Header() {

    return (
        <div className="header">
            <div className="title">
                <h1>Stream City</h1>
                <img className="logo-image" src={logoImage} alt="Logo Image" />
            </div>
            <div className="nav-bar">
            </div>
            <div className="login-buttons">
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    );
}

export default Header;