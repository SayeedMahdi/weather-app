async function getWeather() {
	const response = await fetch(
		`https://api.open-meteo.com/v1/dwd-icon?latitude=52.52&longitude=13.41&daily=temperature_2m_max&timezone=America%2FChicago`
	)
	const weather = response.json()
	await new Promise((resolve) => setTimeout(resolve, 2000))
	return weather
}
function getDay() {
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]
	var d = new Date()
	var dayName = days[d.getDay()]
	return dayName
}
function getMont(data) {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	const d = new Date(data)
	return monthNames[d.getMonth()]
}

const page = async () => {
	const data = await getWeather()
	console.log(data)
	return (
		<div className="w-full mt-16 lg:mt-64 lg:px-40 justify-center container mx-auto">
			<div className="flex flex-wrap w-full lg:w-auto">
				<div
					className="w-full lg:w-1/2 flex rounded-lg bg-auto"
					style={{
						backgroundImage: `url(
							"https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
						 )`,
					}}
				>
					<div className="rounded-lg py-6 pl-8 pr-32 w-full bg-blue-400 opacity-90 text-white">
						<div className="mb-20">
							<h2 className="font-bold text-3xl leading-none pb-1">
								{getDay()}
							</h2>
							<h3 className="leading-none pb-2 pl-1">
								{getMont(data.daily.time[0])} {data.daily.time[0]}
							</h3>
							<p className="flex aling-center opacity-75">{data.timezone}</p>
						</div>
						<div>
							<strong className="leading-none text-6xl block font-weight-bolder">
								{data.daily.temperature_2m_max[0]}ºC
							</strong>
							<b className="text-2xl block font-bold">Sunny</b>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-1/2 flex ml-0">
					<div className="lg:my-3 bg-gray-800 text-white p-8 lg:rounded-r-lg w-full">
						<div className="flex justify-between w-64 mb-4 w-full">
							<div className="w-auto font-bold uppercase text-90">
								Precipitation
							</div>
							<div className="w-auto text-right">10 %</div>
						</div>
						<div className="flex justify-between w-64 mb-4 w-full">
							<div className="w-auto font-bold uppercase text-90">Humidity</div>
							<div className="w-auto text-right">29 %</div>
						</div>
						<div className="flex justify-between w-64 mb-8 w-full">
							<div className="w-auto font-bold uppercase text-90">Wind</div>
							<div className="w-auto text-right">12 Mph</div>
						</div>
						<div className="flex flex-row">
							<div className="flex flex-col w-1/4 bg-gray-100 text-black rounded-lg pb-4">
								<div className="text-center pt-2 mb-2"></div>
								<div className="text-center">
									<b className="font-normal">Tue</b>
									<br />
									<strong className="text-xl">29ºC</strong>
								</div>
							</div>

							<div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
								<div className="text-center pt-2 mb-2"></div>
								<div className="text-center">
									<b className="font-normal">Wed</b>
									<br />
									<strong className="text-xl">21ºC</strong>
								</div>
							</div>
							<div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
								<div className="text-center pt-2 mb-2"></div>
								<div className="text-center">
									<b className="font-normal">Thu</b>
									<br />
									<strong className="text-xl">18ºC</strong>
								</div>
							</div>
							<div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
								<div className="text-center pt-2 mb-2"></div>
								<div className="text-center">
									<b className="font-normal">Fri</b>
									<br />
									<strong className="text-xl">25ºC</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default page
