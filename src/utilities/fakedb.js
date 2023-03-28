// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = getShoppingCart();
    // console.log(shoppingCart); // first time => {};
    // console.log(shoppingCart); // Second time = {24e13b9-2d54-4b2f-a74d-a77b362d6ead :1};

    const quantity = shoppingCart[id];
    // console.log(quantity);  // first time =>  undefined;
    if(!quantity){
        shoppingCart[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};



const getShoppingCart = ()=>{
    let shoppingCart = {};

    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    // console.log(storedCart); // first time =>  null;

    if(storedCart){
        shoppingCart = storedCart;
    }
    return shoppingCart;
};



const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
};

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
};

export {
    addToDb, 
    getShoppingCart,
    removeFromDb,
    deleteShoppingCart
}