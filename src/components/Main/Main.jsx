import { useEffect, useState } from "react";

import { Container } from "../Container/Container";
import { List } from "../List/List";

import styles from "./styles.module.css";

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const getTotalAmount = () => {
    return data.reduce((total, item) => (total += item.amount), 0).toFixed(2);
  };

  return (
    <main>
      <Container>
        <div className={styles.mainWrapper}>
          <h3 className={styles.title}>Spending - Last 7 days</h3>

          <List data={data} />

          <div className={styles.amount}>
            <div className={styles.currentAmount}>
              <p className={styles.description}>Total this month</p>
              <p className={styles.total}>${getTotalAmount()}</p>
            </div>
            <div className={styles.prevAmount}>
              <p className={styles.percentage}>+2.4%</p>
              <p className={styles.description}>from last month</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
