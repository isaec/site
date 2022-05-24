import styles from "./Metric.module.scss";
import Card from "./Card";
import Head from "./Head";

const Metric = () => (
  <Card tall pad={false} className={styles.Card}>
    <Head className={styles.Head} text="isaac r; me." />
    <img
      className={styles.Metric}
      src="https://raw.githubusercontent.com/isaec/isaec/main/github-metrics.svg"
    />
  </Card>
);
export default Metric;
