import { useState } from "react";
import axios from "axios";

export default function SearchForm({ onQuery, searchCity }) {
	const [searchTerm, setSearchTerm] = useState(null);

	function updateTerm(event) {
		setSearchTerm(event.target.value);
	}

	function retrieveTimezone(event) {
		event.preventDefault();
		searchCity(searchTerm);
		const searchTermUrl = `https://api.api-ninjas.com/v1/worldtime?city=${searchTerm}`;
		const config = {
			headers: { "X-Api-Key": "GLrblK58I6vRrtKkxoIY9w==LlvQ2p4tauUtQZaK" },
		};
		axios.get(searchTermUrl, config).then((result) => {
			if (result) {
				onQuery(result);
			}
		});
	}

	function handleCurrent(event) {
		//browser geolocation to access timezone date via coordinates
		event.preventDefault();
		navigator.geolocation.getCurrentPosition((position) => {
			let lon = position.coords.longitude;
			let lat = position.coords.latitude;
			const coordsUrl = `https://api.api-ninjas.com/v1/worldtime?lon=${lon}&lat=${lat}`;
			const config = {
				headers: { "X-Api-Key": "GLrblK58I6vRrtKkxoIY9w==LlvQ2p4tauUtQZaK" },
			};
			axios.get(coordsUrl, config).then((result) => {
				if (result) {
					onQuery(result);
				}
			});
		});
	}

	return (
		<form
			className="SearchForm input-group"
			onSubmit={retrieveTimezone}
		>
			<input
				type="text"
				className="form-control"
				placeholder="Search place here..."
				onChange={updateTerm}
			/>
			<button
				className="btn btn-outline-secondary"
				type="button"
				onClick={retrieveTimezone}
			>
				Search
			</button>
			<button
				className="btn btn-outline-secondary"
				type="button"
				onClick={handleCurrent}
			>
				Current
			</button>
		</form>
	);
}
