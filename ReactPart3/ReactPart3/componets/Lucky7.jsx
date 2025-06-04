import { rollDice, getRandomNum } from "../utils/utils";
import { useState } from "react";
import styles from "./Lucky7.module.css";

export default function Lucky7({ noOfDice = 2, target }) {

    const [score, setScore] = useState(rollDice(noOfDice));

    function restartGame() {
        setScore(oldScore => oldScore.map(() => getRandomNum()));
    }

    const finalScore = score.reduce((acc, val) => acc + val, 0);

    return (
        <>
            <div className={styles.container}>
                {score.map((ele, idx) => (
                    <div className={styles.makeItABox} key={idx}>{ele}</div>
                ))}
            </div>
            <div className={styles.result}>
                {finalScore === target ? (
                    <div>You won 🎉</div>
                ) : (
                    <button onClick={restartGame}>Roll Again</button>
                )}
            </div>
        </>
    );
}
