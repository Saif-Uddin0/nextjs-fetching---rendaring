import ReviewSkeleton from '@/components/ReviewSkeleton';
import React from 'react';

const ReviewLoading = () => {
    return (
        <div className='grid grid-cols-3 my-5 gap-5'>
            {
                [...Array(12)].map((_,i)=><ReviewSkeleton key={i}></ReviewSkeleton>)
            }
        </div>
    );
};

export default ReviewLoading;