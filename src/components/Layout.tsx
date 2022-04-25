import Footer from "./Footer"
import Header from "./Header"
import { motion } from "framer-motion"
import Navbar from "./Navbar"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col justify-between">
                <Navbar />
                <motion.div
                    animate={{ y: 0 }}
                    transition={{ type: "spring" }}
                    initial={{ y: 50 }}
                    viewport={{ once: true }}
                    className="py-6 container mx-auto px-4 sm:px-0 sm:w-9/12"
                >
                    {children}
                </motion.div>
                <Footer />
            </main>
        </>
    )
}

export default Layout
