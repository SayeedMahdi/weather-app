import "./globals.css"
import Header from "./components/Header"
import { Inter, Poppins } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
})
export const metadata = {
	title: "Weather app",
	description: "Author Sayeed Mahdi Mousavi",
	keywords: "weather, teather",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				{/* <Header /> */}
				{children}
			</body>
		</html>
	)
}
