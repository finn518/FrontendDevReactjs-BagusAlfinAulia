import React from 'react'
import ReviewCard from '../components/ReviewCard';

const ReviewSection = ({items}) => {
  return (
		<section className="grid grid-cols-4 gap-x-6 gap-y-20 my-8">
			{items.map((item, index) => {
				return (
                    <ReviewCard
                        img={item.image}
                        rating={item.rating}
                        name={item.name}
                        reviewText={item.text}
                        key={index}
                    />
				);
			})}
		</section>
	);
}

export default ReviewSection