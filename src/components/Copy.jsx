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

const Table = (props) => <div className={styles.Table}>{props.children}</div>;

export const Contact = () => (
  <Card className={styles.paragraph_gap}>
    <Head text="contact me!" />
    <p>
      If you have software internship, freelance, work, or volunteering
      opportunities, let me know. Feel free to just reach out and chat.
    </p>
    <Table>
      <p>discord:</p>
      <p>isaac#9000</p>
      <p>github:</p>
      <p>isaec</p>
      <p>email:</p>
      <p>coming soon!</p>
    </Table>
  </Card>
);
