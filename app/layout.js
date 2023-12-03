"use client";
import Sidebar from "/components/sidebar";
import "/styles/globals.css";
import "/styles/tailwind.css";
import "/styles/fonts.css";
import { useEffect, useState } from "react";
import BasePageWrapper from "../components/basePageWrapper";

// authentication
import { pb } from "../utils/pocketbase";

// need to pass this down into the compoenents

// ! for some reason, after updating I have to comment this out
// ! doubt we need metadata, but we need to separate auth to its
// ! own component

// export const metadata = {
// 	title: "Neo Brutalised To-Do List",
// 	description:
// 		"A To-Do List built with the Neo Brutalism style and ready for 2023 (or when the next design trend arises ) ",
// };

// ! with the appDir method, we handle all authentication in layout.js
// ! I'm not sure if we need a context provider here? but that's future me's problem

export default function RootLayout({ children }) {
	// set the state depending on the login in pocketbase
	const [loggedIn, setLoggedIn] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogIn = async (e) => {
		e.preventDefault();
		try {
			const authData = await pb
				.collection("users")
				.authWithPassword(username, password);

			console.log(pb.authStore);
			setLoggedIn(true);
		} catch (error) {
			console.log("error loggin in: ", error);
			throw error;
		} finally {
			setUsername("");
			setPassword("");
		}
	};

	return (
		<html lang="en">
			<body className="flex">
				<Sidebar loggedIn={loggedIn} />
				<div className="bg-gradient-to-tr from-brutalPink-300 via-brutalRed-100 to-brutalPurple-200 w-full z-0 flex flex-col align-middle items-center">
					<BasePageWrapper
						loggedIn={loggedIn}
						setLoggedIn={setLoggedIn}
					/>

					{!loggedIn && (
						<div className="m-24">
							<form
								className="flex flex-col items-center"
								onSubmit={handleLogIn}
							>
								<input
									type="text"
									placeholder="Enter email here"
									className="textfield"
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
								<input
									type="password"
									placeholder="Enter password here"
									className="textfield"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<button
									className="bg-white hover:bg-brutalYellow-200 w-auto h-auto
								text-black duration-200 shadow-solid-secondary p-4 pl-12 pr-12
									rounded-lg outline outline-2 mr-4 uppercase task-title text-4xl mt-4"
									type="submit"
								>
									Log In
								</button>{" "}
							</form>
						</div>
					)}

					{loggedIn && children}
				</div>
			</body>
		</html>
	);
}
