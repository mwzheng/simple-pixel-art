import React, { useState } from 'react';

// Component for a single 'pixel' used in the pixel art
const Pixel = ({ color }) => {
    const [mark, setMark] = useState('unmarked');
    const [pixelColor, setPixelColor] = useState('000000');

    // mark or unmark a 'pixel' on the canvas
    const changeMark = (e) => {
        let newMark = (mark === 'marked') ? 'unmarked' : 'marked';
        setMark(newMark);

        if (newMark === 'marked') {
            setPixelColor(color)
        } else {
            setPixelColor('ffffff')
            e.target.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }

    return <button className={mark} style={{ backgroundColor: pixelColor }} onClick={e => changeMark(e)}></button >;
}

export default Pixel;