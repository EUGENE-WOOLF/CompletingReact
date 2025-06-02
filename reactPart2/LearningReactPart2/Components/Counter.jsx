import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(currCount => currCount + 1)
        setCount(currCount => currCount + 1)
        setCount(currCount => currCount + 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={increaseCount}>Increment by three</button>
        </>
    )
}