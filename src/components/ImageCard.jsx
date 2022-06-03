import Card from "./Card";

import styles from "./ImageCard.module.scss";

const ImageCard = (props) => (
  <Card>
    <img src={props.src} />
  </Card>
);
export default ImageCard;
