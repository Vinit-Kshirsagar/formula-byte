import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Formula Byte</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/drivers">Drivers</Link>
        <Link to="/tracks">Tracks</Link>
        <Link to="/account">Account</Link>
      </div>
    </nav>
  );
}
