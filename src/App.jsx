import styles from "./App.module.scss";
import Card from "./components/Card";
import Head from "./components/Head";
import Metric from "./components/Metric";

const App = () => {
  return (
    <div className={styles.App}>
      <Metric />
      <Card>
        <Head text="who?" />
        <p>test of the nature of god</p>
      </Card>
      <Card>
        <Head text="third card !" />
        <p>what is the meaning of this?</p>
        <Head text="why ??" />
        <p>makes sense to me...</p>
      </Card>
      <Card>
        <Head text="fourth" />
        <p>how many cards does a person need!</p>
        <Head text="answer:" />
        <p>more!</p>
      </Card>
      <Card tall>
        <Head text="fifth" />
        <p>tis one tall</p>
      </Card>
      <Card>
        <Head text="six" />
        <p>short lil boy</p>
      </Card>
    </div>
  );
};
export default App;
