import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCat}) => {

    const [input, setInput ] = useState('')
    const OnInputChange = (event)=>{
       
        setInput(event.target.value);
        console.log(event.target.value);
    }
    const onSubmit = (evento) =>{
        event.preventDefault(); 
        if(input.trim().length<=1) return;
        console.log(input);
        
        
        setInput('');
        // setCate(cat => [input,...cat]);   
        onNewCat(input.trim());
    }
    return(
        <>
            <form onSubmit={onSubmit} aria-label='form'>
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

AddCategory.propTypes={
    onNewCat: PropTypes.func.isRequired,
}