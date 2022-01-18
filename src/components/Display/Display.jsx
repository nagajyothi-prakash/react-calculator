import React from 'react';
import ThemeContext from '../../context/ThemeContext';
import classes from './Display.module.css';

const Display = (props) => {
    let display = '0';
    if (props.clickedButton.value1 !== '0' && props.clickedButton.value2 === '0' && props.clickedButton.resultObtained === false) {
        display = props.clickedButton.value1;
    } else if (props.clickedButton.value2 !== '0' && props.clickedButton.resultObtained === false) {
        display = props.clickedButton.value2;
    } else if (props.clickedButton.resultObtained) {
        display = props.clickedButton.result;
    }
    return (
        <ThemeContext.Consumer>
            {(context) => {
                return (
                    <div className={context.isDark ? classes.DisplayPanelDark : classes.DisplayPanelLight}>
                        <p>{display}</p>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default Display;