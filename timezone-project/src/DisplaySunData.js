import axios from "axios";
import { useEffect, useState } from "react";

export default function DisplaySunData(props) {
	const [sunTimes, setSunTimes] = useState(null);
	useEffect(
		geocodeCity,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	//Geocode the coordinates from the same API providers as the timezone data. The searched city for sun data + time data is the same in the case of duplicate city names.

	function geocodeCity() {
		let geocodeUrl = `https://api.api-ninjas.com/v1/geocoding?city=${props.searchCity}`;
		const config = {
			headers: { "X-Api-Key": "GLrblK58I6vRrtKkxoIY9w==LlvQ2p4tauUtQZaK" },
		};
		axios.get(geocodeUrl, config).then(retrieveSunData);
	}

	//Sunrise/sunset data retrieved from a different API provider as this one gives it on local times as opposed to UTC

	function retrieveSunData(event) {
		let lon = event.data[0].longitude;
		let lat = event.data[0].latitude;
		let sunApiKey = `38aff3bde0894ed1afdeef506c820299`;
		let sunDataUrl = `https://api.ipgeolocation.io/astronomy?apiKey=${sunApiKey}&lat=${lat}&long=${lon}`;
		axios.get(sunDataUrl).then((response) => {
			setSunTimes(response);
			console.log(sunTimes);
		});
	}

	if (sunTimes) {
		return (
			<div className="DisplaySunDate">
				<p>Sunrise will Be at {sunTimes.data.sunrise}</p>
				<p>Sunset will be at {sunTimes.data.sunset}</p>
			</div>
		);
	} else {
		return null;
	}
}
