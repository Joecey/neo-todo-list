import "../../styles/globals.css";
import Navbar from "../../components/navbar";

export default function Today() {
	return (
		<div className="bg-gradient-to-tr from-brutalPink-300 via-brutalRed-100 to-brutalPurple-200 w-full z-0 flex flex-col align-middle items-center">
			<Navbar />
			<div>
				<p>
					This is the page where you can see all tasks that are due
					today (DueDate = today or less)
				</p>
			</div>
		</div>
	);
}
