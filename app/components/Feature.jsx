const Feature = () => {
	return (
		<section id="feature">
			{/* <--what part -->*/}
			<div className="container flex flex-col md:flex-row mx-auto mt-10 space-y-12 md:space-y-0 px-4 space-x-2">
				{/* <!-- What's Different -->  */}
				<div className="flex flex-col space-y-12 md:w-1/2">
					<h2 className="max-w-md text-4xl text-center md:text-left font-bold">
						What's diffrent about manage
					</h2>
					<p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe,
						ullam excepturi molestiae accusamus aut. Et accusantium, eos in
						tenetur
					</p>
				</div>

				{/* <!-- Numbered List -->  */}
				<div className="flex flex-col space-y-8 md:w-1/2">
					{/* <-- list item 1 --> */}
					<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
						{/* <-- header --> */}
						<div className="flex rounded-l-full bg-brightRedSupLight  md:bg-transparent">
							<div className="flex items-center space-x-2">
								<div className="px-4 py-2 rounded-full bg-brightRed text-white md:py-1">
									01
								</div>
								<h3 className="text-base font-bold md:mb-4 md:hidden">
									Track Company-wide progress
								</h3>
							</div>
						</div>
						<div>
							<h3 className="hidden mb-4 font-bold md:block text-lg">
								Track Company-wide progress
							</h3>
							<p className="text-darkGrayishBlue">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Architecto, laborum rerum doloribus saepe veniam aliquam quide
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Feature
