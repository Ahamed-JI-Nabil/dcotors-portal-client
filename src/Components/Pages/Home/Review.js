import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg shadow-xl my-16">
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex items-center mt-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt='user' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl'>{review.name}</h3>
                        <p>{review.location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;