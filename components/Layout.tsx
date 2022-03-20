import { useState, useEffect, useRef } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [darkMode, setDarkMode] = useState(false)
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        localStorage.dark = darkMode.toString()
    }, [darkMode])

    useEffect(() => {
        if (process.browser) {
            if (
                localStorage.dark === "true" ||
                (!("dark" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                setDarkMode(true)
            }
        }
    }, [])

    const changeMode = () => {
        return setDarkMode(!darkMode)
    }

    return (
        <div
            className={`${
                darkMode ? "dark" : ""
            } dark:text-gray-300 text-gray-800`}
        >
            <Header />
            <main className="dark:bg-zinc-900 dark:text-gray-300 h-screen flex flex-col justify-between">
                <div>
                    <Navbar changeMode={changeMode} darkMode={darkMode} />
                    <hr className="dark:border-zinc-800" />
                    <div className="my-6 container mx-auto px-4 sm:px-0 sm:w-9/12">
                        {children}
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Layout
