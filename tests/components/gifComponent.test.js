import { GifComponent } from "../../src/components/gifComponent";
import {render, screen} from '@testing-library/react';
describe('Pruebas en el nombre del componente', ()=>{
    const title = 'Evangelion';
    const url = 'https://evangelion-upon.com/asuka.png';
    test('debe de hacer match con el snapshot', ()=>{
        const {container} = render(<GifComponent title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });
    test('debe de mostrar la imagen con el url y el atl indicado', ()=>{
         render(<GifComponent url={url} title={title}/>);
        // expect(screen.getByRole('img').getAttribute('src')).toEqual(url);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });
    test('Debe de mostrar ekl titulo en el componente', ()=>{
        render(<GifComponent url={url} title={title}/>);
        expect(screen.getByText(title));
    });
});
