import {
	AlignJustify,
	FilePlus2,
	GitPullRequest,
	Home,
	User,
	X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="bg-blue-600 flex  text-white px-6 py-4 shadow-md relative">
			<div className="max-w-7xl grow  mx-auto flex justify-between items-center">
				<Link to="/" className="text-2xl font-bold">
					NeighbourHub
				</Link>
				<button
					className="md:hidden text-white"
					onClick={() => setIsOpen(true)}
				>
					<AlignJustify />
				</button>
			</div>

			{/* Side Panel */}
			<div
				className={`fixed top-0 right-0 h-full w-60 bg-blue-700 shadow-lg transform transition-transform duration-300 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				} md:hidden z-50`}
			>
				<div className="flex justify-end p-4">
					<button className="text-white" onClick={() => setIsOpen(false)}>
						<X />
					</button>
				</div>
				<div className="flex flex-col gap-4 p-4 text-sm font-medium">
					<Link
						to="/"
						onClick={() => setIsOpen(false)}
						className="hover:underline flex items-center gap-2"
					>
						<Home /> Home
					</Link>
					<Link
						to="/add-item"
						onClick={() => setIsOpen(false)}
						className="hover:underline flex items-center gap-2"
					>
						<FilePlus2 /> Add Item
					</Link>
					<Link
						to="/my-requests"
						onClick={() => setIsOpen(false)}
						className="hover:underline flex items-center gap-2"
					>
						<GitPullRequest /> My Requests
					</Link>
					<Link
						to="/profile"
						onClick={() => setIsOpen(false)}
						className="hover:underline flex items-center gap-2"
					>
						<User /> Profile
					</Link>
				</div>
			</div>

			{/* Regular nav links for medium and above */}
			<div className="hidden md:flex gap-4 text-sm font-medium mt-2 md:mt-0">
				<Link to="/" className="hover:underline flex items-center gap-2">
					<Home /> Home
				</Link>
				<Link
					to="/add-item"
					className="hover:underline flex items-center gap-2"
				>
					<FilePlus2 /> Add Item
				</Link>
				<Link
					to="/my-requests"
					className="hover:underline flex items-center gap-2"
				>
					<GitPullRequest /> My Requests
				</Link>
				<Link to="/profile" className="hover:underline flex items-center gap-2">
					<User /> Profile
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
