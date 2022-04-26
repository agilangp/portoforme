import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import ThemeSwitch from "./ThemeSwitch"
import ShortLink from "./ShorLink"
import PopUpMenuLink from "./PopUpMenuLink"

const Navbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const menu = useRef<HTMLDivElement>(null)

    // click outside div hook
    useEffect(() => {
        if (!menuIsOpen) return

        function handleClick(event: MouseEvent) {
            const target = event.target as HTMLDivElement
            if (menu.current && !menu.current.contains(target)) {
                setMenuIsOpen(false)
            }
        }

        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [menuIsOpen])

    const handleMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const menuVariants = {
        open: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.5,
            },
        },
        closed: {
            opacity: 0,
            display: "none",
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <nav className="sticky top-0 z-50 shadow-md bg-white dark:bg-zinc-900">
            <div className="container py-4 px-4 mx-auto sm:px-0 sm:w-9/12 flex flex-wrap items-center place-content-between">
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
                    <ThemeSwitch />
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
            </div>
            <hr className="dark:border-zinc-800" />
            <motion.div
                className="text-sm text-center"
                initial="closed"
                animate={menuIsOpen ? "open" : "closed"}
                variants={menuVariants}
                id="menu"
                ref={menu}
            >
                <PopUpMenuLink href="/project">PROJECT</PopUpMenuLink>

                <hr className="dark:border-zinc-800" />
                <PopUpMenuLink
                    href="https://github.com/al-gilang-p"
                    target="_blank"
                >
                    SOURCES
                </PopUpMenuLink>
            </motion.div>
        </nav>
    )
}

export default Navbar
