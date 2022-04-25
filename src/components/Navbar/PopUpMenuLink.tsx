import Link from "next/link"

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

export default PopUpMenuLink
