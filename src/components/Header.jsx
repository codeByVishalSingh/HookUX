import TopBar from "./TopBar";

const Header = () => {
  return (
    <header>
      <TopBar />
      <div className="header">
        <div className="header__logo-section">
          <img
            src="/logo-1.png"
            alt="Government of India Emblem"
            className="header__logo"
          />
          <img
            src="/dda-logo.png"
            alt="Delhi Development Authority Logo"
            className="header__logo"
          />
          <div className="header__title-block">
            <h1>DELHI DEVELOPMENT AUTHORITY</h1>
            <p className="header__subtitle">
              An Autonomous Body Under Ministry Of Housing And Urban Affairs
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
