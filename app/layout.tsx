import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Livo",
	description: "Livo — это ваш универсальный помощник в путешествиях. Забронируйте уникальные места для проживания, арендуйте автомобили, покупайте билеты на самолёты и исследуйте лучшие туристические экспириенсы по всему миру.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
