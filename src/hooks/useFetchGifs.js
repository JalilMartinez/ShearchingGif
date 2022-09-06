import {useEffect, useState} from "react";
import { GetGif } from "../helpers/GetGif";
export const useFetchGifs = (cat) =>{
    const [images, setImages]  = useState([]);
    const [loading, setLoading]  = useState(true);
   
    const getImages = async()=>{
        const image = await GetGif(cat);
        setImages(image);
        setLoading(false);
    }    
    useEffect( ()=>{
        getImages();
    },[] )


   return{
    images, // images:images
    isLoading: loading
   }
}
