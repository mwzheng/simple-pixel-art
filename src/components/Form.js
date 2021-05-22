import React from 'react';

const Form = ({ rows, cols, setRows, setCols }) => {
    const addRow = () => {
        setRows(rows + 1);
    }

    const addCol = () => {
        setCols(cols + 1);
    }

    const delRow = () => {
        setRows(rows - 1);
    }

    const delCol = () => {
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