import { useId, useState } from "react"




export default function Form() {

    const id = useId();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        type: "",
        message: "",
        consent: false
    })


    function handleFormInputs(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })  
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        console.log(event)
    }
    



    return (
        <>
            <div className="container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit} action="">

                    <div className="name">
                        <div className="input-control">
                            <label htmlFor={id + "-first-name"}>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id={id + "-first-name"}
                                value={formData.firstName}
                                onChange={handleFormInputs}
                                required
                            />
                        </div>

                        <div className="input-control">
                            <label htmlFor={id + "-last-name"}>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                id={id + "-last-name"}
                                value={formData.lastName}
                                onChange={handleFormInputs}
                                required />
                        </div>
                    </div>

                    <div className="input-control">
                        <label htmlFor={id + "-email"}>Email</label>
                        <input
                            type="email"
                            name="email"
                            id={id + "-email"}
                            value={formData.email}
                            onChange={handleFormInputs}
                            required />
                    </div>


                    <div className="input-control">
                        <h5>Query Type</h5>
                        <div className="radios">
                            <label htmlFor={id + "-general"} className="type-label">
                                <input
                                    type="radio"
                                    name="type"
                                    id={id + "-general"}
                                    value="general"
                                    checked={formData.type === "general"}
                                    onChange={handleFormInputs}
                                    required />
                                General Enquiry</label>
                            <label htmlFor={id + "-support"} className="type-label">
                                <input
                                    type="radio"
                                    name="type"
                                    id={id + "-support"}
                                    value="support"
                                    checked={formData.type === "support"}
                                    onChange={handleFormInputs}
                                    required />
                                Support Request</label>
                        </div>
                    </div>

                    <div className="input-control">
                        <label htmlFor={id + "-message"}>Message</label>
                        <textarea
                            value={formData.message}
                            onChange={handleFormInputs}
                            name="message"
                            id={id + "-message"}
                            required />
                    </div>

                    <div className="checkbox-control">
                        <input
                            type="checkbox"
                            name="consent"
                            id={id + "-consent"}
                            checked={formData.consent}
                            onChange={handleFormInputs}
                            required />
                        <label htmlFor={id + "-consent"}>I consent to being contacted by the team</label>

                    </div>


                    <button className="btn" type="submit">Submit</button>

                </form>
            </div>


        </>
    )
}