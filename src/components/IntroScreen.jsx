import background from "../assets/intro.png";
import styles from "./IntroScreen.module.css";
import StartScreen from "./InstructionScreen";

export default function IntroScreen() {
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
