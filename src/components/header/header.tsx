import { useAppSelector } from 'hooks/redux';
import { FC } from "react";
import { Link } from "react-router-dom";
import { Nav } from "components/nav/nav";

import styles from "./style.module.css";

export const Header: FC = () => {
  const token = useAppSelector(state => state.auth.token);
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link
          data-test-id="header-logo"
          to="/"
          className={styles.headerLogo}
        >
          Travel App
        </Link>
        {token && <Nav />}
      </div>
    </header>
  );
};
