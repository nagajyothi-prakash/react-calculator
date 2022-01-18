import React from 'react';
import ThemeContext from '../../context/ThemeContext';
import classes from './ScientificKeys.module.css';

const ScientificKey = (props) => {
    return (
        <ThemeContext.Consumer>
            {(context) => {
                return (
                    <div className={classes.center}>
                        <button
                            className={context.isDark ? classes.ScientificDark : classes.ScientificLight}
                            onClick={props.clicked}
                        >
                            Scientific
                        </button>
                        {props.display ?
                            <div className={classes.SciKeys}>
                                <button
                                    className={context.isDark ? classes.SciKeyDark : classes.SciKeyLight}
                                    onClick={props.clickInverse}
                                >
                                    Inverse
                                </button>
                                <button
                                    className={context.isDark ? classes.SciKeyDark : classes.SciKeyLight}
                                    onClick={props.clickSquare}
                                >
                                    x^2
                                </button>
                                <button
                                    className={context.isDark ? classes.SciKeyDark : classes.SciKeyLight}
                                    onClick={props.clickSqrt}
                                >
                                    Sqrt()
                                </button>
                            </div>
                            : null
                        }
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default ScientificKey;