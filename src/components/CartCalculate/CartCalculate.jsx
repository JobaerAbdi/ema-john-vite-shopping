import React from 'react';

const CartCalculate = ({cart}) => {
    let totalPrice = 0;
    let totalShippingPrice = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShippingPrice = totalShippingPrice + product.shipping;
    }
    const totalTax = totalPrice * 0.1;
    const grandTotal = totalPrice + totalShippingPrice + totalTax;
    return (
        <div className='mt-5 text-center sticky top-7'>
            <h1 className='text-2xl font-semibold'>Order Summary:</h1>
            <h1 className='text-xl font-semibold'>Total Cart : {cart.length}</h1>
            <h1 className='text-xl font-semibold'>Total Price : ${totalPrice}</h1>
            <h1 className='text-xl font-semibold'>Total Shipping : ${totalShippingPrice}</h1>
            <h1 className='text-xl font-semibold'>Tax : ${totalTax.toFixed(2)}</h1>
            <h1 className='text-xl font-semibold'>Grand Total : ${grandTotal.toFixed(2)}</h1>
        </div>
    );
};

export default CartCalculate;