import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsPage from "./components/posts/post-page";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
