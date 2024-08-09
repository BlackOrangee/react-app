import ShopCards from "./components/hw-4-shop-cards/ShopCards";
import FavoriteItemsPage from "./components/favorite/FavoriteItemsPage";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ShopCards />} />
                <Route path="/favorites" element={<FavoriteItemsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
