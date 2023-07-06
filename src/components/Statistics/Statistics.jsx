import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      <li className={styles.item}>
        Good: <span className={styles.span}>{good}</span>
      </li>
      <li className={styles.item}>
        Neutral: <span className={styles.span}>{neutral}</span>
      </li>
      <li className={styles.item}>
        Bad: <span className={styles.span}>{bad}</span>
      </li>
      <li className={styles.item}>
        Total: <span className={styles.span}>{total}</span>
      </li>
      <li className={styles.item}>
        Positive feedback:
        <span className={styles.span}>{positivePercentage} %</span>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
