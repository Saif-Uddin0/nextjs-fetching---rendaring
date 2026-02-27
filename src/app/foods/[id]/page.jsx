import React from 'react';

const getDetailsFood = async() =>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/52794/${id}`)
    const data =await res.json();
    return data.details;
}

const FoodDetails = () => {
    return (
        <div>
            
        </div>
    );
};

export default FoodDetails;