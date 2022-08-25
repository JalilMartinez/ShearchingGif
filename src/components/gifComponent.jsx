import React from "react";


export const GifComponent = ( {title, url, id} ) => {
    
    return(
        <div className="card">
            
            <img key={id} src={url} alt={title} />
            <p>{title}</p>
        </div>
        
    )
}