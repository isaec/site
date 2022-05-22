import styles from "./Card.module.scss";

const Card = (props) => (
  <div classList={{ [styles.Card]: true, [styles.tall]: props.tall }}>
    {props.children}
  </div>
);
export default Card;
