import React from 'react';
import Pixel from './Pixel';

// Compoent to create the entire canvas for the pixel art
const Canvas = ({ rows, cols, color }) => {
    // Makes the entire canvas
    const makeCanvas = (rowLength) => {
        let table = [];
        let rowNumber = 0;

        while (rowNumber !== rowLength) {
            table.push(<tr key={`row${rowNumber}`}>{makeCanvasRow(cols)}</tr>);
            rowNumber++;
        }

        return table;
    }

    // Makes a single row on the canvas
    const makeCanvasRow = (columnLength) => {
        let x = [];
        let colNumber = 0;

        while (colNumber !== columnLength) {
            x.push(<td key={`col${colNumber}`}><Pixel color={color} /></td>);
            colNumber++;
        }

        return x;
    }

    return <div>
        <table>
            <tbody>
                {makeCanvas(rows)}
            </tbody>
        </table>
    </div >
}

export default Canvas;