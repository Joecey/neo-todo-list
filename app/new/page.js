import "../../styles/globals.css";
import Navbar from "../../components/navbar";
import Form from "../../components/form";
import PocketBase from "pocketbase";

export default function New() {
	return (
		<div className="bg-gradient-to-tr from-brutalPink-300 via-brutalRed-100 to-brutalPurple-200  w-full z-0 flex flex-col align-middle items-center">
			<Navbar />
			<div>
				<p>This is the page where you can create a new task</p>
			</div>
			<Form />
		</div>
	);
}
