import React from 'react';

// Component allows for user to expand/retract canvas size
const Form = ({ rows, cols, setRows, setCols, setColor }) => {
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

    const changeColor = e => {
        setColor(e.target.value);
    }

    return <div id='form'>
        <span className='formSpan'>Rows ({rows}): </span>
        <button className='formBttn' onClick={addRow}>+</button>
        <button className='formBttn' onClick={delRow}>-</button>
        <span className='formSpan'>Columns ({cols}): </span>
        <button className='formBttn' onClick={addCol}>+</button>
        <button className='formBttn' onClick={delCol}>-</button>
        <span className='formSpan'>Color: </span>
        <input type='color' onChange={e => changeColor(e)}></input>
    </div>
}

export default Form;