import React, { useContext } from "react";
import './Board.css';
import { BoardContext } from "./ShowContext";

const Board = () => {
    const { show, result } = useContext(BoardContext);

    return (
        <div>
            {console.log({ show }, { result })}
            <p id="board">
                <span> {show} </span>
                <br />
                <span id="bold"> { result } </span>
            </p>
        </div>
    )
}

export default Board;