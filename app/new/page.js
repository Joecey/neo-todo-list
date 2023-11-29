import "../../styles/globals.css";
import BasePageWrapper from "../../components/basePageWrapper";
import Form from "../../components/form";
import PocketBase from "pocketbase";

export default function New() {
	return (
		<div className="page-container">
			<div>
				<p>This is the page where you can create a new task</p>
			</div>
			<Form />
		</div>
	);
}
