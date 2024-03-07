import { ReactComponent as Monkey } from "../assets/monkey.svg";
import { ReactComponent as MonkeyShadow } from "../assets/monkeyShadow.svg";
import { ReactComponent as BtnSvg } from "../assets/start.svg";
import { ReactComponent as Bubble } from "../assets/dialog.svg";
import { ReactComponent as Banana } from "../assets/banana.svg";
import { ReactComponent as Next } from "../assets/next.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import { ReactComponent as Yes } from "../assets/yes.svg";
import { ReactComponent as Emoji } from "../assets/Emoji.svg";
import { ReactComponent as InitProgressBar } from "../assets/initprogressbar.svg";
import { ReactComponent as InitProgressBarBanana } from "../assets/progressbarbanana.svg";
import { ReactComponent as StarSettings } from "../assets/common/starSettings.svg";
import { ReactComponent as Vector } from "../assets/Vector7.svg";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as CardShadow } from "../assets/cardShadow.svg";
import { ReactComponent as Card1 } from "../assets/card1.svg";
import { ReactComponent as Card2 } from "../assets/card2.svg";
import { ReactComponent as Card } from "../assets/card.svg";
import { ReactComponent as Cards } from "../assets/cards.svg";
import { ReactComponent as One } from "../assets/one.svg";
import { ReactComponent as Two } from "../assets/two.svg";
import { ReactComponent as Three } from "../assets/three.svg";
import styles from "./StartScreen.module.css";
import { useState } from "react";
import ActivityScreen from "./ActivityScreen";

export default function StartScreen() {
  const [step, setstep] = useState(1);

  function DecStep() {
    if (step !== 5) {
      setstep(step - 1);
    }
    setstep(step - 1);
  }

  function IncStep() {
    setstep(step + 1);
  }
  return (
    <>
      {step === 5 ? <ActivityScreen /> : ""}
      {step < 4 ? (
        <>
          <Monkey className={styles.monkeySvg} />
          <MonkeyShadow className={styles.monkeyShadowSvg} />
        </>
      ) : (
        ""
      )}
      {step < 3 ? <StarSettings className={styles.starSettingsSvg} /> : ""}
      {step === 4 ? (
        <div>
          <Vector className={styles.vectorStyle} />
          <CardShadow className={styles.cardShadow} />
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangle}>
              <One className={styles.stepCounter} />
              <div className={styles.cardDivFirstStep}>
                <Card1 className={styles.firstRectangleCard1} />
                <Card className={styles.firstRectangleCard} />
              </div>
              <div className={styles.cardContent}>
                <h1 className={styles.CardText}>Select a pink card.</h1>
                <h1 className={styles.CardTextSecond}>It has images.</h1>
              </div>
            </div>
            <div className={styles.rectangle}>
              <Two className={styles.stepCounter} />
              <Card2 className={styles.secondRectangleCard} />
              <div className={styles.cardContent}>
                <h1 className={styles.CardText}>Select a Blue card.</h1>
                <h1 className={styles.CardTextSecond}>It has alphabets.</h1>
              </div>
            </div>
            <div className={styles.rectangle}>
              <Three className={styles.stepCounter} />
              <Cards className={styles.thirdRectangleCard} />
              <div className={styles.cardContent}>
                <h1 className={styles.CardTextSecond}>If they’re same</h1>
                <h1 className={styles.CardText}>Its a match !</h1>
                <h1 className={styles.CardTextSecond}>otherwise retry :</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
      {step !== 1 ? (
        <Back className={styles.backStyle} onClick={DecStep} />
      ) : (
        ""
      )}
      {(step > 3) & (step !== 6) ? (
        <div>
          <InitProgressBar className={styles.progressbarStyle} />
          <InitProgressBarBanana className={styles.progressBarBananaStyle} />
        </div>
      ) : (
        ""
      )}
      {step < 4 ? (
        <div className={styles.bubbleContainerDivStyle}>
          <Bubble className={styles.bubbleStyle} />
          {step === 1 ? (
            <h1 className={styles.firstText}> Welcome kiddo !</h1>
          ) : step === 2 ? (
            <h1 className={styles.secondText}>
              Hi, I am Mizo!
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>and I love bananas</span>
                <Banana
                  style={{
                    marginLeft: "-10px",
                    width: "72px",
                    height: "65px",
                    display: "inline-flex",
                  }}
                />
              </div>
            </h1>
          ) : step === 3 ? (
            <h1 className={styles.thirdText}>
              Can you help me get{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>some?</span>
                <Emoji style={{ marginLeft: "1rem", display: "inline-flex" }} />
              </div>
            </h1>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {step < 5 ? (
        <div className={styles.introButton} onClick={IncStep}>
          {step === 1 ? (
            <BtnSvg />
          ) : step === 2 ? (
            <Next />
          ) : step === 3 ? (
            <Yes />
          ) : step === 4 ? (
            <Play />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
