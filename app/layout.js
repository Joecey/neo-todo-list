"use client";
import Sidebar from "../components/sidebar";
import "../styles/globals.css";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

export const metadata = {
	title: "Neo Brutalised To-Do List",
	description:
		"A To-Do List built with the Neo Brutalism style and ready for 2023 (or when the next design trend arises ) ",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex">
				<Sidebar />

				{children}
			</body>
		</html>
	);
}
