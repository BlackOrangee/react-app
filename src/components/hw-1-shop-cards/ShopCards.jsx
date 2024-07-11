import React, { useState } from "react";
import Card from './Card';
import './ShopCards.css';
import { itemList } from './itemList.js';
import AddItemForm from "./AddItemForm.jsx";

const ShopCards = () => {


    const [items, setItems] = useState(itemList);

    const addItem = (item) => {
        setItems(...items, item);
    }

    return (
        <>
            <AddItemForm addItem={addItem} />

            <div className="cards">
                {itemList.map((item) => (
                    <Card key={item.id} img={item.img} title={item.title} price={item.price} url={item.url} details={item.details} />
                ))}
            </div>
        </>
    );
}

export default ShopCards;
