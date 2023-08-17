import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "VP Calculator/converter",
	description: "VP Calculator/converter",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
