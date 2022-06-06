import styles from "./Head.module.scss";

const Head = (props) => (
  <p
    classList={{
      [styles.Head]: true,
      // this allows funky indirection but its fine
      [props.className ?? props.class ?? undefined]: true,
    }}
  >
    {props.text}
  </p>
);
export default Head;
