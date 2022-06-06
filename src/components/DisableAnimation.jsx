import Card from "./Card";
import Head from "./Head";
import { Code } from "./Copy";

import styles from "./DisableAnimation.module.scss";
import { createSignal } from "solid-js";

const DisableAnimation = (props) => {
  const [status, setStatus] = createSignal(true);
  return (
    <Card className={styles.Card}>
      <Head text={`${status() ? "over" : "under"}whelmed?`}></Head>
      <p className={styles.pad}>
        Sorry if all the colors are a little garish, or if the motion is
        overwhelming. It's all gated behind the{" "}
        <Code>prefers-reduced-motion</Code> query, but you can also turn it all{" "}
        {status() ? "off" : "back on"} with this big button. Apologies!
      </p>
      <button
        className={styles.disable}
        onClick={() => {
          console.log(status());
          if (status()) {
            document.documentElement.classList.add("no_motion");
          } else {
            document.documentElement.classList.remove("no_motion");
          }
          setStatus(!status());
        }}
      >
        {status() ? "make it stop!" : "bring it back!"}
      </button>
    </Card>
  );
};

export default DisableAnimation;
