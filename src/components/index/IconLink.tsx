import Link from "next/link"

const IconLink = (props: any) => {
    let { href, children, ...rest } = props

    return (
        <Link href={href}>
            <a
                {...rest}
                target="_blank"
                className="grow border-2 rounded-lg dark:border-orange-500 border-zinc-800 text-center hover:bg-black dark:hover:bg-orange-500 hover:text-white dark:text-orange-500 dark:hover:text-zinc-900 text-gray-800"
            >
                <button
                    className="p-2 font-semibold inline-flex"
                    aria-label={props.name}
                >
                    {children}
                </button>
            </a>
        </Link>
    )
}

export default IconLink
