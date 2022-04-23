/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["github.com"],
    },
    swcMinify: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
}

module.exports = nextConfig
