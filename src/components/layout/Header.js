import { Link } from "react-router-dom";
import Logo from "../../images/logo-original.png";
import classes from "./Header.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={`fluidContainer ${classes.headerContainer}`}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <nav className={classes.mainNavigation}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/booking-page">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}
