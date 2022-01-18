import React from 'react';
import ThemeContext from '../../context/ThemeContext';
import classes from './DisplayMode.module.css';

const DisplayMode = (props) => {
    return (
        <div className={classes.center}>
            <ThemeContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <button
                                className={context.isDark ? classes.DisplayModeDark : classes.DisplayModeLight}
                                onClick={props.clickLightMode}
                            >
                                Light Theme
                            </button>
                            <button
                                className={context.isDark ? classes.DisplayModeDark : classes.DisplayModeLight}
                                onClick={props.clickDarkMode}
                            >
                                Dark Theme
                            </button>
                        </div>
                    );
                }}
            </ThemeContext.Consumer>
        </div>
    );
}

export default DisplayMode;