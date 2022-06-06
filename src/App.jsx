import styles from "./App.module.scss";
import Card from "./components/Card";
import Head from "./components/Head";
import ImageCard from "./components/ImageCard";
import Metric from "./components/Metric";
import QRCode from "./components/QRCode";
import * as Copy from "./components/Copy";
import VGroup from "./components/VGroup";
import Vitals from "./components/Vitals";

const App = () => {
  return (
    <div className={styles.App}>
      <Metric />
      <VGroup>
        <Copy.Who />
        <Copy.SayMore />
        <Copy.Contact />
      </VGroup>
      <ImageCard
        round
        src="https://github.com/isaec.png"
        alt="github profile picture"
      />
      <Copy.TechStack />
      <QRCode url={window.location.host} />
      <Vitals />
    </div>
  );
};
export default App;
