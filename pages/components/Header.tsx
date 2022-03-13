import Head from "next/head"

const Header = () => {
    return (
        <Head>
            <title>Welcome - Come Take a Look!</title>
            <meta name="author" content="Alwin Gilang Permana" />
            <meta name="description" content="Just Simple Portofolio App" />
            <meta
                name="keywords"
                content="NextJS, Prisma, Portofolio, Gilang"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Header
