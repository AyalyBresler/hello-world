import React, { useContext } from "react";
import './Keywords.css';
import { BoardContext } from "../board/ShowContext";

function KeyWords() {
    let { calcExercise } = useContext(BoardContext);

    return (
        <div>
            <p id="keywords">
                <span id="numbers">
                    <button onClick={() => calcExercise('CE')}>CE</button>
                    <button onClick={() => calcExercise('/')}>/</button>
                    <button onClick={() => calcExercise('*')}>*</button>
                    <button onClick={() => calcExercise('7')}>7</button>
                    <button onClick={() => calcExercise('8')}>8</button>
                    <button onClick={() => calcExercise('9')}>9</button>
                    <button onClick={() => calcExercise('4')}>4</button>
                    <button onClick={() => calcExercise('5')}>5</button>
                    <button onClick={() => calcExercise('6')}>6</button>
                    <button onClick={() => calcExercise('1')}>1</button>
                    <button onClick={() => calcExercise('2')}>2</button>
                    <button onClick={() => calcExercise('3')}>3</button>
                    <button onClick={() => calcExercise('0')} className="doubleWidth">0</button>
                    <button onClick={() => calcExercise('.')}>.</button>
                </span>
                <span id="chars">
                    <button onClick={() => calcExercise('-')} >-</button>
                    <button onClick={() => calcExercise('+')} className="doubleHeight">+</button>
                    <button onClick={() => calcExercise('=')} className="doubleHeight">=</button>
                </span>
            </p>
        </div>
)}

export default KeyWords;