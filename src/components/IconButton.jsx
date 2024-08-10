import React from 'react';

const IconButton = ({ icon: IconComponent, onClick, size = 40, color = 'grey', iconColor = 'black' }) => {
    const buttonStyle = {
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: '50%',
        padding: '10px',
        backgroundColor: color,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div onClick={onClick} style={buttonStyle}>
            <IconComponent style={{ fontSize: `${size / 1.49}px`, color: iconColor }} />
        </div>
    );
};

export default IconButton;
