import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState);

    const reset = () =>{
        setvalues(initialState);
    }

    const handleInputChange = (e)=>{    //en vezx de la e cogemo de una el target pero para hacer eso se le pone entre {}
        setvalues({
            ...values,
            [e.target.name]:e.target.value

        });    
    }

    return [values,handleInputChange,reset];

}
