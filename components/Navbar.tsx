import Link from "next/link"
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Switch } from "@headlessui/react"

interface NavbarProps {
    darkMode: boolean
    changeMode: () => void
}

const Navbar = ({ changeMode, darkMode }: NavbarProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const dropdown = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!menuIsOpen) return

        function handleClick(event: MouseEvent) {
            const target = event.target as HTMLDivElement
            if (dropdown.current && !dropdown.current.contains(target)) {
                setMenuIsOpen(false)
            }
        }

        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [menuIsOpen])

    const handleMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const ShortLink = (props: any) => {
        let { href, children, ...rest } = props
        return (
            <Link href={href}>
                <a
                    {...rest}
                    className="p-3 mx-4 font-semibold hover:underline hover:text-orange-500"
                >
                    {children}
                </a>
            </Link>
        )
    }

    const PopUpMenuLink = (props: any) => {
        let { href, children, ...rest } = props
        return (
            <Link href={href}>
                <a
                    {...rest}
                    className="inline-block p-3 font-semibold hover:underline hover:text-orange-500"
                >
                    {children}
                </a>
            </Link>
        )
    }

    return (
        <nav className="shadow-sm">
            <div className="container mx-auto py-4 px-4 sm:px-0 sm:w-9/12 flex flex-wrap items-center place-content-between">
                <Link href="/">
                    <a className="flex items-center place-content-center hover:text-orange-500 cursor-pointer">
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
                        <span className="font-bold text-3xl ml-2">
                            PortoFor
                            <span className="text-orange-500">Me</span>
                        </span>
                    </a>
                </Link>
                <div className="lg:flex hidden text-sm">
                    <ShortLink href="/project">PROJECT</ShortLink>
                    <ShortLink
                        href="https://github.com/al-gilang-p"
                        target="_blank"
                    >
                        SOURCES
                    </ShortLink>
                </div>
                <div className="flex items-center place-content-center">
                    <Switch
                        checked={darkMode}
                        onChange={changeMode}
                        className={`${
                            darkMode
                                ? "bg-orange-500 hover:bg-black"
                                : "bg-gray-800 hover:bg-orange-500 "
                        } relative inline-flex items-center h-6 rounded-full w-11`}
                    >
                        <span className="sr-only">Dark Mode</span>
                        <span
                            className={`${
                                darkMode ? "translate-x-6" : "translate-x-1"
                            } inline-block w-4 h-4 transform bg-white rounded-full`}
                        />
                    </Switch>{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${darkMode ? "" : "hidden"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                        className={`h-6 w-6 ${darkMode ? "hidden" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-2 cursor-pointer lg:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        onClick={handleMenuClick}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
            </div>{" "}
            <hr className="dark:border-zinc-800" />
            <div
                className={` ${menuIsOpen ? "" : "hidden"} text-sm text-center`}
                id="menu"
                ref={dropdown}
            >
                <PopUpMenuLink href="/project">PROJECT</PopUpMenuLink>

                <hr className="dark:border-zinc-800" />
                <PopUpMenuLink
                    href="https://github.com/al-gilang-p"
                    target="_blank"
                >
                    SOURCES
                </PopUpMenuLink>
            </div>
            <hr className="dark:border-zinc-800" />
        </nav>
    )
}

export default Navbar
