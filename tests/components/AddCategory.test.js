import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory.jsx";



describe('Pruebas en AddCategory', ()=>{
   test('Debe de cambiar el valor de la caja de texto', ()=>{
         render(<AddCategory onNewCat={()=>{}}/>);
         const inpu = screen.getByRole('textbox');
         fireEvent.input(inpu,{target: {value: 'Saitama'}});
         expect(inpu.value).toBe('Saitama');
         screen.debug();
   });  
   test('debe de llamr onNewCategory si el input tiene un valor', ()=>{
      const inputValue= 'Saitana';
      const onNewCategory = jest.fn();
      render(<AddCategory onNewCat={onNewCategory}/>);
      const inpu = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(inpu,{target: {value:inputValue}});
      fireEvent.submit(form);
      expect(inpu.value).toBe('');
      expect(onNewCategory).toHaveBeenCalled();
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith(inputValue);

   });
   test('No debe de llamar el onNewCategory si el input esta vacio', ()=>{
      const onNewCategory = jest.fn();
      render(<AddCategory onNewCat={onNewCategory}/>);
      const form = screen.getByRole('form');
      fireEvent.submit(form);
      // expect(onNewCategory).toHaveBeenCalledTimes(0);
      expect(onNewCategory).not.toHaveBeenCalled();

   });
});