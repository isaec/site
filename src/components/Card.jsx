import styles from "./Card.module.scss";

const Card = (props) => (
  <div
    classList={{
      [styles.Card]: true,
      [styles.tall]: props.tall,
      [styles.pad]: props.pad,
    }}
  >
    {props.children}
  </div>
);
export default Card;
