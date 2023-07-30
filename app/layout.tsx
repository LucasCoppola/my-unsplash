import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Provider from '@/components/home/provider'
import Navbar from '@/components/home/navbar'

const montserrat = Montserrat({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Provider>
					<div className="mx-10 mt-4">
						<Navbar />
						{children}
					</div>
				</Provider>
			</body>
		</html>
	)
}
