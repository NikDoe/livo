import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Separator } from '@/components/ui/separator';

import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
	title: 'Livo',
	description: 'Livo — это ваш универсальный помощник в путешествиях. Забронируйте уникальные места для проживания, арендуйте автомобили, покупайте билеты на самолёты и исследуйте лучшие туристические экспириенсы по всему миру.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body className={`${poppins.className} min-h-screen flex flex-col`}>
					<Providers>
						<Navbar />
						<main className='flex-1'>
							{children}
						</main>
						<Separator />
						<Footer />
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
