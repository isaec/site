import Card from "./Card";
import Head from "./Head";
import { Code } from "./Copy";

import styles from "./DisableAnimation.module.scss";
import { createSignal } from "solid-js";

const prefersReducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);
const prefersReducedMotion =
  prefersReducedMotionQuery.matches || prefersReducedMotionQuery === true;

const DisableAnimation = (props) => {
  const [status, setStatus] = createSignal(true);
  return (
    <Card className={styles.Card}>
      <Show
        when={!prefersReducedMotion}
        fallback={
          <>
            <Head text="underwhelmed?" />
            <p class={styles.pad}>
              Your browser requested that I don't show any unneeded animations.
              I decided to omit rainbow effects entirely. This leaves the page a
              little dull.
              <br />
              <br />
              Instead, you'll need to <i>imagine</i> slowly shifting rainbow
              fades and halos for the images and paragraph headers — they are
              highly tasteful, I promise.
              <br />
              <br />
              This could be because of low power mode, or it could be from a
              user preference — either way, I get it. Have a nice day!
            </p>
          </>
        }
      >
        <Head text={`${status() ? "over" : "under"}whelmed?`} />
        <p className={styles.pad}>
          Sorry if all the colors are a little garish, or if the motion is
          overwhelming. It's all gated behind the{" "}
          <Code>prefers-reduced-motion</Code> query, but you can also turn it
          all {status() ? "off" : "back on"} with this big button. Apologies!
        </p>
        <button
          className={styles.disable}
          onClick={() => {
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
      </Show>
    </Card>
  );
};

export default DisableAnimation;
