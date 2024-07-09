import React, { useState } from 'react';
import './MagicBall.css';
import answers from './answers.js';
import LangButtons from './LangButtons.jsx';
import MagicBallGlow from './MagicBall-glow.jsx';
import MagicBallAnswer from './MagicBall-answer.jsx';
import MagicBallBody from './MagicBall-body.jsx';



const MagicBall = () => {

    const [lang, setLang] = useState('ua');
    const [answer, setAnswer] = useState(answers[0][lang]);
    const [shaking, setShaking] = useState(false);

    const handleShake = () => {

        let randomIndex = 0;

        while(randomIndex === 0) {
            randomIndex = Math.floor(Math.random() * answers.length);
        }

        setShaking(true);
        setTimeout(() => setShaking(false), 1000);
        setAnswer(answers[randomIndex][lang]);

    };

    const onLangChange = (e) => {
        answers.find(answer => {
            if (lang === 'en' && answer.en === e) {
                    setAnswer(answer.ua);
            }
            else if (lang === 'ua' && answer.ua === e) {
                setAnswer(answer.en);
            }
        })
    };

    const changeLang = (e) => {
        setLang(e);
        onLangChange(answer);
    };

    return (
        <>
            <LangButtons lang={lang} changeLang={changeLang} />
            <div
                className={`${shaking ? 'shake' : ''} `}
                onClick={handleShake}
                style={{
                    position: 'relative',
                    cursor: 'pointer',  
                    marginTop: '400px'
                }}
            >
                <MagicBallBody />
                <MagicBallAnswer answer={answer} shaking={shaking} />
            </div>
            <MagicBallGlow />
        </>
    );
}

export default MagicBall;