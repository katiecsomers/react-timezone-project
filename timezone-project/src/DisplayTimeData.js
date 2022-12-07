import Date from "./Date.js";

export default function DisplayTimeData(props) {
	if (props.onQuery) {
		return (
			<div className="DisplayDateTime">
				<h2>Timezone name : {props.onQuery.data.timezone}</h2>
				<h3>
					Currently: {props.onQuery.data.hour}:{props.onQuery.data.minute}
					{"  "}
					{props.onQuery.data.day_of_week},{"  "}
					<Date date={props.onQuery.data} /> {props.onQuery.data.year}
				</h3>
			</div>
		);
	}
}
