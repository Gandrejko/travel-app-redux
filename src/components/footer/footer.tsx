import { ReactComponent as Heart } from "assets/images/heart.svg";

import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerText}>
        from
        <a className={styles.footerLink} href="https://binary-studio.com">
          binary studio
        </a>
        with
        <Heart />
      </span>
    </footer>
  );
};
