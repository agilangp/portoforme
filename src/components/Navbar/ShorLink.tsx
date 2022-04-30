import Link from "next/link"

const ShortLink = (props: any) => {
    let { href, children, ...rest } = props
    return (
        <Link href={href}>
            <a
                {...rest}
                className="uppercase p-3 mx-4 font-semibold hover:underline hover:text-orange-500"
            >
                {children}
            </a>
        </Link>
    )
}

export default ShortLink
