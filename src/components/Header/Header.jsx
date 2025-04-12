import { Logo } from "../../icons/Logo";
import { Container } from "../Container/Container";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>My balance</h1>
            <div className={styles.balance}>${921.48}</div>
          </div>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
      </Container>
    </header>
  );
};
