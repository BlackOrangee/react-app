import React from 'react';
import './Favorite-style.css';

const FavoriteItem = ({ item }) => {
    return (
        <div className="favorite-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={item.img} alt={item.title} style={{ maxWidth: '150px', marginRight: '10px' }} />
            </a>
            <div className="favorite-item-details">
                <h4>{item.title}</h4>
                <p>{item.details}</p>
                <h3>{item.price} ₴</h3>
            </div>
        </div>
    );
}

export default FavoriteItem;
