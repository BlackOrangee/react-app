import React from 'react';

const MagicBallAnswer = ({ answer, shaking }) => {
    return (
        <p 
            className={`answer ${!shaking ? 'fade-in' : ''}`}
            style={{visibility: !shaking ? 'visible' : 'hidden'}}>
            {answer}
        </p>
    );
}

export default MagicBallAnswer;
