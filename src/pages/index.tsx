import type { NextPage } from "next"
import ContactForm from "../components/index/ContactForm"
import Layout from "../components/Layout"
import Quote from "../components/index/Quote"
import Bio from "../components/index/Bio"
import About from "../components/index/About"

const Home: NextPage = () => {
    return (
        <Layout>
            <Quote />
            <About />
            <Bio />
            <ContactForm />
        </Layout>
    )
}

export default Home
