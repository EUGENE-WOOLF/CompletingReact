import { useState } from "react";

export default function Form() {
    const [username, setUsername] = useState("");

    function updateUsername(event) {
        setUsername(name => {
            console.log(username)
            return event.target.value
        })
    }

    return (
        <>
            <form action="POST">
                <input type="text" value={username} placeholder="Woolf" onChange={updateUsername} />
            </form>
        </>
    )
}