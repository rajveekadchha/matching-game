import bgstyle from "./IntroScreen.module.css";
import background from "../assets/intro.png";
import { ReactComponent as Apple } from "../assets/common/apple.svg";
import { ReactComponent as AlphaA } from "../assets/common/alphaA.svg";
import { ReactComponent as Orange } from "../assets/common/orange.svg";
import { ReactComponent as AlphaO } from "../assets/common/alphaO.svg";
import { ReactComponent as Arrow1 } from "../assets/arrow1.svg";
import { ReactComponent as Help1 } from "../assets/help1.svg";
import { ReactComponent as Arrow2 } from "../assets/arrow2.svg";
import { ReactComponent as Help2 } from "../assets/help2.svg";
import { ReactComponent as NextBtn } from "../assets/next.svg";
import SingleCardComponent from "./SingleCardComponent";
import { useCallback } from "react";
import styles from "./ActivityScreen.module.css";
import { useEffect, useState } from "react";
import FinalScreen from "./FinalScreen";

export default function ActivityScreen() {
  const [turns, setTurns] = useState(0);
  const [matchedNo, setMatchedNo] = useState(0);
  const [isMatched, setIsMatched] = useState(false);
  const [choiceOne, setchoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  let Fcards = [
    { front: <Apple />, data: "apple", matched: false },
    { front: <Orange />, data: "orange", matched: false },
    { front: <Apple />, data: "apple1", matched: false },
    { front: <Orange />, data: "orange1", matched: false },
    { front: <Apple />, data: "apple2", matched: false },
    { front: <Orange />, data: "orange2", matched: false },
  ];

  let Acards = [
    { front: <AlphaO />, data: "orange1", matched: false },
    { front: <AlphaO />, data: "orange", matched: false },
    { front: <AlphaA />, data: "apple1", matched: false },
    { front: <AlphaA />, data: "apple", matched: false },
    { front: <AlphaA />, data: "apple2", matched: false },
    { front: <AlphaO />, data: "orange2", matched: false },
  ];

  const [fruitCards, setFruitCards] = useState([...Fcards]);
  const [alphaCards, setAlphaCards] = useState([...Acards]);

  //   function shuffleCards(cards, name) {
  //     let a = [...cards]
  //       .map((card) => ({ ...card, id: Math.random() }));
  //     if ((name = "fruits")) {
  //       setFruitCards(a);
  //     } else {
  //       setAlphaCards(a);
  //     }
  //   }

  function handleChoice(card, type) {
    if (type === "pink") {
      if (!choiceOne) {
        setchoiceOne(card);
      }
    }
    if (type === "blue") {
      if (choiceOne && !choiceTwo) {
        setChoiceTwo(card);
      }
    }
  }

  const reset = useCallback(() => {
    setchoiceOne(null);
    setChoiceTwo(null);
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.data === choiceTwo.data) {
        setIsMatched(true);
        setFruitCards((oldCards) => {
          return oldCards.map((card) => {
            if (card.data === choiceOne.data) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setAlphaCards((oldCards) => {
          return oldCards.map((card) => {
            if (card.data === choiceTwo.data) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setMatchedNo((prevCount) => prevCount + 1);
      } else {
        setTimeout(() => reset(), 1000);
        setTurns((prevCount) => prevCount + 1);
      }
    }
    // eslint-disable-next-line
  }, [choiceOne, choiceTwo]);

  function doNext() {
    reset();
    setIsMatched(false);
  }
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={bgstyle.bgImg}
      >
        {matchedNo === 6 || turns > 3 ? (
          <FinalScreen matchedNo={matchedNo} />
        ) : (
          <>
            <div className={styles.defaultCardArrangmentContainer}>
              <div className={styles.defaultCardArrangment}>
                {fruitCards.map((Card) => (
                  <>
                    {!choiceOne && !choiceTwo && matchedNo === 0 ? (
                      <>
                        <Arrow1 className={styles.arrow1} />
                        <Help1 className={styles.help1} />
                      </>
                    ) : (
                      ""
                    )}

                    <SingleCardComponent
                      back="pink"
                      Card={Card}
                      front={Card.front}
                      handleChoice={handleChoice}
                      flipped={Card === choiceOne || Card.matched === true}
                    />
                  </>
                ))}
              </div>
              <div className={styles.defaultCardArrangment}>
                {alphaCards.map((Card) => (
                  <>
                    {choiceOne && !choiceTwo && matchedNo === 0 ? (
                      <>
                        <Arrow2 className={styles.arrow2} />
                        <Help2 className={styles.help2} />
                      </>
                    ) : (
                      ""
                    )}

                    <SingleCardComponent
                      back="blue"
                      Card={Card}
                      front={Card.front}
                      handleChoice={handleChoice}
                      flipped={Card === choiceTwo || Card.matched === true}
                    />
                  </>
                ))}
              </div>
            </div>
            <div className={isMatched ? styles.overlay : ""}></div>
            {isMatched ? (
              <>
                <div className={styles.choiceOne}>{choiceOne?.front}</div>
                <div className={styles.choiceTwo}>{choiceTwo?.front}</div>
                <h4 className={styles.matchText}> It’s a match !</h4>
                <div className={styles.NextBtn} onClick={doNext}>
                  <NextBtn />
                </div>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </>
  );
}
