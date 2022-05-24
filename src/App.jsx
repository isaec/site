import styles from "./App.module.scss";
import Card from "./components/Card";
import Head from "./components/Head";
import Metric from "./components/Metric";
import QRCode from "./components/QRCode";

const App = () => {
  return (
    <div className={styles.App}>
      <Metric />
      <Card>
        <Head text="who?" />
        <p>me!</p>
      </Card>
      <QRCode url="example.com" />
    </div>
  );
};
export default App;
