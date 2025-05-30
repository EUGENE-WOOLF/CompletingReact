export default function Click({ message }) {
    console.log(message + "new ")
    const clickButton = (message) => {
        alert(message)
    }
    return (
        <>
            <button onClick={clickButton}>Click me!</button>
        </>
    )
}




