import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [values, setValue] = useState([]);

    const handleInput = (e) => {
        return (
            e.target.value
        )
    }

    const addCalc = (e, newValue) => {
        e.preventDefault();
        if (handleInput !== "+" && handleInput !== "-" && handleInput !== "x" &&handleInput !== "=" && handleInput !== "/") {
            setValue([...values + newValue]);
        } else {
            if (handleInput === "+") {
                setValue([...values, ...values + newValue]);

            } else if (handleInput === "-") {

            } else if (handleInput === "x") {

            } else if (handleInput === "/") {
                
            } else if (handleInput === "=") {
                
            }
        }
    };


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row" onClick={e => this.handleInput(e, "value")}>
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" value={"/"}>/</button>
                </div>
                <div className="calc-row" onClick={e => this.handleInput(e, "value")}>
                    <button className="calc-button" value={7}>7</button>
                    <button className="calc-button" value={8}>8</button>
                    <button className="calc-button" value={9}>9</button>
                    <button className="calc-button calc-button-op" value={"x"}>x</button>
                </div>
                <div className="calc-row" onClick={e => this.handleInput(e, "value")}>
                    <button className="calc-button" value={4}>4</button>
                    <button className="calc-button" value={5}>5</button>
                    <button className="calc-button" value={6}>6</button>
                    <button className="calc-button calc-button-op" value={"-"}>-</button>
                </div>
                <div className="calc-row" onClick={e => this.handleInput(e, "value")}>
                    <button className="calc-button" value={1}>1</button>
                    <button className="calc-button" value={2}>2</button>
                    <button className="calc-button" value={3}>3</button>
                    <button className="calc-button calc-button-op" value={"+"}>+</button>
                </div>
                <div className="calc-row"  onClick={e => this.handleInput(e, "value")}>
                    <button className="calc-button width-2" value={0}>0</button>
                    <button className="calc-button" value={"."}>.</button>
                    <button className="calc-button calc-button-op" value={"="}>=</button>
                </div>
            </div>
        </div>
    )
    
}


export default Calculator;