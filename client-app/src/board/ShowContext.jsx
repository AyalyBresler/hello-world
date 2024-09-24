import React, { createContext, useState } from "react";
// import { ReactDOM } from "react";
// import Board from "./Board";
import axios from 'axios';

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
    const [show, setShow] = useState('');
    const [result, setResult] = useState('');

    const calcExercise = (part) => {
        switch (part) {
            case '=':
                axios.post('http://localhost:8000/calc/', { params: show })
                    .then(response => {
                        const result = response.data.result;
                        setResult(result);
                        setShow(result + '');
                    })
                    .catch(error => {
                        console.log({ error });
                        setResult('NaN')
                    })
                break;
            case 'CE':
                setShow('');
                setResult('')
                break;
            case '.':
                if (show.indexOf('.') === -1 || (isNaN(Number(show.substring(show.indexOf('.')))) && show.lastIndexOf('.') !== show.length - 1))
                    if (isNaN(Number(show.charAt(show.length - 1)))) setShow(show + '0' + part);
                    else setShow(show + part);
                break;
            default:
                if (isNaN(Number(part)) && show === '' && part !== '-') break;
                if (((isNaN(Number(show.charAt(show.length - 2))) && show.charAt(show.length - 2) !== '.') || show === '0') && show.charAt(show.length - 1) === '0' && !isNaN(Number(part))) {
                    setShow(show.substring(0, show.length - 1) + part);
                    break;
                }
                if (!(isNaN(Number(part)) && isNaN(Number(show.charAt(show.length - 1)))))
                    setShow(show + part);
                else
                    setShow(show.substring(0, show.length - 1) + part);
                break;
            //TODO: 0 before only .
        }
    }

    return (
        <BoardContext.Provider value={{ calcExercise, show, result }}>
            {children}
        </BoardContext.Provider>
    );
};

export default BoardProvider;