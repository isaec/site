import styles from "./App.module.scss";
import Card from "./components/Card";
import Head from "./components/Head";
import ImageCard from "./components/ImageCard";
import Metric from "./components/Metric";
import QRCode from "./components/QRCode";
import * as Copy from "./components/Copy";

const App = () => {
  return (
    <div className={styles.App}>
      <Metric />
      <Copy.Who />
      <ImageCard
        round
        src="https://github.com/isaec.png"
        alt="github profile picture"
      />
      <Copy.Contact />
      <Copy.TechStack />
      <QRCode url={window.location.host} />
    </div>
  );
};
export default App;
