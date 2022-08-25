import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () =>{

    const [ cat , setCat ]=useState(['goku']);

    const onAddCategory = (newCat)=>{
        if(cat.includes(newCat))return;

        

        setCat([ newCat, ...cat]);
        // setCat(cate => [...cat, 'hola mundo']);
    }
    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                onNewCat={(value) => onAddCategory(value)}
                /*setCate ={setCat}*//>
            {/* listado de gif */}
            
           
                {cat.map((cate) =>{
                    return <GifGrid 
                        key={cate}
                        cat={cate}
                        />
                    // return (
                    //     <div key={cat}>
                    //         <li >{cat}</li>
                    //     </div>
                        
                    // )
                })}
                
          
                {/* gif Item */}


        </>
    )
}