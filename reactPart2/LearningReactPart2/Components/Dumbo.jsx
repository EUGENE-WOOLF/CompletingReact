import { useState } from "react"

function generateGameBoard() {
    console.log("New board is being generated")
    return Array(50)
}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard)
    function settingBoard() {
        setBoard("hello ")
    }
    return (
        <>
            <button onClick={settingBoard}>SetBoard</button>
        </>
    )
}