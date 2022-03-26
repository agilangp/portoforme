/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["github.com"],
    },
    swcMinify: false
}

module.exports = nextConfig
