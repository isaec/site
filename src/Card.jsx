import styles from "./Card.module.scss";

const Card = () => (
  <div className={styles.Card}>
    <p>isaac r; me.</p>
    <img
      className={styles.metric}
      src="https://raw.githubusercontent.com/isaec/isaec/main/github-metrics.svg"
    />
  </div>
);
export default Card;
