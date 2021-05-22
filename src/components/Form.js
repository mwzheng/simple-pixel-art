import React from 'react';

// Component allows for user to expand/retract canvas size
const Form = ({ rows, cols, setRows, setCols }) => {
    const addRow = () => {
        setRows(rows + 1);
    }

    const addCol = () => {
        setCols(cols + 1);
    }

    const delRow = () => {
        if (rows === 1) return;
        setRows(rows - 1);
    }

    const delCol = () => {
        if (cols === 1) return;
        setCols(cols - 1);
    }

    return <div id='form'>
        <span className='formSpan'>Rows: </span>
        <button className='formBttn' onClick={addRow}>+</button>
        <button className='formBttn' onClick={delRow}>-</button>
        <span className='formSpan'> Columns: </span>
        <button className='formBttn' onClick={addCol}>+</button>
        <button className='formBttn' onClick={delCol}>-</button>
    </div>
}

export default Form;