"use client";

import "../styles/globals.css";
import Clock from "react-live-clock";
import "../styles/fonts.css";
import Link from "next/link";

export default function BasePageWrapper({ loggedIn, setLoggedIn }) {
	const handleLogOut = () => {
		setLoggedIn(false);
	};

	const logoutButtonOpacity = loggedIn ? "opacity-100" : "opacity-0";

	return (
		<div
			className="opacity-100 w-full bg-white h-16 flex p-2 justify-between 
		items-center outline outline-black outline-2"
		>
			<div>
				<Clock
					id="date"
					format={"Do MMMM YYYY"}
					timezone={"Etc/GMT-1"}
					className="task-title uppercase text-4xl ml-4"
				/>
			</div>
			<div>
				<Link
					href={"/"}
					className={`bg-white hover:bg-brutalYellow-200 w-auto h-auto
					text-black duration-200 info-text shadow-solid-secondary pl-2 pr-2  
					rounded-lg outline outline-2 mr-4 text-xl ${logoutButtonOpacity}`}
					onClick={handleLogOut}
					disabled={!loggedIn}
				>
					Log Out
				</Link>
			</div>
		</div>
	);
}
