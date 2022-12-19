import React from 'react';
import './Display.css';

const Display = props => { 
    return (
    <div>Licznik: <span className="licznik"> {props.counterCurrentValue}</span> 
    </div>
    );
}

export default Display; 

