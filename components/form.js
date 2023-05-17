"use client";

import { useState } from "react";
import "../styles/globals.css";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function Form() {
	const [title, setTitle] = useState("");
	const [info, setInfo] = useState("");

	const router = useRouter();
	// we will be passing this function back up towards the parent page
	async function createTask(e) {
		// prevent page refresh
		e.preventDefault();

		const record = await pb.collection("tasks").create({
			title: title,
			info: info,
		});

		console.log("form submitted ", record);
		setTitle("");
		setInfo("");

		// need to use router so that new notes is fetched as soon as you submit
		// yes, i know that it re-renders anyways upon switching back to page, but this will be redundancy
		// TODO: redirect to tasks on submit

		router.refresh();
	}

	return (
		<div>
			<form className="flex flex-col items-center" onSubmit={createTask}>
				<input
					type="text"
					placeholder="Enter title here"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Enter information here"
					value={info}
					onChange={(e) => setInfo(e.target.value)}
				/>
				<button type="submit">Create new task</button>
			</form>

			<h1>{title}</h1>
			<h2>{info}</h2>
		</div>
	);
}
