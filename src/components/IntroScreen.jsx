import background from "../assets/intro.png";
import styles from "./IntroScreen.module.css";
import StartScreen from "./StartScreen";

export default function IntroScreen() {
  function changeText() {}
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={styles.bgImg}
      >
        <StartScreen />
      </div>
    </div>
  );
}
