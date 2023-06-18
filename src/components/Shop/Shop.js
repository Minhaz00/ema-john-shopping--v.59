import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDB, getStoredCart } from '../../utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, []);


    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => selectedProduct.id === product.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const notExist = cart.filter(product => selectedProduct.id !== product.id);
            exist.quantity += 1;
            newCart = [...notExist, exist];
        }

        setCart(newCart);
        addToDB(selectedProduct.id);
    }

    return (
        <div className='shop'>
            <div className="products">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;