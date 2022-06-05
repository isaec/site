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

const Table = (props) => {
  return (
    <div className={styles.Table}>
      <p classList={{ [styles.assignment]: true, [styles.bracket]: true }}>
        <span>const </span>
        <span>contacts</span>
        {" = {"}
      </p>
      <For each={props.contacts}>
        {(contact, index) => (
          <>
            <p className={styles.key}>{`${contact[0]}:`}</p>
            <p className={styles.value}>
              {`"${contact[1]}"`}
              {index() + 1 !== props.contacts.length ? <span>{","}</span> : ""}
            </p>
          </>
        )}
      </For>
      <p className={styles.bracket}>{"};"}</p>
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
    <Table
      contacts={[
        ["discord", "isaac#9000"],
        ["github", "isaec"],
        ["email", "coming soon!"],
      ]}
    />
  </Card>
);
