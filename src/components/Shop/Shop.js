import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        
        const newTotal = total + product.price;
        setTotal(newTotal);
    }

    return (
        <div className='shop'>
            <div className="products">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCart = {handleCart}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <h3>Your Cart</h3>
                <p>Total Item:  {cart.length}</p>
                <p>Total Price: {total}</p>
                {
                    cart.map(c => <p>{c.name}</p>)
                }
            </div>
        </div>
    );
};

export default Shop;