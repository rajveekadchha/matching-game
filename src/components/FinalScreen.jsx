import { ReactComponent as ResultrogressBar } from "../assets/common/resultProgressBar.svg";
import { ReactComponent as Banana } from "../assets/banana.svg";
import { ReactComponent as ResultBananas } from "../assets/resultBananas.svg";
import { ReactComponent as ResultScoreCard } from "../assets/resultScoreCard.svg";
import { ReactComponent as ResultMonkey } from "../assets/resultMonkey.svg";
import styles from "./FinalScreen.module.css";
import { useState } from "react";
import StartScreen from "./InstructionScreen";
export default function FinalScreen({ matchedNo }) {
  const [reset, setReset] = useState(false);

  function resetAll() {
    setReset(true);
  }
  return (
    <>
      {reset ? (
        <StartScreen />
      ) : (
        <>
          <div className={styles.overlay}></div>
          <div>
            <ResultrogressBar className={styles.resultrogressBar} />
            <Banana className={styles.resultprogressBarBanana} />
          </div>
          <ResultBananas className={styles.resultBananas} />
          <ResultScoreCard
            onClick={resetAll}
            className={styles.resultScoreCard}
          />
          <h5 className={styles.resultText}>{matchedNo} Bananas</h5>
          <ResultMonkey className={styles.resultMonkey} />
        </>
      )}
    </>
  );
}
