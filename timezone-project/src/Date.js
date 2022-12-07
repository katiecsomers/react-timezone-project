export default function Date(props) {
	let months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	let day = props.date.day;
	if (day.charAt(0) === "0") {
		day = day.slice(1);
	}

	if (props.date.day === "01" || props.date.day === "31") {
		return (
			<span className="Date">
				{day}st {months[props.date.month - 1]}
			</span>
		);
	}
	if (props.date.day === "02") {
		return (
			<span className="Date">
				{day}nd {months[props.date.month - 1]}
			</span>
		);
	}
	if (props.date.day === "03") {
		return (
			<span className="Date">
				{day}rd {months[props.date.month - 1]}
			</span>
		);
	} else {
		return (
			<span className="Date">
				{day}th {months[props.date.month - 1]}
			</span>
		);
	}
}
