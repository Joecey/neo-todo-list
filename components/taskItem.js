"use client";

import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/fonts.css";
import Link from "next/link";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function Task(props) {
	const router = useRouter();
	const taskID = props.id;
	const completeState = props.complete;

	async function completeTask(e) {
		e.preventDefault();

		const record = await pb.collection("tasks").update(taskID, {
			complete: true,
		});

		console.log(`task completed ${record}`);
		// alert(`task completed ${taskID}`);

		router.refresh();
	}

	async function deleteTask(e) {
		e.preventDefault();
		await pb.collection("tasks").delete(taskID);
		console.log(`delete task ${taskID}`);
		alert(`Task ${taskID}: Successfully deleted!`);
		router.refresh();
	}

	return (
		<Link
			href={`/${taskID}`}
			id={taskID}
			className="task-item shadow-solid-primary flex justify-between items-center group z-0"
		>
			<div id="text-wrapper">
				<h1
					className={
						completeState
							? "task-title uppercase text-xl ml-2 line-through"
							: "task-title uppercase text-xl ml-2"
					}
				>
					{props.title}
				</h1>
				<h2
					className={
						completeState
							? "info-text text-lg ml-2 line-through"
							: "info-text text-lg ml-2"
					}
				>
					{props.info}
				</h2>
			</div>

			<div id="icon-wrapper" className=" mr-4  relative  z-4">
				<button
					className={
						completeState
							? "hidden"
							: "task-button duration-200 info-text shadow-solid-secondary "
					}
					onClick={completeTask}
				>
					Complete
				</button>
				<button
					className="task-button duration-500 info-text shadow-solid-secondary"
					onClick={deleteTask}
				>
					Delete
				</button>
			</div>
		</Link>
	);
}
