import headerImg from "../assets/icons/planning.png";

function Header() {
  return (
    <header className="header-container">
      <img className="header-img" src={headerImg} />
      <h1 className="header">Your tasks</h1>
    </header>
  );
}

export default Header;
