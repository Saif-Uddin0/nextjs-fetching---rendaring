"use client"
import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';

const Reviews = () => {
        const [reviews , setReview] = useState([]);
        const [loading , setLoading] = useState(true);


        useEffect(()=>{
            fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
            .then( res => res.json())
            .then(data => {
                setReview(data.reviews)
                setLoading(false);
            }
            )  
        },[])

        if(loading){
            return <ReviewLoading></ReviewLoading>
        }
    return (
        <div>
            <div>
            <h2 className='text-4xl font-bold'>total <span className='text-yellow-500'>({reviews.length})</span> found</h2>
            <div className='grid grid-cols-3 my-5 gap-5'>
                {
                    reviews.map(rv => <ReviewCard key={rv.id} review={rv}></ReviewCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Reviews;