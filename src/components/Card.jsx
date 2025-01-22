import React from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const Card = ({ img, categories, price, isOpen, name, avgRating, id }) => {
	const getPriceSymbol = (price) => {
		console.log(price);
		if (price <= 20) return "$";
		if (price > 20 && price <= 50) return "$$";
		if (price > 50) return "$$$";
		return "";
	};

	return (
		<div className="flex flex-col w-fit gap-2">
			<img className="rounded-sm" src={img || "/placeholder.jpg"} alt={name} />
			<h1 className="text-xl font-semibold text-start">
				{name || "Restaurant Name"}
			</h1>
			<Rating
				SVGstyle={{ display: "inline" }}
				readonly
				initialValue={avgRating || 0}
				size={24}
				allowFraction
				fillColor="#1e3a8a"
			/>
			<div className="flex flex-row justify-between">
				<div className="flex flex-row items-center gap-2 text-sm text-slate-400">
					<p>{categories || "Category"}</p>
					<div className="w-1 h-1 rounded-full bg-slate-400"></div>
					<p className="text-slate-400">{getPriceSymbol(price)}</p>
				</div>
				<div className="flex flex-row justify-around items-center gap-2">
					<div
						className={`w-3 h-3 text-center rounded-full ${
							isOpen ? "bg-green-500" : "bg-red-600"
						}`}
					></div>
					<p className="text-sm text-slate-400">{isOpen ? "OPEN" : "CLOSED"}</p>
				</div>
			</div>
			<Link
				className="bg-blue-900 rounded-sm h-10 mt-4 text-slate-300 hover:bg-blue-950 text-center p-2"
				to={`/restaurant/${id}`}
			>
				Learn More
			</Link>
		</div>
	);
};

export default Card;
