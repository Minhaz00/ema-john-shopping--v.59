import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { img, name, ratings, price } = props.product;
    const handleCart = props.handleCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <div >
                <button onClick={() => handleCart(props.product)} className="btn-cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>Add to cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;