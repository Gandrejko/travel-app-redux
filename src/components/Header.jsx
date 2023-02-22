import user from "../assets/images/user.svg";
import briefcase from "../assets/images/briefcase.svg";
import { Link } from "react-router-dom";

export const Header = ({ isLogin }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link data-test-id="header-logo" to="/" className="header__logo">
          Travel App
        </Link>
        <nav
          hidden={!isLogin}
          data-test-id="header-nav"
          className="header__nav"
        >
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <Link
                data-test-id="header-bookings-link"
                to="bookings"
                className="nav-header__inner"
              >
                <span className="visually-hidden">Bookings</span>
                <img src={briefcase} alt=" icon" />
              </Link>
            </li>
            <li className="nav-header__item" title="Profile">
              <div
                data-test-id="header-profile-nav"
                className="nav-header__inner profile-nav"
                tabIndex="0"
              >
                <span className="visually-hidden">Profile</span>
                <img src={user} alt="profile icon" />
                <ul
                  data-test-id="header-profile-nav-list"
                  className="profile-nav__list"
                >
                  <li
                    data-test-id="header-profile-nav-username"
                    className="profile-nav__item profile-nav__username"
                  >
                    John Doe
                  </li>
                  <li className="profile-nav__item">
                    <Link
                      data-test-id="header-profile-nav-sign-out"
                      to="sign-in"
                      className="profile-nav__sign-out button"
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
