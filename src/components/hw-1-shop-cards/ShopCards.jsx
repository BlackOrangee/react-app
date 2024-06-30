import React, { useState } from "react";
// import React from 'react';
import Card from './Card';
import './ShopCards.css';
// import { itemList } from './itemList.js';

const ShopCards = () => {
    const [itemList, setItem] = useState(taskList);

    const addItem = () => { 
      
    }

    return (
        <div className="cards">
            {itemList.map((item) => (
                <Card key={item.id} img={item.img} title={item.title} price={item.price} url={item.url} />
            ))}
        </div>
    );
}

export default ShopCards;
