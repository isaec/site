import styles from "./Metric.module.scss";
import Card from "./Card";
import Head from "./Head";

const Metric = () => (
  <Card tall pad={false}>
    <Head className={styles.Head} text="isaac r; me." />
    <img
      className={styles.Metric}
      alt="My github metrics graph, showing contributions over the last year."
      src="https://raw.githubusercontent.com/isaec/isaec/main/github-metrics.svg"
      width={480}
      height={834}
    />
  </Card>
);
export default Metric;
