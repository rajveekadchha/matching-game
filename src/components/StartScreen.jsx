import { ReactComponent as MySvg } from "../assets/monkey.svg";
import { ReactComponent as BtnSvg } from "../assets/start.svg";
import { ReactComponent as Bubble } from "../assets/dialog.svg";
import { ReactComponent as Banana } from "../assets/banana.svg";
import { ReactComponent as Next } from "../assets/next.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import { ReactComponent as Yes } from "../assets/yes.svg";
import { ReactComponent as Emoji } from "../assets/Emoji.svg";
import { ReactComponent as InitProgressBar } from "../assets/initprogressbar.svg";
import { ReactComponent as InitProgressBarBanana } from "../assets/progressbarbanana.svg";
import { ReactComponent as RectangeSvg } from "../assets/Rectangle.svg";
import { ReactComponent as Vector } from "../assets/Vector7.svg";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as Card1 } from "../assets/card1.svg";
import { ReactComponent as Card2 } from "../assets/card2.svg";
import { ReactComponent as Card } from "../assets/card.svg";
import { ReactComponent as Cards } from "../assets/cards.svg";
import { ReactComponent as One } from "../assets/one.svg";
import { ReactComponent as Two } from "../assets/two.svg";
import { ReactComponent as Three } from "../assets/three.svg";
import styles from "./StartScreen.module.css";
import { useState } from "react";
export default function StartScreen() {
  const [step, setstep] = useState(1);

  function DecStep() {
    console.log(step);
    setstep(step - 1);
  }

  function IncStep() {
    console.log(step);
    setstep(step + 1);
  }
  return (
    <>
      {step != 4 ? <MySvg className={styles.monkeySvg} /> : ""}
      {step === 4 ? (
        <div>
          <Vector className={styles.vectorStyle} />
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangle}>
              <One className={styles.stepOne} />
              <div className={styles.cardDivFirstStep}>
                <Card1 className={styles.firstRectangleCard1} />
                <Card className={styles.firstRectangleCard} />
              </div>
              <h1 className={styles.CardText}>Select a pink card.</h1>
              <h1
                className={styles.CardTextSecond}
                style={{ top: "194px", left: "84px" }}
              >
                It has images.
              </h1>
            </div>
            <div className={styles.rectangle}>
              <Two className={styles.stepTwo} />
              <Card2 className={styles.secondRectangleCard} />
              <h1 className={styles.CardText} style={{ top: "-19px" }}>
                Select a Blue card.
              </h1>
              <h1
                className={styles.CardTextSecond}
                style={{ top: "-32px", left: "84px" }}
              >
                It has alphabets.
              </h1>
            </div>
            <div className={styles.rectangle}>
              <Three className={styles.stepThree} />
              <Cards className={styles.thirdRectangleCard} />
              <h1
                className={styles.CardTextSecond}
                style={{ top: "0px", left: "84px" }}
              >
                If they’re same
              </h1>
              <h1 className={styles.CardText} style={{ top: "-28px" }}>
                Its a match !
              </h1>
              <h1
                className={styles.CardTextSecond}
                style={{ top: "-111px", left: "84px" }}
              >
                otherwise retry :(
              </h1>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
      {step != 1 ? <Back className={styles.backStyle} onClick={DecStep} /> : ""}
      {step > 3 ? (
        <div>
          <InitProgressBar className={styles.progressbarStyle} />
          <InitProgressBarBanana className={styles.progressBarBananaStyle} />
        </div>
      ) : (
        ""
      )}
      {step != 4 ? (
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
                    width: "68px",
                    height: "68px",
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
      <div className={styles.introButton} onClick={IncStep}>
        {step === 1 ? (
          <BtnSvg />
        ) : step === 2 ? (
          <Next />
        ) : step === 3 ? (
          <Yes />
        ) : (
          <Play />
        )}
      </div>
    </>
  );
}
