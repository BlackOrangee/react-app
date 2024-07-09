import React from 'react';
import ballImage from './images/ball.png';
import ballHoleImage from './images/ball-hole.png';
import ballHole2Image from './images/ball-hole-2.png';
import ballDice from './images/ball-dice.png';
import './MagicBall.css';

const MagicBallBody = () => {
    return (
        <>
            <img
                src={ballImage} alt="Magic Ball"
                className="ballBodyPosition"
            />
            {/* <img
                src={ballHoleImage} alt="Magic Hole"
                className="ballBodyPosition"
            /> */}
            <img
                src={ballHole2Image} alt="Magic Hole"
                className="ballBodyPosition"
            />
            {/* <img
                src={ballDice} alt="Magic Dice"
                className="ballBodyPosition"
            /> */}
        </>
    );
}

export default MagicBallBody;
