import styles from "./App.module.scss";
import ImageCard from "./components/ImageCard";
import Metric from "./components/Metric";
import QRCode from "./components/QRCode";
import * as Copy from "./components/Copy";
import * as Group from "./components/Group";
import DisableAnimation from "./components/DisableAnimation";

const App = () => {
  return (
    <div className={styles.App}>
      <Metric />
      <Group.Vertical>
        <Copy.Who />
        <Copy.SayMore />
        <Copy.Contact />
      </Group.Vertical>
      <ImageCard
        round
        src="https://github.com/isaec.png"
        alt="github profile picture"
      />
      <Copy.TechStack />
      <Group.Horizontal>
        <QRCode url={window.location.host} />
        <DisableAnimation />
      </Group.Horizontal>
    </div>
  );
};
export default App;
