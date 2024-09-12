/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/profile',
				destination: '/',
				permanent: true,
			}
		];
	}
};

export default nextConfig;
