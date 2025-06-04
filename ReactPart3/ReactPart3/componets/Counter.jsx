import { useState, useEffect } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    const [formData, setFormData] = useState("")

    useEffect(() => {
        console.log("The component is being rendered")
    }, [count])

    const increment = () => {
        setCount(oldCount => oldCount + 1)
    }

    const updateFormData = (e) => {
        setFormData(oldData => {
            return e.target.value
        })
    }

    return (
        <>
            <div>
                <h2>{count}</h2>
                <button onClick={increment}>+1</button>
            </div>
            <div>
                <h2>{formData}</h2>
                <input type="text" onChange={updateFormData} value={formData} />
            </div>
        </>
    )
}