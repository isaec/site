import Card from "./Card";

import styles from "./ImageCard.module.scss";

const ImageCard = (props) => (
  <Card className={styles.ImageCard} pad={false}>
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height ?? props.width}
      classList={{
        [styles.image]: true,
        [styles.round]: props.round,
      }}
    />
  </Card>
);
export default ImageCard;
