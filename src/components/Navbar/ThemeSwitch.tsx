import { useEffect, useState, useRef } from "react"
import { Switch } from "@headlessui/react"
import { useTheme } from "next-themes"

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()
    const dark = theme === "dark" ? true : false

    const [checked, setChecked] = useState(dark)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTheme(checked ? "dark" : "light")
    }, [checked, setTheme])

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    const handleChangeMode = (nextChecked: boolean) => {
        setChecked(nextChecked)
    }

    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        localStorage.dark = dark.toString()
    }, [dark])

    useEffect(() => {
        if (process.browser) {
            if (
                localStorage.dark === "true" ||
                (!("dark" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                setChecked(true)
            }
        }
    }, [])

    if (!mounted) return null

    return (
        <>
            <Switch
                checked={dark}
                onChange={handleChangeMode}
                className={`${
                    dark
                        ? "bg-orange-500 hover:bg-black"
                        : "bg-gray-800 hover:bg-orange-500 "
                } relative inline-flex items-center h-6 rounded-full w-11`}
            >
                <span className="sr-only">Dark Mode</span>
                <span
                    className={`${
                        dark ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
            </Switch>{" "}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${dark ? "" : "hidden"}`}
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
                className={`h-6 w-6 ${dark ? "hidden" : ""}`}
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
        </>
    )
}

export default ThemeSwitch
