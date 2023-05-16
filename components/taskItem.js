import "../styles/globals.css";
import "../styles/tailwind.css";

export default function Task(props) {
	return (
		<div id={props.id} className="task-item">
			<h1>{props.title}</h1>
			<h2>{props.info}</h2>
		</div>
	);
}
