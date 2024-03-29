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
          <Show
            when={Array.isArray(row)}
            fallback={
              <p className={styles.comment}>
                <span className={styles.commentSlash}>{"// "}</span>
                <span className={styles.commentBlockSlash}>{"/* "}</span>
                {`${row.comment}`}
                <span className={styles.commentBlockSlash}>{" */"}</span>
              </p>
            }
          >
            <p className={styles.key}>
              <Show when={row[2] !== undefined} fallback={row[0]}>
                <a href={row[2]} target="_blank" rel="noopener noreferrer">
                  {row[0]}
                </a>
              </Show>
              :
            </p>
            <p
              classList={{
                [styles.value]: true,
                [styles.long]: row[1].length > 12,
              }}
            >
              {`"${row[1]}"`}
              <span>,</span>
            </p>
          </Show>
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
              <span>,</span>
            </p>
          </>
        )}
      </For>
      <p className={styles.bracket}>{"];"}</p>
    </div>
  );
};
