import React, { useState, useEffect } from 'react';
import './subtitles.css';

function Subtitles() {
    const [text, setText] = useState('Software Engineer');
    const texts = ['Software Engineer', 'Data Scientist', 'Data Analyst'];
    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentIndex = texts.indexOf(text);
            const nextIndex = (currentIndex + 1) % texts.length;
            setText(texts[nextIndex]);
        }, 2750);
        return () => {
            clearInterval(intervalId);
        };
    }, [text, texts]);
    return (
        <div className="subtitles">
            {text}
        </div>
    );
}

export default Subtitles;
