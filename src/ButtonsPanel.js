import React from 'react';
import './ButtonsPanel.css';

const ButtonsPanel = props => { 

    return (
        <div className='buttons-panel'>
            
            <button onClick={props.changeValue} >Add 1</button>
            <button onClick={()=>props.resetValue(true)}>ReInit</button>
            <button onClick={()=>props.resetValue(false)}>Reset</button>
        </div>
    );
}

export default ButtonsPanel; 