import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm.js";
import DisplayTimeData from "./DisplayTimeData.js";
import DisplaySunData from "./DisplaySunData.js";

function App() {
	const [query, setQuery] = useState(null);
	const [city, setCity] = useState(null);
	return (
		<div className="App container">
			<h1>World Clock</h1>
			<SearchForm
				onQuery={setQuery}
				searchCity={setCity}
			/>
			<DisplayTimeData onQuery={query} />
			<DisplaySunData searchCity={city} />
		</div>
	);
}

export default App;
