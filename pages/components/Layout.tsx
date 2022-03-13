import { useState, useEffect, useRef } from "react"
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
        <div className={`${darkMode ? "dark" : ""} dark:text-white`}>
            <Header />
            <main className="bg-gray-200 dark:bg-gray-900 dark:text-gray-300 h-screen">
                <Navbar changeMode={changeMode} darkMode={darkMode} />
                <div className="py-4 container mx-auto px-4 sm:px-0 sm:w-4/5">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
