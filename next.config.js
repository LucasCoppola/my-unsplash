/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true
	},
	images: {
		domains: ['res.cloudinary.com', 'lh3.googleusercontent.com']
	}
}

module.exports = nextConfig
