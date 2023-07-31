import { useGetAuthenticatedUserQuery } from 'api/api';
import { useAppSelector } from 'hooks/redux';
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "components/nav/nav";

import styles from "./style.module.css";

export const Header: FC = () => {
  const navigate = useNavigate();
  const { isError } = useGetAuthenticatedUserQuery();
  if(isError) {
    navigate('/sign-in');
  }
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
