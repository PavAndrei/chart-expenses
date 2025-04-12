import { getDayOfWeek } from "../../helpers/getDayOfWeek";
import styles from "./styles.module.css";

export const List = ({ data }) => {
  const max = Math.max(...data.map((item) => item.amount || 0));

  return (
    <ul className={styles.list}>
      {data.map((item) => {
        const heightPercent = (item.amount / max) * 150;
        const isToday = getDayOfWeek() === item.day;

        return (
          <li key={item.day} className={styles.item}>
            <div
              className={styles.amountLabel}
              style={{ bottom: `calc(${heightPercent}% + 8px)` }}
            >
              ${item.amount}
            </div>

            <svg
              className={styles.barSvg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              y={100 - heightPercent}
              height={heightPercent}
            >
              <rect
                x="0"
                width="100"
                rx="6"
                ry="6"
                className={isToday ? styles.currentBar : styles.bar}
              />
            </svg>

            <span className={styles.day}>{item.day}</span>
          </li>
        );
      })}
    </ul>
  );
};
