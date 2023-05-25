"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LayoutTailwind = () => {
	const [show, setShow] = useState(false)
	function toggleButton() {
		setShow(!show)
	}
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
				{!show && (
					<svg
						onClick={toggleButton}
						className="text-lg md:hidden"
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 1024 1024"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
					</svg>
				)}
				{show && (
					<svg
						onClick={toggleButton}
						className="text-lg md:hidden"
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 1024 1024"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
					</svg>
				)}
			</div>

			<div class="md:hidden">
				{show && (
					<div
						id="menu"
						class="absolute flex flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
					>
						<a href="#">Pricing</a>
						<a href="#">Product</a>
						<a href="#">About Us</a>
						<a href="#">Careers</a>
						<a href="#">Community</a>
					</div>
				)}
			</div>
		</nav>
	)
}

export default LayoutTailwind
