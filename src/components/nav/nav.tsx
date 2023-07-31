import { useAppSelector } from 'hooks/redux';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as Briefcase } from "assets/images/briefcase.svg";
import { ReactComponent as User } from "assets/images/user.svg";
import { authSlice } from 'store/reducers/auth';

import styles from "./style.module.css";

export const Nav = () => {
  const fullName = useAppSelector(state => state.auth.user?.fullName);
  const { removeUserData } = authSlice.actions;
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(removeUserData());
  };
  return (
    <nav data-test-id="header-nav" className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem} title="Bookings">
          <Link
            data-test-id="header-bookings-link"
            to="bookings"
            className={styles.navInner}
          >
            <span className="visually-hidden">Bookings</span>
            <Briefcase/>
          </Link>
        </li>
        <li className={styles.navItem} title="Profile">
          <div
            data-test-id="header-profile-nav"
            className={`${styles.navInner} ${styles.profileNav}`}
            tabIndex={0}
          >
            <span className="visually-hidden">Profile</span>
            <User/>
            <ul
              data-test-id="header-profile-nav-list"
              className={styles.profileNavList}
            >
              <li
                data-test-id="header-profile-nav-username"
                className={styles.profileNavItem}
              >
                {fullName}
              </li>
              <li className={styles.profileNavItem}>
                <Link
                  data-test-id="header-profile-nav-sign-out"
                  to="sign-in"
                  className={`${styles.profileNavSignOut} button`}
                  onClick={handleLogout}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
};
