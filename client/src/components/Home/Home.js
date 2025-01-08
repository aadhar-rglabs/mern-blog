import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Blog</h1>
            <div className="image-gallery">
                <img src="https://via.placeholder.com/300" alt="Sample 1" />
                <img src="https://via.placeholder.com/300" alt="Sample 2" />
                <img src="https://via.placeholder.com/300" alt="Sample 3" />
            </div>
        </div>
    );
};

export default Home;