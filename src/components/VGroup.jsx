import styles from "./VGroup.module.scss";

const VGroup = (props) => (
  <div
    classList={{
      [styles.VGroup]: true,
      [styles[`contains_${props.children.length}`]]: true,
    }}
  >
    {props.children}
  </div>
);

export default VGroup;
