/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.clerk.com',
			},
		],
	},

	async redirects() {
		return [
			{
				source: '/',
				destination: '/cars',
				permanent: true,
			},
			{
				source: '/profile',
				destination: '/cars',
				permanent: true,
			}
		];
	}
};

export default nextConfig;
