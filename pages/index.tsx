import type { NextPage } from "next"
import Image from "next/image"
import Layout from "./components/Layout"

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="h-full flex items-center place-content-between py-5">
                <div>
                    <p className="font-semibold text-gray-500 text-lg">
                        Hello, I am
                    </p>
                    <p className="uppercase font-bold text-4xl py-2">
                        Alwin Gilang Permana
                    </p>
                    <p className="font-semibold text-2xl text-gray-600 italic">
                        Software Developer
                    </p>
                    <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                </div>
                <div className="border-8 border-gray-700 rounded-full overflow-hidden">
                    <Image
                        src="https://github.com/al-gilang-p.png"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Home
