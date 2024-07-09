import React from 'react';
import './MagicBall.css';

const LangButtons = ({ lang, changeLang }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button className='lang-buttons'
                onClick={() => changeLang('en')}
                disabled={lang === 'en'}
            >
                English
            </button>
            <button className='lang-buttons'
                onClick={() => changeLang('ua')}
                disabled={lang === 'ua'}
            >
                Українська
            </button>
        </div>
    );
};

export default LangButtons;