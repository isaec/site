import styles from "./App.module.scss";
import Card from "./components/Card";
import Head from "./components/Head";
import ImageCard from "./components/ImageCard";
import Metric from "./components/Metric";
import QRCode from "./components/QRCode";

const App = () => {
  return (
    <div className={styles.App}>
      <Metric />
      <Card>
        <Head text="who?" />
        <p>
          A student and software developer living in California. I do freelance
          web work, and make things (like this) for fun.
        </p>
        <p>
          Always interested in more freelance work, internships, or software
          volunteering.
        </p>
      </Card>
      <ImageCard
        round
        src="https://github.com/isaec.png"
        alt="github profile picture"
      />
      <QRCode url={window.location.host} />
    </div>
  );
};
export default App;
