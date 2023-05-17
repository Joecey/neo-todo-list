"use client";

import "../styles/globals.css";
import Clock from "react-live-clock";
import "../styles/fonts.css";

export default function Navbar() {
	return (
		<div className="opacity-100 w-full bg-white h-16 flex p-2 justify-between items-center outline outline-black outline-2">
			<div id="clock">
				<Clock
					format={"HH"}
					ticking={true}
					timezone={"Etc/GMT-1"}
					className="text-black ml-4 task-title text-xl fade-in-start"
					noSsr={true}
				/>

				<Clock
					format={":mm"}
					ticking={true}
					timezone={"Etc/GMT-1"}
					className="text-brutalPurple-300 task-title text-xl fade-in-start"
					noSsr={true}
				/>
			</div>
			<div>
				<Clock
					id="date"
					format={"Do MMMM YYYY"}
					timezone={"Etc/GMT-1"}
					className="task-title uppercase text-4xl fade-in-mid"
					noSsr={true}
				/>
			</div>
			<div>
				<p>weather</p>
			</div>
		</div>
	);
}
