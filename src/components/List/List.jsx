import { getDayOfWeek } from "../../helpers/getDayOfWeek";
import styles from "./styles.module.css";

export const List = ({ data }) => {
  const max = Math.max(...data.map((item) => item.amount || 0));

  return (
    <ul className={styles.list}>
      {data.map((item) => {
        const heightPercent = (item.amount / max) * 100;

        return (
          <li key={item.day} className={styles.item}>
            <svg
              className={styles.barSvg}
              xmlns="http://www.w3.org/2000/svg"
              height={heightPercent}
              y={100 - heightPercent}
            >
              <rect
                y={100 - heightPercent}
                x={0}
                className={
                  getDayOfWeek() === item.day ? styles.currentBar : styles.bar
                }
              />
            </svg>
            <span className={styles.day}>{item.day}</span>
          </li>
        );
      })}
    </ul>
  );
};
