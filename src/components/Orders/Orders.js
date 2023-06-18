import React, { useState } from 'react';
import './Order.css';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteFromDB, deleteShoppingCart } from '../../utilities/fakeDB';

const Orders = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleDeleteItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        deleteFromDB(id);
    }

    const handleDeleteCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='order-preview'>
            <div className="cart-items">
                {
                    cart.map(item => <ReviewItem
                        key={item.id}
                        item={item}
                        handleDeleteItem={handleDeleteItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart">
                <Cart
                    handleDeleteCart={handleDeleteCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;