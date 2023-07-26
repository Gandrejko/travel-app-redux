import { FC } from "react";
import { Link } from "react-router-dom";
import { Nav } from "components/nav/nav";

import styles from "./style.module.css";

interface IHeaderProps {
  isLogin: boolean;
}

export const Header: FC<IHeaderProps> = ({ isLogin }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link
          data-test-id="header-logo"
          to={isLogin ? "/" : "/sign-in"}
          className={styles.headerLogo}
        >
          Travel App
        </Link>
        {isLogin && <Nav />}
      </div>
    </header>
  );
};
