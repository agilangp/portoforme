import Layout from "../components/Layout"
import type { NextPage } from "next"
import Head from "next/head"

const articles: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Articles - Alwin Gilang Permana</title>
                <meta
                    name="description"
                    content="Articles wrote by Alwin Gilang Permana"
                />
            </Head>
            <h1 className="text-center">Coming Soon</h1>
        </Layout>
    )
}

export default articles
