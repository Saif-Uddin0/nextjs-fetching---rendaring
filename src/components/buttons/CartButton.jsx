"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CartButton = ({ food }) => {
    const [incart, setIncart] = useState(false);
    const { addToCart } = use(CartContext);

    const handleAdd2Cart = () => {
        addToCart(food);
        setIncart(true);

    }

    return (

        <button disabled={incart} onClick={handleAdd2Cart} className="btn-primary w-1/2 text-xs py-2 ">
            {
                incart ? "Added!" : "Add to Cart"
            }
        </button>

    );
};

export default CartButton;