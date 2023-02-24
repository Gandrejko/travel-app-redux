import { Heart } from "../assets/images/heart";

export const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        from
        <a className="footer__link" href="https://binary-studio.com">
          binary studio
        </a>
        with
        <Heart />
      </span>
    </footer>
  );
};
