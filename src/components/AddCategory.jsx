import React, { useState } from "react";


export const AddCategory = ({onNewCat}) => {

    const [input, setInput ] = useState('0')
    const OnInputChange = (event)=>{
        console.log(event.target.value);
        setInput(event.target.value)
    }
    const onSubmit = (evento) =>{
        event.preventDefault(); 
        if(input.trim().length<=1) return;
        console.log(input);
        // setCate(cat => [input,...cat]);   
        onNewCat(input.trim());
        setInput('');
    }
    return(
        <>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='buscar gifts'
                    value={input}
                    onChange={OnInputChange}
                    />      
            </form>
            <button onClick={onSubmit}>Agregar</button>
            
        </>
    )

}