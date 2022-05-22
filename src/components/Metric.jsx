import styles from "./Metric.module.scss";
import Card from "./Card.jsx";
import Head from "./Head.jsx";

const Metric = () => (
  <Card>
    <Head className={styles.Head} text="isaac r; me." />
    <img
      className={styles.Metric}
      src="https://raw.githubusercontent.com/isaec/isaec/main/github-metrics.svg"
    />
  </Card>
);
export default Metric;
