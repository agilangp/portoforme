import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render(): React.ReactElement {
        return (
            <Html lang="en">
                <Head />
                <body className="dark:bg-zinc-800 bg-gray-100 dark:text-zinc-300">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
