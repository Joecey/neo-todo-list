import "../../styles/globals.css";
import Navbar from "../../components/navbar";

export default function New() {
	return (
		<div className="bg-pink-100 w-full z-0 flex flex-col align-middle items-center">
			<Navbar />
			<div>
				<p>This is the page where you can create a new task</p>
			</div>
		</div>
	);
}
