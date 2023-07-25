import { FC } from 'react';
import { Link } from "react-router-dom";
import { Nav } from "./nav";

interface IHeaderProps {
  isLogin: boolean;
}

export const Header: FC<IHeaderProps> = ({ isLogin }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link
          data-test-id="header-logo"
          to={isLogin ? "/" : "/sign-in"}
          className="header__logo"
        >
          Travel App
        </Link>
        {isLogin && <Nav />}
      </div>
    </header>
  );
};
