import styles from "./Metric.module.scss";
import Card from "./Card.jsx";

const Metric = () => (
  <Card>
    <p>isaac r; me.</p>
    <img
      className={styles.metric}
      src="https://raw.githubusercontent.com/isaec/isaec/main/github-metrics.svg"
    />
  </Card>
);
export default Metric;
