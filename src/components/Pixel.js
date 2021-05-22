import React from 'react';

// Component for a single 'pixel' used in the pixel art
const Pixel = ({ mark }) => {
    const changeMark = (e) => {
        mark = (mark === 'marked') ? 'unmarked' : 'marked';
        e.target.className = mark;
    }

    return <button className={mark} onClick={e => changeMark(e)}></button >;
}

export default Pixel;