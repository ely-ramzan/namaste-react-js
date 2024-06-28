import { useState } from "react";

function Counter () {
    let [counter,setCounter] = useState(15);

    let  addValue = () => {
        setCounter(++counter);
    }

    let  decValue = () => {
        if(counter > 0)
            setCounter(--counter);
        else
            throw console.error("value less than 0");
    }

    return (
        <>
        <h1>counter: {counter}</h1>

        <button onClick = {addValue} type="button">
            addValue
        </button>

        <button onClick = {decValue} type="button">
            decValue
        </button>
        
        </>
    );

}

export default Counter