import "../../styles/globals.css";
import Navbar from "../../components/navbar";

export default function About() {
	return (
		<div className="bg-gradient-to-tr from-brutalPink-300 via-brutalRed-100 to-brutalPurple-200 w-full z-0 flex flex-col align-middle items-center">
			<Navbar />
			<div>
				<p>
					Section to talk about the about page 
				</p>
			</div>
		</div>
	);
}
