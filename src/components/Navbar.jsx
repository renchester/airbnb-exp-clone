import logo from '../assets/airbnb-logo.png';

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Airbnb logo" className="nav__logo" />
    </nav>
  );
}

export default Navbar;
