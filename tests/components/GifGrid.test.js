import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";

jest.mock('../../src/hooks/useFetchGifs.js');


describe('Pruebas en GifGrid', ()=>{
    const category = 'One Punch';
    test('debe de mostrar el loading inicialmente', ()=>{
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })


        render (<GifGrid cat={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('One Punch'));
        screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imagenes ', ()=>{
        const gifs = [
            {
            id: 'abc',
            title:'Goku',
            url:'https://localhost/goku.jpg'
            },
            {
            id: '123',
            title:'gohan',
            url:'https://localhost/gohan.jpg'
            },
        ] ;
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render (<GifGrid cat={category}/>);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});