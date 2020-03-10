import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [currentNum, setCurrentNum] = useState("");
    const [num1, setNum1] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("");

    const opTable = {
        "+": (x, y) => x+y,
        "-": (x, y) => x-y,
        "x": (x, y) => x*y,
        "/": (x, y) => x/y,
        "%": (x, y) => x%y
    }

    // Event handlers and Functions
    const numPress = e => {
        console.log(e.target.innerText + " was pressed");
        // If the presssed button is a number I was to concatinate to current num
        setCurrentNum(currentNum + e.target.innerText);
    }

    const opPress = e => {
        console.log(e.target.innerText + " was pressed");
        if (!currentNum) {
            // throw some sort of error
            return;
        }
        // check if there is already a num1
        if (num1 && operator) {
            // want to perform the operation, and set num1 to the result
            setNum1(opTable[operator](Number(num1), Number(currentNum)));
        } else if (num1 && !operator) {
        } else {
            setNum1(currentNum);
        }
        setOperator(e.target.innerText);
        setCurrentNum("");
    }

    const calculate = e => {
        console.log(`${num1} ${operator} ${currentNum}`);
        let result = opTable[operator](Number(num1), Number(currentNum));
        setResult(result);
        setNum1(result);
        clearOps;
    }

    const clearOps = () => {
        setOperator("");
        setCurrentNum("");
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{result || result === 0 ? result : currentNum}</div>
                <div className="calc-row">
                    <button onClick={opPress} className="calc-button calc-button-top">AC</button>
                    <button onClick={opPress} className="calc-button calc-button-top">+/-</button>
                    <button onClick={opPress} className="calc-button calc-button-top">%</button>
                    <button onClick={opPress} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPress} className="calc-button" >7</button>
                    <button onClick={numPress} className="calc-button" >8</button>
                    <button onClick={numPress} className="calc-button" >9</button>
                    <button onClick={opPress} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPress} className="calc-button" >4</button>
                    <button onClick={numPress} className="calc-button" >5</button>
                    <button onClick={numPress} className="calc-button" >6</button>
                    <button onClick={opPress} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPress} className="calc-button" >1</button>
                    <button onClick={numPress} className="calc-button" >2</button>
                    <button onClick={numPress} className="calc-button" >3</button>
                    <button onClick={opPress} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={numPress} className="calc-button width-2" >0</button>
                    <button onClick={numPress} className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
    
}


export default Calculator;