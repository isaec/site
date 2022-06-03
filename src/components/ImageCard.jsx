import Card from "./Card";

import styles from "./ImageCard.module.scss";

const ImageCard = (props) => (
  <Card className={styles.ImageCard}>
    <img
      src={props.src}
      classList={{
        [styles.image]: true,
        [styles.round]: props.round,
      }}
    />
  </Card>
);
export default ImageCard;
