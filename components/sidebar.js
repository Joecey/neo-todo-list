import "../styles/globals.css";
import "../styles/tailwind.css";
import Link from "next/link";

export default function Sidebar() {
	return (
		<div
			id="Sidebar"
			className="top-0 left-0 h-screen w-32 m-0 flex flex-col bg-white
            outline-black outline-2 outline items-center z-50 shadow-lg  "
		>
			<nav>
				<SidebarIcon id="new" linkPath="/new" title="new" />
				<SidebarIcon id="tasks" linkPath="/" title="tasks" />
				<SidebarIcon id="dueToday" linkPath="/today" title="dueToday" />
				<SidebarIcon
					id="completed"
					linkPath="/complete"
					title="complete"
				/>
				<SidebarIcon id="about" linkPath="/about" title="about" />
			</nav>
		</div>
	);
}

function SidebarIcon(props) {
	return (
		<Link href={props.linkPath} className="side-icon ">
			<h1>{props.title}</h1>
		</Link>
	);
}
