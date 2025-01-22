import React from "react";
import { Rating } from "react-simple-star-rating";

const ReviewCard = ({ img, name, rating, reviewText }) => {

    return (
        <div className="flex flex-col w-fit gap-2">
            <img className="rounded-sm" src={img || "/placeholder.jpg"} alt={name} />
            <h1 className="text-xl font-semibold text-start">
                {name || "Anonymous"}
            </h1>
            <Rating
                SVGstyle={{ display: "inline" }}
                readonly
                initialValue={rating || 0}
                size={24}
                allowFraction
                fillColor="#1e3a8a"
            />
            <p>{reviewText}</p>
        </div>
    );
};

export default ReviewCard;
