import React from 'react';
import ThemeContext from '../../context/ThemeContext';
import classes from './Key.module.css';

const Display = (props) => {
    return (
        <ThemeContext.Consumer>
            {(context) => {
                return (
                    <button
                        className={context.isDark ? classes.KeyDark : classes.KeyLight}
                        onClick={props.click}
                    >
                        {props.element}
                    </button>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default Display;