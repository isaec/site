import Card from "./Card";
import Head from "./Head";

import styles from "./Copy.module.scss";

export const Who = () => (
  <Card className={styles.paragraph_gap}>
    <Head text="who?" />
    <p>
      A student and software developer living in California. I do freelance web
      work, and make things (like this site) for fun.
    </p>
  </Card>
);

export const Contact = () => (
  <Card className={styles.paragraph_gap}>
    <Head text="contact me!" />
    <p>
      If you have software internship, freelance, work, or volunteering
      opportunities, let me know. Feel free to just reach out and chat.
    </p>
    <p>discord: isaac#9000</p>
    <p>github: isaec</p>
  </Card>
);
