import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import Layout from "../components/Layout"

const Home: NextPage = () => {
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

    const IconLink = (props: any) => {
        let { href, children, ...rest } = props
        return (
            <Link href={href}>
                <a
                    {...rest}
                    target="_blank"
                    className="grow border-2 rounded-lg dark:border-orange-500 border-zinc-800 text-center hover:bg-black dark:hover:bg-orange-500 hover:text-white dark:text-orange-500 dark:hover:text-zinc-900 text-gray-800"
                >
                    <button
                        className="p-2 font-semibold inline-flex"
                        aria-label={props.name}
                    >
                        {children}
                    </button>
                </a>
            </Link>
        )
    }

    return (
        <Layout>
            <div className="bg-white dark:bg-zinc-900 lg:grid lg:grid-cols-4 flex flex-col rounded-xl shadow-xl">
                <div className="flex flex-wrap justify-center pt-4 lg:pt-0">
                    <div className="w-80 h-80 lg:w-full lg:h-full relative fill-current">
                        <Image
                            src="https://github.com/al-gilang-p.png"
                            alt="Picture of the author"
                            layout="fill"
                            className="lg:rounded-l-xl lg:rounded-r-none rounded-full aspect-square object-cover"
                        />
                    </div>
                </div>
                <div className="w-full object-fill sm:col-span-3 flex flex-col place-content-between text-center lg:text-left">
                    <div className="p-4">
                        <p className="uppercase font-bold text-4xl">
                            Alwin{" "}
                            <span className="text-orange-500">Gilang</span>{" "}
                            Permana
                        </p>
                        <p className="font-semibold text-xl dark:text-zinc-400 italic">
                            Software Developer
                        </p>
                        <p className="font-medium text-2xl py-8 lg:text-right">{`"Here lies My Hopes and Dreams about something I truly love. I know it ain't much, but it's honest work"`}</p>
                    </div>
                    <div>
                        <hr className="dark:border-zinc-800" />
                        <div className="flex flex-wrap gap-2 p-4 justify-center lg:justify-start">
                            <IconLink
                                href="https://www.instagram.com/alwin_gilang/"
                                name="instagram-button"
                            >
                                <svg
                                    className="h-6 w-6 fill-current"
                                    role="img"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </IconLink>
                            <IconLink
                                href="https://web.facebook.com/al.gilang.p"
                                name="facebook-button"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </IconLink>
                            <IconLink
                                href="https://twitter.com/alwin_gilang"
                                name="twitter-button"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </IconLink>
                            <IconLink
                                href="https://github.com/al-gilang-p"
                                name="github-button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="w-6"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                            fill="currentColor"
                                        />
                                    </g>
                                </svg>
                            </IconLink>
                            <IconLink
                                href="https://www.linkedin.com/in/alwin-gilang-permana-53674b170"
                                name="linkedin-button"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    role="img"
                                    viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                                    </g>
                                </svg>
                            </IconLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 mt-6 p-4 rounded-xl shadow-xl">
                <p className="lg:text-left text-center mb-2 font-semibold underline text-2xl decoration-orange-500">
                    About
                </p>
                <p className="text-justify">
                    <b className="text-orange-500">Gilang</b> is a man of focus,
                    commitment, and sheer f.., ohhkaaay.. I think those words is
                    a bit too much for me. Just trying to emphasize that I
                    really love and have passion for what I do. Things that
                    keeping me up at night wishing that I could do better are
                    software development, graphic design, and drawing.
                    Currently, software development is rapidly growing skill of
                    mine which categorized me as a full-stack software
                    developer.
                </p>
                <p className="font-bold mt-4">
                    Based in Magetan Regency, East Java, Indonesia
                </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 mt-6 p-4 rounded-xl shadow-xl">
                <p className="lg:text-left text-center mb-2 font-semibold underline text-2xl decoration-orange-500">
                    Bio
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td className="pr-4 pb-4">1995</td>
                            <td className="font-semibold pb-4">
                                Born in Madiun Municipality, East Java,
                                Indonesia
                            </td>
                        </tr>
                        <tr>
                            <td className="pr-4 border-y-2 dark:border-zinc-800 py-4">
                                2018
                            </td>
                            <td className="font-semibold border-y-2 dark:border-zinc-800 py-4">
                                Completed Undergraduate Degree of Statistical
                                Computation in Politeknik Statistika - Sekolah
                                Tinggi Ilmu Statistik (PS-STIS)
                            </td>
                        </tr>
                        <tr>
                            <td className="pr-4 pt-4">2018 - present</td>
                            <td className="font-semibold pt-4">
                                Works at Badan Pusat Statistik
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-white dark:bg-zinc-900 mt-6 p-4 rounded-xl shadow-xl">
                <p className="lg:text-left text-center mb-2 font-semibold underline text-2xl decoration-orange-500">
                    Tech Stack
                </p>
                <ul className="list-disc list-inside italic">
                    <li>
                        NextJS, Prisma, PostgreSQL <b>(Preferred)</b>
                    </li>
                    <li>PHP, Laravel, MySQL</li>
                    <li>NodeJS, Express, MySQL</li>
                </ul>
            </div>

            <div className="bg-white dark:bg-zinc-900 mt-6 p-4 rounded-xl shadow-xl">
                <p className="lg:text-left text-center mb-2 font-semibold underline text-2xl decoration-orange-500">
                    Contact Me
                </p>
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
                            className="mt-2 block mx-auto w-full lg:w-auto text-sm rounded-xl p-2 text-white hover:bg-zinc-800 font-semibold dark:text-orange-500 dark:border-orange-500 dark:hover:text-zinc-800 dark:hover:bg-orange-500"
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
            </div>
        </Layout>
    )
}

export default Home
