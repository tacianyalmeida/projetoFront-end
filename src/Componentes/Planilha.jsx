import React from 'react';
import { Div, Titulo, Section1, DivMenor, ConteudoDivMenor, DivEngloba } from "../Style/Planilha";
import Info from "./Info";

const Relatorio = ({ list }) => {
    return (
        <>
            <Div>
                <Titulo>Relatorio Semanal</Titulo>
            </Div>

            <Section1>
                {Array.from({ length: 6 }, (_, index) => (
                    <DivEngloba key={index}>
                        <DivMenor>
                            <ConteudoDivMenor>DIA</ConteudoDivMenor>
                        </DivMenor>
                        {list[index] && (
                            <Info 
                                nome={list[index].nome} 
                                sala={list[index].sala} 
                                hora={list[index].hora} 
                                data={list[index].data} 
                            />
                        )}
                    </DivEngloba>
                ))}
            </Section1>
        </>
    );
};

export default Relatorio;