import React from "react";
import Card from "../components/Card";

const RestaurantCard = ({ items }) => {
	return (
		<section className="grid grid-cols-4 gap-x-6 gap-y-20 my-8">
			{items.map((item, index) => {
				const average = (item.priceRange[0] + item.priceRange[1]) / 2;
				return (
					<Card
						key={index}
						avgRating={item.avgrating}
						img={item.review[0]?.image}
						isOpen={item.isOpen}
						categories={item.categories[0]}
						name={item.restaurantName}
						price={`${average.toFixed(2)}`}
						id={index}
					/>
				);
			})}
		</section>
	);
};

export default RestaurantCard;
