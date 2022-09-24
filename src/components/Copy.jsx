import Card from "./Card";
import Head from "./Head";
import { Table, List } from "./Collections.jsx";

import { dependencies, devDependencies } from "../../package.json";

import styles from "./Copy.module.scss";

/** not copy, a simple span element */
export const Code = (props) => (
  <span className={styles.Code}>{props.children}</span>
);

export const Who = () => (
  <Card className={styles.paragraph_gap}>
    <Head text="who?" />
    <p>
      A student and software developer living in California. I do freelance web
      work, and make things (like this site) for fun.
    </p>
  </Card>
);

export const SayMore = () => (
  <Card className={styles.paragraph_gap}>
    <Head text="say more..." />
    <p>
      Backpacker, dev, rpg and video game enthusiast. <Code>he/him/his</Code>.
      Cryptocurrency skeptic! Sometimes weird. Dysgraphic.
    </p>
    <p>I enjoy making things, especially if I learn something from it.</p>
    <p>
      If this site stutters, especially on mobile while scrolling, there sadly
      isn't much to be done. Browsers do a bad job of large <Code>.svg</Code>{" "}
      files, like the one used for stats.
    </p>
  </Card>
);

export const Contact = () => (
  <Card className={styles.paragraph_gap}>
    <Head text="contact me!" />
    <p>
      If you have software internship, freelance, work, or volunteering
      opportunities, let me know. Alternatively, just reach out and chat.
    </p>
    <Table label="contacts">
      {[
        ["discord", "isaac#9000"],
        ["github", "isaec", "https://github.com/isaec"],
        ["email", "isaac@rubenfamily.com", "mailto:isaac@rubenfamily.com"],
        { comment: "^ slowest way to reach me" },
      ]}
    </Table>
  </Card>
);

export const TechStack = () => (
  <Card className={styles.paragraph_gap}>
    <Head text="tech stack?" />
    <p>
      This site is being rendered by your web client, and hosted on github
      pages. These lists are generated from <Code>package.json</Code> at build
      time.
    </p>
    <List label="dependencies">{Object.keys(dependencies)}</List>
    <List label="devDependencies">{Object.keys(devDependencies)}</List>
  </Card>
);
