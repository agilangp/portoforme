import { useCallback, useState } from "react"
import Card from "./Card"

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })

    const [formContent, setFormContent] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleOnFormChange = useCallback(
        (e) => {
            const { value, name } = e.target
            setFormContent({
                ...formContent,
                [name]: value,
            })
        },
        [formContent, setFormContent]
    )

    const handleServerResponse = useCallback((ok, msg) => {
        if (ok) {
            setFormStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg },
            })
            setFormContent({
                name: "",
                email: "",
                message: "",
            })
        } else {
            setFormStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg },
            })
        }
    }, [])

    const handleOnFormSubmit = useCallback(
        (e) => {
            e.preventDefault()
            setFormStatus((prevFormStatus) => ({
                ...prevFormStatus,
                submitting: true,
            }))
            fetch(
                "https://formsubmit.co/ajax/5c0501dde9c873ce6d07be630af3a25d",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formContent),
                }
            )
                .then((response) => {
                    handleServerResponse(true, "Your Message has been sent.")
                })
                .catch((error) =>
                    handleServerResponse(false, `Error: ${error.message}`)
                )
        },
        [formContent, handleServerResponse]
    )

    const resetForm = () => {
        setFormStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        })
    }

    return (
        <Card title="Contact Me">
            {formStatus.submitting && (
                <p className="text-orange-500 text-center my-4 font-bold text-lg">
                    Submitting...
                </p>
            )}
            {formStatus.info.error && (
                <p className="my-4 text-red-700">
                    Error: {formStatus.info.msg}
                </p>
            )}
            {formStatus.submitted && (
                <p className="text-green-500 text-center my-4 font-bold text-lg">
                    {formStatus.info.msg}
                    <button
                        onClick={resetForm}
                        className="mt-2 block mx-auto w-full lg:w-auto text-sm rounded-xl p-2 hover:bg-zinc-800 border-2 border-zinc-800 font-semibold text-zinc-800 hover:text-white dark:text-orange-500 dark:border-orange-500 dark:hover:text-zinc-800 dark:hover:bg-orange-500"
                    >
                        Send Another Message
                    </button>
                </p>
            )}
            {!formStatus.submitted && !formStatus.submitting && (
                <form onSubmit={handleOnFormSubmit} method="post">
                    <label htmlFor="name" className="font-semibold">
                        Name<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="p-2 w-full shadow-inner rounded-xl dark:bg-zinc-800 mb-2 bg-gray-100"
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleOnFormChange}
                        autoComplete="off"
                        required
                    />
                    <label htmlFor="email" className="font-semibold">
                        Email<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="p-2 w-full shadow-inner rounded-xl dark:bg-zinc-800 mb-2 bg-gray-100"
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleOnFormChange}
                        autoComplete="off"
                        required
                    />
                    <label htmlFor="message" className="font-semibold">
                        Message<span className="text-red-600">*</span>
                    </label>
                    <textarea
                        className="h-40 p-2 w-full shadow-inner rounded-xl dark:bg-zinc-800 mb-2 bg-gray-100"
                        id="message"
                        name="message"
                        onChange={handleOnFormChange}
                        required
                    ></textarea>
                    <button
                        className="block mx-auto w-full lg:w-auto text-sm rounded-xl p-2 border-2 border-zinc-800 hover:text-white hover:bg-zinc-800 font-semibold dark:text-orange-500 dark:border-orange-500 dark:hover:text-zinc-800 dark:hover:bg-orange-500"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            )}
        </Card>
    )
}

export default ContactForm
