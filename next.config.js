/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["github.com"],
    },
    swcMinify: true,
}

module.exports = nextConfig
