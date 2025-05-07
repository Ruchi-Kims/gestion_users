import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => (
  <nav className="navbar">
    <Link className="nav-link" to="/">Accueil</Link> | 
    <Link className="nav-link" to="/users">Utilisateurs</Link> |
    <Link className="nav-link" to="/ajouter">Ajouter un utilisateur</Link>
  </nav>
);

export default Navbar;
