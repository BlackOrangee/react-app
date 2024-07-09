import React from 'react';

const MagicBallAnswer = ({ answer, shaking }) => {
    return (
        <p className='answer'
            style={{ visibility: shaking ? 'hidden' : 'visible' }}>
            {answer}
        </p>
    );
}

export default MagicBallAnswer;
