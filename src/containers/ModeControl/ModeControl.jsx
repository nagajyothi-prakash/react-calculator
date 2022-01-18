import React, { Component } from 'react';
import DisplayMode from '../../components/DisplayMode/DisplayMode';
import BuildControls from '../BuildControls/BuildControls';
import ThemeContext from '../../context/ThemeContext';
import classes from './ModeControl.module.css';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

class ModeControl extends Component {
    state = {
        isDark: false
    }

    lightModeHandler = () => {
        this.setState({ isDark: false });
    }

    darkModeHandler = () => {
        this.setState({ isDark: true });
    }

    render() {
        return (
            <ErrorBoundary>
                <div className={this.state.isDark ? classes.Dark : classes.Light}>
                    <h1>CALCULATOR</h1>
                    <ThemeContext.Provider
                        value={{
                            isDark: this.state.isDark
                        }}
                    >
                        <BuildControls />
                        <DisplayMode
                            clickLightMode={this.lightModeHandler}
                            clickDarkMode={this.darkModeHandler} 
                        />
                    </ThemeContext.Provider>
                </div>
            </ErrorBoundary>
        );
    }
}

export default ModeControl;