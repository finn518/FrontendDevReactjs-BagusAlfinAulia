import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchDataById } from "../api";
import { Rating } from "react-simple-star-rating";
import ReviewSection from "../sections/ReviewSection";


const DetailPage = () => {
	const { id } = useParams(); 
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const data = await FetchDataById(id);
			setRestaurant(data);
            console.log(data);
		};
		getData();
	}, [id]);

	if (!restaurant) {
		return <p>Loading...</p>;
	}

	return (
		<section>
			<h1 className="text-4xl py-4">{restaurant.restaurantName}</h1>
			<Rating
				className="my-2"
				SVGstyle={{ display: "inline" }}
				readonly
				initialValue={restaurant.avgrating || 0}
				size={42}
				allowFraction
				fillColor="#1e3a8a"
			/>
			<p className="w-1/2 py-2">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, optio
				hic, inventore dicta nulla quod similique adipisci neque nesciunt.
			</p>
			<hr className=" h-1 bg-slate-300 my-8" />
			<h1 className="text-3xl py-8">All Review</h1>
			<ReviewSection items={restaurant.review} />
		</section>
	);
};

export default DetailPage;
