import oldstyles from "./StartScreen.module.css";
import { ReactComponent as ResultrogressBar } from "../assets/common/resultProgressBar.svg";
import { ReactComponent as Banana } from "../assets/banana.svg";
import { ReactComponent as ResultBananas } from "../assets/resultBananas.svg";
import { ReactComponent as ResultScoreCard } from "../assets/resultScoreCard.svg";
import { ReactComponent as ResultMonkey } from "../assets/resultMonkey.svg";
import styles from "./FinalScreen.module.css";
export default function FinalScreen({ matchedNo }) {
  return (
    <>
      <div>
        <ResultrogressBar className={styles.resultrogressBar} />
        <Banana className={styles.resultprogressBarBanana} />
      </div>
      <ResultBananas className={styles.resultBananas} />
      <ResultScoreCard className={styles.resultScoreCard} />
      <text className={styles.resultText}>{matchedNo} Banana’s</text>
      <ResultMonkey className={styles.resultMonkey} />
    </>
  );
}
