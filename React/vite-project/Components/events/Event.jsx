function clickingButton() {
    console.log("Man keep going ")
}

export default function Event() {
    return (
        <>
            <p>This is a paragraph</p>
            <button onClick={clickingButton}>Click me!</button>
        </>
    )
}