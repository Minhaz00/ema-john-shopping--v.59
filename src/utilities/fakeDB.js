
// const addToDB = (id) => {
//     let count = localStorage.getItem(id);
//     if (count) {
//         const newCount = parseInt(count) + 1;
//         localStorage.setItem(id, newCount);
//     }
//     else {
//         const newCount = 1;
//         localStorage.setItem(id, newCount);
//     }
// }



const addToDB = (id) => {
    let shoppingCart = getStoredCart();

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const deleteFromDB = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}



export {
    addToDB,
    deleteFromDB,
    getStoredCart,
    deleteShoppingCart
};