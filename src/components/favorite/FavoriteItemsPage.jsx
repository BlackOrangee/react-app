import React, { useState, useEffect } from 'react';
import { itemList } from '../../resources/itemList.js';
import FavoriteItem from './Favorite-item.jsx';
import './Favorite-style.css';
import { HomeOutlined } from '@ant-design/icons';
import IconButton from '../IconButton.jsx';
import { Link } from 'react-router-dom';


const FavoriteItemsPage = () => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        const favorites = itemList.filter(item => storedFavorites.includes(item.id));
        setFavoriteItems(favorites);
    }, []);


    return (
        <div>
            <Link style={{ textDecoration: 'none' }} to={{ pathname: "/" }}>
                <IconButton icon={HomeOutlined} size={40} color="grey" iconColor="black" />

            </Link>

            <h1>Favorite Items</h1>
            <div>
                {favoriteItems.length > 0 ? (
                    <div className="favorite-items-list">
                        {favoriteItems.map(item => (
                            <FavoriteItem item={item} />
                        ))}
                    </div>
                ) : (
                    <p>No favorite items</p>
                )}
            </div>
        </div>
    );
};

export default FavoriteItemsPage;