import React from "react"
import LayoutTailwind from "../components/LayoutTailwind"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Testimonial from "../components/Testimonial"
import Cta from "../components/Cta"
import { Footer } from "../components/Footer"
import "../styles/tailwind.module.css"
import Image from "next/image"

const page = () => {
	return (
		<div id="big-company">
			<Image
				width={1000}
				height={1000}
				src="/img/bg-tablet-pattern.svg"
				className="absolute -right-20 -top-10 -z-10"
			/>
			<LayoutTailwind />
			<Hero />
			<Feature />
			<Testimonial />
			<Cta />
			<Footer />
		</div>
	)
}

export default page
