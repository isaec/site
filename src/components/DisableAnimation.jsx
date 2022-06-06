import Card from "./Card";
import Head from "./Head";
import { Code } from "./Copy";

import styles from "./DisableAnimation.module.scss";

const DisableAnimation = (props) => (
  <Card>
    <Head text="overwhelmed?"></Head>
    <p>
      Sorry if all the colors are a little garish, or if the motion is
      overwhelming. It's all gated behind the{" "}
      <Code>prefers-reduced-motion</Code> query, but you can also turn it off
      with this big button. Apologies!
    </p>
    <button
      onClick={() => {
        document.documentElement.classList.add("no_motion");
      }}
    >
      aaaa
    </button>
  </Card>
);

export default DisableAnimation;
