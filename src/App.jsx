import styles from "./App.module.scss";
import Metric from "./components/Metric";

const App = () => {
  return (
    <div className={styles.App}>
      <Metric />
    </div>
  );
};
export default App;
