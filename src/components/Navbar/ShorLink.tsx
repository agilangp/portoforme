import Link from 'next/link'

const ShortLink = (props: any) => {
    let { href, children, ...rest } = props
    return (
        <Link
            href={href}
            className="uppercase p-3 mx-4 font-semibold hover:underline hover:text-orange-500"
        >
            {children}
        </Link>
    )
}

export default ShortLink
