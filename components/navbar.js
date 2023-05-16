"use client";

import "../styles/globals.css";
import Clock from "react-live-clock";

export default function Navbar() {
	return (
		<div className="w-full bg-red-500 h-12 flex justify-between items-center">
			<div>
				<Clock
					format={"HH:mm"}
					ticking={true}
					timezone={"CEST"}
					className="text-white ml-4"
				/>
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
