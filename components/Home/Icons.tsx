import Link from "next/link"

interface IconProps {
    children: React.ReactNode
}

const Icons = ({ children }: IconProps) => {
    return (
        <Link href="https://twitter.com/alwin_gilang">
            <a>
                <button className="hover:bg-black hover:text-white border-2 dark:border-orange-500 dark:text-orange-500 dark:hover:bg-orange-500 dark:hover:text-zinc-900 border-zinc-800 p-2 font-semibold text-gray-800 inline-flex items-center space-x-2 rounded">
                    {children}
                </button>
            </a>
        </Link>
    )
}

export default Icons
