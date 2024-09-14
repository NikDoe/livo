/** @type {import('next').NextConfig} */
const nextConfig = {
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
