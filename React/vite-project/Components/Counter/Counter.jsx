import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    const incrementNun = () => {
        setNum(num + 1)
    }
    return (
        <>
            <div>{num}</div>
            <button onClick={incrementNun}>Increment</button>
        </>
    )
}