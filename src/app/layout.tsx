import { Metadata } from 'next'
import '@/shared/styles/globals.scss'
import { Inter } from '@next/font/google'
export const metadata: Metadata = {
	title: 'Quiz',
	description: 'Quiz for react lectures',
}

const font = Inter({ subsets: ['latin'], weight: ['500'] })
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={font.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	)
}
