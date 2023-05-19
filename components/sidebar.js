import "../styles/globals.css";
import "../styles/tailwind.css";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { GoGrabber } from "react-icons/go";
import { AiOutlineExclamation } from "react-icons/ai";
import { GoCheck } from "react-icons/go";
import { BiInfoCircle } from "react-icons/bi";

export default function Sidebar() {
	return (
		<div
			id="Sidebar"
			className="top-0 left-0 h-screen w-32 m-0 flex flex-col bg-white
            outline-black outline-2 outline items-center z-50 shadow-lg  "
		>
			<nav>
				<SidebarIcon
					title="new task"
					linkPath="/new"
					icon={<IoIosAddCircle size="32" />}
				/>
				<SidebarIcon
					title="tasks"
					linkPath="/"
					icon={<GoGrabber size="40" />}
				/>
				<SidebarIcon
					title="tasks due"
					linkPath="/today"
					icon={<AiOutlineExclamation size="36" />}
				/>
				<SidebarIcon
					title="completed"
					linkPath="/complete"
					icon={<GoCheck size="32" />}
				/>
				<SidebarIcon
					title="About"
					linkPath="/about"
					icon={<BiInfoCircle size="32" />}
				/>
			</nav>
		</div>
	);
}

function SidebarIcon(props) {
	return (
		<Link href={props.linkPath} className="side-icon group">
			{props.icon}

			<span className="side-icon-tooltip task-title shadow-solid-secondary group-hover:scale-100">
				{props.title}
			</span>
		</Link>
	);
}
