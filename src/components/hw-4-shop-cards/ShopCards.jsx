import React, { useState } from "react";
import Card from './Card.jsx';
import './ShopCards.css';
import { itemList } from './itemList.js';
import AddItemForm from "./AddItemForm.jsx";
import ShopCardsSorting from "./ShopCards-sorting.jsx";

const ShopCards = () => {


    const [items, setItems] = useState(itemList);

    const addItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    }

    const [view, setView] = useState('grid');

    const toggleView = () => setView(view === 'grid' ? 'column' : 'grid');

    const [sorting, setSorting] = useState('price-high-to-low');

    const handleSortingChange = (event) => {
        setSorting(event.target.value);
    };

    const sortingMap = {
        'price-high-to-low': (a, b) => b.price - a.price,
        'price-low-to-high': (a, b) => a.price - b.price,
        'name-a-z': (a, b) => a.title.localeCompare(b.title),
        'name-z-a': (a, b) => b.title.localeCompare(a.title),
    };

    return (
        <>
            <AddItemForm addItem={addItem} />

            <button type="button" onClick={toggleView} >
                {view === 'grid' ? 'View as list' : 'View as grid'}
            </button>

            <ShopCardsSorting sorting={sorting} handleSortingChange={handleSortingChange} sortingMap={sortingMap} />

            <div className={`cards-${view}`}>
                {items.sort(sortingMap[sorting]).map((item) => (
                    <Card view={view} key={item.id} img={item.img} title={item.title} price={item.price} url={item.url} details={item.details} />
                ))}
            </div>
        </>
    );
}

export default ShopCards;
