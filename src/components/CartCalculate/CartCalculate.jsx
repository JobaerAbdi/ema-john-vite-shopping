import React from 'react';

const CartCalculate = ({cart}) => {
    let price = 0;
    let shipping = 0;
    for(const product of cart){
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    const netPrice = price + shipping;
    const tax = netPrice * 0.1;
    const totalTax = tax.toFixed(2);
    const grandTotal = netPrice + parseFloat(tax);
    return (
        <div className='mt-5 text-center'>
            <h1 className='text-2xl font-semibold'>Order Summary:</h1>
            <h1 className='text-xl font-semibold'>Total Cart : {cart.length}</h1>
            <h1 className='text-xl font-semibold'>Total Price : ${price}</h1>
            <h1 className='text-xl font-semibold'>Total Shipping : ${shipping}</h1>
            <h1 className='text-xl font-semibold'>Tax : ${totalTax}</h1>
            <h1 className='text-xl font-semibold'>Grand Total : ${grandTotal.toFixed(2)}</h1>
        </div>
    );
};

export default CartCalculate;