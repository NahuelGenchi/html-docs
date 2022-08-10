import { Link } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
  return(
    <header className="headerSection">
      <button onClick={props.changeToggleAside}><ion-icon name="menu-outline"></ion-icon></button>
      <div>
        <Link to={`/`}>
          <span>HTML Docs</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;