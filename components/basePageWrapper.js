"use client";

import "../styles/globals.css";
import Clock from "react-live-clock";
import "../styles/fonts.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { pb } from "../utils/pocketbase";

export default function BasePageWrapper({ loggedIn, setLoggedIn }) {
	const handleLogOut = () => {
		pb.authStore.clear();
		setLoggedIn(false);
	};

	const handleNewAuthData = () => {
		return pb.authStore.baseModel === null ? "" : pb.authStore.model.id; // i think this is the key!
	};

	useEffect(() => {
		setUserId(handleNewAuthData());
	}, [loggedIn]);

	const logoutButtonOpacity = loggedIn ? "opacity-100" : "opacity-0";

	const [userId, setUserId] = useState("");

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
			<h2>{userId}</h2>
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
