import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({ item, handleDeleteItem }) => {
    const { id, name, quantity, price, img } = item;
    return (
        <div className='item-container'>
            <div className="item-image">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="about-item">
                <div className="item-description">
                    <h5>{name}</h5>
                    <p><small>Price: {price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div>
                    <button onClick={() => handleDeleteItem(id)} className="delete-btn">
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;