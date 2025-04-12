import styles from "./styles.module.css";

export const Chart = ({ children }) => {
  return <div className={styles.chart}>{children}</div>;
};
