import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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

        toast.success('🦄 Wow Cart Added!!', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:px-12'>
               <div className='sm:w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 bg-slate-500'>
                    {
                        products.map(product=> <DisplayProducts
                        key={product.id}
                        product = {product}
                        handleAddToCart={handleAddToCart}
                        ></DisplayProducts>)
                    }
               </div>

               <div className='sm:w-full lg:w-1/5 py-6 bg-amber-500 mt-5 lg:ml-3'>
                <CartCalculate 
                 cart={cart}
                ></CartCalculate>
               </div>
            </div>
        </div>
    );
};

export default Shop;