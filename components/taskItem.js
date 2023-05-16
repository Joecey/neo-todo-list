import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/fonts.css";

export default function Task(props) {
	return (
		<div id={props.id} className="task-item shadow-solid-primary">
			<h1 className="task-title uppercase text-xl ml-2">{props.title}</h1>
			<h2 className="info-text text-lg ml-2">{props.info}</h2>
		</div>
	);
}
