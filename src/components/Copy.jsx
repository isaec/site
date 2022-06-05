import Card from "./Card";
import Head from "./Head";

import { dependencies, devDependencies } from "../../package.json";

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

const Table = (props) => {
  return (
    <div className={styles.Table}>
      <p classList={{ [styles.assignment]: true, [styles.bracket]: true }}>
        <span>const </span>
        <span>{props.label}</span>
        {" = {"}
      </p>
      <For each={props.children}>
        {(row, index) => (
          <>
            <p className={styles.key}>
              <a href={row[2]}>{row[0]}</a>:
            </p>
            <p className={styles.value}>
              {`"${row[1]}"`}
              {index() + 1 !== props.children.length ? <span>{","}</span> : ""}
            </p>
          </>
        )}
      </For>
      <p className={styles.bracket}>{"};"}</p>
    </div>
  );
};

const List = (props) => {
  return (
    <div className={styles.List}>
      <p classList={{ [styles.assignment]: true, [styles.bracket]: true }}>
        <span>const </span>
        <span>{props.label}</span>
        {" = ["}
      </p>
      <For each={props.children}>
        {(elem, index) => (
          <>
            <p className={styles.value}>
              {`"${elem}"`}
              {index() + 1 !== props.children.length ? <span>{","}</span> : ""}
            </p>
          </>
        )}
      </For>
      <p className={styles.bracket}>{"];"}</p>
    </div>
  );
};

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
        ["email", "coming soon!"],
      ]}
    </Table>
  </Card>
);

export const TechStack = () => (
  <Card className={styles.paragraph_gap}>
    <Head text="tech stack?" />
    <p>
      This site is being rendered by your web client, and hosted on github
      pages. These lists are generated from package.json at build time.
    </p>
    <List label="dependencies">{Object.keys(dependencies)}</List>
    <List label="devDependencies">{Object.keys(devDependencies)}</List>
  </Card>
);
