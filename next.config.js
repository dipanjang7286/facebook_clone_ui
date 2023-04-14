/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "avatars.githubusercontent.com",
      "www.google.com"

    ],
  },
}


module.exports = nextConfig
