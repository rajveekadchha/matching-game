import { ReactComponent as PinkCard } from "../assets/common/pinkCard.svg";
import { ReactComponent as BlueCard } from "../assets/common/blueCard.svg";
import styles from "./SingleCardComponent.module.css";

export default function SingleCardComponent({
  back,
  Card,
  front,
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
