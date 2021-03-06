import styles from "./Metric.module.scss";
import Card from "./Card";
import Head from "./Head";

const Metric = () => (
  <Card tall pad={false}>
    <Head className={styles.Head} text="isaac r; me." />
    <img
      className={styles.Metric}
      alt="github metrics graph"
      src="https://raw.githubusercontent.com/isaec/isaec/main/github-metrics.svg"
    />
  </Card>
);
export default Metric;
