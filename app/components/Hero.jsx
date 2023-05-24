import React from "react"

const Hero = () => {
	return (
		<section id="hero">
			<div className="container flex flex-col-reverse md:flex-row mt-10 mx-auto ">
				<div className="flex flex-col mb-32 space-y-12 md:w-1/2">
					<h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
						Bring everyone together to build a better product
					</h1>
					<p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
						qui, dolore, repudiandae .
					</p>
					<div className="flex justify-center md:justify-start">
						<a
							href="#"
							className="  p-3 px-6 py-2 rounded-full baseline text-white bg-brightRed hover:bg-brightRedLight"
						>
							Get start
						</a>
					</div>
				</div>
				<div className="md:w-1/2">
					<img src="img/illustration-intro.svg" alt="work in svg" />
				</div>
			</div>
		</section>
	)
}

export default Hero
