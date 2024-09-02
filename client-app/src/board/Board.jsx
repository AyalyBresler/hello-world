import React, { useContext } from "react";
import './Board.css';
import { BoardContext } from "./ShowContext";

const Board = () => {
    const { show } = useContext(BoardContext);
 
    return (
        <div>
            {console.log({show})}
            <p id="board"> { show } </p>
        </div>
    )
}

export default Board;