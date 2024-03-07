import { ReactComponent as PinkCard } from "../assets/common/pinkCard.svg";
import { ReactComponent as BlueCard } from "../assets/common/blueCard.svg";
import { ReactComponent as Apple } from "../assets/common/apple.svg";
import { ReactComponent as AlphaA } from "../assets/common/alphaA.svg";
import { ReactComponent as Orange } from "../assets/common/orange.svg";
import { ReactComponent as AlphaO } from "../assets/common/alphaO.svg";
import { ReactComponent as Banana } from "../assets/common/banana.svg";
import { ReactComponent as AlphaB } from "../assets/common/alphaB.svg";
import { ReactComponent as Mango } from "../assets/common/mango.svg";
import { ReactComponent as AlphaM } from "../assets/common/alphaM.svg";
import { ReactComponent as Strawberry } from "../assets/common/strawberry.svg";
import { ReactComponent as AlphaS } from "../assets/common/alphaS.svg";
import { ReactComponent as Grapes } from "../assets/common/grape.svg";
import { ReactComponent as AlphaG } from "../assets/common/alphaG.svg";
import styles from "./SingleCardComponent.module.css";

export default function SingleCardComponent({
  back,
  Card: Card,
  front: front,
  handleChoice,
  flipped,
}) {
  function flipCard() {
    handleChoice(Card, back);
  }
  return (
    <>
      <div className={styles.container}>
        {back === "pink" ? (
          <div className={flipped ? styles.flipped : ""}>
            <div className={Card.matched ? styles.hideIt : ""}>
              <PinkCard className={styles.pinkBackCard} onClick={flipCard} />
              <div className={styles.pinkFrontCard}>{front}</div>
            </div>
          </div>
        ) : (
          <div className={flipped ? styles.flipped : ""}>
            <div className={Card.matched ? styles.hideIt : ""}>
              <BlueCard className={styles.blueBackCard} onClick={flipCard} />
              <div className={styles.blueFrontCard}>{front}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
