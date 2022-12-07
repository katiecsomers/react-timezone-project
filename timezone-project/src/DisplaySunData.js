import axios from "axios";
import { useEffect, useState } from "react";

export default function DisplaySunData(props) {
	const [sunTimes, setSunTimes] = useState(null);
	useEffect(
		geocodeCity,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function geocodeCity() {
		let url = `https://api.api-ninjas.com/v1/geocoding?city=${props.searchCity}`;
		const config = {
			headers: { "X-Api-Key": "GLrblK58I6vRrtKkxoIY9w==LlvQ2p4tauUtQZaK" },
		};
		axios.get(url, config).then(retrieveCoords);
	}

	function retrieveCoords(event) {
		let lon = event.data[0].longitude;
		let lat = event.data[0].latitude;
		let apiKey = `38aff3bde0894ed1afdeef506c820299`;
		let url = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
		axios.get(url).then((response) => {
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
