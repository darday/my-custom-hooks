/*hook no es mas q una funcion


export const useCounter = () => {
   
}*/

import { useState } from "react"

export const useCounter = (initialState=10) => {                //default value 10 if dont recive another
    const [counter, setCounterState] = useState(initialState)            //value that recive

    const increment=()=>{
        setCounterState(counter+1);
    }

    const decrease=()=>{
        setCounterState(counter-1);
    }

    const reset=()=>{
        setCounterState(initialState);
    }

    // retornar un arreglo [] y un objeto{}
    return {        //regresamos una rreglo con las  funciones
        counter,
        increment,
        decrease,
        reset
    }

}

