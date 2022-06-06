import styles from "./Collections.module.scss";

export const Table = (props) => {
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

export const List = (props) => {
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
