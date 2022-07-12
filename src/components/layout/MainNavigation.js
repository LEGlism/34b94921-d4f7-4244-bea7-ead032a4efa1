import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Events</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Alle Events</Link>
          </li>

          <li>
            <Link to="/card">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
