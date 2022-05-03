import Layout from "../components/Layout"
import type { NextPage } from "next"
import Head from "next/head"
import Card from "../components/index/Card"

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
            <div className="flex flex-col justify-between">
                <p className="lg:text-left text-center font-semibold underline text-2xl decoration-orange-500">
                    Articles
                </p>
                <Card>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search here..."
                        className="shadwo-inner w-full p-2 rounded-xl bg-gray-100 dark:bg-zinc-800"
                    />
                    <div className="flex align-middle my-3">
                        <span className="font-semibold inline-block text-xs p-1 rounded-lg border-2 border-orange-500">
                            SORT BY :
                        </span>
                        <select
                            name="sort-by"
                            id="sort-by-dropdown"
                            className="shadow-inner rounded-lg p-1 ml-2 bg-gray-100 dark:bg-zinc-800"
                            defaultValue={"1"}
                        >
                            <option value="1">Date</option>
                            <option value="2">A-Z Ascending</option>
                            <option value="3">Z-A Descending</option>
                        </select>
                    </div>
                </Card>
                <div className="mt-6">
                    <hr className="rounded-xl border-2 border-white text-white dark:border-zinc-900 " />
                    <div className="mt-3">
                        <p className="text-center">No Articles</p>
                    </div>
                    <hr className="rounded-xl mt-3 border-2 border-white text-white dark:border-zinc-900 " />
                </div>
            </div>
        </Layout>
    )
}

export default articles
