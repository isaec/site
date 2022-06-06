import Card from "./Card";
import { Table } from "./Collections";
import Head from "./Head";

import styles from "./Vitals.module.scss";

const Vitals = () => {
  return (
    <Card className={styles.Vitals}>
      <Head text="web vitals!" />
      <p>
        Web vitals are a measure of the quality of the user experience of a
        site.
      </p>
      <Table label="vitals">{[["e", "iou"]]}</Table>
    </Card>
  );
};
export default Vitals;
