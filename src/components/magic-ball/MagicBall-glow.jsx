import React from 'react';

const MagicBallGlow = () => {
    return (
        <div
            className='glow ballBodyPosition'
            style={{
                position: 'relative',
                width: '320px',
                height: '320px',
                zIndex: '-1'
            }}></div>
    );
}

export default MagicBallGlow;
