import "./Header.scss";

const Header = (props) => {
  return(
    <header className="headerSection">
      <button onClick={props.changeToggleAside}><ion-icon name="menu-outline"></ion-icon></button>
      <div>
        <span>HTML Docs</span>
      </div>
    </header>
  );
};

export default Header;