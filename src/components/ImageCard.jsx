import Card from "./Card";

import styles from "./ImageCard.module.scss";

const ImageCard = (props) => (
  <Card>
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
