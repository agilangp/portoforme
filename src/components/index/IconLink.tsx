import Link from 'next/link'

const IconLink = (props: any) => {
    let { href, children, ...rest } = props

    return (
        <Link href={href}>
            <a
                {...rest}
                target="_blank"
                className="flex justify-center border-2 rounded-lg dark:border-orange-500 border-zinc-800 hover:bg-black dark:hover:bg-orange-500 hover:text-white dark:text-orange-500 dark:hover:text-zinc-900 text-gray-800 p-1"
            >
                {children}
            </a>
        </Link>
    )
}

export default IconLink
