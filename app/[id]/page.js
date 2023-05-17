// wild card page that is used for accessing individual notes
import "../../styles/globals.css";
import Navbar from "../../components/navbar";

export default function singleTask() {
	return (
		<div className="bg-gradient-to-tr from-brutalPink-300 via-brutalRed-100 to-brutalPurple-200 w-full z-0 flex flex-col align-middle items-center">
			<Navbar />
			<div>
				<p>hi this is an ID page</p>
			</div>
		</div>
	);
}
