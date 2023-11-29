import type { NextPage } from "next"
import ContactForm from "../components/index/ContactForm"
import Layout from "../components/Layout"
import Quote from "../components/index/Quote"
import Bio from "../components/index/Bio"
import About from "../components/index/About"
import Head from "next/head"

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Alwin Gilang Permana - Portofolio</title>
                <meta
                    name="description"
                    content="Portoforme - Portofolio of Alwin Gilang Permana"
                />
            </Head>
            <Quote />
            <About />
            <Bio />
            <ContactForm />
        </Layout>
    )
}

export default Home
