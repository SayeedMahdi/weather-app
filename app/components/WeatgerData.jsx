const combineDate_Tem = function (date, tep) {}

const WeatgerData = ({ weather }) => {
	const time = weather.time
	console.log(time)

	return (
		<div>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatgerData
