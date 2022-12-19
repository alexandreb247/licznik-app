import React from 'react'; 
import './Step.css';

const Step = props => { 


    return (
        <div className='step'><br /><span>Krok : </span> 
            <input name='input' type="number" min="1" max="1000" value={props.stepValue} onChange={props.updateStepTyping}></input>
            <br />
            <button onClick={props.changeValueWithStep}>Zwiększ o {props.stepValue}</button>
        </div>
    );
}

export default Step; 