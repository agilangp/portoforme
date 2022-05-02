import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import ThemeSwitch from "./ThemeSwitch"
import { MENU } from "../../constants"
import ShortLink from "./ShorLink"
import PopUpMenuLink from "./PopUpMenuLink"
import { FaBars, FaCheckDouble } from "react-icons/fa"

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
                        <FaCheckDouble size={25} />
                        <span className="font-bold text-3xl ml-2">
                            PortoFor
                            <span className="text-orange-500">Me</span>
                        </span>
                    </a>
                </Link>
                <div className="lg:flex hidden text-sm">
                    {MENU.map((item) => {
                        return (
                            <div key={item.id}>
                                <ShortLink
                                    href={"/" + item.title.toLowerCase()}
                                >
                                    {item.title}
                                </ShortLink>
                            </div>
                        )
                    })}
                </div>
                <div className="flex items-center place-content-center">
                    <ThemeSwitch />
                    <FaBars
                        size={25}
                        onClick={handleMenuClick}
                        className="cursor-pointer lg:hidden ml-1"
                    />
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
                {MENU.map((item) => {
                    return (
                        <div key={item.id}>
                            <PopUpMenuLink
                                href={"/" + item.title.toLowerCase()}
                            >
                                {item.title}
                            </PopUpMenuLink>
                            <hr className="dark:border-zinc-800" />
                        </div>
                    )
                })}
            </motion.div>
        </nav>
    )
}

export default Navbar
