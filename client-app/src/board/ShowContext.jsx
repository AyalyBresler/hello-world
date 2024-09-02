import React, { createContext, useState } from "react";

export const BoardContext = createContext();

const BoardProvider = ({children}) => {
    const [ show, setShow ] = useState('');
    const [ result, setResult ] = useState(0);

    const calcExercise = (part) => {
        switch (part) {
            case '=':
                setResult();
                break;
            case 'CE':
                setShow('');
                break;
            case '.':
                if (show.indexOf('.') === -1 || (isNaN(Number(show.substring(show.indexOf('.')))) && show.lastIndexOf('.') !== show.length -1))
                    setShow(show + part);
                break;
            default:
                if (isNaN(Number(part)) && show === '') break;
                if (((isNaN(Number(show.charAt(show.length - 2))) && show.charAt(show.length - 2) !== '.') || show === '0') && show.charAt(show.length - 1) === '0' && !isNaN(Number(part))) {
                        setShow(show.substring(0, show.length - 1) + part);
                        break;
                    }
                if (!(isNaN(Number(part)) && isNaN(Number(show.charAt(show.length - 1)))))
                        setShow(show + part);
                else
                    setShow(show.substring(0, show.length - 1) + part);
                    break;
        }
    }

    return (
        <BoardContext.Provider value={{calcExercise, show, result}}>
            {children}
        </BoardContext.Provider>
    );
};

export default BoardProvider;