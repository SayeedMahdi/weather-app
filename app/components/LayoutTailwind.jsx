import React from "react"
import Image from "next/image"
import Link from "next/link"

const LayoutTailwind = () => {
	return (
		<nav className="relative container  mx-auto p-6">
			{/* <-- flex container -->  */}
			<div className="flex items-center justify-between">
				<div className="pt-2">
					<Image
						src="/img/logo.svg"
						width={100}
						height={100}
						alt="Picture of the author"
					/>
				</div>
				<div className="hidden md:flex space-x-6">
					<Link href="#" className="hover:text-darkGrayishBlue">
						Pricing
					</Link>
					<Link href="#" className="hover:text-darkGrayishBlue">
						Product
					</Link>
					<Link href="#" className="hover:text-darkGrayishBlue">
						About us
					</Link>
					<Link href="#" className="hover:text-darkGrayishBlue">
						About us
					</Link>
					<Link href="#" className="hover:text-darkGrayishBlue">
						Community
					</Link>
				</div>
				<a
					href="#"
					className="hidden md:block p-3 px-6 py-2 rounded-full baseline text-white bg-brightRed hover:bg-brightRedLight"
				>
					Get start
				</a>
			</div>
		</nav>
	)
}

export default LayoutTailwind
