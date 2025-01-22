import React, { useState, useEffect } from "react";

const FilterSection = ({ allData, onFilterChange }) => {
	const [selectedPrice, setSelectedPrice] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedOpen, setSelectedOpen] = useState(false); 
	const [uniqueCategories, setUniqueCategories] = useState([]);

	const filterData = () => {
		let filtered = [...allData];

		if (selectedPrice) {
			filtered = filtered.filter((item) => {
				const average = (item.priceRange[0] + item.priceRange[1]) / 2;
				switch (selectedPrice) {
					case "cheap":
						return average > 0 && average <= 20;
					case "standard":
						return average > 20 && average <= 50;
					case "expensive":
						return average > 50 && average <= 100;
					default:
						return true;
				}
			});
		}

		if (selectedCategory) {
			filtered = filtered.filter((item) =>
				item.categories.includes(selectedCategory)
			);
		}

		if (selectedOpen) {
			filtered = filtered.filter((item) => item.isOpen === true);
		}

		onFilterChange(filtered);
	};

	useEffect(() => {
		const categories = allData.flatMap((item) => item.categories);
		setUniqueCategories([...new Set(categories)]);
	}, [allData]);

	useEffect(() => {
		filterData();
	}, [selectedPrice, selectedCategory, selectedOpen]); 

	return (
		<section className="border-y-2 border-slate-300 my-4">
			<div className="flex justify-between items-center">
				<div className="flex py-4 gap-5">
					<h1 className="text-slate-600">Filter by:</h1>
					<div className="flex gap-2 border-b-2 border-slate-300">
						<input
							type="radio"
							checked={selectedOpen}
							onChange={(e) => setSelectedOpen(e.target.checked)} 
						/>
						<label className="text-sm" htmlFor="open">
							Open Now
						</label>
					</div>
					<div className="flex gap-2 border-b-2 border-slate-300">
						<select
							className="pr-[2vw]"
							value={selectedPrice}
							onChange={(e) => setSelectedPrice(e.target.value)}
						>
							<option value="">Price</option>
							<option value="cheap">Cheap</option>
							<option value="standard">Standard</option>
							<option value="expensive">Expensive</option>
						</select>
					</div>
					<div className="flex gap-2 border-b-2 border-slate-300">
						<select
							className="pr-[5vw]"
							value={selectedCategory}
							onChange={(e) => setSelectedCategory(e.target.value)}
						>
							<option value="">Categories</option>
							{uniqueCategories.map((category) => (
								<option key={category} value={category}>
									{category} Restaurant
								</option>
							))}
						</select>
					</div>
				</div>
				<button
					className="py-2 px-10 text-sm bg-transparent border-2 hover:bg-slate-200"
					onClick={() => {
						setSelectedPrice("");
						setSelectedCategory("");
						setSelectedOpen(false); 
						onFilterChange(allData); 
					}}
				>
					CLEAR ALL
				</button>
			</div>
		</section>
	);
};

export default FilterSection;
