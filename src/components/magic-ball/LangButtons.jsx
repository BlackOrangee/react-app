import React from 'react';

const LangButtons = ({ lang, setLang }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={() => setLang('en')} disabled={lang === 'en'}>English</button>
            <button onClick={() => setLang('ua')} disabled={lang === 'ua'}>Українська</button>
        </div>
    );
};

export default LangButtons;