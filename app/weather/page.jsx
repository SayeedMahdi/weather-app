import WeatgerData from "../components/WeatgerData"

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

				<WeatgerData weather={data} />
			</div>
		</div>
	)
}

export default page
