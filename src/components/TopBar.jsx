const TopBar = () => {
  return (
    <div className="topbar" role="banner">
      <div className="topbar__links">
        <a href="#" className="topbar__link">
          Old Website
        </a>
        <span className="topbar__separator" aria-hidden="true">|</span>
        <a href="#" className="topbar__link">
          FAQs
        </a>
        <span className="topbar__separator" aria-hidden="true">|</span>
        <a href="#" className="topbar__link">
          Screen Reader Access
        </a>
      </div>
      <div className="topbar__links">
        <a href="#" className="topbar__link">
          English
        </a>
        <span className="topbar__separator" aria-hidden="true">|</span>
        <a href="#" className="topbar__link">
          Login
        </a>
      </div>
    </div>
  );
};

export default TopBar;
