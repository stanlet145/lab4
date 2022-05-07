import {useEffect, useState, useRef} from "react";
import React from "react";


function CountNumbers() {
    const [number, setNumber] = useState(0);
    const [inputNumber, setInputNumber] = useState(0);
    const previousNumber = useRef(null);

    useEffect(() => {
        previousNumber.current = number;
    }, [number]);

    const handleInput = event => {
        setInputNumber(parseInt(event.target.value));
    };
    return (
        <h1>
            <form>
                <input type="number" placeholder="type in a number" onChange={handleInput}/>
            </form>
            <div>
                Now: {number}, before {previousNumber.current}
                {/*Increment*/}
                <button onClick={() => setNumber(number + inputNumber)}>Increment</button>
            </div>
        </h1>
    );
}

export default CountNumbers;
