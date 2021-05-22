import React, { useState } from 'react';

// Component for a single 'pixel' used in the pixel art
const Pixel = () => {
    const [mark, setMark] = useState('unmarked');

    const changeMark = (e) => {
        let newMark = (mark === 'marked') ? 'unmarked' : 'marked';
        setMark(newMark);
    }

    return <button className={mark} onClick={e => changeMark(e)}></button >;
}

export default Pixel;