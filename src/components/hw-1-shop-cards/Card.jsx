import React from 'react';

const Card = ({ img, title, price, url, details }) => {

    const [isSelected, setIsSelected] = React.useState(false);

    const handleMouseOver = () => setIsSelected(true);
    const handleMouseOut = () => setIsSelected(false);

    return (
        <div className={`card ${isSelected ? 'selected' : ''}`} 
             onMouseOver={handleMouseOver} 
             onMouseOut={handleMouseOut}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt="good img" />
                </a>

                <a href={url} target="_blank" rel="noopener noreferrer">
                    <h4>{title}</h4>
                </a>

                <h3>{price} ₴</h3>
                <p hidden={!isSelected}>{details}</p>
        </div>
    );
}

export default Card;
