import Card from "./Card";
import { Table } from "./Collections";
import Head from "./Head";
import { getLCP, getFID, getCLS } from "web-vitals";
import { createResource } from "solid-js";

import styles from "./Vitals.module.scss";

const createResourceCallback = (fn) =>
  createResource(async () => new Promise((resolve) => fn(resolve, true)), {
    initialValue: {},
  });

const VitalTable = (props) => {
  const [data] = createResourceCallback(props.fn);
  return (
    <Table label={props.label}>{[["value", data().value ?? "awaiting"]]}</Table>
  );
};

const Vitals = () => {
  const [LCP] = createResourceCallback(getLCP);
  const [FID] = createResourceCallback(getFID);
  const [CLS] = createResourceCallback(getCLS);

  return (
    <Card className={styles.Vitals}>
      <Head text="web vitals!" />
      <p>
        Web vitals are a measure of the quality of the user experience of a
        site.
      </p>
      <VitalTable label="lcp" fn={getLCP} />
      <VitalTable label="fid" fn={getFID} />
      <VitalTable label="cls" fn={getCLS} />
    </Card>
  );
};
export default Vitals;
