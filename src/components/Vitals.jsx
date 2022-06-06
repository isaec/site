import Card from "./Card";
import { Table } from "./Collections";
import Head from "./Head";
import { getLCP, getFID, getCLS } from "web-vitals";
import { createResource } from "solid-js";

import styles from "./Vitals.module.scss";

const callbackAsPromise = (fn) => {
  return async () => {
    return new Promise((resolve) => {
      fn(resolve, true);
    });
  };
};

const Vitals = () => {
  const [LCP] = createResource(callbackAsPromise(getLCP));
  const [FID] = createResource(callbackAsPromise(getFID));
  const [CLS] = createResource(callbackAsPromise(getCLS));

  return (
    <Card className={styles.Vitals}>
      <Head text="web vitals!" />
      <p>
        Web vitals are a measure of the quality of the user experience of a
        site.
      </p>
      <Table label="vitals">
        {[
          ["lcp", LCP()?.value ?? "awaiting"],
          ["fid", FID()?.value ?? "awaiting"],
          ["cls", CLS()?.value ?? "awaiting"],
        ]}
      </Table>
    </Card>
  );
};
export default Vitals;
