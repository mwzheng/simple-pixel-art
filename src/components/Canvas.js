import React from 'react';
import Pixel from './Pixel';

// Compoent to create the entire canvas for the pixel art
const Canvas = () => {
    // Makes the entire canvas
    const makeCanvas = (row) => {
        let table = [];
        let rows = row;

        while (rows !== 0) {
            table.push(<tr key={`row${rows}`}>{makeCanvasRow(48)}</tr>);
            rows--;
        }

        return table;
    }

    // Makes a single row on the canvas
    const makeCanvasRow = (columns) => {
        let x = [];
        let cols = columns;

        while (cols !== 0) {
            x.push(<td key={`col${cols}`}><Pixel mark='unmarked' /></td>);
            cols--;
        }

        return x;
    }

    return <div>
        <table>
            <tbody>
                {makeCanvas(28)}
            </tbody>
        </table>
    </div >
}

export default Canvas;