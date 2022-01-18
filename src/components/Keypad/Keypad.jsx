import React from 'react';
import Key from '../Key/Key';
import classes from './Keypad.module.css';

const Display = (props) => {
    return (
        <div className={classes.KeypadPanel}>
            <Key element="1" click={props.clicked} />
            <Key element="2" click={props.clicked} />
            <Key element="3" click={props.clicked} />
            <Key element="+" click={props.clicked} />
            <Key element="4" click={props.clicked} />
            <Key element="5" click={props.clicked} />
            <Key element="6" click={props.clicked} />
            <Key element="-" click={props.clicked} />
            <Key element="7" click={props.clicked} />
            <Key element="8" click={props.clicked} />
            <Key element="9" click={props.clicked} />
            <Key element="*" click={props.clicked} />
            <Key element="Clear" click={props.clicked} />
            <Key element="0" click={props.clicked} />
            <Key element="=" click={props.clicked} />
            <Key element="/" click={props.clicked} />
        </div>
    );
}

export default Display;