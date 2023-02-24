import { Link } from "react-router-dom";
import { Briefcase } from "../assets/images/briefcase";
import { User } from "../assets/images/user";

export const Nav = () => (
  <nav data-test-id="header-nav" className="header__nav">
    <ul className="nav-header__list">
      <li className="nav-header__item" title="Bookings">
        <Link
          data-test-id="header-bookings-link"
          to="bookings"
          className="nav-header__inner"
        >
          <span className="visually-hidden">Bookings</span>
          <Briefcase />
        </Link>
      </li>
      <li className="nav-header__item" title="Profile">
        <div
          data-test-id="header-profile-nav"
          className="nav-header__inner profile-nav"
          tabIndex={0}
        >
          <span className="visually-hidden">Profile</span>
          <User />
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
);
