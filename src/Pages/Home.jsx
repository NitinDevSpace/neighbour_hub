import { useItemContext } from "../context/mockItems";
import ItemsCard from "../Components/ItemsCard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState("name");
	const [currentPage, setCurrentPage] = useState(1);
	const ITEMS_PER_PAGE = 9;
	const navigate = useNavigate();
	const { items } = useItemContext();

	const filteredItems = items
		.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
		.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

	const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
	const paginatedItems = filteredItems.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
	const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

	return (
		<div className="p-6 max-w-6xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">Neighborhood Items Catalog</h1>

			<div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
				<input
					type="text"
					placeholder="Search items..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
				/>
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					className="px-4 py-2 border border-gray-300 rounded-md"
				>
					<option value="name">Sort by Name</option>
					<option value="category">Sort by Category</option>
					<option value="owner">Sort by Owner</option>
				</select>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{paginatedItems.map((item) => (
				  <ItemsCard
				    key={item.id}
				    item={item}
				    onViewDetails={(id) => navigate(`/item/${id}`)}
				  />
				))}
			</div>

			<div className="flex justify-center items-center mt-8 gap-4">
				<button
					onClick={handlePrev}
					disabled={currentPage === 1}
					className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
				>
					Previous
				</button>
				<span className="font-medium">
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={handleNext}
					disabled={currentPage === totalPages}
					className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Home;
