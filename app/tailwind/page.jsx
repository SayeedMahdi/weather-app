import React from "react"
import LayoutTailwind from "../components/LayoutTailwind"
import Hero from "../components/Hero"
import Feature from "../components/Feature"

const page = () => {
	return (
		<>
			<LayoutTailwind />
			<Hero />
			<Feature />
			<div>page</div>
		</>
	)
}

export default page
