import React, { useState } from 'react';
import ballImage from './images/ball.png';
import ballHoleImage from './images/ball-hole.png';
import './MagicBall.css';
import answers from './answers.js';
import LangButtons from './LangButtons.jsx';



const MagicBall = () => {

    const [answer, setAnswer] = useState('');
    const [lang, setLang] = useState('ua');
    const [shaking, setShaking] = useState(false);

    const handleShake = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        setShaking(true);
        setTimeout(() => setShaking(false), 1000); 
        setAnswer(answers[randomIndex][lang]);

    };

    return (
        <>
            <LangButtons lang={lang} setLang={setLang} />
            <div
                className={shaking ? 'shake' : ''}
                onClick={handleShake}
                onMouseEnter={() => document.body.style.cursor = 'pointer'}
                onMouseLeave={() => document.body.style.cursor = 'default'}
                style={{
                    position: 'relative',
                    cursor: 'pointer',
                    marginTop: '300px'
                }}
            >
                <img
                    src={ballImage} alt="Magic Ball"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <img
                    src={ballHoleImage} alt="Magic Ball"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                {<p 
                style={{
                    visibility: shaking ? 'hidden' : 'visible',
                    fontSize: '16px',
                    color: 'white',
                    margin: '0',
                    width: '120px',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -70%)'
                }}
                >
                    {answer}
                </p>}
            </div>


        </>
    );
}

export default MagicBall;