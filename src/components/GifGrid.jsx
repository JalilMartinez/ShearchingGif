import React from "react";


import { GifComponent } from "./gifComponent";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid= ({cat})=>{
    const {images, isLoading} = useFetchGifs(cat); //custom hook
    
    
    return(
        <>
            <h3>{cat}</h3>
            
                {
                    // isLoading ? <h2>Cargando...</h2>: null
                    isLoading && <h2>Cargando...</h2>
                }
            
            <ol className="card-grid">
                {
                    images.map(ima =>{
                       return <GifComponent 
                             key={ima.id}
                             {...ima}/> 
                    })
                }
            </ol>
            
                        
                    
        </>
    )
}

GifGrid.propTypes = {
    cat: PropTypes.string.isRequired,
}