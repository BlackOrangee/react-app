import React, { useState } from 'react';

const answers = [
    { id: 1, en: "Yes", ua: "Так" },
    { id: 2, en: "No", ua: "Ні" },
    { id: 3, en: "Maybe", ua: "Можливо" },
    { id: 4, en: "Ask again later", ua: "Подумай пізніше" },
    { id: 5, en: "Definitely", ua: "Точно" },
    { id: 6, en: "I don't think so", ua: "Не можу побачити" },
];

const MagicBall = () => {

    const [answer, setAnswer] = useState('');
    const [lang, setLang] = useState('en');

    const handleShake = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        setAnswer(answers[randomIndex][lang]);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={() => setLang('en')} disabled={lang === 'en'}>English</button>
            <button onClick={() => setLang('ua')} disabled={lang === 'ua'}>Українська</button>
            <h1>Magic Ball</h1>

            <button onClick={handleShake}>Shake the Ball</button>
            {answer && <p>Answer: {answer}</p>}
        </div>
    );
}

export default MagicBall;