import { Metadata } from 'next'
import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
    title: 'Alwin Gilang Permana',
    description: 'Welcome to My Portofolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="dark:bg-zinc-800 bg-gray-100 dark:text-zinc-300">
                <main className="min-h-screen flex flex-col justify-between">
                    <Navbar />
                    <div className="py-4 container mx-auto px-4 sm:px-0 sm:w-9/12 flex-auto">
                        {children}
                    </div>
                    <Footer />
                </main>
            </body>
        </html>
    )
}
