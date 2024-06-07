import { DivDados, P } from "../Style/Planilha";

const Info = ({nome, sala, hora, data })=>{
    return( 
    <DivDados>
    <P> NOME: {nome}</P>
    <P> LOCAL:{sala} </P>
    <P> HORARIO: {hora}</P>
    <P> DATA:{data}  </P>
    </DivDados>
    )
}
export default Info; 