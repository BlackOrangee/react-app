import React, { useState, useEffect } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const Card = ({ view, img, title, price, url, details, id, isFavorite, toggleFavorite }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleMouseOver = () => setIsSelected(true);
    const handleMouseOut = () => setIsSelected(false);

    return (
        <div className={`card card-${view} ${isSelected ? 'selected' : ''}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>

            {view === 'grid' ? (
                <>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="item img" />
                    </a>

                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <h4>{title}</h4>
                    </a>

                    <h3>{price} ₴</h3>

                    <div onClick={() => toggleFavorite(id)}>
                        {isFavorite ? (
                            <HeartFilled style={{ fontSize: '20px', color: 'red', cursor: 'pointer' }} />
                        ) : (
                            <HeartOutlined style={{ fontSize: '20px', color: 'red', cursor: 'pointer' }} />
                        )}
                    </div>

                    <p hidden={!isSelected}>{details}</p>

                </>
            ) : (
                <>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="item img" />
                    </a>
                    <div>
                        <div onClick={() => toggleFavorite(id)}>
                            {isFavorite ? (
                                <HeartFilled style={{ fontSize: '20px', color: 'red', cursor: 'pointer' }} />
                            ) : (
                                <HeartOutlined style={{ fontSize: '20px', color: 'red', cursor: 'pointer' }} />
                            )}
                        </div>

                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <h4 style={{ marginBottom: '10px' }}>{title}</h4>
                        </a>

                        <h3 style={{ marginBottom: '10px' }}>{price} ₴</h3>
                        <p>{details}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
