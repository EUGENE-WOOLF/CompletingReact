import { useState } from "react"

export default function PlayerGameImp() {
    const [scores, setScores] = useState({
        player1: 0,
        player2: 0
    })

    function p1Score() {
        setScores(oldPlayerScore => {
            return {
                ...oldPlayerScore, player1: oldPlayerScore.player1 + 1
            }
        })
    }

    function p2Score() {
        setScores(oldPlayerScore => {
            return {
                ...oldPlayerScore, player2: oldPlayerScore.player2 + 1
            }
        })
    }


    return (
        <>

            <div>Player 1 : {scores.player1}</div>
            <div>Player 2  : {scores.player2}</div>
            <div>
                <button onClick={p1Score}>p1 score</button>
                <button onClick={p2Score}>p2 score</button>
            </div>

        </>
    )
}

//objects are immuatable it only changes when there is a change in the memroy location 