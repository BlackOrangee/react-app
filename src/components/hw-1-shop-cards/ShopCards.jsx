import React from 'react';
import Card from './Card';
import './ShopCards.css';

const ShopCards = () => {
    return (
        <div className="cards">
            <Card img="https://content2.rozetka.com.ua/goods/images/preview/427388592.jpg" title="Викрутка з набором" price="1 090" goodUrl="https://reactjs.org/"/>
            <Card img="https://content1.rozetka.com.ua/goods/images/preview/418130709.jpg" title="Викрутка акумуляторна" price="1 399" goodUrl="https://reactjs.org/"/>
            <Card img="https://content2.rozetka.com.ua/goods/images/preview/351961559.jpg" title="Викрутка електрична" price="895" goodUrl="https://reactjs.org/"/>
            <Card img="https://content1.rozetka.com.ua/goods/images/preview/410605834.png" title="Електровикрутка Xiaomi" price="905" goodUrl="https://reactjs.org/"/>
        </div>
    );
}

export default ShopCards;
