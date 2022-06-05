import styles from "./VGroup.module.scss";

const VGroup = (props) => <div className={styles.VGroup}>{props.children}</div>;

export default VGroup;
