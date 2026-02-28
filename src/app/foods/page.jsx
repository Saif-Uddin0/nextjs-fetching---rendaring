import FoodCard from '@/components/cards/FoodCard';
import React from 'react';
import { resolve } from 'styled-jsx/css';
import CartItem from './CartItem';
const getFoods = async () => {
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return data.foods || [];
}

const Foods = async () => {
    const foods = await getFoods();

    return (
        <div>
            <h2 className='text-4xl font-bold'>total <span className='text-yellow-500'>({foods.length})</span> found</h2>
            <div className="flex gap-5">

                <div className='flex-1 grid sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 my-5 gap-5 '>
                    {
                        foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                    }
                </div>


                <div className="w-[250px] border-2 rounded-xl p-4">
                    <h2 className="text-2xl font-bold">Cart Item</h2> <hr />
                    <CartItem ></CartItem>
                </div>
            </div>
        </div>
    );
};

export default Foods;