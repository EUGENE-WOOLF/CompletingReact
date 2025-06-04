import { useState } from "react"

export default function Signup() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    })

    function handleChange(e) {
        setFormData(oldFormData => {
            return { ...oldFormData, [e.target.name]: e.target.value }
        })
    }

    function handleSubmit() {
        console.log(formData)
    }

    return (
        <>
            <form action="POST">
                <div>
                    <label htmlFor="firstName">Firstname : </label>
                    <input type="text" placeholder="Firstname" id="firstName" value={formData.firstName} name="firstName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Lastname : </label>
                    <input type="text" placeholder="Lastname" id="lastName" value={formData.lastName} name="lastName" onChange={handleChange} />
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </>
    )
}