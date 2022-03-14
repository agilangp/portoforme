import Link from "next/link"
import { useEffect } from "react"
import { Switch } from "@headlessui/react"

interface NavbarProps {
    darkMode: boolean
    changeMode: () => void
}

const Navbar = ({ changeMode, darkMode }: NavbarProps) => {
    useEffect(() => {
        if (process.browser) {
            document
                .getElementById("hamburger")
                ?.addEventListener("click", () => {
                    document
                        .getElementById("navbar")
                        ?.classList.toggle("hidden")
                })
        }
    })

    const UserLink = (props: any) => {
        let { href, children, ...rest } = props
        return (
            <Link href={href}>
                <a {...rest}>{children}</a>
            </Link>
        )
    }

    return (
        <nav
            className="bg-white
                dark:bg-gray-800 shadow-md"
        >
            <div className="container mx-auto py-4 px-4 sm:px-0 sm:w-4/5 flex flex-row items-center place-content-between">
                <div className="flex flex-row items-center place-content-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="font-bold text-3xl ml-2">PortoForMe</span>
                </div>
                <div className="flex items-center place-content-center">
                    <Switch
                        checked={darkMode}
                        onChange={changeMode}
                        className={`${
                            darkMode
                                ? "bg-orange-400 hover:bg-orange-700"
                                : "bg-gray-200 hover:bg-orange-400 border-gray-600 "
                        } relative inline-flex items-center h-6 rounded-full w-11 border-2`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${
                                darkMode ? "translate-x-6" : "translate-x-1"
                            } inline-block w-4 h-4 transform bg-white rounded-full`}
                        />
                    </Switch>{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 cursor-pointer hover:text-orange-400 ${
                            darkMode ? "" : "hidden"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={changeMode}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 cursor-pointer hover:text-orange-400 ${
                            darkMode ? "hidden" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={changeMode}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
