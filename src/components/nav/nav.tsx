import { Link } from "react-router-dom";
import { ReactComponent as Briefcase } from "assets/images/briefcase.svg";
import { ReactComponent as User } from "assets/images/user.svg";

import styles from "./style.module.css";

export const Nav = () => (
  <nav data-test-id="header-nav" className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem} title="Bookings">
        <Link
          data-test-id="header-bookings-link"
          to="bookings"
          className={styles.navInner}
        >
          <span className="visually-hidden">Bookings</span>
          <Briefcase />
        </Link>
      </li>
      <li className={styles.navItem} title="Profile">
        <div
          data-test-id="header-profile-nav"
          className={`${styles.navInner} ${styles.profileNav}`}
          tabIndex={0}
        >
          <span className="visually-hidden">Profile</span>
          <User />
          <ul
            data-test-id="header-profile-nav-list"
            className={styles.profileNavList}
          >
            <li
              data-test-id="header-profile-nav-username"
              className={styles.profileNavItem}
            >
              John Doe
            </li>
            <li className={styles.profileNavItem}>
              <Link
                data-test-id="header-profile-nav-sign-out"
                to="sign-in"
                className={`${styles.profileNavSignOut} button`}
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
