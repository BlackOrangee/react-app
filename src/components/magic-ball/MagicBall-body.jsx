import React from 'react';
import ballImage from './images/ball.png';
import ballHoleImage from './images/ball-hole.png';
import './MagicBall.css';

const MagicBallBody = () => {
    return (
        <>
            <img
                src={ballImage} alt="Magic Ball"
                className="ballBodyPosition"
            />
            <img
                src={ballHoleImage} alt="Magic Hole"
                className="ballBodyPosition"
            />
        </>
    );
}

export default MagicBallBody;
