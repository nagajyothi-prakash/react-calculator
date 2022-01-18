import React, { Component } from 'react';
import Display from '../../components/Display/Display';
import Keypad from '../../components/Keypad/Keypad';
import ScientificKeys from '../../components/ScientificKeys/ScientificKeys';

class BuildControls extends Component {
    state = {
        value1: '0',
        value2: '0',
        sign: '',
        result: 0,
        signCount: 0,
        display: false,
        sciResult: false,
        resultObtained: false
    }

    clickHandler = (event) => {
        const clicked = event.target.innerText;
        if (clicked === '-' && this.state.value1 === '0') {
            this.setState({ value1: clicked });
        } else {
            if (clicked === 'Clear') {
                this.setState({
                    value1: '0',
                    value2: '0',
                    sign: '',
                    result: 0,
                    signCount: 0,
                    sciResult: false,
                    resultObtained: false
                });
            } else if ((clicked === '+' || clicked === '-' || clicked === '*' || clicked === '/')) {
                if (this.state.sciResult) {
                    const value = this.state.result;
                    this.setState({
                        value1: value,
                        sign: clicked,
                        signCount: 1,
                        sciResult: false,
                        resultObtained: false
                    });
                } else {
                    if (this.state.signCount + 1 === 1) {
                        this.setState({
                            sign: clicked,
                            signCount: this.state.signCount + 1
                        });
                    } else if (this.state.signCount + 1 === 2) {
                        let result = this.resultHandler(this.state.sign);
                        if (isNaN(result)) {
                            result = 0;
                        }
                        this.setState({
                            value1: result,
                            sign: clicked,
                            value2: '0',
                            signCount: 1,
                            result: 0
                        });
                    }
                }
            } else if (clicked === '=') {
                let result = this.resultHandler(this.state.sign);
                if (isNaN(result)) {
                    result = 0;
                }
                this.setState({
                    result: result,
                    resultObtained: true
                });
            } else if (clicked >= 0 && clicked <= 9) {
                if (this.state.value1 !== '0' && this.state.sign !== '') {
                    const currentValue = this.state.value2;
                    let clickedValue;
                    if (currentValue === '0') {
                        clickedValue = clicked;
                    } else {
                        if (currentValue + clicked < 999999999) {
                            clickedValue = currentValue + clicked;
                        } else {
                            clickedValue = currentValue;
                        }
                    }
                    this.setState({ value2: clickedValue });
                } else {
                    const currentValue = this.state.value1;
                    let clickedValue;
                    if (currentValue === '0') {
                        clickedValue = clicked;
                    } else {
                        if (currentValue + clicked < 999999999) {
                            clickedValue = currentValue + clicked;
                        } else {
                            clickedValue = currentValue;
                        }
                    }
                    this.setState({ value1: clickedValue });
                }
            }
        }
    }

    resultHandler = (sign) => {
        let result = 0;
        switch (sign) {
            case '+':
                result = parseInt(this.state.value1) + parseInt(this.state.value2);
                break;
            case '-':
                result = parseInt(this.state.value1) - parseInt(this.state.value2);
                break;
            case '*':
                result = parseInt(this.state.value1) * parseInt(this.state.value2);
                break;
            case '/':
                result = parseInt(this.state.value1) / parseInt(this.state.value2);
                break;
            default:
                break;
        }
        return result;
    }

    displayClickHandler = () => {
        const displayValue = this.state.display;
        this.setState({ display: !displayValue });
    }

    inverseHandler = () => {
        if (this.state.result) {
            const value = parseInt(this.state.result);
            this.setState({
                result: -value,
                sciResult: true,
                resultObtained: true
            });
        } else {
            const value = parseInt(this.state.value1);
            this.setState({
                result: -value,
                sciResult: true,
                resultObtained: true
            });
        }
    }

    squareHandler = () => {
        if (this.state.result) {
            const value = parseInt(this.state.result);
            const result = Math.pow(value, 2);
            this.setState({
                result: result,
                sciResult: true,
                resultObtained: true
            });
        } else {
            const value = parseInt(this.state.value1);
            const result = Math.pow(value, 2);
            this.setState({
                result: result,
                sciResult: true,
                resultObtained: true
            });
        }
    }

    sqrtHandler = () => {
        if (this.state.result) {
            const value = parseInt(this.state.result);
            const result = Math.sqrt(value);
            this.setState({
                result: result,
                sciResult: true,
                resultObtained: true
            });
        } else {
            const value = parseInt(this.state.value1);
            const result = Math.sqrt(value);
            this.setState({
                result: result,
                sciResult: true,
                resultObtained: true
            });
        }
    }

    render() {
        return (
            <div>
                <Display clickedButton={this.state} />
                <Keypad clicked={this.clickHandler} />
                <ScientificKeys
                    display={this.state.display}
                    clicked={this.displayClickHandler}
                    clickInverse={this.inverseHandler}
                    clickSquare={this.squareHandler}
                    clickSqrt={this.sqrtHandler}
                />
            </div>
        );
    }
}

export default BuildControls;