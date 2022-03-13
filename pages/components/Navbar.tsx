import Link from "next/link"
import { Menu } from "@headlessui/react"
import { useEffect } from "react"

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
                <div className="flex flex-row items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                        />
                    </svg>
                    <span className="font-bold text-3xl ml-2">PortoForMe</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:invisible cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    id="hamburger"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <hr className="border-gray-300 dark:border-gray-700 shadow-lg" />
            <div
                id="navbar"
                className="hidden container mx-auto sm:flex flex-col sm:flex-row place-content-center sm:place-content-between my-1 pb-4 sm:py-4 sm:w-4/5 uppercase text-sm font-semibold"
            >
                <div className="sm:flex sm:flex-row items-center">
                    <Link href="/">
                        <a className="flex items-center mr-3 ml-3 my-3 sm:ml-0 hover:text-orange-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                            <span className="ml-1">Dashboard</span>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="flex items-center m-3 hover:text-orange-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                />
                            </svg>
                            <span className="ml-1">Region</span>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="flex items-center m-3 hover:text-orange-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <span className="ml-1">Operator</span>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="flex items-center m-3 hover:text-orange-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                                />
                            </svg>
                            <span className="ml-1">Document</span>
                        </a>
                    </Link>
                </div>
                <hr className="dark:border-gray-600 border-gray-400 border-1" />
                <div className="flex place-content-between items-center px-4 pt-4 sm:p-0">
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
                    <div className="flex flex-col">
                        <Menu>
                            <Menu.Button className="flex items-center place-content-end p-2 hover:text-orange-400 focus:outline-none">
                                <span className="font-semibold">User</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Menu.Button>
                            <Menu.Items className="hover:bg-gray-300 font-semibold text-sm outline-gray-400rounded-md p-4 mr-2 absolute mt-10 bg-white shadow-lg border-2 border-gray-400">
                                <Menu.Item>
                                    <UserLink href="/">
                                        <span>Log Out</span>
                                    </UserLink>
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
