import React from 'react';
import styled from '@emotion/styled';

const Buttom = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Formulario = () => {
    return ( 
        <form>
            <Buttom
                type="submit"
                value="Calcular"
            >

            </Buttom>
        </form>
     );
}
 
export default Formulario;