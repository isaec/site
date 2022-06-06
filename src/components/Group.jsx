import styles from "./Group.module.scss";

export const Vertical = (props) => (
  <div
    classList={{
      [styles.Vertical]: true,
      [styles[`contains_${props.children.length}`]]: true,
    }}
  >
    {props.children}
  </div>
);

export const Horizontal = (props) => (
  <div
    classList={{
      [styles.Horizontal]: true,
      [styles[`contains_${props.children.length}`]]: true,
    }}
  >
    {props.children}
  </div>
);
