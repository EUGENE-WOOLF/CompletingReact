function formSubmit(e) {
    e.preventDefault();
    console.log("Default behaviour prevented")
}

export default function FormEvent() {
    return (
        <>
            <form onSubmit={formSubmit}>
                <input type="text" />
                <button>Submit</button>
            </form>
        </>
    )
}


