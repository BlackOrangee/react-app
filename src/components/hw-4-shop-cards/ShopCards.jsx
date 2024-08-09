import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import './ShopCards.css';
import { itemList } from '../../resources/itemList.js';
import AddItemForm from "./AddItemForm.jsx";
import ShopCardsSorting from "./ShopCards-sorting.jsx";

const ShopCards = () => {
    const [items, setItems] = useState(itemList);
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        // console.log('Loaded favorites from localStorage:', storedFavorites);
        return storedFavorites;
    });

    useEffect(() => {
        // console.log('Saving favorites to localStorage:', favorites);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addItem = useCallback((newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    }, []);

    const [view, setView] = useState('grid');
    const toggleView = useCallback(() => setView(view === 'grid' ? 'column' : 'grid'), [view]);

    const [sorting, setSorting] = useState('price-high-to-low');
    const handleSortingChange = useCallback((event) => {
        setSorting(event.target.value);
    }, []);

    const sortingMap = useMemo(() => ({
        'price-high-to-low': (a, b) => b.price - a.price,
        'price-low-to-high': (a, b) => a.price - b.price,
        'name-a-z': (a, b) => a.title.localeCompare(b.title),
        'name-z-a': (a, b) => b.title.localeCompare(a.title),
    }), []);

    const toggleFavorite = useCallback((id) => {
        setFavorites(prevFavorites =>
            prevFavorites.includes(id)
                ? prevFavorites.filter(favId => favId !== id)
                : [...prevFavorites, id]
        );
    }, []);

    const sortedItems = useMemo(() => {
        return items.sort(sortingMap[sorting]);
    }, [items, sorting, sortingMap]);

    return (
        <>
            <AddItemForm addItem={addItem} />

            <button type="button" onClick={toggleView}>
                {view === 'grid' ? 'View as list' : 'View as grid'}
            </button>

            <ShopCardsSorting sorting={sorting} handleSortingChange={handleSortingChange} sortingMap={sortingMap} />

            <Link to={{ pathname: "/favorites", state: { favorites: items.filter(item => favorites.includes(item.id)) } }}>
                <button>View Favorites</button>
            </Link>

            <div className={`cards-${view}`}>
                {sortedItems.map((item) => (
                    <Card
                        view={view}
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        url={item.url}
                        details={item.details}
                        isFavorite={favorites.includes(item.id)}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </div>
        </>
    );
}

export default ShopCards;
