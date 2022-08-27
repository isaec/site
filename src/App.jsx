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
        alt="github profile picture, a cute little creature with a flower on its head"
        width={338}
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
