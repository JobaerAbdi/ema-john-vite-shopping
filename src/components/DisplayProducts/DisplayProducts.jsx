import React from 'react';

const DisplayProducts = ({product,handleAddToCart}) => {
    const {img,name,price,shipping} = product;
    return (
        <div>
  <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure><img className=' p-5' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h1 className='text-1xl font-semibold'>Total Price : ${price}</h1>
    <h1 className='text-1xl font-semibold'>Total Shipping : ${shipping}</h1>
  </div>
  <div>
    <div className="card-actions justify-center pb-3">
      <button onClick={()=>handleAddToCart(product)} className="btn btn-primary">Details</button>
    </div>
  </div>
 </div>
</div>
    );
};

export default DisplayProducts;