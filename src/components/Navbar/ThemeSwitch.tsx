import { useEffect, useState, useRef } from "react"
import { Switch } from "@headlessui/react"
import { useTheme } from "next-themes"
import { FaRegMoon, FaRegSun } from "react-icons/fa"

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

    if (!mounted) return <>Loading...</>

    return (
        <>
            <Switch
                checked={dark}
                onChange={handleChangeMode}
                className={`${
                    dark
                        ? "bg-orange-500 hover:bg-zinc-500"
                        : "bg-gray-800 hover:bg-orange-500 "
                } relative inline-flex items-center h-6 rounded-full w-11`}
            >
                <span className="sr-only">Dark Mode</span>
                <span
                    className={`${
                        dark ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
            </Switch>
            {dark ? (
                <FaRegMoon size={25} className="ml-1" />
            ) : (
                <FaRegSun size={25} className="ml-1" />
            )}
        </>
    )
}

export default ThemeSwitch
