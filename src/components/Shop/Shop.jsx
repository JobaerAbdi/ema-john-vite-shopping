import React, { useEffect, useState } from 'react';
import CartCalculate from '../CartCalculate/CartCalculate';
import DisplayProducts from '../DisplayProducts/DisplayProducts';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(date => setProducts(date));
    },[])

    const handleAddToCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    };

    return (
        <div>
            <div className='flex lg:px-12'>
               <div className='w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 bg-slate-500'>
                    {
                        products.map(product=> <DisplayProducts
                        key={product.id}
                        product = {product}
                        handleAddToCart={handleAddToCart}
                        ></DisplayProducts>)
                    }
               </div>

               <div className='w-1/5 bg-amber-500 mt-5 ml-3'>
                <CartCalculate 
                 cart={cart}
                ></CartCalculate>
               </div>
            </div>
        </div>
    );
};

export default Shop;