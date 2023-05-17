import "../styles/globals.css";
import Navbar from "../components/navbar";
import "../styles/tailwind.css";
import Task from "../components/taskItem";

// here, we want async becasue we want the page to constantly update with new tasks being updated
// additionally, to constantly update the tasks, we're going refetch the items from pocketbase on every request

export const dynamic = "force-dynamic";

async function getTasks() {
	// const taskData = await pb.collection("tasks").getList(1, 30, {}); // page 1, showing 30 results per page

	const results = await fetch(
		"http://127.0.0.1:8090/api/collections/tasks/records?page=1&perPage=30&filter=(complete=False)",
		{ cache: "no-cache" }
	);
	const taskData = await results.json();
	return taskData?.items;
}

export default async function Tasks() {
	const tasks = await getTasks();
	// console.log(tasks);

	// uncomment below to use as test data
	// 	{ title: "test", info: "test1" },
	// 	{ title: "test2", info: "test3" },
	// ];

	return (
		<div className="bg-gradient-to-tr from-brutalPink-300 via-brutalRed-100 to-brutalPurple-200 w-full z-0 flex flex-col align-middle items-center">
			<Navbar />
			{tasks?.map((task) => (
				<Task
					id={task.id}
					title={task.title}
					info={task.info}
					complete={task.complete}
				/>
			))}
		</div>
	);
}
