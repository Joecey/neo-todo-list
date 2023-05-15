import "../styles/globals.css";

export default function Navbar() {
	return (
		<div className="w-full bg-red-500 h-12 flex justify-between">
			<div>
				<p>Time</p>
			</div>
			<div>
				<p>
					hello! - keeping this as the (maybe) global header bar for
					weather, time/date etc
				</p>
			</div>
			<div>
				<p>weather</p>
			</div>
		</div>
	);
}
