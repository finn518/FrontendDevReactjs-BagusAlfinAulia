import React, { useEffect, useState } from "react";
import RestaurantCard from "../sections/RestaurantSection";
import {FetchData} from "../api";
import FilterSection from "../sections/filterSection";

const MainPage = () => {
	const [allData, setAllData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [displayedCount, setDisplayedCount] = useState(8); 
	useEffect(() => {
		FetchData().then((data) => {
			setAllData(data);
			setFilteredData(data);
		});
	}, []);

	const handleFilterChange = (data) => {
		setFilteredData(data);
		setDisplayedCount(8);
	};

	const handleLoadMore = () => {
		setDisplayedCount((prevCount) => prevCount + 4);
	};

	const isAllDataLoaded = displayedCount >= filteredData.length;

	return (
		<>
			<h1 className="text-4xl py-4">Restaurants</h1>
			<p className="w-1/2 py-2">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, optio
				hic, inventore dicta nulla quod similique adipisci neque nesciunt.
			</p>
			<FilterSection allData={allData} onFilterChange={handleFilterChange} />
			<h1 className="text-3xl py-8">All Restaurants</h1>
			<RestaurantCard items={filteredData.slice(0, displayedCount)} />
			<div className="col-span-4 flex justify-center">
				{!isAllDataLoaded && (
					<button
						className="w-1/4 border-2 p-2 border-slate-500 hover:bg-slate-500 hover:text-slate-200"
						onClick={handleLoadMore}
					>
						Load More
					</button>
				)}
			</div>
		</>
	);
};

export default MainPage;
