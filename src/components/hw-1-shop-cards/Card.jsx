import React from 'react';

const Card = ({ img, title, price, goodUrl }) => {
    return (
        <div className="card">
            <a href={goodUrl} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="good img" />
            </a>

            <a href={goodUrl} target="_blank" rel="noopener noreferrer">
                <h4>{title}</h4>
            </a>

            <h3>{price} ₴</h3>
        </div>
    );
}

export default Card;
