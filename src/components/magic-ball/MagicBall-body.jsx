import React from 'react';
import ballImage from './images/ball.png';
import ballHoleImage from './images/ball-hole.png';
import ballDice from './images/ball-dice.png';
import './MagicBall.css';

const MagicBallBody = ({shaking}) => {
    return (
        <>
            <img
                src={ballImage} alt="Magic Ball"
                className="ballBodyPosition"
            />
            <img
                src={ballHoleImage} alt="Magic Hole"
                className="ballBodyPosition "
            />
            <img
                src={ballDice} alt="Magic Dice"
                className={` ballBodyPosition ${!shaking ? 'fade-in' : ''}`}
                style={{visibility: !shaking ? 'visible' : 'hidden'}}
            />
        </>
    );
}

export default MagicBallBody;
